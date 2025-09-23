import {
  Box,
  Flex,
  Button,
  IconButton,
  useColorMode,
  useDisclosure,
  Stack,
  Link as ChakraLink,
  Image
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa"; // 👈 react-icons
import logo from "../assets/logo_pidiLa.png"

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg="#383733" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* LOGO */}
        {/* <Box textStyle="logo">
          Pidi la
        </Box> */}
        <Link to="/">
         <Image src={logo} alt="Logo" boxSize="60px" />
        </Link>

        {/* LINKS (desktop) */}
        <Flex
          alignItems="center"
          gap={6}
          display={{ base: "none", md: "flex" }}
        >
          <ChakraLink as={Link} to="/Menu" color="white">
            Menu
          </ChakraLink>
          <ChakraLink as={Link} to="/About" color="white">
            Sobre
          </ChakraLink>
          <ChakraLink as={Link} to="/Flavors" color="white">
            Sabores
          </ChakraLink>
          <ChakraLink as={Link} to="/Contact" color="white">
            Contacto
          </ChakraLink>
        </Flex>

        {/* BOTÕES */}
        <Flex alignItems="center" gap={2}>
          {/* Botão Mesa */}
          {/* <Button
            as={Link}
            to="/Reservations"
            colorScheme="yellow"
            size="sm"
          >
            Mesa
          </Button> */}
          <Button variant="mesa" as={Link} to="/Reservations">
           Reservar Mesa
          </Button>

          {/* Toggle light/dark */}
          <IconButton
            aria-label="Toggle theme"
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
          />

          {/* Menu Mobile */}
          <IconButton
            display={{ base: "inline-flex", md: "none" }}
            aria-label="Open menu"
            icon={isOpen ? <FaTimes /> : <FaBars />}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
      </Flex>

      {/* LINKS (mobile) */}
      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            <ChakraLink as={Link} to="/Menu" onClick={onClose}>
              Menu
            </ChakraLink>
            <ChakraLink as={Link} to="/About" onClick={onClose}>
              Sobre
            </ChakraLink>
            <ChakraLink as={Link} to="/Flavors" onClick={onClose}>
              Sabores
            </ChakraLink>
            <ChakraLink as={Link} to="/Contact" onClick={onClose}>
              Contacto
            </ChakraLink>
          </Stack>
        </Box>
      )}
    </Box>
  );
}
