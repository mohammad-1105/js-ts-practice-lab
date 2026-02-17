/**
 * Food Delivery Order Builder
 *
 * You are building a checkout system for a food app.
 *
 * Rules:
 *   - Cart items: [{ name: "Burger", price: 50, qty: 2 }, ...]
 *   - Delivery fee:
 *     - If subtotal >= 500, fee is 0
 *     - If subtotal < 500, fee is 50
 *   - Coupons:
 *     - "WELCOME10": 10% off subtotal
 *     - "FREEDEL": Free delivery (fee = 0)
 *     - "FLAT50": Flat Rs.50 off subtotal (cannot exceed subtotal)
 *   - Tax: 5% of (subtotal - discount)
 *   - Total: (subtotal - discount) + tax + deliveryFee
 *
 * Validation:
 *   - If components are missing, return null
 *   - subtotal must be positive
 *
 * @param cart
 * @param coupon
 * @returns {object | null}
 */

interface CartItem {
  name: string;
  price: number;
  qty: number;
  addons?: string[];
}

interface OrderSummary {
  orderId: string;
  items: number;
  subtotal: number;
  discount: number;
  salesTax: number;
  deliveryFee: number;
  grandTotal: number;
  savings: number;
}

export function buildDeliveryOrder(cart: CartItem[], coupon: string): OrderSummary | null {
  // TODO: implement
  return null;
}
