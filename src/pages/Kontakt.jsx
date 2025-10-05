import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Kontakt() {
  return (
    <section className="kontakt">
      <motion.div
        className="kontakt-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* VENSTRE SIDE – INFO */}
        <div className="kontakt-info">
          <h2>Kontakt oss</h2>
          <p>
            Har du spørsmål eller ønsker du et tilbud?
            <br />
            Vi svarer vanligvis innen 24 timer.
          </p>

          <ul className="kontakt-list">
            <li>
              <Mail size={18} />{" "}
              <a href="mailto:magnus@northweave.no">magnus@northweave.no</a>
            </li>
            <li>
              <Mail size={18} />{" "}
              <a href="mailto:andreas@northweave.no">andreas@northweave.no</a>
            </li>
            <li>
              <MapPin size={18} /> <span>Haugesund, Norge</span>
            </li>
          </ul>
        </div>

        {/* HØYRE SIDE – SKJEMA */}
        <form
          className="kontakt-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Takk for meldingen! Vi kontakter deg snart.");
          }}
        >
          <label>
            Navn
            <input type="text" placeholder="Ditt navn" required />
          </label>

          <label>
            E-post
            <input type="email" placeholder="din@epost.no" required />
          </label>

          <label>
            Melding
            <textarea placeholder="Skriv meldingen din her..." required />
          </label>

          <button type="submit" className="btn">Send melding</button>
        </form>
      </motion.div>
    </section>
  );
}


