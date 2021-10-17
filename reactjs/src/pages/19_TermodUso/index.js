import { Container } from './styled.js';

import Cabecalho from '../../componentes/comum/cabecalho'
import TituloC from '../../componentes/comum/titulo'

import Img1 from '../../assets/img/img-termos.png'
import Img2 from '../../assets/img/img-termos1.png'

export default function Index() {
    return(
        <Container>
            <Cabecalho />

            <TituloC nome="Termos de Uso"/>
            
            <div className="conteudo">
                <div className="p1">
                    Ao acessar e usar o movieworld.com e qualquer outro site, aplicativo, API ou conteúdo incorporado pertencente ou operado pela movieworld (“Serviço”), você aceita e concorda em obedecer aos seguintes termos e condições (“Termos”):
                </div>

                <div className="p2">
                    <div className="txt">
                        1. Uso: Você só pode usar o Serviço de acordo com estes Termos. Todos os direitos não expressamente concedidos a você nestes Termos são reservados por nós.<br></br>
                        2. Responsabilidade: Você será responsável por todas as atividades que ocorrerem como resultado de seu uso do Serviço. Nós nos isentamos de toda e qualquer responsabilidade (incluindo negligência) pelo conteúdo, opiniões, declarações ou outras informações postadas ou uso do Serviço por seus usuários.<br></br>
                        3. Prestação de informações: Para utilizar os serviços prestados no Serviço, você deve ter pelo menos 16 anos de idade. Ao se registrar para usar o Serviço, você concorda em fornecer informações verdadeiras, precisas, atuais e completas sobre você conforme solicitado pelo Serviço ("Informações de Registro") e em manter e atualizar imediatamente suas Informações de Registro para garantir que permaneçam verdadeiro, preciso, atual e completo.<br></br>
                        4. Política da comunidade: Você deve ser cortês e respeitar as opiniões dos outros e não deve postar comentários indesejados, agressivos, sugestivos ou inapropriados dirigidos a outro membro do Serviço. Leia nossa política completa.
                    </div>
                    <img src={Img1} alt="" />
                </div>

                <div className="p1">
                    5. Conduta: Você não deve usar o Serviço para promover, se envolver ou incitar ódio, violência, discriminação ou intolerância, inclusive com base em raça, idade, gênero, identidade de gênero, etnia, religião, deficiência, orientação sexual ou outro atributo protegido. Nós nos reservamos o direito de remover conteúdo que tenha o potencial de prejudicar comunidades que consideramos dignas de proteção. Você não deve usar o Serviço (ou encorajar outros a usar o Serviço) para criar várias contas, enganar ou enganar outros usuários, interromper discussões, contornar bloqueios de conta, manipular a mecânica do Serviço, alterar o consenso, participar de ataques orquestrados contra filmes ou cineastas, postar spam ou violar de outra forma nossa política da comunidade. Você não deve seguir um número excessivamente alto de contas para gerar seguidores recíprocos e, assim, manipular a popularidade de sua conta.<br></br>
                    6. Sem uso malicioso: Você concorda em acessar o Serviço por meio da interface que fornecemos. Você não deve usar o Serviço para qualquer meio malicioso ou abusar, assediar, ameaçar, intimidar ou personificar qualquer outro usuário do Serviço. Você não deve solicitar ou tentar solicitar informações pessoais ou de identificação de outro membro do Serviço.<br></br>
                    7. Nenhum uso ilegal: Você não deve usar o Serviço para qualquer propósito ilegal, ou publicar qualquer informação que viole qualquer obrigação de confidencialidade, direitos autorais, marca registrada ou outra propriedade intelectual ou direitos de propriedade de qualquer pessoa.<br></br>
                    8. Remoção de conteúdo: Nós nos reservamos o direito de remover qualquer conteúdo postado no Serviço que considerarmos (a nosso critério absoluto) como ofensivo, questionável, ilegal, explícito, gráfico ou de outra forma que viole estes Termos, incluindo conteúdo que expressamente (ou implicitamente, por meio de linguagem codificada, símbolo, palavras-chave ou tags) elogia, apóia, promove ou representa ideologias nacionalistas brancas ou vizinhas. Nós nos reservamos o direito de remover qualquer conteúdo postado no Serviço que dissemine informações incorretas e suas manipulações relacionadas, incluindo slogans virais.<br></br>
                </div>

                <div className="p2-d">
                    <img src={Img2} alt="" />
                    <div className="txt">
                        9. Taxas: Podemos cobrar taxas de assinatura pelo uso de certos serviços oferecidos no Serviço (“Taxas”). Podemos alterar o valor das Taxas a pagar de tempos em tempos. Iremos comunicar quaisquer alterações nas taxas, e quaisquer alterações só terão efeito no final do seu período de assinatura atual. Se você cancelar sua conta, não terá direito a reembolso por quaisquer taxas que já tenha pago.<br></br>
                        10. Propriedade intelectual:Você concorda que possuímos todos os direitos de propriedade intelectual do Serviço. Você nos concede um direito não exclusivo, livre de royalties, irrevogável, perpétuo e sublicenciável de usar, reproduzir, distribuir e exibir (incluindo para fins comerciais) no Serviço e em outras mídias qualquer conteúdo ou material que você postar no Serviço e qualquer nome (s) e / ou avatar sob o qual você publica tal conteúdo. Além desse direito, não reivindicamos nenhum direito de propriedade intelectual em relação às informações ou conteúdo que você carrega no Serviço. Qualquer conteúdo que você postar no Serviço deve ser original (não plagiado da escrita de outra pessoa) e não deve infringir os direitos de propriedade intelectual de outra pessoa. Quando você faz referência à propriedade intelectual de outra pessoa.<br></br>
                    </div>
                </div>

                <div className="p1">
                11. Indenização: Você nos indeniza e nos manterá indenizados contra todas as formas de responsabilidade, ações, processos, demandas, custos, encargos e despesas que possamos incorrer ou estar sujeitos ou sofrer como resultado do uso por você do Serviço.<br></br>
                    12. Emendas: nos reservamos o direito de alterar estes Termos a qualquer momento, inclusive alterando o valor de quaisquer Taxas a pagar por qualquer um de nossos serviços, e também podemos adicionar novos recursos que estarão sujeitos a estes Termos. Se essas alterações forem materiais, iremos comunicá-las aos usuários e, ao continuar a usar o Serviço, consideraremos que você concordou com as alterações.<br></br>
                    13. Uso de nosso logotipo: Sujeito a estes Termos, concedemos a você uma licença limitada não exclusiva para usar nosso logotipo Movie World ao fazer um link para o Serviço. Por favor, baixe o nosso arquivo de logotipo aqui . Cada link na página “Logotipos Movie World” contém uma versão de nosso logotipo em um dos vários formatos comuns. Você deve cumprir todas as instruções que possamos fornecer de tempos em tempos sobre o uso de nosso logotipo. Você não deve alterar nosso logotipo de forma alguma; usar nosso logotipo de forma que sugira qualquer tipo de associação ou parceria conosco; usar nosso logotipo de uma forma que seja prejudicial, enganosa, obscena ou de outra forma questionável para a pessoa média; ou usar nosso logotipo para, ou em conexão com, conteúdo que nos deprecie ou prejudique nossa reputação.<br></br>
                    14. Aplicativos de terceiros: podemos fornecer uma plataforma para aplicativos, sites e serviços de terceiros para disponibilizar produtos e serviços para você ("Aplicativos de terceiros") e o uso de quaisquer Aplicativos de terceiros estará sujeito aos seus termos de uso . Você concorda que não seremos responsáveis ​​pelo comportamento, recursos ou conteúdo de quaisquer Aplicativos de Terceiros.<br></br>
                    15. Encerramento ou suspensão de contas: Se você não cumprir estes Termos, podemos suspender ou encerrar sua conta.<br></br>
                    16. Suporte técnico e avarias: Tentaremos resolver imediatamente (durante o horário comercial normal) todos os problemas técnicos que surjam no Serviço. No entanto, não seremos responsáveis ​​por qualquer perda sofrida como resultado de qualquer avaria parcial ou total do Serviço ou qualquer avaria técnica.<br></br>
                    17. Lei regente e jurisdição: Todos os usuários do Serviço concordam que as leis da Nova Zelândia regem e se aplicam a estes Termos e ao uso do Serviço por cada usuário, e todos os usuários se submetem à jurisdição exclusiva dos tribunais da Nova Zelândia para qualquer assunto ou disputa decorrentes em relação a estes Termos.
                </div>
            </div>
        </Container>
    )
}