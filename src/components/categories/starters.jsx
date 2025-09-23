// src/components/categories/Starters.jsx
import {
  SimpleGrid,
  Card,
  CardBody,
  Heading,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";

export default function Starters() {
  const entradas = [
    {
      nome: "Pastéis de Milho",
      descricao: "Massa crocante recheada com atum temperado",
      preco: "1.00€",
    },
    {
      nome: "Pastéis de Trigo",
      descricao: "Pastéis fritos recheados com carne ou peixe",
      preco: "1.00€",
    },
    {
      nome: "Pão",
      descricao: "Pão caseiro servido com manteiga ou azeite",
      preco: "1.00€",
    },
    {
      nome: "Linguiça Grelhada",
      descricao: "Linguiça artesanal grelhada no carvão",
      preco: "5.50€",
    },
    {
        nome: "Manteiga de Cabo Verde",
        descricao: "Manteiga caseira com um toque de sal",
        preco: "4.00€"
    },
    {
        nome: "Gambas ao Albilio",
        descricao: "Gambas salteadas com alho, azeite e coentros",
        preco: "8.00€"
    }
  ];

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={8}>
      {entradas.map((item, index) => (
        // Feito com linhas entre os cards
        // <Card key={index} shadow="none" border="0" borderRadius="0" bg="transparent">
        <Card key={index} shadow="md" border="1px solid #e2e8f0">
          <CardBody>
            <Flex justify="space-between" align="flex-start">
              {/* Nome + descrição */}
              <Box textAlign="left">
                <Heading size="sm" mb={1}>
                  {item.nome}
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  {item.descricao}
                </Text>
              </Box>

              {/* Preço */}
              <Text fontWeight="bold" color="teal.600" ml={4}>
                {item.preco}
              </Text>
            </Flex>
          </CardBody>
          {/* Linha só em baixo das cards */}
          {/* <Divider borderColor="#e66c30" /> */}
        </Card>
      ))}
    </SimpleGrid>
  );
}