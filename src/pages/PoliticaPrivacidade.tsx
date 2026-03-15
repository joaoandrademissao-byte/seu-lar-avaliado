import { siteConfig } from "@/config/siteConfig";

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen bg-secondary px-4 py-24">
      <div className="container mx-auto max-w-3xl">

        {/* Cabeçalho */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-3 tracking-tight">
            Política de Privacidade
          </h1>
          <p className="text-sm text-primary-foreground/50">
            Última atualização: março de 2026
          </p>
          <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-accent" />
        </div>

        {/* Conteúdo */}
        <div className="space-y-10 text-primary-foreground/80 leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-primary-foreground mb-3">1. Quem somos</h2>
            <p>
              A <strong className="text-primary-foreground">Andrade Missão Engenharia</strong> é uma empresa especializada em avaliação imobiliária técnica, com atuação em São José do Rio Preto e região, registrada no CREA sob o nº {siteConfig.crea}. Esta Política de Privacidade descreve como coletamos, usamos e protegemos os dados pessoais dos visitantes e clientes do nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary-foreground mb-3">2. Dados que coletamos</h2>
            <p>Ao preencher o formulário de contato em nosso site, coletamos:</p>
            <ul className="mt-3 space-y-2 list-none">
              {["Nome completo", "Número de WhatsApp"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Não coletamos dados sensíveis, documentos, informações financeiras nem realizamos cadastros automáticos sem seu conhecimento.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary-foreground mb-3">3. Como usamos seus dados</h2>
            <p>Seus dados são utilizados exclusivamente para:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Entrar em contato com você pelo WhatsApp para atendimento inicial",
                "Apresentar informações sobre nossos serviços de avaliação imobiliária",
                "Responder dúvidas e elaborar propostas de serviço",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="inline-block mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Não utilizamos seus dados para envio de spam, listas de e-mail marketing ou qualquer finalidade além do contato solicitado.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary-foreground mb-3">4. Compartilhamento de dados</h2>
            <p>
              Seus dados <strong className="text-primary-foreground">não são vendidos, alugados ou compartilhados</strong> com terceiros para fins comerciais. O único compartilhamento que ocorre é o envio das informações para nossa ferramenta interna de automação (n8n), hospedada em servidor próprio, utilizada exclusivamente para organizar o atendimento.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary-foreground mb-3">5. Armazenamento e segurança</h2>
            <p>
              Os dados coletados são armazenados em ambiente seguro com acesso restrito à equipe da Andrade Missão Engenharia. Adotamos medidas técnicas e organizacionais adequadas para proteger suas informações contra acesso não autorizado, perda ou divulgação indevida.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary-foreground mb-3">6. Por quanto tempo guardamos seus dados</h2>
            <p>
              Mantemos seus dados pelo tempo necessário para a prestação do serviço solicitado ou enquanto houver interesse legítimo de contato. Após esse período, os dados são excluídos de nossas bases.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary-foreground mb-3">7. Seus direitos (LGPD)</h2>
            <p>Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Confirmar se tratamos seus dados pessoais",
                "Acessar os dados que temos sobre você",
                "Solicitar a correção de dados incompletos ou incorretos",
                "Solicitar a exclusão dos seus dados",
                "Revogar o consentimento a qualquer momento",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="inline-block mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Para exercer qualquer um desses direitos, entre em contato pelo WhatsApp informado neste site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary-foreground mb-3">8. Cookies</h2>
            <p>
              Este site pode utilizar cookies técnicos essenciais para o funcionamento correto das páginas. Não utilizamos cookies de rastreamento de terceiros nem ferramentas de publicidade comportamental.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary-foreground mb-3">9. Alterações nesta política</h2>
            <p>
              Esta política pode ser atualizada periodicamente. Recomendamos que você a revise ao utilizar nosso site. A data de última atualização estará sempre indicada no topo desta página.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary-foreground mb-3">10. Contato</h2>
            <p>
              Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus dados, entre em contato conosco pelo WhatsApp disponível em nosso site.
            </p>
            <p className="mt-2 text-sm text-primary-foreground/50">
              Andrade Missão Engenharia · CREA {siteConfig.crea} · São José do Rio Preto – SP
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidade;
