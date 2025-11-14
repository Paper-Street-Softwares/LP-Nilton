import { Scale, Clock } from "lucide-react";

const content = {
  infos: {
    telefone: {
      ddd: "11",
      primeiraParte: "96358",
      segundaParte: "7483",
    },
    mensagemWhatsapp:
      "Olá! Vim através do site e gostaria de tirar algumas dúvidas sobre meu caso.",
  },

  hero: {
    imagens: {
      backgroundHero:
        "https://www.shutterstock.com/image-illustration/legal-concept-themis-goddess-justice-600nw-2467887949.jpg",
      logo: "https://pachecoepeixotoadvogados.com.br/assets/logo-DX5AC2R1.png",
    },
    texts: {
      etiqueta: "Advogado em Santo André – SP",
      titulo: "Precisando de ajuda com seus direitos violados?",
      subtitulo:
        "Atendo diariamente casos trabalhistas, familiares e de consumo, assumindo seu processo de perto e te guiando com clareza em cada etapa para evitar mais desgaste.",
      labelBotaoPrincial: "Fale comigo agora mesmo",
      labelBotaoSecundario: "Agendar horário",
    },
  },

  features: {
    texts: {
      titulo: "Como ajudo em cada situação",
      labelBotaoPrincial: "Fale comigo agora mesmo",
    },
    cards: [
      {
        index: 1,
        icone: Scale,
        titulo: "Direitos trabalhistas",
        descricao:
          "Assumo seu caso e busco corrigir demissão injusta, verbas atrasadas e assédio.",
      },
      {
        index: 2,
        icone: Clock,
        titulo: "Horas extras e pressão",
        descricao:
          "Te ajudo a comprovar horas não pagas e lidar com cobranças abusivas no trabalho.",
      },
      {
        index: 3,
        icone: Scale,
        titulo: "Guarda e pensão",
        descricao:
          "Acompanho seu conflito familiar para proteger seus filhos e reduzir o desgaste.",
      },
      {
        index: 4,
        icone: Clock,
        titulo: "Problemas de consumo",
        descricao:
          "Ajo quando você sofre prejuízo, cobrança indevida ou negativa injusta.",
      },
    ],
    cta: {
      label: "Seja atendido por mim agora mesmo",
    },
  },

  transformacao: {
    texts: {
      titulo: "Como sua vida muda comigo",
      labelBotaoPrincial: "Seja atendido por mim agora mesmo",
    },
    antes: {
      etiqueta: "ANTES",
      pontos: [
        {
          index: 1,
          texto:
            "Você tenta resolver tudo sozinho e só encontra portas fechadas",
        },
        {
          index: 2,
          texto:
            "A insegurança cresce porque ninguém te explica o que realmente fazer",
        },
        {
          index: 3,
          texto:
            "Você perde tempo com atendimentos que não te escutam de verdade",
        },
        {
          index: 4,
          texto: "A ansiedade aumenta enquanto o problema só piora com o tempo",
        },
      ],
    },

    depois: {
      etiqueta: "DEPOIS",
      pontos: [
        {
          index: 1,
          texto: "Você entende cada passo do caso e segue com mais segurança",
        },
        {
          index: 2,
          texto:
            "Eu te atualizo sempre, evitando dúvidas e reduzindo o desgaste",
        },
        {
          index: 3,
          texto:
            "Você deixa de enfrentar tudo sozinho e ganha clareza no caminho",
        },
        {
          index: 4,
          texto: "Seu problema avança com estratégia feita para sua realidade",
        },
      ],
    },
  },

  cta: {
    texts: {
      etiqueta: "Atendimento direto com o advogado",
      titulo:
        "Não adie mais: seu caso needs de atenção agora para evitar mais prejuízos e desgaste",
      labelBotaoPrincial: "Fale comigo agora mesmo",
    },
    pontos: [
      { index: 1, texto: "Contato direto comigo" },
      { index: 2, texto: "Explico cada passo sem complicação" },
      { index: 3, texto: "Atualizações constantes do processo" },
      { index: 4, texto: "Estratégia definida para sua situação" },
    ],
  },

  about: {
    imagem: {
      imgPessoa:
        "https://pachecoepeixotoadvogados.com.br/assets/aboutImg-DwgPvXtM.webp",
    },
    texts: {
      titulo: "Por que confiam em mim",
      labelBotaoPrincial: "Fale comigo agora mesmo",
    },
    pontos: [
      { index: 1, texto: "Contato direto comigo" },
      { index: 2, texto: "Atualizações frequentes do processo" },
      { index: 3, texto: "Estratégia feita para seu caso" },
      { index: 4, texto: "Explicação clara de cada etapa" },
      { index: 5, texto: "Atendimento humanizado e rápido" },
      { index: 6, texto: "Acompanhamento próximo do início ao fim" },
    ],
  },

  footer: {
    imagem: {
      baclground:
        "https://www.shutterstock.com/image-illustration/legal-concept-themis-goddess-justice-600nw-2467887949.jpg",
    },
    texts: {
      etiqueta: "Pronto para começar?",
      titulo: "Fale comigo agora e evite que seu problema piore",
      labelBotaoPrincial: "Seja atendido por mim agora mesmo",
      direitosReservados:
        "2025 • Nilton Correia • Todos os direitos reservados • Políticas de privacidade",
      desenvolvidoPor: "Desenvolvido com excelência por Paper Street",
    },
    pontos: {
      ponto1: "Profissionalismo",
      ponto2: "Experiência",
      ponto3: "Resultados",
    },
  },
};

export default content;
