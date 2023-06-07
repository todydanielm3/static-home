import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
//import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a developer engineer based in Brazil!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Daniel Moraes
          </Heading>
          <p>
            ❐ Computer Engineering University of Brasilia UnB <br/> 
■ BiTGroup CNPq - Recfacs Systems <br/> 
            ♮  ₫rummer<br/>
∯ Time is still the infinite jest 
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/daniel.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
<Paragraph style={{ textAlign: 'center', margin: 0 }}>
  Results-driven Computer Engineer with a strong background in network security and infrastructure. Currently pursuing a degree in Computer Engineering, specializing in Computer Vision and Cloud Computing. Experienced in data processing, cloud development, web/mobile development, and network automation. Skilled in Python, JavaScript/Node.js, C, Assembly, AWS Serverless, and more. Committed to delivering innovative solutions and continuously expanding knowledge in cutting-edge technologies. Digital content creator{' '}
  <Link as={NextLink} href="https://www.instagram.com/daniel_8moraes/" passHref target="_blank">
    daniel_8moraes
  </Link>
  . Sharing a bit of my life, with lots of music, programming, and cycling! （＾ν＾）
</Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://github.com/todydanielm3?tab=repositories"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <BioSection>
          <BioYear>2018 - 2023</BioYear>
          Bachelor of Computer Engineering at University of Brasilia (UnB),Brasília,Brazil
        </BioSection>

        <BioSection>
          <BioYear>2022 - 2023</BioYear>
          Member of Facial Recognition Research BiTGroup at UnB/CIC, working on supervised machine learning for forensic and criminalistic applications.
        </BioSection>

        <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <BioSection>
          <BioYear>2023 - Present</BioYear>
          Engineer in Data Management, Strategic Information Management Office<br/>
          Institute of Strategic Health Management of the Federal District (IGESDF)<br/>
          • Develop interactive dashboards for real-time data visualization and analysis using Python and Ngrok for
          network deployment.<br/>
          • Structure and optimize healthcare data for informed strategic decision-making.<br/>
          • Collaborate with cross-functional teams to ensure effective data management and support information-driven
          decision-making.
        </BioSection>

        <BioSection>
          <BioYear>2021 - 2022</BioYear>
          Network Security and Infrastructure Intern<br/>
          • Documented and configured the organization&apos;s network infrastructure, including servers, racks, and switches.<br/> 
          • Migrated legacy network infrastructure to Fortinet, gaining expertise in network configuration and integration.<br/>
          • Assisted in the migration of application resources to the cloud using Docker and Kubernetes.
        </BioSection>

          </Section>



      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music , Nature {' '}
          <Link href="https://www.instagram.com/p/CsPRIxytSm-/" target="_blank">
            and Programming
          </Link>
          , Playing Drums,{' '}
          <Link href="https://www.instagram.com/p/Csj1MFSvWUx/" target="_blank">
            Photography
          </Link>
          , Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/todydanielm3" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @danielm3
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/DanielMoraes_S" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @DanielMoraes_S
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/daniel_8moraes/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @daniel_8moraes
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={8}>
          <GridItem
            href="https://www.youtube.com/channel/UCExhpA1PWt7uhTigbt8zYOQ"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel 
          </GridItem>
        </SimpleGrid>

        <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <p>
Embark on an exciting coding adventure with me. Stay updated every week with behind-the-scenes insights into my projects and videos.
        </p>

      
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="mailto:daniel8moraess@gmail.com"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Contact me - Email
          </Button>
        </Box> 
    


      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
