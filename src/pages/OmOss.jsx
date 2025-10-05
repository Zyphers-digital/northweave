import { motion } from "framer-motion";

export default function OmOss() {
  return (
    <motion.section
      className="section about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2>Om oss</h2>

      <p>
        NorthWeave ble startet av to brødre med en felles lidenskap for presisjon,
        kvalitet og design. Sammen har vi mer enn 25 års kombinert erfaring fra
        bilindustrien – både innen lakkering og teknisk erfaring.
        Denne bakgrunnen har gitt oss et unikt blikk for detaljer, og en forståelse
        for hvordan materialer oppfører seg i virkelige miljøer.
      </p>

      <p>
        Vi brenner for å forene nordisk design med avansert komposittteknologi.
        Målet vårt er å skape karbonprodukter som ikke bare ser eksklusive ut, men
        som også leverer maksimal ytelse og levetid. Hos NorthWeave handler alt om
        balansen mellom form, funksjon og følelse.
      </p>

      <p>
        Etter mange år i bilindustrien så vi et behov for ekte
        <strong> skreddersydde produkter</strong>. Derfor utvikler vi deler og løsninger
        som tilpasses individuelt – enten det gjelder biler, motorsport, eller
        designprosjekter. Hver komponent produseres med fokus på
        <em> håndverk, teknologi og ren estetikk</em>.
      </p>

      <div className="about-blocks">
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Vår visjon</h3>
          <p>
            Å gjøre avanserte karbonløsninger tilgjengelige for både entusiaster og
            profesjonelle – med kvalitet, bærekraft og design i sentrum.
          </p>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>Vår prosess</h3>
          <p>
            Vi kombinerer digitale designverktøy, håndlagde former og presis
            herdeteknologi. Hver del blir kontrollert for struktur og finish før
            den forlater verkstedet.
          </p>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3>Hvorfor velge oss</h3>
          <p>
            Som brødre med lang erfaring fra bilverden vet vi at kvalitet ikke kan
            forhandles bort. Vi ønsker å jobbe tett med kundene våre for å skape løsninger
            som er <em>personlige, funksjonelle og vakre</em>.
            Hos NorthWeave får du ikke en del fra hylla – du får et produkt laget
            for deg.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="quote"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <p>
          «Karbon handler ikke bare om vekt. Det handler om uttrykk, styrke og
          holdbar skjønnhet.»
        </p>
        <span>– Team NorthWeave</span>
      </motion.div>
    </motion.section>
  );
}
