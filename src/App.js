import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Service from "./pages/Service";
import { ThemeProvider } from "styled-components";
import {GlobalStyle} from "./GlobalStyles"

function App() {
  const theme={
    colors:{
      heading:"blue",
      bg:'blue',
      helper:'red',
      footer_bg:'navy',
      btn:'blue',
      a_link:'white',
    },
    media:{mobile:'786px',tab:'998px'}
  }
  return (
    <ThemeProvider theme={theme} >
      <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
