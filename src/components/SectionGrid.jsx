import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function SectionGrid() {
  const navigate = useNavigate();

  const items = [
    {
      title: "Twill-vev",
      desc: "Klassisk 2×2 diagonalstruktur med elegant tekstur og høy styrke.",
      img: "/images/twill.jpg",
      path: "/produkter",
    },
    {
      title: "Forged Carbon",
      desc: "Unikt hakket mønster – hver del får sitt eget uttrykk og karakter.",
      img: "/images/forged.jpg",
      path: "/produkter",
    },
    {
      title: "Skreddersydde layups",
      desc: "Tilpasset orientering, finish og struktur etter behov.",
      img: "/images/Custom.jpg",
      path: "/produkter",
    },
  ];

  return (
    <section className="section" id="materialer">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Vi tilpasser til ditt behov
      </motion.h2>

      <div className="cards">
        {items.map((it, i) => (
          <motion.article
            key={it.title}
            className="card fancy-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
            whileHover={{
              rotateX: -4,
              rotateY: 4,
              y: -6,
              boxShadow: "0 16px 40px rgba(0,0,0,.3)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="card-img">
              <img src={it.img} alt={it.title} loading="lazy" />
              <div className="glare" />
            </div>

            <h3>{it.title}</h3>
            <p>{it.desc}</p>

            {/* Pileknapp */}
            <button
              className="arrow-btn"
              onClick={() => navigate(it.path)}
              aria-label={`Les mer om ${it.title}`}
            >
              →
            </button>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
