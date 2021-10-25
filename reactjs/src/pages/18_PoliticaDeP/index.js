import { Container } from './styled.js';

import Cabecalho from '../../components/comum/cabecalho'
import TituloC from '../../components/comum/titulo'

import Img1 from '../../assets/img/img_pp1.png'
import Img2 from '../../assets/img/img_pp.png'

export default function Index() {
    return(
        <Container>
            <Cabecalho />

            <TituloC nome="Política de Privacidade"/>
            
            <div className="conteudo">
                <div className="p2">
                    <div className="txt">
                        1. Sua privacidade: Movies World tem o compromisso de garantir a privacidade de suas informações.<br></br>
                        2. Aplicativo: Esta Política de Privacidade se aplica a todas as informações pessoais enviadas por você no moviesworld.com (o “Site”), ou por meio de um aplicativo oficial do Movies World (o “Aplicativo”) ou por meio do uso da API do Movies World (a “API”) e quaisquer informações que possam ser recuperadas automaticamente por meio do uso desses canais.<br></br>
                        3. Consentimento: Ao aceitar nossos Termos de Uso e esta Política de Privacidade ao criar uma conta do Movies World, e ao acessar e usar o Site, Aplicativo ou API, você concorda com a coleta, uso, divulgação, armazenamento e processamento de suas informações de acordo com esta Política de Privacidade.<br></br>
                        4. Mudanças na Política de Privacidade: Podemos alterar ou atualizar esta Política de Privacidade de tempos em tempos, com ou sem aviso prévio. Você concorda em obedecer à Política de Privacidade que está em vigor no momento em que você acessa e usa o Site, Aplicativo ou API.<br></br>
                    </div>
                    <img src={Img1} alt="" />
                </div>

                <div className="p1">
                    5. Informações pessoais: para usar serviços específicos que oferecemos, você pode precisar enviar algumas informações pessoais, como endereço de e-mail, nome, endereço, número de telefone, sexo e data de nascimento. Você pode ser solicitado a enviar mais informações de tempos em tempos. Se você comprar uma assinatura através do Paddle.com, podemos enviar informações de identificação ao Paddle para vincular sua assinatura à sua conta. Se você conectar suas contas do Facebook ou Twitter à sua conta do Movies World, acessaremos essas contas para identificar quais de seus amigos nesses serviços também estão usando o Movies World. <br></br>
                    6. Biscoitos: Um cookie é um pequeno pedaço de dados que é armazenado em seu computador ou dispositivo móvel. Como muitos sites, usamos cookies e tecnologias semelhantes para coletar dados adicionais de uso do site e operar nossos serviços. Embora a maioria dos navegadores aceite cookies automaticamente, as configurações de muitos navegadores podem ser definidas para recusar cookies ou alertá-lo quando um site está tentando colocar um cookie em seu computador. No entanto, alguns de nossos serviços podem não funcionar corretamente se você desabilitar os cookies. Quando o seu navegador ou dispositivo permite, usamos cookies de sessão e cookies persistentes para mantê-lo conectado, para entender melhor como você interage com nossos serviços, para monitorar padrões de uso agregados e para personalizar e operar nossos serviços, por exemplo, fornecendo segurança da conta e conteúdo personalizado. Nosso serviço também usa cookies e tecnologias de rastreamento semelhantes, como o cookie de ID comum para fornecer seus serviços. Os cookies são dispositivos importantes para medir a eficácia da publicidade e garantir uma indústria robusta de publicidade online. O cookie de ID comum armazena um ID exclusivo no domínio primário que pode ser acessado por nossos parceiros de anúncios. Esse ID pode ser utilizado para melhorar a correspondência do usuário, especialmente ao entregar anúncios para navegadores iOS e macOS. Os usuários podem especialmente ao entregar anúncios para navegadores iOS e macOS. Os usuários podem especialmente ao entregar anúncios para navegadores iOS e macOS. Os usuários podemoptar por sair do rastreamento de ID comum. <br></br>
                    7. Privacidade de publicidade: (somente usuários da UE) Quando você usa nosso site, empresas pré-selecionadas podem acessar e usar certas informações em seu dispositivo e sobre seus interesses para veicular anúncios ou conteúdo personalizado. Você pode alterar suas opções de consentimento a qualquer momento.<br></br>
                    8. Dados de registro: também recebemos informações quando você visualiza conteúdo ou de outra forma interage com nossos serviços, aos quais nos referimos como “Dados de registro”, mesmo que você não tenha criado uma conta no Movies World. Esses dados de registro incluem informações como endereço IP, tipo de navegador, sistema operacional, página da web de referência, páginas visitadas, localização, operadora de celular, informações do dispositivo (incluindo IDs de dispositivo e aplicativo), termos de pesquisa e informações de cookies. 
                </div>

                <div className="p2-d">
                    <img src={Img2} alt="" />
                    <div className="txt">
                        9. Informações de pagamento: o Serviço depende de terceiros para processar os pagamentos de assinatura, portanto, o Serviço deve necessariamente compartilhar informações de identificação com o processador de pagamento relevante para saber a qual conta o pagamento será aplicado. De outra forma, não armazenamos nenhuma das suas informações de pagamento. Todos os pagamentos são processados ​​pela Paddle.com ou Apple, Inc. como comerciante oficial (coletivamente, os “Revendedores”). Como o processo de pagamento é realizado de forma completa e independente pelos Revendedores, você envia os detalhes de pagamento relevantes diretamente ao Revendedor. As respectivas políticas de privacidade dos Revendedores estão em paddle.com/legal e apple.com/legal/privacy. Para assinaturas na web (“Produtos”), Paddle.com permite que o Serviço acesse os seguintes dados de pagamento: seu endereço de e-mail e seu método de pagamento (por exemplo, por cartão de crédito), mas não os detalhes do próprio pagamento, a fim de obter um visão geral sobre o desempenho do Produto. O interesse legítimo da Paddle.com é comunicar de forma transparente suas vendas do Produto ao Serviço; o interesse legítimo do Serviço é saber sobre as receitas geradas pela Paddle.com. O usuário titular dos dados tem a possibilidade de revogar o consentimento para o tratamento de dados pessoais a qualquer momento da Paddle.com. A revogação não terá qualquer efeito sobre os dados pessoais, que devem ser processados, usados ​​ou transmitidos de acordo com o processamento de pagamento (contratual).
                    </div>
                </div>

                <div className="p1">
                    10. Uso das informações: As informações pessoais que você nos fornece serão usadas apenas em relação aos serviços que fornecemos, para nos comunicarmos com você em relação aos nossos serviços ou para cooperar com qualquer governo, indústria ou autoridades regulatórias.<br></br>
                    11. Divulgação de informações: A menos que você expressamente nos autorize a fazê-lo, não divulgaremos suas informações pessoais a terceiros, exceto quando a divulgação estiver relacionada aos fins para os quais as informações foram coletadas (conforme declarado no parágrafo 8 acima).<br></br>
                    12. Acesso e atualizações de informações: você pode solicitar a qualquer momento o acesso às informações pessoais que mantemos em seu nome ou para corrigir ou atualizar quaisquer de suas informações pessoais (na medida em que você não seja capaz de fazê-lo por conta própria no site) . Se você registrou uma conta no Movies World, pode acessar, corrigir, excluir ou modificar as informações pessoais que nos forneceu e associadas à sua conta por meio da página Configurações .<br></br>
                    13. Armazenamento de informações: Armazenaremos com segurança suas informações pessoais nos Estados Unidos, embora você reconheça e concorde que suas informações pessoais podem ser transferidas para fora dos Estados Unidos em conexão com os serviços que oferecemos, conforme estabelecido na cláusula 12 abaixo.<br></br>
                    14. Operações globais e Privacy Shield: para oferecer a você nossos serviços, operamos globalmente. Onde as leis de seu país permitem que você faça isso, você nos autoriza a transferir, armazenar e usar seus dados nos Estados Unidos, Nova Zelândia e qualquer outro país onde possamos operar. Em alguns dos países para os quais transferimos dados pessoais, as leis e regras de privacidade e proteção de dados sobre quando as autoridades governamentais podem acessar os dados podem ser diferentes das de seu país. Quando transferimos dados pessoais para fora da União Europeia ou dos Estados da EFTA, garantimos um nível adequado de proteção para os direitos dos titulares dos dados com base na adequação das leis de proteção de dados do país receptor, obrigações contratuais impostas ao destinatário dos dados, ou Princípios do Privacy Shield UE-EUA e Suíça-EUA<br></br>
                    15. Retenção: Manteremos suas informações pessoais antes e depois da desativação ou de sua conta, mas apenas enquanto tivermos o direito legal de fazê-lo ou até que você solicite que as excluamos permanentemente. <br></br>                   
                    16. Desativação e exclusão: sua conta pode ser desativada em Configurações e você pode solicitar a exclusão permanente por e-mail após a desativação. Quando desativada, sua conta do Movies World, incluindo seu nome de usuário, perfil e conteúdo, não poderão mais ser visualizados no site, aplicativo ou API, mas serão retidos a menos e até que você solicite separadamente a exclusão permanente por e-mail. Se você não solicitar a exclusão, é possível solicitar a reativação de sua conta se ela foi acidental ou indevidamente desativada. Não podemos restaurar contas excluídas permanentemente.<br></br>
                    17. Portabilidade: o Movies World fornece um meio de baixar as informações que você compartilhou por meio de nossos serviços usando a opção de exportação de conta na página Configurações .<br></br>
                    18. Segurança: Você deve manter todos os dados de login, senha ou conta relacionados ao uso do site protegidos em todos os momentos e deve nos notificar imediatamente sobre qualquer uso não autorizado de tais informações ou qualquer outra violação de segurança. Não seremos responsáveis ​​por qualquer perda ou dano se você deixar de cumprir esta obrigação de segurança.<br></br>
                    19. Captcha: este site é protegido pelo reCAPTCHA e são aplicáveis a Política de Privacidade e os Termos de Serviço do Google.
                </div>
            </div>
        </Container>
    )
}