import { expect, test } from "@playwright/test";

test.describe("Certifications section", () => {
  test("expands hidden cards and validates visualize/download buttons", async ({ page }) => {
    await page.goto("/");

    const section = page.locator("#certificacoes");
    await expect(section).toBeVisible();

    await expect(section.getByText("Seguranca da Informacao")).toBeVisible();
    await expect(section.getByText("Resposta a Incidentes")).toBeVisible();
    await expect(section.getByText("Desenvolvimento de APIs REST")).toBeVisible();
    await expect(section.getByText("React + TypeScript")).toBeVisible();

    await expect(section.getByText("AWS Cloud Architecting")).toHaveCount(0);

    const toggleButton = section.getByRole("button", { name: /Mostrar certificacoes complementares/i });
    await expect(toggleButton).toBeVisible();
    await expect(toggleButton).toContainText(/Ver mais \d+ certificacoes/i);
    await toggleButton.click();

    await expect(section.getByText("AWS Cloud Architecting")).toBeVisible();

    const visualizeLink = section.getByRole("link", { name: "Visualizar certificado Seguranca da Informacao" });
    await expect(visualizeLink).toBeVisible();
    await expect(visualizeLink).toHaveAttribute("href", /\/Certificados\//);

    const visualizeHref = await visualizeLink.getAttribute("href");
    expect(visualizeHref).toBeTruthy();
    const visualizeUrl = new URL(visualizeHref!, page.url()).toString();
    const visualizeResponse = await page.request.get(visualizeUrl);
    expect(visualizeResponse.ok()).toBeTruthy();
    expect(visualizeUrl).toMatch(/\/Certificados\/.*\.pdf/i);

    const downloadLink = section.getByRole("link", { name: "Baixar certificado Seguranca da Informacao" });
    await expect(downloadLink).toBeVisible();
    await expect(downloadLink).toHaveAttribute("download", /.*\.pdf/i);
    const downloadHref = await downloadLink.getAttribute("href");
    expect(downloadHref).toBeTruthy();
    const downloadUrl = new URL(downloadHref!, page.url()).toString();
    const downloadResponse = await page.request.get(downloadUrl);
    expect(downloadResponse.ok()).toBeTruthy();
    expect(downloadUrl).toMatch(/\/Certificados\/.*\.pdf/i);
  });
});
