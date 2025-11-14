import { Scale, Clock } from "lucide-react";

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
      backgroundHero:
        "https://matthausadvocacia.com.br/assets/bgHeroLp03-Bgytujwp.webp",
      focadaHero:
        "https://matthausadvocacia.com.br/assets/bgHeroLp03-Bgytujwp.webp",
      logo: "https://pachecoepeixotoadvogados.com.br/assets/logo-DX5AC2R1.png",
    },
    texts: {
      etiqueta: "Advogado em Santo André - SP",
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
      labelBotaoPrincial: "Fale comigo agora",
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
      labelBotaoPrincial: "Seja atendido por mim agora",
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
  },
};

export default content;
