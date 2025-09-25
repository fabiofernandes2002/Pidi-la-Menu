// src/pages/Home.jsx
import {
  Box,
  Heading,
  Text,
  Highlight,
  Button,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import Starters from "../components/categories/Starters"; // Entradas
import ReservationForm from "../components/ReservationForm";

export default function Home() {
  const [categoria, setCategoria] = useState("entradas");

  const categorias = [
    { id: "entradas", label: "Entradas" },
    { id: "carne", label: "Pratos de Carne" },
    { id: "peixe", label: "Pratos de Peixe" },
    { id: "pequeno", label: "Pequeno Almoço" },
    { id: "sobremesas", label: "Sobremesas" },
    { id: "vinhos", label: "Vinhos" },
    { id: "sumos", label: "Sumos" },
  ];

  return (
    <Box display="flex" flexDirection="column" flex="1">
      {/* Hero */}
      <Box p={8} textAlign="center">
        <Heading textStyle="heading" mb={4}>
          Pidi-la Menu
        </Heading>

        <Text textStyle="body" mb={4} maxW="1000px" color="#383733" mx="auto">
          Descubra a nossa viagem culinária através de sabores autênticos
          e ingredientes de alta qualidade
        </Text>

        <Text textStyle="body" fontWeight="600" color="#383733" mt={4}>
          <Highlight
            query="cabo-verdiana"
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              bg: "#e76d30",
              color: "white",
            }}
          >
            Mesa cabo-verdiana: sabores que juntam famílias
          </Highlight>
        </Text>

        {/* Botões de categorias */}
        <HStack spacing={4} justify="center" mt={10} wrap="wrap">
          {categorias.map((cat) => (
            <Button
              key={cat.id}
              variant="category"
              onClick={() => setCategoria(cat.id)}
              bg={categoria === cat.id ? "#e76d30" : "transparent"}
              color={categoria === cat.id ? "white" : "teal.900"}
              _hover={{
                bg: "#e76d30",
                color: "white",
              }}
            >
              {cat.label}
            </Button>
          ))}
        </HStack>
        <Divider orientation="horizontal" mt={10} borderColor="#e76d30" />

        {/* Renderização condicional da categoria */}
        <Box mt={10}>
          {categoria === "entradas" && <Starters />}
        </Box>
      </Box>

      {/* Formulário de reservas */}
      <Box
        as="section"
        bg="#ffedce"
        w="100%"
        flex="1" // ocupa todo o espaço restante
        display="flex"
        alignItems="center" // centraliza verticalmente se necessário
        justifyContent="center" // centraliza horizontalmente
      >
        <Box maxW="1000px" mx="auto" py={10} px={{ base: 4, md: 16 }} textAlign="center">
          <Heading textStyle="heading" mb={4}>
            Reserve a sua mesa
          </Heading>
          <Text textStyle="body" mb={6}>
            Reserve a sua experiência gastronómica no Pidi-la e desfrute da nossa
            cozinha autêntica num ambiente acolhedor e hospedeiro.
          </Text>
          <ReservationForm />
        </Box>
      </Box>
    </Box>
  );
}
