import { Box, useColorModeValue } from "@chakra-ui/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import NavBar from "./components/NavBar"

// Páginas
import Home from "./pages/Home"
import About from "./pages/About"
import Menu from "./pages/Menu"
import Reservations from "./pages/Reservations"
import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
      <Box
        minH="100vh"
        w="full"
        overflowX="hidden"
        bg={useColorModeValue("gray.100", "gray.900")}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
    </Router>
  )
}

export default App