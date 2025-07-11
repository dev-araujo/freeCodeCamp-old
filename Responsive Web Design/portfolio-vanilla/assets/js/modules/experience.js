export function initExperience() {
  const menuItems = document.querySelectorAll("#s-experience .sidebar ul li");
  const contentSections = {
    Enacom: {
      title: "Desenvolvedor Front-end - Pleno",
      period: "Abr 2022 - Dez 2024 (2 anos e 9 meses)",
      description:
        "Desenvolvi aplicações web com <strong>Angular</strong>, criando e implementando <strong>testes unitários</strong> para garantir a qualidade do código. Resolvi bugs e problemas técnicos, trabalhei em equipes multidisciplinares com metodologias ágeis e colaborei com outros desenvolvedores, promovendo boas práticas e melhorias de processos.",
      tecnologies: [
        "Angular",
        "Material Angular",
        "TypeScript",
        "JavaScript",
        "Chart.js",
        "GitLab",
        "Sonarqube",
        "API Rest",
        "Azure",
        "Bootstrap",
        "SCSS",
        "SCRUM",
        "Testes Unitários",
      ],
    },
    WEB3DEV: {
      title: "Tradutor/Revisor de conteúdo sobre Blockchain",
      period: "Mar 2022 - Fev 2024 (2 anos)",
      description:
        "Tradução e revisão (do inglês para o português), de conteúdos técnicos e tutoriais relacionados à <strong>web3</strong> (blockchain, DAO's, criptoativos, NFT's ...).",
      tecnologies: [
        "Tradução",
        "Revisão",
        "Gestão",
        "Trello",
        "SCRUM",
        "Solidity",
        "Ethereum",
        "EVM",
        "Comunicação",
      ],
    },
    "Paytime Brasil": {
      title: "Desenvolvedor Front-end - Júnior",
      period: "Jan 2021 - Dez 2021 (1 ano)",
      description:
        "Desenvolvi o front-end da aplicação da instituição, inicialmente com <strong>React</strong> e posteriormente migrando para <strong>Angular 12</strong>. Criei e implementei funcionalidades, aprimorando a experiência do usuário e resolvendo desafios técnicos. Colaborei ativamente em equipe ágil (Scrum), garantindo entregas pontuais. ",
      tecnologies: [
        "React",
        "GitLab",
        "TypeScript",
        "JavaScript",
        "Angular",
        "jQuery",
        "Bootstrap",
        "Git",
        "JIRA",
        "MUI",
      ],
    },
  };

  function removeActiveFromAll() {
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
  }

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      const companyName = this.textContent;
      const content = contentSections[companyName];

      if (content) {
        updateContent(content, companyName);

        removeActiveFromAll();

        this.classList.add("active");

        updateContent(content, companyName);
      }
    });
  });

  function updateContent(content, companyName) {
    const experienceHeader = document.querySelector(".experience-header");
    const infoSection = document.querySelector(".info");

    experienceHeader.innerHTML = `
            <h1 class="about__subtitle">${content.title}</h1>
            <p >${content.period}</p>
        `;

    infoSection.innerHTML = `
            <h2 class="experience-company">${companyName}</h2>
            <p>${content.description}</p>
            <section class="tecnologies">
                ${content.tecnologies
                  .map((tech) => `<p class="tag">${tech}</p>`)
                  .join("")}
            </section>
        `;
  }

  if (contentSections["Enacom"]) {
    updateContent(contentSections["Enacom"], "Enacom");
    menuItems[0].classList.add("active");
  }
}
