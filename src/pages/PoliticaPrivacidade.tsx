import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { useWhatsAppModal } from "@/contexts/WhatsAppModalContext";

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor">
    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.129 6.745 3.047 9.379L1.054 31.49l6.311-2.022A15.89 15.89 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.335 22.594c-.39 1.1-1.932 2.013-3.175 2.28-.852.18-1.964.324-5.709-1.227-4.795-1.986-7.882-6.853-8.12-7.172-.23-.319-1.927-2.567-1.927-4.894s1.22-3.472 1.653-3.948c.39-.432 1.036-.648 1.654-.648.2 0 .38.01.541.019.433.019.65.043.936.722.358.852 1.228 2.994 1.336 3.213.11.219.219.516.068.816-.143.308-.268.497-.487.764-.219.267-.428.472-.647.759-.2.248-.424.515-.176.948.248.432 1.104 1.82 2.37 2.948 1.631 1.452 3.004 1.904 3.436 2.113.432.21.685.176.936-.105.26-.29 1.104-1.285 1.396-1.727.284-.443.576-.367.964-.22.39.148 2.472 1.167 2.896 1.38.424.218.706.324.814.504.104.181.104 1.052-.286 2.15Z" />
  </svg>
);

const PoliticaPrivacidade = () => {
  const navigate = useNavigate();
  const { open } = useWhatsAppModal();

  // Garante que a página abre no topo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

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

        {/* Botões de ação */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={open}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-base font-bold text-accent-foreground shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
          >
            <WhatsAppIcon size={20} />
            Solicitar Avaliação
          </button>

          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 px-8 py-4 text-base font-semibold text-primary-foreground/70 transition-all hover:bg-primary-foreground/10"
          >
            <ArrowLeft size={18} />
            Voltar
          </button>
        </div>

      </div>
    </div>
  );
};

export default PoliticaPrivacidade;
