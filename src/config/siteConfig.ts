/**
 * =============================================
 * CONFIGURAÇÃO DO SITE — EDITE AQUI SEUS DADOS
 * =============================================
 * Substitua os placeholders abaixo com seus dados reais.
 */

export const siteConfig = {
  nome: "João Victor Andrade Missão",
  crea: "[CREA]",
  cidade: "São José do Rio Preto",
  regiao: "São José do Rio Preto e região",
  prazo: "14 dias",
  email: "contato@jvmissao.com.br",
  whatsapp: "5514996681221",

  /** Mensagens pré-preenchidas para WhatsApp */
  mensagens: {
    geral: () =>
      `Vim pelo site e quero fazer uma avaliação de meu imóvel`,
    vendaCompra: () =>
      `Vim pelo site e quero fazer uma avaliação de meu imóvel`,
    inventario: () =>
      `Vim pelo site e quero fazer uma avaliação de meu imóvel`,
  },
} as const;

/** Gera link wa.me com mensagem URL-encoded */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/** Link padrão (mensagem geral) */
export function defaultWhatsappLink(): string {
  return whatsappLink(siteConfig.mensagens.geral());
}
