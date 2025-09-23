// src/pages/Especialidades.jsx
import {
  Box,
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";

import Cachupa from "../assets/cachupa.webp"
import Grelhada from "../assets/grelhada_mista.webp"

export default function Especialidades() {
  const pratos = [
    {
      nome: "Cachupa Rica",
      descricao:
        "Prato tradicional cabo-verdiano preparado com milho, feijão e carnes variadas.",
      preco: "15€",
      imagem: Cachupa,
    },
    {
      nome: "Frango na Brasa",
      descricao:
        "Frango marinado com temperos locais e grelhado lentamente na brasa.",
      preco: "12€",
      imagem: Grelhada,
    },
    {
      nome: "Lagosta Grelhada",
      descricao:
        "Lagosta fresca grelhada e servida com manteiga de alho.",
      preco: "25€",
      imagem: "https://source.unsplash.com/random/800x600?seafood",
    },
    {
      nome: "Pudim de Queijo",
      descricao:
        "Sobremesa caseira suave e cremosa, feita com queijo fresco.",
      preco: "6€",
      imagem: "https://source.unsplash.com/random/800x600?dessert",
    },
  ];

  return (
    <Box p={8} textAlign="center">
      <Heading textStyle="heading" mb={6}>
        As nossas Especialidades
      </Heading>
      <Text textStyle="body" mb={10} maxW="800px" mx="auto">
        Descubra os nossos pratos mais apreciados, preparados com paixão e
        ingredientes frescos, que celebram a verdadeira essência da
        gastronomia cabo-verdiana.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {pratos.map((item, index) => (
          <Card key={index} shadow="md" border="1px solid #e2e8f0">
            <Image
              src={item.imagem}
              alt={item.nome}
              objectFit="cover"
              h="200px"
              w="100%"
            />
            <CardBody>
              <Flex justify="space-between" align="flex-start">
                <Box textAlign="left">
                  <Heading size="sm" mb={1}>
                    {item.nome}
                  </Heading>
                  <Text fontSize="sm" color="gray.600">
                    {item.descricao}
                  </Text>
                </Box>
                <Text fontWeight="bold" color="teal.600" ml={4}>
                  {item.preco}
                </Text>
              </Flex>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}