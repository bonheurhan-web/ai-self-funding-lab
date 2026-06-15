"use client";

import { useState } from "react";
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
} from "@/lib/tool-functions";
import type { Tool } from "@/lib/tools";

export function ToolRunner({ tool }: { tool: Tool }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  async function run() {
    try {
      setError("");
      let result = "";
      switch (tool.id) {
        case "uuid-v4-generator":
          result = formatUuidV4(crypto.getRandomValues(new Uint8Array(16)));
          break;
        case "ulid-generator":
          result = formatUlid(Date.now(), crypto.getRandomValues(new Uint8Array(10)));
          break;
        case "base64-encoder":
          result = encodeBase64(input);
          break;
        case "base64-decoder":
          result = decodeBase64(input);
          break;
        case "url-encoder":
          result = encodeUrl(input);
          break;
        case "url-decoder":
          result = decodeUrl(input);
          break;
        case "json-formatter":
          result = formatJson(input);
          break;
        case "json-validator":
          result = validateJson(input);
          break;
        case "unix-timestamp-converter":
          result = convertUnixTimestamp(input);
          break;
        case "sha256-hash-generator":
          result = await sha256(input);
          break;
      }
      setOutput(result);
    } catch (caught) {
      setOutput("");
      setError(caught instanceof Error ? caught.message : "Unable to process the input.");
    }
  }

  async function copyOutput() {
    await navigator.clipboard.writeText(output);
  }

  const isGenerator = tool.id === "uuid-v4-generator" || tool.id === "ulid-generator";

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      {!isGenerator && (
        <label className="mb-5 block">
          <span className="mb-2 block text-sm font-semibold text-slate-800">{tool.inputLabel}</span>
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder={tool.inputPlaceholder}
            rows={tool.id.startsWith("json-") ? 10 : 5}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 p-4 font-mono text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </label>
      )}
      <button onClick={run} className="rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800">
        {tool.action}
      </button>
      {error && <p role="alert" className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
      {output && (
        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-800">Result</span>
            <button onClick={copyOutput} className="text-sm font-semibold text-blue-700 hover:text-blue-900">Copy</button>
          </div>
          <pre data-testid="tool-output" className="overflow-x-auto whitespace-pre-wrap break-all rounded-xl bg-slate-950 p-4 text-sm text-emerald-300">{output}</pre>
        </div>
      )}
    </section>
  );
}
