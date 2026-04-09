export class InvalidSignatureException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidSignatureException";

    Object.setPrototypeOf(this, InvalidSignatureException.prototype);
  }
}

export class SignatureValidator {
  static readonly SIGNATURE_HEADER = "X-Mollie-Signature";
  private static readonly SIGNATURE_PREFIX = "sha256=";

  private readonly signingSecrets: string[];

  constructor(signingSecrets: string | string[]) {
    this.signingSecrets = Array.isArray(signingSecrets)
      ? [...signingSecrets]
      : [signingSecrets];
  }

  static async validate(
    payload: string,
    signingSecrets: string | string[],
    signatures?: string | string[] | null,
  ): Promise<boolean> {
    return new SignatureValidator(signingSecrets).validatePayload(
      payload,
      signatures,
    );
  }

  async validatePayload(
    payload: string,
    signatures?: string | string[] | null,
  ): Promise<boolean> {
    const signatureList = this.normalizeSignatures(signatures);

    if (signatureList.length === 0) {
      return false;
    }

    return this.validateSignatures(payload, signatureList);
  }

  private normalizeSignatures(
    signatures?: string | string[] | null,
  ): string[] {
    if (typeof signatures === "string") {
      return signatures ? [signatures] : [];
    }

    if (!signatures) {
      return [];
    }

    return signatures.filter((signature): signature is string => !!signature);
  }

  private async validateSignatures(
    payload: string,
    signatures: string[],
  ): Promise<boolean> {
    for (const signature of signatures) {
      const extractedSignature = this.extractSignature(signature);

      if (await this.isValidSignature(extractedSignature, payload)) {
        return true;
      }
    }

    throw new InvalidSignatureException("Invalid webhook signature");
  }

  private extractSignature(signatureHeader: string): string {
    if (signatureHeader.startsWith(SignatureValidator.SIGNATURE_PREFIX)) {
      return signatureHeader.slice(SignatureValidator.SIGNATURE_PREFIX.length);
    }

    return signatureHeader;
  }

  private async isValidSignature(
    providedSignature: string,
    payload: string,
  ): Promise<boolean> {
    for (const secret of this.signingSecrets) {
      const expectedSignature = await SignatureValidator.createSignature(
        payload,
        secret,
      );

      if (constantTimeEquals(expectedSignature, providedSignature)) {
        return true;
      }
    }

    return false;
  }

  static async createSignature(payload: string, secret: string): Promise<string> {
    const subtle = globalThis.crypto?.subtle;
    if (!subtle) {
      throw new Error("Web Crypto API is not available in this runtime");
    }

    const encoder = new TextEncoder();
    const key = await subtle.importKey(
      "raw",
      encoder.encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"],
    );
    const signature = await subtle.sign("HMAC", key, encoder.encode(payload));

    return toHex(signature);
  }
}

function constantTimeEquals(left: string, right: string): boolean {
  const maxLength = Math.max(left.length, right.length);
  let mismatch = left.length ^ right.length;

  for (let index = 0; index < maxLength; index++) {
    mismatch |= (left.charCodeAt(index) || 0) ^ (right.charCodeAt(index) || 0);
  }

  return mismatch === 0;
}

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((value) => value.toString(16).padStart(2, "0"))
    .join("");
}