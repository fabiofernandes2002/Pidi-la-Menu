import { Box, Heading, Text } from "@chakra-ui/react"

export default function Home() {
  return (
    <Box p={8}>
      <Heading textStyle="heading" mb={4}>
        Bem-vindo ao Pidi-la Menu
      </Heading>
      <Text textStyle="body" mb={2}>
        Esta é a página inicial. Aqui você pode explorar o nosso menu,
        fazer reservas e entrar em contato.
      </Text>
      <Text textStyle="body">
        Use a navbar para navegar entre as páginas: Menu, Sobre, Reservas e
        Contacto.
      </Text>
    </Box>
  )
}
