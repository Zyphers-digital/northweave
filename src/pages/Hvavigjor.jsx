import { motion } from "framer-motion";
import { PenTool, Layers, SprayCan, Wrench } from "lucide-react";

export default function HvaViGjor() {
  return (
    <motion.section
      className="section whatwedo"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2>Hva vi gjør</h2>

      <p>
        NorthWeave leverer helhetlige løsninger innen karbonfiber og kompositt.
        Vi tar hånd om hele prosessen – fra idé og design, til ferdig støpt og
        overflatebehandlet produkt. Målet vårt er å levere deler som ikke bare
        yter maksimalt, men som også løfter uttrykket og følelsen.
      </p>

      <p>
        Vi kombinerer moderne teknikker med klassisk håndverk for å skape deler
        som tåler tid, bruk og nordiske forhold. Enten det gjelder
        <strong> bilkomponenter, motorsport, interiør</strong> eller
        <strong> spesialprosjekter</strong> – vi leverer produkter bygget for å vare.
      </p>

      <div className="work-grid">
        <motion.div
          className="work-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <PenTool className="work-icon" />
          <h3>1. Design & utvikling</h3>
          <p>
            Vi starter med å forstå kundens idé, bruksområde og krav. Deretter
            modellerer vi produktet digitalt for å sikre riktig passform,
            struktur og utseende før produksjon.
          </p>
        </motion.div>

        <motion.div
          className="work-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Layers className="work-icon" />
          <h3>2. Produksjon i karbon</h3>
          <p>
            Hver del blir håndlagt, herdet og etterbehandlet i vårt verksted.
            Vi tilbyr både <strong>forged carbon</strong> og klassisk
            <strong> twill-vev</strong> – avhengig av ønsket styrke, vekt og
            uttrykk.
          </p>
        </motion.div>

        <motion.div
          className="work-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <SprayCan className="work-icon" />
          <h3>3. Overflate og finish</h3>
          <p>
            Som tidligere lakkerere har vi høy standard for detaljer. Vi
            leverer både matt, satin og høyglans finish – alt med perfekt
            klarhet og UV-beskyttelse.
          </p>
        </motion.div>

        <motion.div
          className="work-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Wrench className="work-icon" />
          <h3>4. Skreddersøm & montering</h3>
          <p>
            Ingen prosjekter er like. Vi tilbyr spesialtilpasning, unike layups
            og montering av ferdige deler – enten for motorsport, bilprosjekt
            eller industrielt bruk.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="cta-banner"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <h3>Klar for ditt neste prosjekt?</h3>
        <p>Ta kontakt for et uforpliktende forslag – vi hjelper deg fra idé til ferdig produkt.</p>
        <a href="/kontakt" className="btn">Kontakt oss</a>
      </motion.div>
    </motion.section>
  );
}


