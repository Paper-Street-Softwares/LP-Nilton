import { BriefcaseBusiness, Hourglass, Users } from "lucide-react";
import imgLogo from "../assets/logo.webp";
import imgAbout from "../assets/about.webp";
import imgBackground from "../assets/background.webp";

export const infos = {
  telefone: {
    ddd: "11",
    primeiraParte: "96358",
    segundaParte: "7483",
  },
  mensagemWhatsapp:
    "Olá! Vim através do site e gostaria de tirar algumas dúvidas sobre meu caso.",
};

const content = {
  hero: {
    imagens: {
      backgroundHero: imgBackground,
      focadaHero:
        "https://matthausadvocacia.com.br/assets/bgHeroLp03-Bgytujwp.webp",
      logo: imgLogo,
    },
    texts: {
      etiqueta: "⚖️ Advogado Em Santo André – SP",
      titulo: (
        <p>
          Precisando De Um <strong>Advogado</strong>?
        </p>
      ),
      subtitulo:
        "Atendo diariamente casos trabalhistas, familiares e de consumo, assumindo seu processo de perto e te guiando com clareza em cada etapa.",
      labelBotaoPrincial: "Falar com Advogado no Whatsapp",
      labelBotaoSecundario: "Agendar Horário",
    },
  },

  features: {
    texts: {
      titulo: "Cuido do seu caso com excelência",
      labelBotaoPrincial: "Preciso De Ajuda Com Meu Caso",
    },
    cards: [
      {
        index: 1,
        icone: BriefcaseBusiness,
        titulo: "Direito Trabalhista",
        descricao:
          "Corrijo demissão injusta, verbas atrasadas, assédio e outros problemas no trabalho.",
      },
      {
        index: 2,
        icone: Hourglass,
        titulo: "Direito De Família",
        descricao:
          "Apoio em divórcio, pensão, guarda e partilha de forma humana e segura.",
      },
      {
        index: 3,
        icone: Users,
        titulo: "Direito Do Consumidor",
        descricao:
          "Defendo você contra cobranças abusivas, golpes, contratos e serviços falhos.",
      },
    ],
  },

  transformacao: {
    texts: {
      titulo: "Te Ajudo A Mudar De Vida",
      labelBotaoPrincial: "Preciso Da Ajuda De Um Advogado",
    },
    antes: {
      etiqueta: "ANTES",
      pontos: [
        {
          index: 1,
          texto:
            "Você se sente injustiçado(a) mas não sabe o que fazer pra resolver",
        },
        {
          index: 2,
          texto:
            "Sabe que precisa de um advogado mas não sente segurança pra contratar um",
        },
        {
          index: 3,
          texto:
            "Tem sempre a sensação de que deveria entrar com uma ação e com isso quitar suas dívidas",
        },
      ],
    },

    depois: {
      etiqueta: "DEPOIS",
      pontos: [
        {
          index: 1,
          texto:
            "Você vive em paz sabendo que seu caso está em andamento, sempre sendo informado(a)",
        },
        {
          index: 2,
          texto:
            "Você fala comigo sempre que precisa, não precisando mais procurar outros profissionais",
        },
        {
          index: 3,
          texto:
            "Dorme tranquilo(a) sabendo que seu caso está em ótimas mãos e a justiça será feita",
        },
      ],
    },
  },

  cta: {
    imagem: {
      background: imgBackground,
    },
    texts: {
      etiqueta: "Não espere nem mais um segundo",

      titulo: (
        <h2>
          Cada minuto que você não corre atrás dos seus direitos,
          <strong>você pode estar sendo lesado(a)</strong>!
        </h2>
      ),
      labelBotaoPrincial: "Quero Resolver Agora Mesmo",
    },
    pontos: [
      {
        index: 1,
        texto: (
          <p>
            Atendimento <strong>para todo o Brasil</strong>
          </p>
        ),
      },
      {
        index: 2,
        texto: (
          <p>
            <strong>Analiso </strong>completamente seu caso
          </p>
        ),
      },
      {
        index: 3,
        texto: (
          <p>
            Respondo <strong>rápido </strong>no Whatsapp
          </p>
        ),
      },
    ],
  },

  about: {
    imagem: {
      imgPessoa: imgAbout,
    },
    texts: {
      titulo: "Por Que Meus Clientes Confiam Em Mim",
      labelBotaoPrincial: "Fale Diretamente Comigo",
    },
    pontos: [
      {
        index: 1,
        texto: (
          <p>
            Respondo <strong>rápido</strong> porque sei que o seu tempo importa.
          </p>
        ),
      },
      {
        index: 2,
        texto: (
          <p>
            Estou sempre <strong>estudando</strong> todas as mudanças nas leis.
          </p>
        ),
      },
      {
        index: 3,
        texto: (
          <p>
            Com <strong>anos de experiência</strong>, atuo como Advogado e tenho
            diversos clientes satisfeitos.
          </p>
        ),
      },
      {
        index: 4,
        texto: (
          <p>
            Não faço promessas falsas: Estudo seu caso e te auxilio
            <strong> sem enrolação.</strong>.
          </p>
        ),
      },
      {
        index: 5,
        texto: (
          <p>
            Trabalho com os sistemas <strong>mais modernos</strong> pra ser o
            mais ágil possível.
          </p>
        ),
      },
    ],
  },

  footer: {
    imagem: {
      background: imgBackground,
    },
    texts: {
      etiqueta: "Chegou a hora de resolver",
      titulo: (
        <h2>
          Entre em contato e vou fazer uma <strong>análise imediata</strong> do
          seu caso.
        </h2>
      ),
      labelBotaoPrincial: "Quero Ser Atendido Agora",
      direitosReservados:
        "2025 • Dr. Nilton Correia • Todos os direitos reservados • Políticas de privacidade",
      desenvolvidoPor: "Desenvolvido com excelência por Paper Street",
    },
    pontos: {
      ponto1: "Profissionalismo",
      ponto2: "Experiência",
      ponto3: "Resultados",
    },
  },

  util: {
    ctaWhatsapp: `https://wa.me/+55${infos.telefone.ddd}${infos.telefone.primeiraParte}${infos.telefone.segundaParte}?text=${infos.mensagemWhatsapp}`,
    svgWhatsapp: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
      </svg>
    ),
    svgCalendario: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-calendar-icon lucide-calendar"
      >
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </svg>
    ),
  },
};

export default content;
