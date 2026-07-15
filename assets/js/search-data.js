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
  },{id: "nav-portfolio",
          title: "portfolio",
          description: "A selection of my work at BBC Verify — visual investigations and short-form video that combine satellite imagery, geospatial data and open-source techniques",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-i-joined-bbc-verify-as-a-senior-data-scientist-and-satellite-imagery-specialist",
          title: 'I joined BBC Verify as a Senior Data Scientist and Satellite Imagery Specialist....',
          description: "",
          section: "News",},{id: "projects-black-rain-over-tehran",
          title: 'Black rain over Tehran',
          description: "How air strikes on Tehran&#39;s oil facilities caused black rain and what scientists called unprecedented pollution.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/black-rain/";
            },},{id: "projects-cuba-39-s-fuel-crisis-in-video",
          title: 'Cuba&amp;#39;s fuel crisis, in video',
          description: "A BBC News short-form video on how US sanctions and an effective oil blockade have deepened Cuba&#39;s shortages of fuel, medicine and food.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cuba-fuel-crisis-reel/";
            },},{id: "projects-mapping-building-demolitions-in-gaza",
          title: 'Mapping building demolitions in Gaza',
          description: "More than 1,500 buildings levelled in Israeli-controlled areas since the ceasefire, mapped from satellite imagery.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gaza-buildings/";
            },},{id: "projects-gaza-destruction-in-video",
          title: 'Gaza destruction, in video',
          description: "The satellite investigation into Gaza&#39;s levelled neighbourhoods, adapted as a short-form video for BBC News.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gaza-reel/";
            },},{id: "projects-ships-return-to-the-strait-of-hormuz-after-us-iran-deal",
          title: 'Ships return to the Strait of Hormuz after US-Iran deal',
          description: "Maritime traffic rebounds following a US-Iran deal — 42 ships passed through on a single Saturday.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hormuz-reopen/";
            },},{id: "projects-why-ships-aren-39-t-sailing-through-the-strait-of-hormuz",
          title: 'Why ships aren&amp;#39;t sailing through the Strait of Hormuz',
          description: "Three obstacles keeping maritime traffic below pre-conflict levels — security, mines and tolls.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hormuz-shipping/";
            },},{id: "projects-iranian-navy-and-nuclear-sites-hit",
          title: 'Iranian navy and nuclear sites hit',
          description: "Satellite images reviewed by BBC Verify show US-Israeli strikes destroyed at least 11 Iranian naval vessels.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/iran-navy-nuclear/";
            },},{id: "projects-iran-nuclear-and-military-damage-revealed-in-restricted-satellite-images",
          title: 'Iran nuclear and military damage revealed in restricted satellite images',
          description: "Restricted satellite imagery reveals damage to ballistic missile infrastructure, nuclear sites and naval bases.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/iran-nuclear-satellite/";
            },},{id: "projects-iran-school-and-military-base-struck",
          title: 'Iran school and military base struck',
          description: "Satellite imagery reveals a school and a nearby military base were struck multiple times.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/iran-strike/";
            },},{id: "projects-israeli-demolitions-in-southern-lebanon",
          title: 'Israeli demolitions in southern Lebanon',
          description: "BBC Verify analysis found more than 1,400 buildings destroyed since 2 March, mapped from satellite imagery.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lebanon-demolitions/";
            },},{id: "projects-nursery-safety-new-safe-sleep-checks-and-inspections",
          title: 'Nursery safety — new safe-sleep checks and inspections',
          description: "Data analysis for a BBC investigation into nursery safety.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nursery-safety/";
            },},{id: "projects-rebuilding-gaza-after-two-years-of-war",
          title: 'Rebuilding Gaza after two years of war',
          description: "Assessing the scale of the damage from satellite imagery — a reconstruction estimated at $70bn and decades of work.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rubble-gaza/";
            },},{id: "projects-fires-at-russian-oil-facilities",
          title: 'Fires at Russian oil facilities',
          description: "Satellite images reveal damage to three key Russian oil export facilities near the Baltic Sea after Ukrainian strikes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/russian-oil-fires/";
            },},{id: "projects-sanctioned-russian-tankers-in-the-channel",
          title: 'Sanctioned Russian tankers in the Channel',
          description: "A BBC Verify analysis found 42 sanctioned tankers passed through the English Channel in under two weeks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/russian-tankers/";
            },},{id: "projects-the-el-fasher-massacre-in-sudan",
          title: 'The el-Fasher massacre in Sudan',
          description: "Reconstructing how the RSF carried out a massacre that humanitarian officials believe left around 2,000 people dead.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sudan-elfasher/";
            },},{id: "projects-the-us-military-build-up-near-venezuela",
          title: 'The US military build-up near Venezuela',
          description: "Mapping where US planes and ships are stationed during the escalating air and naval campaign (updated Dec 2025).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/venezuela-warships/";
            },},{id: "projects-tracking-us-warships-from-open-sources",
          title: 'Tracking US warships from open sources',
          description: "A BBC Verify explainer on how the USS Abraham Lincoln can be located even when it isn&#39;t transmitting its position.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/warships-reel/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/barbarametzler", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/a-barbara-metzler-00001", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=XLtnLLoAAAAJ", "_blank");
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
