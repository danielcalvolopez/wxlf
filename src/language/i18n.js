import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
  en: {
    translation: {
      home: "home",
      aboutUs: "about us",
      artists: "artists",
      getInTouch: "get in touch",
      explore: "explore",
      signature: "Designed & built by",
      minimalistStudio: "Minimalist tattoo studio based in",
      spain:
        "(Spain). Our goal is to transform your tattoo idea into reality using the most advanced techniques. We guarantee the best quality, so you can rest assure that your tattoo will look spectacular.",
      sophie:
        "Sophie is a fine line expert, her art is well detailed, sharp, and bold.",
      fred: "Realism is one of the toughest tattoo styles, but for Fred, it’s just another day in the office.",
      carlos:
        "Carlos is the talented creator of wxlf and a classy, aesthetic tattoo master.",
      pol: "Raised in Barcelona, Pol spend half of every year in Japan, his style is unique and in-demand.",
      youAre: "you are in",
      good: "good",
      hands: "hands",
      slogan:
        "We are specialists in meeting client expectations. Let us know your idea, and we will translate that into a piece of art on your skin.",
      name: "name",
      message: "message",
      requiredName: "Name is required.",
      requiredEmail: "Email is required.",
      requiredMessage: "Message is required.",
      submit: "submit",
      where: "where",
      meetFine: "meet fine",
      art: "art",
      heroText:
        "Discover the range of our residents, from minimalism to realism, passing through fine line, japanese and aesthetic.",
      success: "Your message was succesfully sent!",
      close: "close",
    },
  },
  es: {
    translation: {
      home: "inicio",
      aboutUs: "sobre nosotros",
      artists: "artistas",
      getInTouch: "contacto",
      explore: "explora",
      signature: "Diseñado y desarrollado por",
      minimalistStudio: "Estudio de tattoos minimalista en",
      spain:
        "(España). Nuestro objetivo es transformar tu idea o proyecto en realidad utilizando las técnicas más avanzadas. Garantizamos la mejor calidad, para que puedas estar seguro de que tu tatuaje quedará espectacular.",
      sophie:
        "Sophie es una experta en líneas finas, su trabajo es bien detallado, preciso y audaz.",
      fred: "El realismo es uno de los estilos de tatuaje más difíciles, pero para Fred, es solo un día más en la oficina.",
      carlos:
        "Carlos es el talentoso fundador de wxlf y un maestro del tatuaje estético y con clase.",
      pol: "Criado en Barcelona, ​​Pol pasa la mitad de cada año en Japón, su estilo es único y muy solicitado.",
      youAre: "estas en",
      good: "buenas",
      hands: "manos",
      slogan:
        "Somos especialistas en satisfacer las expectativas del cliente. Cuéntanos tu idea y la traduciremos en una obra de arte en tu piel.",
      name: "nombre",
      requiredName: "Nombre es requerido.",
      requiredEmail: "Email es requerido.",
      requiredMessage: "Mensaje es requerido.",
      message: "mensaje",
      submit: "enviar",
      where: "Donde los",
      meetFine: "se unen con las",
      art: "artes",
      heroText:
        "Descubre la gama de nuestros residentes, desde el minimalismo al realismo, pasando por el trazo fino, japonés y estético.",
      success: "Tu mensaje se envió correctamente!",
      close: "cerrar",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
