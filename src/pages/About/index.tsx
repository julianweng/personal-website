import { Container, Flex, Text, Link, Box, Heading, useColorMode } from '@chakra-ui/react'
import NavBar from '../../components/NavBar'
import { THEME_COLORS, getExtendedThemeColors } from '../../utils';
import ProjectCarousel from '../Projects/ProjectCarousel';
// import { ProjectPreview } from '../../components/Project/Preview';
import { SplashScreen } from './SplashScreen';

export const About = (_props: any) => {
  const { colorMode } = useColorMode()

  return (
    <Flex flexDir="column" bgColor={colorMode == 'dark' ? getExtendedThemeColors(true).greyLight3 : THEME_COLORS.lightAccent} minH="100vh">
      <NavBar currentPage='/' />
      <SplashScreen />
      <Flex bgColor={getExtendedThemeColors(colorMode === 'dark').greyLight1} className="block" mb={10}>
        <Container py={10} zIndex={1} fontSize="lg">
          <Heading>
            Hello! I'm Joy.
          </Heading>
          <Text>
            I'm a student at the University of
            Pennsylvania’s <Link variant="ghost" href="https://fisher.wharton.upenn.edu/" isExternal>Jerome Fisher Program in Management and Technology</Link> pursuing a B.S.E. in Computer Science and B.S. in Economics from Wharton.
          </Text>
          <Box p={2} />
          <Text>
            Currently, I am the Platform Lead and DevOps engineer
            at <Link variant="ghost" href="https://pennlabs.org/" isExternal>Penn Labs</Link> and Co-Director
            at <Link variant="ghost" href="https://pennapps.com/" isExternal>PennApps</Link>.
            In the past, I interned at Google (YouTube), was a <Link variant="ghost" href="https://summerofcode.withgoogle.com/">GSoC</Link> contributer for <Link variant="ghost" href="https://www.cncf.io/" isExternal>CNCF</Link> <Link href="https://in-toto.io/" variant="ghost" isExternal>in-toto</Link>, as well as interned at <Link variant="ghost" href="https://schoolhouse.world/">Schoolhouse.world</Link>. Outside of work, I love drawing, hiking, and hackathons!
          </Text>
          <Box p={2} />
          <Text>
            Check out my <Link href='https://github.com/joyliu-q' isExternal variant="ghost">Github</Link>,
            add me on <Link href='https://www.linkedin.com/in/qijia-joy-liu/' isExternal variant="ghost">LinkedIn</Link>, or
            follow me on <Link href='https://twitter.com/qjoyliu' isExternal variant="ghost">Twitter</Link> to learn more about me and my work.
          </Text>
        </Container>
      </Flex>
      <Flex mt={10} justifyContent={"center"} alignItems="center" mb={4}>
        <Flex px={4} borderRadius={4} flexDir="column" width="1000px" justifyContent={"center"} alignItems="center" >
          <Flex as="a" href="/projects" className="card btn btn__secondary" p={4} my={4} mb={6} width="100%" textAlign="center" justifyContent={"center"}>
            <Heading size="lg">
              Recent Projects
            </Heading>
          </Flex>
          <ProjectCarousel />
        </Flex>
      </Flex>
    </Flex>
  );
};
