/**
 * =============================================
 * CONFIGURAÇÃO DO SITE — EDITE AQUI SEUS DADOS
 * =============================================
 * Substitua os placeholders abaixo com seus dados reais.
 */

export const siteConfig = {
  nome: "[NOME]",
  crea: "[CREA]",
  cidade: "[CIDADE]",
  regiao: "São José do Rio Preto e região",
  prazo: "14 dias",
  email: "contato@[DOMINIO].com.br",
  whatsapp: "5517999999999", // Número com DDI+DDD, sem espaços

  /** Mensagens pré-preenchidas para WhatsApp */
  mensagens: {
    geral: (cidade: string) =>
      `Olá! Quero uma avaliação do meu imóvel em ${cidade}. Pode me passar prazo e o que preciso enviar?`,
    vendaCompra: () =>
      `Olá! Vou vender/comprar um imóvel e quero saber o valor justo. Como funciona sua avaliação?`,
    inventario: (regiao: string) =>
      `Olá! Preciso de avaliação para inventário/partilha. Você atende ${regiao}?`,
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
  return whatsappLink(siteConfig.mensagens.geral(siteConfig.cidade));
}
