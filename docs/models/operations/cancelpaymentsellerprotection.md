# CancelPaymentSellerProtection

Indicates to what extent the payment is eligible for PayPal's Seller Protection. Only available for PayPal
payments, and if the information is made available by PayPal.

## Example Usage

```typescript
import { CancelPaymentSellerProtection } from "mollie-api-typescript/models/operations";

let value: CancelPaymentSellerProtection = "Eligible";
```

## Values

```typescript
"Eligible" | "Ineligible" | "Partially Eligible - INR Only" | "Partially Eligible - Unauth Only" | "Partially Eligible" | "None" | "Active" | "Fraud Control - Unauth Premium Eligible"
```