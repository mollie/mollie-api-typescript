import { SDKOptions } from "../lib/config.js";

export function clientCanHaveGlobalFields(options: SDKOptions): boolean {
    const security = options.security;
    if (!security) return false;

    const securityObj = typeof security === "function" ? security() : security;
    if (securityObj instanceof Promise) return false;

    const token = (securityObj as { apiKey?: string; oAuth?: string }).apiKey
        || (securityObj as { apiKey?: string; oAuth?: string }).oAuth;
    return !!token && token.startsWith("access_");
}

export function clientHasGlobalFields(options: SDKOptions): boolean {
    return !!options.testmode || !!options.profileId;
}
