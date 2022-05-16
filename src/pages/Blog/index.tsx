import { Heading, Flex, Container, Text, Link, Box } from '@chakra-ui/react'
import { NavBar } from '../../components/NavBar'
import { BLOGS } from './entries';

export * from './Page';
export * from './entries';

export const Blog = (_props: any) => {
  return (
    <Flex flexDir="column" bgColor="#333333" minH="100vh">
      <NavBar currentPage='/blog'/>
      <Container maxW="container.lg" bgColor="#FFFFFF" p={4} minH="calc(100vh - 60px)">
        <Heading as="h1" fontSize="6xl">My Blog</Heading>
        <Text>Cool things I want to talk about</Text>
        <Box p={4}/>
        {Object.entries(BLOGS).map(([key, value]) => {
          return (
            <Flex key={key} justifyContent="space-between" my={2} fontSize="20px">
              <Flex flexDir="column">
                <Link href={value.isExternal ? value.path : `/blog/${key}`}>
                  <Text fontWeight="bold"><Text as="span" fontWeight="light">{value.isExternal ? "(External) " : ""}</Text>{value.title}</Text>
                </Link>
                <Text fontSize="sm">{value.subtitle}</Text>
              </Flex>
              <Flex display={["none", "flex"]}>
                <Text minW="100px">{value.date}</Text>
              </Flex>
            </Flex>
        )})}
      </Container>
    </Flex>
  );
}