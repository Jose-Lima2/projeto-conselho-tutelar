# 🛡️ Portal Informativo - Conselho Tutelar & ECA

Este projeto é uma solução web colaborativa desenvolvida como Atividade de Extensão Universitária para o curso de **Engenharia de Software da Uniasselvi**. A aplicação foi projetada e validada em parceria com a **E.M.E.F. Arnaldo Antônio de Souza**, localizada no município de Dom Eliseu - Pará, alinhando-se diretamente ao **Objetivo de Desenvolvimento Sustentável (ODS) 16: Paz, Justiça e Instituições Eficazes**.

O objetivo principal do portal é disseminar informações essenciais sobre o Estatuto da Criança e do Adolescente (ECA) e o papel do Conselho Tutelar, promovendo o fortalecimento da participação cidadã e a prevenção de situações de risco, abuso e negligência na comunidade escolar.

---

## 🚀 Funcionalidades Principais (Requisitos Funcionais)

* **Guia de Direitos Fundamentais:** Páginas dedicadas à instrução normativa simplificada sobre o ECA (Vida, Saúde, Educação, Liberdade e Dignidade).
* **Seção Sentinela Escolar:** Espaço reflexivo detalhando a importância da instituição de ensino na identificação de vulnerabilidades e combate à evasão escolar.
* **Central de Relato Anônimo:** Formulário de envio seguro para denúncias e relatos, sem rastreamento de dados pessoais, cookies ou endereço de IP.
* **Mecanismo de Saída Rápida (Botão de Pânico):** Botão fixo de redirecionamento imediato para o buscador Google, utilizando substituição de histórico técnico (`window.location.replace`) para garantir a privacidade do usuário.
* **Atalho de Teclado de Emergência:** Execução da saída rápida instantaneamente ao pressionar a tecla `ESC`.
* **Rede de Proteção Local:** Painel informativo contendo contatos telefônicos, e-mails e localização via mapa interativo dos órgãos competentes de Dom Eliseu-PA (Conselho Tutelar e SEMAS).

---

## 🛠️ Tecnologias Utilizadas

A solução foi desenvolvida de forma leve e responsiva para garantir acessibilidade em desktops e dispositivos móveis (smartphones e tablets) da comunidade local:

* **HTML5:** Estruturação semântica das páginas informativas.
* **CSS3:** Estilização personalizada, paleta de cores institucional e efeitos de interface (UI/UX).
* **Bootstrap 5:** Framework para garantir responsividade e componentes modernos de grid.
* **JavaScript (Vanilla JS):** Lógica do formulário, captura de eventos do teclado (`ESC`) e manipulação segura de histórico de navegação.

---

## 📁 Estrutura do Projeto

```text
├── index.html            # Página principal com o Portal e Rede de Apoio
├── eca-direitos.html     # Guia explicativo sobre os direitos fundamentais
├── conselho-tutelar.html # Página sobre o papel do órgão e atuação
├── contatos.html         # Página auxiliar com canais de atendimento direto
├── style.css             # Estilização global e responsiva do portal
├── script.js             # Lógica de segurança, atalhos e comportamento UX
└── README.md             # Documentação técnica do repositório (Este arquivo)