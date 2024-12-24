$(function () {
  // Store default English text
  const defaultText = {
    title: $("#title").text(),
    navItemNl: $("#navItemNl").text(),
    title2: $("#title2").text(),
    title3: $("#title3").text(),
    title4: $("#title4").text(),
    introText: $("#introText").html(),
    websiteDevelopment: $("#websiteDevelopment").text(),
    portfolioSubtext: $("#portfolioSubtext").text(),
    vanwaarde: $("#vanwaarde").text(),
    beinema: $("#beinema").text(),
    teamforge: $("#teamforge").text(),
    danniqueme: $("#danniqueme").text(),
    contactText: $("#contactText").text(),
    // Services
    websiteDesignTitle: $("#websiteDesignTitle").text(),
    websiteDesign: $("#websiteDesign").text(),
    EcommerceTitle: $("#EcommerceTitle").text(),
    Ecommerce: $("#Ecommerce").text(),
    SEOTitle: $("#SEOTitle").text(),
    SEO: $("#SEO").text(),
    maintenanceTitle: $("#maintenanceTitle").text(),
    maintenance: $("#maintenance").text(),
    contentTitle: $("#contentTitle").text(),
    contentwr: $("#contentwr").text(),
    redesignTitle: $("#redesignTitle").text(),
    redesign: $("#redesign").text(),
    quoteButton: $("#quoteButton").text(),
    ctaServices: $("#ctaServices").html(),
    // Form
    namePlaceholder: $("#name").attr("placeholder"),
    emailPlaceholder: $("#email").attr("placeholder"),
    messagePlaceholder: $("#message").attr("placeholder"),
    formBtn: $("#formBtn").text(),
    invalidName: $("#invalidName").text(),
    invalidEmail: $("#invalidEmail").text(),
    invalidMessage: $("#invalidMessage").text(),
    validSend: $("#validSend").text(),
    invalidSend: $("#invalidSend").text(),
    madeWith: $("#madeWith").text(),
    byMe: $("#byMe").text(),
  };

  // Translations object
  const translations = {
    nl: {
      title: "Hoi!",
      navItemNl: "Services",
      title2: "Mijn naam is Dannique.",
      title3: "Ik ben een web ontwikkelaar.",
      title4: "Ik ontwerp en maak websites",
      introText:
        "Ik ontwerp en bouw graag websites die kunnen meegroeien met jouw bedrijf.<br/> Mijn focus ligt op het helpen van kleine en middelgrote bedrijven door websites te creëren die hun visie en doelen weerspiegelen.<br/> Samen kunnen we jouw ideeën tot leven brengen en je online zichtbaarheid vergroten!",
      websiteDevelopment:
        "Visuele aantrekkelijkheid is slechts de helft van het verhaal. Achter elke website schuilt een ontwikkelingsproces. Ik vertaal ontwerpen naar volledig functionele websites die op alle apparaten presteren.",
      portfolioSubtext:
        "Hier zijn een paar projecten die ik voor klanten heb gemaakt.",
      vanwaarde: "Maatwerkwebsite voor een detacheringbureau.",
      beinema: "Maatwerkwebsite voor een hypotheek en financieel adviseur.",
      teamforge: "Maatwerkwebsite voor een outsourcingbedrijf.",
      danniqueme:
        "Maatwerk website voor een duik- en bootonderhoudsdiensten bedrijf.",
      contactText:
        "Interesse, vragen of wil je een offerte? Neem vrijblijvend contact op. Ik kijk ernaar uit om van je te horen en samen iets moois te creëren!",
      // Services
      websiteDesignTitle: "Website Ontwerp & Ontwikkeling",
      websiteDesign:
        "Het ontwerpen en ontwikkelen van responsieve, merkgerichte websites, met of zonder WordPress, op maat gemaakt met code zoals HTML, CSS, JavaScript, React of PHP, afgestemd op jouw behoeften.",
      EcommerceTitle: "E-commerce Oplossingen",
      Ecommerce:
        "Ik creëer gebruiksvriendelijke, veilige online winkels met WooCommerce of Shopify, ontworpen om jouw verkoop te stimuleren met een visueel aantrekkelijke en effectieve e-commerce site.",
      SEOTitle: "SEO Optimalisatie",
      SEO: "Verbeter de vindbaarheid van je website in zoekmachines door middel van on-page SEO, zoekwoordoptimalisatie en prestatieverbeteringen voor hogere rankings.",
      maintenanceTitle: "Website Onderhoud",
      maintenance:
        "Zorg voor regelmatige updates, verbeterde prestaties, versterkte beveiliging en de toepassing van SEO-methodes om de website geoptimaliseerd en veilig te houden.",
      contentTitle: "Content Schrijven voor Websites",
      contentwr:
        "Helder en boeiende content die aansluit bij jouw doelgroep en de SEO van je website verbetert, zodat jouw boodschap opvalt en meer mensen bereikt.",
      redesignTitle: "Website Vernieuwing & Revitalisatie",
      redesign:
        "Geef verouderde websites een frisse, verfijnde uitstraling en verbeterde functionaliteit, wat resulteert in een betere gebruikerservaring en een professionelere online uitstraling.",
      quoteButton: "Offerte Aanvragen",
      ctaServices:
        "Geïnteresseerd in een van deze diensten? <br/> Ik help graag om jouw websitevisie tot leven te brengen!",
      // Form
      namePlaceholder: "Je naam",
      emailPlaceholder: "Je email",
      messagePlaceholder: "Je bericht",
      formBtn: "Bericht Verzenden",
      invalidName: "Vul uw naam in",
      invalidEmail: "Vul een geldig e-mailadres in",
      invalidMessage: "Vul een bericht in in het tekstvak.",
      validSend: "Je bericht is verzonden! 🚀",
      invalidSend:
        "Oeps, je bericht is niet verzonden😓. Probeer het nog een keer.",
      madeWith: "Gemaakt met",
      byMe: "door Dannique",
    },
  };

  // Function to switch language
  function switchLanguage(lang) {
    const text =
      lang === "en" ? defaultText : translations[lang] || defaultText;

    // Update text content for specific elements
    $("#title").text(text.title);
    $("#navItemNl").text(text.navItemNl);
    $("#title2").text(text.title2);
    $("#title3").text(text.title3);
    $("#title4").text(text.title4);
    $("#introText").html(text.introText);
    $("#websiteDevelopment").text(text.websiteDevelopment);
    $("#portfolioSubtext").text(text.portfolioSubtext);
    $("#vanwaarde").text(text.vanwaarde);
    $("#beinema").text(text.beinema);
    $("#teamforge").text(text.teamforge);
    $("#danniqueme").text(text.danniqueme);
    $("#contactText").text(text.contactText);
    $("#websiteDesignTitle").text(text.websiteDesignTitle);
    $("#websiteDesign").text(text.websiteDesign);
    $("#EcommerceTitle").text(text.EcommerceTitle);
    $("#Ecommerce").text(text.Ecommerce);
    $("#SEOTitle").text(text.SEOTitle);
    $("#SEO").text(text.SEO);
    $("#maintenanceTitle").text(text.maintenanceTitle);
    $("#maintenance").text(text.maintenance);
    $("#contentTitle").text(text.contentTitle);
    $("#contentwr").text(text.contentwr);
    $("#redesignTitle").text(text.redesignTitle);
    $("#redesign").text(text.redesign);
    $("#quoteButton").text(text.quoteButton);
    $("#ctaServices").html(text.ctaServices);
    $("#name").attr("placeholder", text.namePlaceholder);
    $("#email").attr("placeholder", text.emailPlaceholder);
    $("#message").attr("placeholder", text.messagePlaceholder);
    $("#formBtn").text(text.formBtn);
    $("#invalidName").text(text.invalidName);
    $("#invalidEmail").text(text.invalidEmail);
    $("#invalidMessage").text(text.invalidMessage);
    $("#validSend").text(text.validSend);
    $("#invalidSend").text(text.invalidSend);
    $("#madeWith").text(text.madeWith);
    $("#byMe").text(text.byMe);
  }

  // Detect route and switch language
  const path = window.location.pathname;
  const lang = path === "/nl" ? "nl" : "en";
  switchLanguage(lang);

  // Event handlers for language selection
  $("#language-en").click(() => (window.location.href = "/"));
  $("#language-nl").click(() => (window.location.href = "/nl"));
});
