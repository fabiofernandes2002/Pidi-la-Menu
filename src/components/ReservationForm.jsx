// src/components/ReservationForm.jsx
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

export default function ReservationForm() {
  return (
    <Box
      maxW="800px"
      mx="auto"
      p={6}
      bg="white"
      shadow="lg"
      borderRadius="xl"
      border="1px solid #e2e8f0"
    >
      <VStack spacing={4} align="stretch">
        {/* Primeira linha: Nome | Número */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <FormControl>
            <FormLabel>Nome</FormLabel>
            <Input
              placeholder="Seu nome"
              borderRadius="md"
              focusBorderColor="teal.500"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Número</FormLabel>
            <Input
              type="tel"
              placeholder="Número de telefone"
              borderRadius="md"
              focusBorderColor="teal.500"
            />
          </FormControl>
        </SimpleGrid>

        {/* Segunda linha: Data | Convidados */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <FormControl>
            <FormLabel>Data</FormLabel>
            <Input type="date" borderRadius="md" focusBorderColor="teal.500" />
          </FormControl>

          <FormControl>
            <FormLabel>Convidados</FormLabel>
            <Input
              type="number"
              placeholder="Quantos convidados"
              borderRadius="md"
              focusBorderColor="teal.500"
            />
          </FormControl>
        </SimpleGrid>

        {/* Pedidos especiais */}
        <FormControl>
          <FormLabel>Pedidos especiais</FormLabel>
          <Textarea
            placeholder="Ex.: alergias ou preferências"
            borderRadius="md"
            focusBorderColor="teal.500"
          />
        </FormControl>

        {/* Botão reservar */}
        <Button
          mt={2}
          bg="#383733"
          borderColor="#e76d30"
          color="white"
          border="2px"
          size="md"
          py="2.5"
          px="4"
          mx="auto"
          borderRadius="full"
          _hover={{ bg: "#e76d30", color: "white" }}
        >
          Reservar mesa
        </Button>
      </VStack>
    </Box>
  );
}
