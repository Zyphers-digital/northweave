import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import Footer from "./Footer";
import "../App.css";

const pageVariants = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

const pageTransition = {
  duration: 0.55,
  ease: [0.45, 0, 0.55, 1],
};

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="layout">
      {/* Toppbar + meny */}
      <div className="nav">
        <div className="app-container">
          <div className="row">
           
            <a className="cta" href="/kontakt"></a>
          </div>
        </div>
      </div>

      <SidebarMenu />

      {/* Hovedinnhold m/sideovergang */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          className="app-container"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition}
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
