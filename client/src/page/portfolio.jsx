import React, { useState } from 'react'
import {
  Button,
  Card,
  CardBody,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Text,
  Flex,
  VStack,
  HStack,
  Box,
  Link,
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { FaGithub, FaLinkedin, FaEnvelope, FaMobile, FaFileAlt } from "react-icons/fa"
import 'react-toastify/dist/ReactToastify.css';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState(0)

  const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js", "Express", "Spring", "Java",
    "Spring Boot", "Vite", "Python", "Django", "Flutter", "Dart"
  ]

  const projects = [
    {
      name: "Eventhive",
      description: "An event management platform for organizing and attending local events.",
      technologies: ["React", "Node.js", "Express", "MongoDB"]
    },
    {
      name: "AgroAdviser",
      description: "An AI-powered application providing personalized advice for farmers.",
      technologies: ["Python", "Django", "TensorFlow", "React Native"]
    }
  ]

  return (
    <Box minHeight="100vh" bg="gray.900" color="gray.100" py={12} px={4}>
      <VStack spacing={12} maxWidth="4xl" margin="auto">
        <Box as="header" textAlign="center">
          <Heading as="h1" size="2xl" mb={2}>DEV</Heading>
          <Text fontSize="xl" color="gray.400">Full Stack Web Developer</Text>
          <HStack spacing={4} mt={4} justify="center">
            <Button variant="outline" size="sm"><FaGithub /></Button>
            <Button variant="outline" size="sm"><FaLinkedin /></Button>
            <Button variant="outline" size="sm"><FaEnvelope /></Button>
          </HStack>
        </Box>

        <Box as="main" width="100%">
          <Tabs index={activeTab} onChange={(index) => setActiveTab(index)} variant="enclosed">
            <TabList>
              <Tab>About</Tab>
              <Tab>Skills</Tab>
              <Tab>Projects</Tab>
              <Tab>Contact</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Card>
                  <CardBody>
                    <Heading as="h2" size="lg" mb={4}>About Me</Heading>
                    <Text color="gray.400">
                      I'm a passionate Full Stack Web Developer with expertise in a wide range of technologies.
                      I love creating efficient, scalable, and user-friendly web applications.
                      With a strong foundation in both front-end and back-end development,
                      I'm always eager to take on new challenges and learn cutting-edge technologies.
                    </Text>
                  </CardBody>
                </Card>
              </TabPanel>
              <TabPanel>
                <Card>
                  <CardBody>
                    <Heading as="h2" size="lg" mb={4}>Skills</Heading>
                    <Flex flexWrap="wrap" gap={2}>
                      {skills.map((skill, index) => (
                        <Box key={index} px={3} py={1} bg="gray.800" borderRadius="full" fontSize="sm">
                          {skill}
                        </Box>
                      ))}
                    </Flex>
                  </CardBody>
                </Card>
              </TabPanel>
              <TabPanel>
                <VStack spacing={4}>
                  {projects.map((project, index) => (
                    <Card key={index} width="100%">
                      <CardBody>
                        <Heading as="h2" size="lg" mb={2}>{project.name}</Heading>
                        <Text color="gray.400" mb={4}>{project.description}</Text>
                        <Flex flexWrap="wrap" gap={2} mb={4}>
                          {project.technologies.map((tech, techIndex) => (
                            <Box key={techIndex} px={3} py={1} bg="gray.800" borderRadius="full" fontSize="sm">
                              {tech}
                            </Box>
                          ))}
                        </Flex>
                        <Button variant="outline" rightIcon={<ChevronRightIcon />}>
                          View Project
                        </Button>
                      </CardBody>
                    </Card>
                  ))}
                </VStack>
              </TabPanel>
              <TabPanel>
                <Card>
                  <CardBody>
                    <Heading as="h2" size="lg" mb={4}>Contact Me</Heading>
                    <VStack align="start" spacing={2}>
                      <HStack>
                        <FaEnvelope />
                        <Text>dev@example.com</Text>
                      </HStack>
                      <HStack>
                        <FaMobile />
                        <Text>+1 (555) 123-4567</Text>
                      </HStack>
                      <HStack>
                        <FaFileAlt />
                        <Link color="blue.400" href="#" _hover={{ color: "blue.300" }}>
                          Download Resume
                        </Link>
                      </HStack>
                    </VStack>
                  </CardBody>
                </Card>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        <Box as="footer" textAlign="center" color="gray.400">
          <Text>&copy; {new Date().getFullYear()} DEV. All rights reserved.</Text>
        </Box>
      </VStack>
    </Box>
  )
}
