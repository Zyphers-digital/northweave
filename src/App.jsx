// src/App.jsx
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout.jsx";
import SideBarMenu from "./components/SideBarMenu.jsx";

import Navbar from "./components/Navbar.jsx";
import TopLogo from "./components/TopLogo.jsx";

import Hero from "./components/Hero.jsx";
import SectionGrid from "./components/SectionGrid.jsx";

import Produkter from "./pages/Produkter.jsx";
import OmOss from "./pages/OmOss.jsx";
import HvaViGjor from "./pages/Hvavigjor.jsx"
import Kontakt from "./pages/Kontakt.jsx";

import TopCTA from "./components/TopCTA";

export default function App() {
  return (
    <>

    <>
  <TopLogo />
  <TopCTA />   {/* ⬅️ flyter øverst til høyre */}
  <Navbar />
  {/* resten */}
</>
      {/* Flytende logo + navbar ligger over alle sider */}
      <TopLogo />
      <Navbar />

      {/* Menyikon/panel globalt */}
      <SideBarMenu />

      {/* Sideruter */}
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <SectionGrid />
            </Layout>
          }
        />
        <Route
          path="/produkter"
          element={
            <Layout>
              <Produkter />
            </Layout>
          }
        />
        <Route
          path="/om-oss"
          element={
            <Layout>
              <OmOss />
            </Layout>
          }
        />
        <Route
          path="/hva-vi-gjor"
          element={
            <Layout>
              <HvaViGjor />
            </Layout>
          }
        />
        <Route
          path="/kontakt"
          element={
            <Layout>
              <Kontakt />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}


