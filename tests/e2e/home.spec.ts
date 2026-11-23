
import { test, expect } from "@playwright/test";

test("homepage responds successfully", async ({ page }) => {
  const response = await page.goto("/");

  expect(response?.status()).toBe(200);
  await expect(page.locator("body")).toBeVisible();
});
