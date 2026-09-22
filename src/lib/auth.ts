/**
 * Internal Admin Authentication Helper
 * KitchenSet Sukabumi CRM Protection
 */

export const DEFAULT_ADMIN_SECRET = "kitchenset-sukabumi-internal-2026";

export function isAuthorizedAdmin(request: Request): boolean {
  const secret = process.env.ADMIN_SECRET || DEFAULT_ADMIN_SECRET;
  
  const headerKey = request.headers.get("x-admin-key");
  const authHeader = request.headers.get("authorization");
  const bearerToken = authHeader?.startsWith("Bearer ")
    ? authHeader.slice(7).trim()
    : null;

  return headerKey === secret || bearerToken === secret;
}

/**
 * Basic HTML tag sanitization to prevent stored XSS
 */
export function sanitizeInput(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.replace(/<[^>]*>?/gm, "").trim();
}
