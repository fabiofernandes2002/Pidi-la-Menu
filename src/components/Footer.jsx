// src/components/Footer.jsx
import { Box, VStack, HStack, Text, Link, Heading, Stack, VisuallyHidden } from "@chakra-ui/react";
import { FaInstagram} from "react-icons/fa";

export default function Footer() {
  return (
    <Box bg="teal.500" color="white" py={12} px={8}>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 8, md: 16 }}
        justify="space-between"
        maxW="1200px"
        mx="auto"
      >
        {/* Coluna 1: Sobre */}
        <VStack align="flex-start" spacing={2}>
          <Heading textStyle="heading" size="md">Pidi La</Heading>
          <Text textStyle="body" fontSize="sm" maxW="250px" lineHeight="taller">
            Descubra a nossa cozinha autêntica de Cabo Verde, onde cada prato conta
            a história da nossa terra e reúne famílias e amigos num ambiente acolhedor.
          </Text>
        </VStack>

        {/* Coluna 2: Contactos */}
        <VStack align="flex-start" spacing={2}>
          <Heading textStyle="heading" size="md">Contactos</Heading>
          <Text textStyle="body" fontSize="sm">📞 215885872</Text>
          <Text textStyle="body" fontSize="sm">📧 info@pidila.com</Text>
          <Text textStyle="body" fontSize="sm">📍 Rua Elias Garcia 39, Algualva Cacém</Text>
        </VStack>

        {/* Coluna 3: Horário e redes sociais */}
        <VStack align="flex-start" spacing={2}>
          <Heading textStyle="heading" size="md">Horário</Heading>
          <Text textStyle="body" fontSize="sm">Terça a Domingo: 08:30h - 23:00h</Text>
          <Text textStyle="body" fontSize="sm">Segunda: Descanso</Text>

          {/* Redes sociais */}
          <HStack spacing={4} mt={4}>
            <Link href="https://instagram.com" isExternal display="flex" alignItems="center">
              <FaInstagram size="20" />
              <Text ml={2}>@Pidi_la</Text>
            </Link>
          </HStack>
        </VStack>
      </Stack>

      {/* Copyright */}
      <Text textStyle="body" textAlign="center" fontSize="sm" mt={8}>
        &copy; {new Date().getFullYear()} Pidi-la. Todos os direitos reservados.
      </Text>
    </Box>
  );
}