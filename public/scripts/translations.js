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
    //Services
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
    // Form
    namePlaceholder: $("#name").attr("placeholder"),
    emailPlaceholder: $("#email").attr("placeholder"),
    messagePlaceholder: $("#message").attr("placeholder"),
    formBtn: $("#formBtn").text(),

    madeWith: $("#madeWith").text(),
    byMe: $("#byMe").text(),

    // extrastxt: $("#extrastxt").text(),
    // pricingTitle: $("#pricingTitle").text(),
    // "1page": $("#1page").text(),
    // "8pages": $("#8pages").text(),
    // "10pages": $("#10pages").text(),
    // "1change": $("#1change").text(),
    // customUI: $("#customUI").text(),
    // socialButtons: $("#socialButtons").text(),
    // responsive: $("#responsive").text(),
    // hosting: $("#hosting").text(),
    // from: $("#from").text(),
    // illustrations: $("#illustrations").text(),
    // illustrationsStock: $("#illustrationsStock").text(),
    // integration: $("#integration").text(),
    // seo: $("#seo").text(),
    // registration: $("#registration").text(),
    // form: $("#form").text(),
    // support: $("#support").text(),
    // changes: $("#changes").text(),
    // blog: $("#blog").text(),
    // "10pages": $("#10pages").text(),
    // pages: $("#pages").text(),
    // costumUIUX: $("#costumUIUX").text(),
    // depthSeo: $("#depthSeo").text(),
    // blogList: $("#blogList").text(),
    // extraPages: $("#extraPages").text(),
    // newsletter: $("#newsletter").text(),
    // calendar: $("#calendar").text(),
    // languages: $("#languages").text(),
    // mode: $("#mode").text(),
    // extension: $("#extension").text(),
    // "3rdParty": $("#3rdParty").text(),
  };

  // Translations object
  const translations = {
    nl: {
      title: "Welkom",
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
      vanwaarde:
        "Maatwerkwebsite voor een detacheringbureau. Gemaakt met PHP, JavaScript, HTML en SCSS.",
      beinema:
        "Maatwerkwebsite voor een hypotheek en financieel adviseur. Gemaakt met PHP, Javascript, HTML en SCSS.",
      teamforge:
        "Maatwerkwebsite voor een outsourcingbedrijf. Gemaakt met PHP, JavaScript, HTML en CSS.",
      danniqueme:
        "Mijn portfolio website. Gemaakt met Javascript, HTML, SCSS, en React.",
      // pricingTitle: "Prijzen",
      // "1page": "1 landingspagina",
      // "8pages": "Tot 8 pagina’s",
      // "10pages": "Tot 10 pagina’s",
      // "1change": "1 wijziging",
      // customUI: "Op maat gemaakte UI-ontwerp",
      // socialButtons: "Social media buttons en icons",
      // responsive: "Responsief op desktop, tablet en mobiel",
      // hosting: "Hulp bij het instellen van hosting en <br> domeinnaam",
      // from: "Vanaf",
      // illustrations: "Illustraties",
      // illustrationsStock: "Illustraties en stock foto’s",
      // integration: "integratie",
      // seo: "Essentiële SEO",
      // registration: "Google registratie",
      // form: "Contactformulier",
      // support: "dagen ondersteuning",
      // changes: "wijzigingen",
      // blog: "en blog",
      // "10pages": "Tot 10 pagina’s",
      // pages: "15+ pagina’s",
      // costumUIUX: "Op maat gemaakte UI/UX ontwerp",
      // depthSeo: "Diepgaande SEO",
      // blogList:
      //   "Contact formulier en blog <br> + 1 extra van de onderstaande lijst*",
      // extrastxt:
      //   "Als je geïnteresseerd bent in extra’s toe te voegen, is dat natuurlijk mogelijk. Bijvoorbeeld, het toevoegen van extra pagina's. Als jouw gewenste functie niet wordt vermeld, sta ik er zeker voor open. Denk je aan een eCommerce-site met authenticatie en integratie van een betalingsgateway? Laten we erover praten!",
      // extraPages: "Extra pagina's",
      // newsletter: "Nieuwsbriefinschrijving",
      // calendar: "Evenementenkalender",
      // languages: "Ondersteuning van meerdere talen *",
      // mode: "Licht/donkere modus optie",
      // extension: "Extentie van ondersteuning",
      // "3rdParty": "Andere integratie van derden",
      contactText:
        "Interesse of vragen? Neem vrijblijvend contact op. Stuur me een e-mail en we kunnen ook bellen via platforms zoals Teams, Meet, WhatsApp, of elk ander platform dat voor jou handig is. Ik kijk ernaar uit om van je te horen en samen iets moois te creëren!",
      //Services
      websiteDesignTitle: "Maatwerk Website Ontwerp & Ontwikkeling",
      websiteDesign:
        "Het ontwerpen en ontwikkelen van responsieve, merkgerichte websites, met of zonder WordPress, op maat gemaakt met code zoals HTML, CSS, JavaScript, React of PHP, afgestemd op jouw behoeften.",
      EcommerceTitle: "E-commerce Oplossingen",
      Ecommerce:
        "Creëer gebruiksvriendelijke, veilige online winkels met WooCommerce of Shopify, ontworpen om jouw verkoop te stimuleren met een visueel aantrekkelijke en effectieve e-commerce site.",
      SEOTitle: "SEO Optimalisatie",
      SEO: "Verbeter de vindbaarheid van je website in zoekmachines door middel van on-page SEO, zoekwoordoptimalisatie en prestatieverbeteringen voor hogere rankings.",
      maintenanceTitle: "Website Onderhoud",
      maintenance:
        "Zorg voor regelmatige updates, verbeterde prestaties, versterkte beveiliging en de toepassing van SEO-methodes om de website geoptimaliseerd en veilig te houden.",
      contentTitle: "Content Schrijven voor Websites",
      contentwr:
        "Helder en boeiende content creëren die aansluit bij jouw doelgroep en de SEO van je website verbetert, zodat jouw boodschap opvalt en meer mensen bereikt.",
      redesignTitle: "Website Vernieuwing & Revitalisatie",
      redesign:
        "Geef verouderde websites een frisse, verfijnde uitstraling en verbeterde functionaliteit, wat resulteert in een betere gebruikerservaring en een professionelere online uitstraling.",
      //Form
      namePlaceholder: "Je Naam",
      emailPlaceholder: "Je Email",
      messagePlaceholder: "Je Bericht",
      formBtn: "Bericht Verzenden",

      madeWith: "Gemaakt met",
      byMe: "door Dannique",
    },
  };

  function switchLanguage(lang) {
    const text =
      lang === "en" ? defaultText : translations[lang] || defaultText;

    // Update text content for specific elements with predefined translations
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
    $("#pricingTitle").text(text.pricingTitle);
    $("#extrastxt").text(text.extrastxt);
    $("#contactText").text(text.contactText);
    //Services
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
    //Form
    $("#name").attr("placeholder", text.namePlaceholder);
    $("#email").attr("placeholder", text.emailPlaceholder);
    $("#message").attr("placeholder", text.messagePlaceholder);
    $("#formBtn").text(text.formBtn);

    $("#madeWith").text(text.madeWith);
    $("#byMe").text(text.byMe);

    // $("#1page").text(text["1page"]);
    // $("#8pages").text(text["8pages"]);
    // $("#10pages").text(text["10pages"]);
    // $("#1change").text(text["1change"]);
    // $("#customUI").text(text.customUI);
    // $("#socialButtons").text(text.socialButtons);
    // $("#responsive").text(text.responsive);
    // $("#hosting").html(text.hosting);
    // $("#from").text(text.from);
    // $("#illustrations").text(text.illustrations);
    // $("#illustrationsStock").text(text.illustrationsStock);
    // $("#integration").text(text.integration);
    // $("#seo").text(text.seo);
    // $("#registration").text(text.registration);
    // $("#form").text(text.form);
    // $("#support").text(text.support);
    // $("#changes").text(text.changes);
    // $("#blog").text(text.blog);
    // $("#10pages").text(text["10pages"]);
    // $("#pages").text(text.pages);
    // $("#costumUIUX").text(text.costumUIUX);
    // $("#depthSeo").text(text.depthSeo);
    // $("#blogList").html(text.blogList);
    // $("#extraPages").html(text.extraPages);
    // $("#newsletter").text(text.newsletter);
    // $("#calendar").text(text.calendar);
    // $("#languages").text(text.languages);
    // $("#mode").text(text.mode);
    // $("#extension").text(text.extension);
    // $("#3rdParty").text(text["3rdParty"]);

    // Disable the current language link
    $(".language-option").removeAttr("disabled");
    $("#language-" + lang).attr("disabled", "disabled");

    // const text =
    //   lang === "en" ? defaultText : translations[lang] || defaultText;

    // Update text content for each element
    // elementIds.forEach((id) => {
    //   const translatedText = text[id];
    //   $("#" + id).text(translatedText || defaultText[id]);
    // });

    // Disable the current language link
    $(".language-option").removeAttr("disabled");
    $("#language-" + lang).attr("disabled", "disabled");
  }

  // Event handlers for language selection
  $("#language-en").click(function () {
    switchLanguage("en");
  });

  $("#language-nl").click(function () {
    switchLanguage("nl");
  });

  // Set default language (English)
  switchLanguage("en");
});
