import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function formatPris(n) {
  try {
    return new Intl.NumberFormat("no-NO", {
      style: "currency",
      currency: "NOK",
      maximumFractionDigits: 0,
    }).format(n);
  } catch {
    return `${n} NOK`;
  }
}

const DATA = [
  { id: "p1", tittel: "Frontlepp – twill", kategori: "Karosseri", pris: 0, bilde: "/images/Prod-frontlip.jpg" },
  { id: "p2", tittel: "Sideskjørt – twill", kategori: "Karosseri", pris: 0, bilde: "/images/prod-sideskirt.jpg" },
  { id: "p3", tittel: "Interiørpanel – forged", kategori: "Interiør", pris: 0, bilde: "/images/prod-interior-forged.jpg" },
  { id: "p4", tittel: "Speildeksel – forged", kategori: "Karosseri", pris: 0, bilde: "/images/prod-mirror-forged.jpg" },
  { id: "p5", tittel: "Canard-sett – twill", kategori: "Motorsport", pris: 0, bilde: "/images/prod-canards.jpg" },
  { id: "p6", tittel: "Skreddersydd layup – custom", kategori: "Custom", pris: 0, bilde: "/images/Custom.jpg", custom: true },
  { id: "p7", tittel: "Panser – twill", kategori: "Karosseri", pris: 0, bilde: "/images/prod-hood.jpg" },
  { id: "p8", tittel: "Dør – twill", kategori: "Karosseri", pris: 0, bilde: "/images/prod-door.jpg" },
];

const KATEGORIER = ["Alle", "Karosseri", "Interiør", "Motorsport", "Custom"];

const SORT = [
  { key: "nyest", label: "Nyest" },
  { key: "pris_opp", label: "Pris lav → høy" },
  { key: "pris_ned", label: "Pris høy → lav" },
  { key: "navn", label: "Navn A–Å" },
];

export default function Produkter() {
  const [aktivKategori, setAktivKategori] = useState("Alle");
  const [sok, setSok] = useState("");
  const [sort, setSort] = useState("nyest");
  const [valg, setValg] = useState(null);

  const filtrert = useMemo(() => {
    let items = DATA.slice();

    if (aktivKategori !== "Alle") {
      items = items.filter((p) => p.kategori === aktivKategori);
    }
    if (sok.trim()) {
      const q = sok.trim().toLowerCase();
      items = items.filter((p) => p.tittel.toLowerCase().includes(q));
    }

    switch (sort) {
      case "pris_opp":
        items.sort((a, b) => (a.pris ?? 0) - (b.pris ?? 0));
        break;
      case "pris_ned":
        items.sort((a, b) => (b.pris ?? 0) - (a.pris ?? 0));
        break;
      case "navn":
        items.sort((a, b) => a.tittel.localeCompare(b.tittel, "no"));
        break;
      default:
        // nyest: behold original rekkefølge
        break;
    }
    return items;
  }, [aktivKategori, sok, sort]);

  return (
    <section className="section products">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Produkter
      </motion.h2>

      {/* Filtre / søk / sortering */}
      <div className="prod-filters">
        <div className="chip-row">
          {KATEGORIER.map((k) => (
            <button
              key={k}
              className={`chip ${aktivKategori === k ? "active" : ""}`}
              onClick={() => setAktivKategori(k)}
            >
              {k}
            </button>
          ))}
        </div>

        <div className="tools">
          <input
            className="search"
            placeholder="Søk produkter…"
            value={sok}
            onChange={(e) => setSok(e.target.value)}
          />
          <select
            className="select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            {SORT.map((s) => (
              <option key={s.key} value={s.key}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Rutenett */}
      <div className="product-grid">
        {filtrert.map((p, i) => (
          <motion.article
            key={p.id}
            className="product-card fancy-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: i * 0.06 }}
            whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,.3)" }}
            onClick={() => setValg(p)}
          >
            <div className="card-img">
              <img
                src={p.bilde}
                alt={p.tittel}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "/images/product-fallback.jpg";
                }}
              />
              <div className="glare" />
              {p.kategori && <span className="badge">{p.kategori}</span>}
            </div>

            <h3>{p.tittel}</h3>

            <div className="prod-meta">
              {p.custom ? (
                <span className="pris pris-custom">Skreddersøm</span>
              ) : (
                <span className="pris">{formatPris(p.pris)}</span>
              )}
              <button className="arrow-btn" aria-label={`Åpne ${p.tittel}`}>
                →
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {valg && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setValg(null)}
          >
            <motion.div
              className="modal"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-image">
                <img
                  src={valg.bilde}
                  alt={valg.tittel}
                  onError={(e) => {
                    e.currentTarget.src = "/images/product-fallback.jpg";
                  }}
                />
              </div>
              <div className="modal-body">
                <h3>{valg.tittel}</h3>
                <p className="modal-kategori">{valg.kategori}</p>
                <p className="modal-tekst">
                  Presisjonsprodusert karbon. Tilpasset for passform, vekt og uttrykk.
                  Ta kontakt for spesifikasjoner, finish og levering.
                </p>
                <div className="modal-actions">
                  {valg.custom ? (
                    <a className="btn" href="/kontakt">Få tilbud</a>
                  ) : (
                    <>
                      <span className="pris">{formatPris(valg.pris)}</span>
                      <a className="btn ghost" href="/kontakt">Forespør</a>
                    </>
                  )}
                </div>
              </div>

              <button className="modal-close" onClick={() => setValg(null)} aria-label="Lukk">
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


