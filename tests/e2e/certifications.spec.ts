import { expect, test } from "@playwright/test";

test.describe("Certifications section", () => {
  test("expands hidden cards and validates details/download route placeholders", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded", timeout: 60_000 });

    const section = page.locator("#certificacoes");
    await expect(section).toBeVisible();

    await expect(section.getByText("AWS Cloud Architecting")).toBeVisible();
    await expect(section.getByText("Ethical Hacking")).toBeVisible();
    await expect(section.getByText("Fundamentos de Cibersegurança")).toBeVisible();
    await expect(section.getByText("React + TypeScript")).toBeVisible();

    await expect(section.getByText("Segurança da Informação")).toHaveCount(0);

    const toggleButton = section.getByRole("button", { name: /Mostrar certificações complementares/i });
    await expect(toggleButton).toBeVisible();
    await expect(toggleButton).toContainText(/Ver mais \d+ certificações/i);
    await toggleButton.click();

    await expect(section.getByText("Segurança da Informação")).toBeVisible();

    const detailsLink = section.getByRole("link", { name: "Abrir detalhes do certificado AWS Cloud Architecting" });
    await expect(detailsLink).toBeVisible();
    await expect(detailsLink).toHaveAttribute("href", "/certificacoes/aws-arch");

    const downloadLink = section.getByRole("link", { name: "Ir para download do certificado AWS Cloud Architecting" });
    await expect(downloadLink).toBeVisible();
    await expect(downloadLink).toHaveAttribute("href", "/certificacoes/aws-arch/download");

    const downloadHref = await downloadLink.getAttribute("href");
    expect(downloadHref).toBeTruthy();
    const downloadUrl = new URL(downloadHref!, page.url()).pathname;
    expect(downloadUrl).toBe("/certificacoes/aws-arch/download");
  });
});
