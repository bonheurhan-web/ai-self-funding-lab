import { describe, expect, it } from "vitest";
import {
  convertUnixTimestamp,
  decodeBase64,
  decodeUrl,
  encodeBase64,
  encodeUrl,
  formatJson,
  formatUlid,
  formatUuidV4,
  sha256,
  validateJson,
} from "./tool-functions";

describe("UUID v4 Generator", () => {
  it("sets the version and variant bits", () => {
    expect(formatUuidV4(new Uint8Array(16))).toBe("00000000-0000-4000-8000-000000000000");
  });
});

describe("ULID Generator", () => {
  it("encodes a timestamp and random bytes into 26 characters", () => {
    expect(formatUlid(0, new Uint8Array(10))).toBe("00000000000000000000000000");
  });
});

describe("Base64 Encoder", () => {
  it("encodes Unicode as UTF-8", () => {
    expect(encodeBase64("hello ✓")).toBe("aGVsbG8g4pyT");
  });
});

describe("Base64 Decoder", () => {
  it("decodes UTF-8 Base64", () => {
    expect(decodeBase64("aGVsbG8g4pyT")).toBe("hello ✓");
  });
});

describe("URL Encoder", () => {
  it("encodes a URL component", () => {
    expect(encodeUrl("hello world?")).toBe("hello%20world%3F");
  });
});

describe("URL Decoder", () => {
  it("decodes a URL component", () => {
    expect(decodeUrl("hello%20world%3F")).toBe("hello world?");
  });
});

describe("JSON Formatter", () => {
  it("pretty prints valid JSON", () => {
    expect(formatJson('{"a":1}')).toBe('{\n  "a": 1\n}');
  });
});

describe("JSON Validator", () => {
  it("accepts valid JSON and rejects invalid JSON", () => {
    expect(validateJson('{"valid":true}')).toBe("Valid JSON");
    expect(() => validateJson('{"invalid":}')).toThrow();
  });
});

describe("Unix Timestamp Converter", () => {
  it("supports seconds and milliseconds", () => {
    expect(convertUnixTimestamp("1704067200")).toBe("2024-01-01T00:00:00.000Z");
    expect(convertUnixTimestamp("1704067200000")).toBe("2024-01-01T00:00:00.000Z");
  });
});

describe("SHA256 Hash Generator", () => {
  it("returns the standard SHA-256 digest", async () => {
    await expect(sha256("hello")).resolves.toBe(
      "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824",
    );
  });
});
