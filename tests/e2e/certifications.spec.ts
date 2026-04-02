import { expect, test } from "@playwright/test";

test.describe("Certifications section", () => {
  test("expands hidden cards and validates details/download route placeholders", async ({ page }) => {
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

    const detailsLink = section.getByRole("link", { name: "Abrir detalhes do certificado Seguranca da Informacao" });
    await expect(detailsLink).toBeVisible();
    await expect(detailsLink).toHaveAttribute("href", "/certificacoes/seg-info");

    const downloadLink = section.getByRole("link", { name: "Ir para download do certificado Seguranca da Informacao" });
    await expect(downloadLink).toBeVisible();
    await expect(downloadLink).toHaveAttribute("href", "/certificacoes/seg-info/download");

    const downloadHref = await downloadLink.getAttribute("href");
    expect(downloadHref).toBeTruthy();
    const downloadUrl = new URL(downloadHref!, page.url()).pathname;
    expect(downloadUrl).toBe("/certificacoes/seg-info/download");
  });
});
