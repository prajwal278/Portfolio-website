import React from "react";
import "./App.css";
import Header from './components/header/Header';
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Content from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollUp/Scrollup";
import Work from "./components/work/Work";
import { inject } from "@vercel/analytics/*";

inject();
const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Content />
      </main>
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App