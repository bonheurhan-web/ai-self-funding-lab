const BASE32 = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";

export function formatUuidV4(bytes: Uint8Array): string {
  if (bytes.length !== 16) throw new Error("UUID requires exactly 16 bytes.");
  const value = Uint8Array.from(bytes);
  value[6] = (value[6] & 0x0f) | 0x40;
  value[8] = (value[8] & 0x3f) | 0x80;
  const hex = Array.from(value, (byte) => byte.toString(16).padStart(2, "0")).join("");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

export function formatUlid(timestamp: number, randomBytes: Uint8Array): string {
  if (!Number.isInteger(timestamp) || timestamp < 0 || timestamp > 281474976710655) {
    throw new Error("Timestamp is outside the ULID range.");
  }
  if (randomBytes.length !== 10) throw new Error("ULID requires exactly 10 random bytes.");

  let time = timestamp;
  let timePart = "";
  for (let index = 0; index < 10; index += 1) {
    timePart = BASE32[time % 32] + timePart;
    time = Math.floor(time / 32);
  }

  let randomValue = BigInt(0);
  for (const byte of randomBytes) randomValue = (randomValue << BigInt(8)) | BigInt(byte);
  let randomPart = "";
  for (let index = 0; index < 16; index += 1) {
    randomPart = BASE32[Number(randomValue & BigInt(31))] + randomPart;
    randomValue >>= BigInt(5);
  }
  return timePart + randomPart;
}

export function encodeBase64(value: string): string {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}

export function decodeBase64(value: string): string {
  const normalized = value.replace(/\s/g, "");
  const binary = atob(normalized);
  return new TextDecoder("utf-8", { fatal: true }).decode(
    Uint8Array.from(binary, (character) => character.charCodeAt(0)),
  );
}

export function encodeUrl(value: string): string {
  return encodeURIComponent(value);
}

export function decodeUrl(value: string): string {
  return decodeURIComponent(value);
}

export function formatJson(value: string): string {
  return JSON.stringify(JSON.parse(value), null, 2);
}

export function validateJson(value: string): string {
  JSON.parse(value);
  return "Valid JSON";
}

export function convertUnixTimestamp(value: string): string {
  const timestamp = Number(value.trim());
  if (!Number.isFinite(timestamp)) throw new Error("Enter a valid Unix timestamp.");
  const milliseconds = Math.abs(timestamp) < 100000000000 ? timestamp * 1000 : timestamp;
  const date = new Date(milliseconds);
  if (Number.isNaN(date.getTime())) throw new Error("Timestamp is outside the supported range.");
  return date.toISOString();
}

export async function sha256(value: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}
