// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "All my publications can be found in my Google Scholar profile.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-software",
          title: "software",
          description: "Selected research software and reproducibility code.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum Vitae.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-joined-noah-s-ark-lab-huawei-technologies-paris-to-work-with-dr-igor-colin-and-dr-merwan-barlier",
          title: 'I joined Noah’s Ark Lab, Huawei Technologies Paris, to work with Dr. Igor...',
          description: "",
          section: "News",},{id: "news-our-paper-adaptive-sample-sharing-for-multi-agent-linear-bandits-was-accepted-at-icml-2025",
          title: 'Our paper Adaptive Sample Sharing for Multi Agent Linear Bandits was accepted at...',
          description: "",
          section: "News",},{id: "news-i-joined-télécom-sudparis-as-a-postdoctoral-researcher-with-prof-hélène-halconruy",
          title: 'I joined Télécom SudParis as a postdoctoral researcher with Prof. Hélène Halconruy.',
          description: "",
          section: "News",},{id: "news-i-presented-our-work-adaptive-sample-sharing-for-multi-agent-linear-bandits-as-a-poster-at-icml-2025-in-vancouver",
          title: 'I presented our work Adaptive Sample Sharing for Multi Agent Linear Bandits as...',
          description: "",
          section: "News",},{id: "news-our-work-high-dimensional-analysis-of-bootstrap-ensemble-classifiers-was-presented-as-a-poster-at-aistats-2026-in-tangier",
          title: 'Our work High-Dimensional Analysis of Bootstrap Ensemble Classifiers was presented as a poster...',
          description: "",
          section: "News",},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/hamzacherkaoui.bsky.social", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/243/6498", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%61%6D%7A%61.%63%68%65%72%6B%61%6F@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/hcherkaoui", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/hamza-cherkaoui-922018ab", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-3745-4140", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Hamza-Cherkaoui/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=sLFcrAUAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
