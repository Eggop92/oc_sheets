import { Box, Container } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react/flex'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'

function App() {


  return (
    <Container height="100vh" maxWidth="container.xl" paddingX="0" paddingY="0">
      <Flex height="100vh" gap="4" direction="column" justifyContent="space-between">
        <Box height="10" className="Header"><Header /></Box>
        <Box height="90vh" className="Body"><Body /></Box>
        {/* <Box height="10" className="Footer"><Footer /></Box> */}
      </Flex>
    </Container>
  )
}

export default App
