import { Scale, Clock } from "lucide-react";

const content = {
  infos: {
    telefone: {
      ddd: "11",
      primeiraParte: "96358",
      segundaParte: "7483",
    },
    mensagemWhatsapp:
      "Olá! Vim através do site e gostaria de tirar umas dúvidas.",
  },

  hero: {
    texts: {
      etiqueta: "Advogado em Santo André - SP",
      titulo: "Precisando de *ajuda* com seus direitos?",
      subtitulo:
        "Com 10 anos de experiência, atendo trabalhadores, famílias e consumidores que precisam resolver conflitos com clareza, segurança e acompanhamento direto comigo do início ao fim.",
      labelBotaoPrincial: "Fale comigo agora mesmo",
      labelBotaoSecundario: "Quero meu caso analisado",
    },
  },

  features: {
    texts: {
      titulo: "Como posso te ajudar",
      labelBotaoPrincial: "Fale comigo agora mesmo",
    },
    cards: [
      {
        index: 1,
        icone: Scale,
        titulo: "Demissão e verbas",
        descricao:
          "Analiso documentos, comprovo direitos e te acompanho na busca pelo que a empresa deixou de cumprir.",
      },
      {
        index: 2,
        icone: Clock,
        titulo: "Guarda e pensão",
        descricao:
          "Te oriento em cada decisão para proteger seus filhos e diminuir conflitos desnecessários.",
      },
    ],
  },

  transformacao: {
    texts: {
      titulo: "Sua vida antes e depois da minha atuação",
      labelBotaoPrincial: "Quero resolver meu caso agora",
    },
    antes: {
      etiqueta: "ANTES",
      pontos: [
        {
          index: 1,
          texto: "Você não entende por que seus direitos foram negados",
        },
        {
          index: 2,
          texto: "Carrega medo de perder valores ou a convivência dos filhos",
        },
        {
          index: 3,
          texto: "Se sente sozinho enfrentando empresa ou ex-companheiro",
        },
      ],
    },

    depois: {
      etiqueta: "DEPOIS",
      pontos: [
        {
          index: 1,
          texto: "Recebe orientação clara e acompanha tudo diretamente comigo",
        },
        {
          index: 2,
          texto: "Consegue organizar provas e fortalecer sua segurança",
        },
        {
          index: 3,
          texto: "Segue sua vida com mais tranquilidade e menos desgaste",
        },
      ],
    },
  },

  cta: {
    texts: {
      etiqueta: "Atuação direta comigo",
      titulo:
        "Resolva seu caso com rapidez e orientação que evita erros e atrasos",
      labelBotaoPrincial: "Quero falar com o advogado agora",
    },
    pontos: [
      { index: 1, texto: "Atendimento direto com o advogado" },
      { index: 2, texto: "Acompanhamento claro do processo" },
      { index: 3, texto: "Análise completa do seu caso" },
      { index: 4, texto: "Estratégia específica para sua situação" },
    ],
  },

  about: {
    texts: {
      titulo: "Meu compromisso com seu caso",
      labelBotaoPrincial: "Começar atendimento",
    },
    pontos: [
      {
        index: 1,
        texto:
          "Atuo diariamente em casos trabalhistas, familiares e do consumidor, garantindo que cada cliente receba atenção direta e estratégica.",
      },
      {
        index: 2,
        texto:
          "Minha experiência de 10 anos me permite identificar rapidamente caminhos para resolver conflitos com segurança e organização.",
      },
      {
        index: 3,
        texto:
          "Priorizar clareza, comunicação e atualização constante faz parte da minha rotina.",
      },
    ],
  },

  footer: {
    texts: {
      etiqueta: "Fale diretamente comigo",
      titulo: "Pronto para resolver seu caso?",
      subtitulo: "Pronto para resolver seu caso",
      labelBotaoPrincial: "Chamar no WhatsApp",
      direitosReservados: "Todos os direitos reservados",
      desenvolvidoPor: "Desenvolvido por Paper Street Softwares",
    },
    pontos: {
      ponto1: "Profissionalismo",
      ponto2: "Experiência",
      ponto3: "Resultados",
    },
  },
};

export default content;
