import { expect, test } from "@playwright/test";

test("home page links to the tools catalog", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Small developer tools");
  await page.getByRole("link", { name: "Browse all tools" }).click();
  await expect(page).toHaveURL(/\/tools\/?$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("All developer tools");
});

test("JSON formatter runs in the browser", async ({ page }) => {
  await page.goto("/tools/json-formatter/");
  await page.getByLabel("JSON to format").fill('{"name":"Ada"}');
  await page.getByRole("button", { name: "Format JSON" }).click();
  await expect(page.getByTestId("tool-output")).toContainText('"name": "Ada"');
});
