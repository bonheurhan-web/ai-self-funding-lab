export type ToolId =
  | "uuid-v4-generator"
  | "ulid-generator"
  | "base64-encoder"
  | "base64-decoder"
  | "url-encoder"
  | "url-decoder"
  | "json-formatter"
  | "json-validator"
  | "unix-timestamp-converter"
  | "sha256-hash-generator";

export type Tool = {
  id: ToolId;
  name: string;
  description: string;
  category: "Generators" | "Encoders & Decoders" | "JSON" | "Date & Time" | "Security";
  instructions: string;
  inputLabel: string;
  inputPlaceholder: string;
  action: string;
  examples: [string, string, string];
  faq: { question: string; answer: string }[];
  related: ToolId[];
};

export const tools: Tool[] = [
  {
    id: "uuid-v4-generator",
    name: "UUID v4 Generator",
    description: "Generate random RFC 4122 version 4 UUIDs instantly in your browser.",
    category: "Generators",
    instructions: "Click Generate UUID to create a cryptographically random UUID v4. Copy it into your application, database, or test fixture.",
    inputLabel: "Generated UUID",
    inputPlaceholder: "Click the button to generate a UUID",
    action: "Generate UUID",
    examples: ["550e8400-e29b-41d4-a716-446655440000", "6ba7b810-9dad-41d1-80b4-00c04fd430c8", "f47ac10b-58cc-4372-a567-0e02b2c3d479"],
    faq: [
      { question: "What is a UUID v4?", answer: "It is a 128-bit identifier generated from random data with version and variant bits set to the UUID v4 standard." },
      { question: "Are UUID v4 values unique?", answer: "Collisions are theoretically possible but extremely unlikely when generated with secure random bytes." },
      { question: "Is the UUID sent to a server?", answer: "No. Generation happens locally in your browser." },
    ],
    related: ["ulid-generator", "sha256-hash-generator", "unix-timestamp-converter"],
  },
  {
    id: "ulid-generator",
    name: "ULID Generator",
    description: "Generate sortable 26-character ULIDs using the current time and secure randomness.",
    category: "Generators",
    instructions: "Click Generate ULID. The first 10 characters encode the current timestamp and the remaining 16 characters contain randomness.",
    inputLabel: "Generated ULID",
    inputPlaceholder: "Click the button to generate a ULID",
    action: "Generate ULID",
    examples: ["01ARZ3NDEKTSV4RRFFQ69G5FAV", "01HZX7M3W8K9VDP4G5N6Q2R1ST", "01J0ABCD12EFGHJKMNPQRSTVWY"],
    faq: [
      { question: "What is a ULID?", answer: "A ULID is a 128-bit identifier represented as 26 Crockford Base32 characters." },
      { question: "Why use ULIDs instead of UUIDs?", answer: "ULIDs are lexicographically sortable by creation time while retaining a large random component." },
      { question: "Are ULIDs case-sensitive?", answer: "The canonical representation is uppercase, though decoders commonly accept lowercase." },
    ],
    related: ["uuid-v4-generator", "unix-timestamp-converter", "base64-encoder"],
  },
  {
    id: "base64-encoder",
    name: "Base64 Encoder",
    description: "Encode Unicode text to Base64 safely and instantly in your browser.",
    category: "Encoders & Decoders",
    instructions: "Paste text into the input and click Encode. The tool converts UTF-8 bytes into a Base64 string.",
    inputLabel: "Text to encode",
    inputPlaceholder: "Hello, world!",
    action: "Encode",
    examples: ["hello → aGVsbG8=", "developer → ZGV2ZWxvcGVy", "✓ → 4pyT"],
    faq: [
      { question: "Is Base64 encryption?", answer: "No. Base64 is a reversible text encoding and provides no secrecy." },
      { question: "Does this support Unicode?", answer: "Yes. Text is converted to UTF-8 before encoding." },
      { question: "Where is Base64 used?", answer: "It is commonly used in data URLs, email attachments, tokens, and binary-to-text transport." },
    ],
    related: ["base64-decoder", "url-encoder", "sha256-hash-generator"],
  },
  {
    id: "base64-decoder",
    name: "Base64 Decoder",
    description: "Decode Base64 data into readable UTF-8 text with clear error feedback.",
    category: "Encoders & Decoders",
    instructions: "Paste a Base64 string and click Decode. Whitespace is ignored and the decoded UTF-8 text appears below.",
    inputLabel: "Base64 to decode",
    inputPlaceholder: "SGVsbG8sIHdvcmxkIQ==",
    action: "Decode",
    examples: ["aGVsbG8= → hello", "ZGV2ZWxvcGVy → developer", "4pyT → ✓"],
    faq: [
      { question: "Can this decode binary files?", answer: "This page is intended for Base64 that represents UTF-8 text." },
      { question: "Why does decoding fail?", answer: "The input may not be valid Base64 or its decoded bytes may not be valid UTF-8." },
      { question: "Is my input uploaded?", answer: "No. Decoding runs entirely in your browser." },
    ],
    related: ["base64-encoder", "url-decoder", "json-formatter"],
  },
  {
    id: "url-encoder",
    name: "URL Encoder",
    description: "Percent-encode text for safe use inside a URL query or path component.",
    category: "Encoders & Decoders",
    instructions: "Enter a value and click Encode. Reserved and non-ASCII characters are converted with encodeURIComponent rules.",
    inputLabel: "Text to URL encode",
    inputPlaceholder: "hello world?tag=dev",
    action: "Encode",
    examples: ["hello world → hello%20world", "a+b → a%2Bb", "✓ → %E2%9C%93"],
    faq: [
      { question: "What does URL encoding do?", answer: "It replaces unsafe or reserved characters with percent-encoded UTF-8 bytes." },
      { question: "Should I encode a complete URL?", answer: "This tool is best for individual query values or path components, not an entire URL." },
      { question: "Are spaces encoded as plus signs?", answer: "No. encodeURIComponent represents spaces as %20." },
    ],
    related: ["url-decoder", "base64-encoder", "json-formatter"],
  },
  {
    id: "url-decoder",
    name: "URL Decoder",
    description: "Decode percent-encoded URL components into readable Unicode text.",
    category: "Encoders & Decoders",
    instructions: "Paste a percent-encoded URL component and click Decode. Invalid escape sequences produce an error.",
    inputLabel: "URL-encoded text",
    inputPlaceholder: "hello%20world%3Ftag%3Ddev",
    action: "Decode",
    examples: ["hello%20world → hello world", "a%2Bb → a+b", "%E2%9C%93 → ✓"],
    faq: [
      { question: "Does this decode plus signs as spaces?", answer: "No. This follows decodeURIComponent behavior, where a plus sign remains a plus sign." },
      { question: "Why is URI malformed shown?", answer: "The input contains an incomplete or invalid percent-encoded byte sequence." },
      { question: "Can it decode Unicode?", answer: "Yes. Valid UTF-8 percent sequences are decoded to Unicode text." },
    ],
    related: ["url-encoder", "base64-decoder", "json-validator"],
  },
  {
    id: "json-formatter",
    name: "JSON Formatter",
    description: "Format and pretty-print compact JSON with two-space indentation.",
    category: "JSON",
    instructions: "Paste valid JSON and click Format. The parsed result is returned with consistent two-space indentation.",
    inputLabel: "JSON to format",
    inputPlaceholder: "{\"name\":\"Ada\",\"active\":true}",
    action: "Format JSON",
    examples: ["{\"a\":1} → formatted object", "[1,2,3] → formatted array", "{\"nested\":{\"ok\":true}} → indented JSON"],
    faq: [
      { question: "Does formatting change data types?", answer: "No. The JSON is parsed and serialized without changing its values." },
      { question: "Can it format JSON with comments?", answer: "No. Standard JSON does not support comments." },
      { question: "What indentation is used?", answer: "The formatter uses two spaces per nesting level." },
    ],
    related: ["json-validator", "base64-decoder", "url-decoder"],
  },
  {
    id: "json-validator",
    name: "JSON Validator",
    description: "Check whether text is valid JSON and see parsing errors immediately.",
    category: "JSON",
    instructions: "Paste JSON and click Validate. A success message appears for valid data; invalid input shows the parser error.",
    inputLabel: "JSON to validate",
    inputPlaceholder: "{\"valid\":true}",
    action: "Validate JSON",
    examples: ["{\"a\":1} → Valid JSON", "[true, false] → Valid JSON", "{\"a\":} → Invalid JSON"],
    faq: [
      { question: "What counts as valid JSON?", answer: "Objects, arrays, strings, numbers, booleans, and null that follow the JSON grammar are valid." },
      { question: "Are trailing commas allowed?", answer: "No. Standard JSON rejects trailing commas." },
      { question: "Are unquoted keys allowed?", answer: "No. JSON object keys must be double-quoted strings." },
    ],
    related: ["json-formatter", "url-decoder", "base64-decoder"],
  },
  {
    id: "unix-timestamp-converter",
    name: "Unix Timestamp Converter",
    description: "Convert Unix timestamps in seconds or milliseconds to ISO 8601 dates.",
    category: "Date & Time",
    instructions: "Enter a Unix timestamp. Values below 100 billion are treated as seconds; larger values are treated as milliseconds.",
    inputLabel: "Unix timestamp",
    inputPlaceholder: "1717986912",
    action: "Convert",
    examples: ["0 → 1970-01-01T00:00:00.000Z", "1704067200 → 2024-01-01T00:00:00.000Z", "1704067200000 → 2024-01-01T00:00:00.000Z"],
    faq: [
      { question: "What is a Unix timestamp?", answer: "It is elapsed time since January 1, 1970 at 00:00:00 UTC." },
      { question: "Are seconds and milliseconds supported?", answer: "Yes. The tool detects both common timestamp lengths." },
      { question: "Which timezone is displayed?", answer: "Output uses ISO 8601 in UTC, indicated by the trailing Z." },
    ],
    related: ["ulid-generator", "uuid-v4-generator", "json-formatter"],
  },
  {
    id: "sha256-hash-generator",
    name: "SHA256 Hash Generator",
    description: "Generate a lowercase SHA-256 hex digest from any UTF-8 text.",
    category: "Security",
    instructions: "Enter text and click Generate Hash. The browser Web Crypto API computes the 256-bit digest locally.",
    inputLabel: "Text to hash",
    inputPlaceholder: "Text to hash",
    action: "Generate Hash",
    examples: ["hello → 2cf24dba5f...9824", "empty text → e3b0c44298...b855", "developer → 3bc5a5ba7f..."],
    faq: [
      { question: "Can a SHA-256 hash be reversed?", answer: "No practical direct reversal exists, but weak inputs can still be guessed by trying candidates." },
      { question: "Is SHA-256 suitable for passwords?", answer: "Use a password hashing algorithm such as Argon2, scrypt, or bcrypt instead." },
      { question: "How long is the result?", answer: "A SHA-256 digest is 256 bits, displayed here as 64 hexadecimal characters." },
    ],
    related: ["uuid-v4-generator", "base64-encoder", "json-validator"],
  },
];

export const toolById = Object.fromEntries(tools.map((tool) => [tool.id, tool])) as Record<ToolId, Tool>;
export const categories = Array.from(new Set(tools.map((tool) => tool.category)));
