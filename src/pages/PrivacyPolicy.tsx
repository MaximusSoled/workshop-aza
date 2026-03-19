import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <div className="section-container max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-electric transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Voltar à página inicial
        </Link>

        <h1 className="headline-secondary mb-8">Política de Privacidade</h1>
        <p className="text-xs text-muted-foreground mb-8">Última atualização: 19 de março de 2026</p>

        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">1. Controlador dos Dados</h2>
            <p>
              O responsável pelo tratamento dos seus dados pessoais é <strong className="text-foreground">Hiago Lemos</strong>,
              inscrito no CNPJ/CPF [INSERIR CNPJ/CPF], com endereço em [INSERIR ENDEREÇO],
              e-mail de contato: <span className="text-electric">contato@hiagolemos.com.br</span>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">2. Dados Coletados</h2>
            <p>Podemos coletar os seguintes dados pessoais:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Dados de identificação: nome, e-mail, telefone (quando fornecidos voluntariamente)</li>
              <li>Dados de navegação: endereço IP, tipo de navegador, páginas acessadas, tempo de permanência</li>
              <li>Cookies e tecnologias de rastreamento (veja seção 6)</li>
              <li>Dados de pagamento: processados por plataformas terceiras seguras</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">3. Finalidade do Tratamento</h2>
            <p>Seus dados são utilizados para:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Processar sua inscrição no evento</li>
              <li>Enviar comunicações relacionadas ao evento e conteúdos educacionais</li>
              <li>Melhorar a experiência de navegação no site</li>
              <li>Cumprir obrigações legais e regulatórias</li>
              <li>Análise estatística e melhoria dos nossos serviços</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">4. Base Legal</h2>
            <p>
              O tratamento dos seus dados pessoais é fundamentado nas seguintes bases legais da LGPD (Lei nº 13.709/2018):
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-foreground">Consentimento</strong> (Art. 7º, I) — para cookies e comunicações de marketing</li>
              <li><strong className="text-foreground">Execução de contrato</strong> (Art. 7º, V) — para processar inscrições</li>
              <li><strong className="text-foreground">Legítimo interesse</strong> (Art. 7º, IX) — para melhorias no site</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">5. Compartilhamento de Dados</h2>
            <p>
              Seus dados podem ser compartilhados com prestadores de serviço essenciais (processadores de pagamento,
              plataformas de e-mail marketing, ferramentas de análise) que atuam sob nossas instruções e em conformidade
              com a LGPD. Não vendemos, alugamos ou comercializamos seus dados pessoais.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">6. Cookies</h2>
            <p>
              Utilizamos cookies para melhorar sua experiência de navegação. Você pode gerenciar suas preferências
              de cookies a qualquer momento através do banner exibido no site. Os cookies utilizados incluem:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-foreground">Essenciais:</strong> necessários para o funcionamento do site</li>
              <li><strong className="text-foreground">Analíticos:</strong> nos ajudam a entender como você usa o site</li>
              <li><strong className="text-foreground">Marketing:</strong> utilizados para personalizar conteúdos e anúncios</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">7. Seus Direitos</h2>
            <p>Conforme a LGPD, você tem direito a:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Confirmar a existência de tratamento dos seus dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados</li>
              <li>Solicitar a portabilidade dos dados</li>
              <li>Revogar o consentimento a qualquer momento</li>
            </ul>
            <p>
              Para exercer seus direitos, entre em contato pelo e-mail:{" "}
              <span className="text-electric">contato@hiagolemos.com.br</span>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">8. Segurança</h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra
              acessos não autorizados, situações acidentais ou ilícitas de destruição, perda, alteração ou
              qualquer forma de tratamento inadequado.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">9. Retenção de Dados</h2>
            <p>
              Seus dados serão mantidos pelo tempo necessário para cumprir as finalidades descritas nesta
              política, salvo obrigação legal de retenção por período superior.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">10. Alterações</h2>
            <p>
              Esta política pode ser atualizada periodicamente. Recomendamos que você a consulte regularmente.
              Alterações significativas serão comunicadas por e-mail ou destaque no site.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
