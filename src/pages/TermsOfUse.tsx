import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfUse = () => {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <div className="section-container max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-electric transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Voltar à página inicial
        </Link>

        <h1 className="headline-secondary mb-8">Termos de Uso</h1>
        <p className="text-xs text-muted-foreground mb-8">Última atualização: 19 de março de 2026</p>

        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar este site, você concorda com os presentes Termos de Uso. Caso não concorde
              com qualquer disposição, recomendamos que não utilize o site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">2. Sobre o Evento</h2>
            <p>
              O evento presencial ministrado por <strong className="text-foreground">Hiago Lemos</strong> é
              voltado para profissionais e proprietários de clínicas de implante capilar que desejam otimizar
              seus processos de conversão utilizando o Método R.U.M.O.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">3. Inscrição e Pagamento</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>A inscrição é confirmada mediante pagamento integral do valor do ingresso</li>
              <li>Os pagamentos são processados por plataformas seguras de terceiros</li>
              <li>O preço e as condições de pagamento são os indicados no momento da compra</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">4. Política de Cancelamento e Reembolso</h2>
            <p>
              Em conformidade com o Código de Defesa do Consumidor (Art. 49), o participante tem direito ao
              arrependimento no prazo de <strong className="text-foreground">7 (sete) dias corridos</strong> após
              a compra, com reembolso integral. Após esse prazo, o reembolso estará sujeito às condições abaixo:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Até 30 dias antes do evento: reembolso de 80% do valor pago</li>
              <li>Menos de 30 dias antes do evento: sem reembolso, podendo transferir para outra pessoa</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">5. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo apresentado no evento e neste site (textos, imagens, metodologias, apresentações)
              é de propriedade exclusiva de Hiago Lemos. É proibida a reprodução, distribuição ou comercialização
              sem autorização prévia por escrito.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">6. Isenção de Garantia de Resultados</h2>
            <p>
              O conteúdo do evento tem caráter educacional. Os resultados dependem da aplicação individual de cada
              participante. Nenhuma garantia de resultado financeiro ou comercial é oferecida. Referências a
              resultados de terceiros são meramente ilustrativas.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">7. Uso de Imagem</h2>
            <p>
              O evento poderá ser fotografado e filmado para fins de divulgação. Ao participar, você autoriza o
              uso de sua imagem em materiais promocionais, salvo manifestação contrária por escrito antes do evento.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">8. Responsabilidades do Participante</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Comparecer no local, data e horário informados</li>
              <li>Manter conduta respeitosa com demais participantes e organizadores</li>
              <li>Não gravar ou transmitir o conteúdo do evento sem autorização</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">9. Alterações no Evento</h2>
            <p>
              O organizador reserva-se o direito de alterar data, local ou programação do evento por motivos
              de força maior, comunicando os inscritos com antecedência razoável. Em caso de cancelamento pelo
              organizador, o reembolso será integral.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">10. Legislação Aplicável</h2>
            <p>
              Estes termos são regidos pela legislação brasileira. Fica eleito o foro da comarca de [INSERIR CIDADE/UF]
              para dirimir quaisquer controvérsias.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-foreground">11. Contato</h2>
            <p>
              Em caso de dúvidas, entre em contato pelo e-mail:{" "}
              <span className="text-electric">contato@hiagolemos.com.br</span>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default TermsOfUse;
