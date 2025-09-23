// src/App.jsx
import { Box, useColorModeValue } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Páginas
import Home from "./pages/Home";
import About from "./pages/About";
import Flavors from "./pages/Flavors";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Box
        minH="100vh"
        w="full"
        overflowX="hidden"
        bg={useColorModeValue("gray.100", "gray.900")}
        display="flex"
        flexDirection="column"
      >
        {/* Navbar */}
        <NavBar />

        {/* Conteúdo principal */}
        <Box flex="1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Menu" element={<Home />} />
            <Route path="/Flavors" element={<Flavors />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
    </Router>
  );
}

export default App;