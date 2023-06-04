import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Grid,
  GridItem,
  Link,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdEmail, MdDriveFolderUpload } from "react-icons/md";

function Introduction({ delayOnLoad }) {
  const [alertOpen, setAlertOpen] = useState(false);

  function copyToClipboard() {
    let text = "wilmertingofficial@gmail.com";
    navigator.clipboard.writeText(text).then(
      function () {
        if (!alertOpen) {
          setAlertOpen(true);
          const showAlertTime = setTimeout(() => {
            setAlertOpen(false);
            clearTimeout(showAlertTime);
          }, 3000);
        }
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  }

  return (
    <GridItem
      id="home"
      zIndex="25"
      as={motion.GridItem}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { ease: "easeIn", duration: 0.8, delay: delayOnLoad },
      }}
      borderRadius={20}
      bgGradient="linear(to-r, #2980B9, #6DD5FA)"
      colSpan={6}
      w="100%"
      height="300px"
    >
      <Fade
        position="fixed"
        mb={5}
        display="flex"
        justifyContent="center"
        w="25%"
        bottom="0"
        in={alertOpen}
        direction="bottom"
      >
        <Box
          position="fixed"
          mb={5}
          display="flex"
          justifyContent="center"
          w="50%"
        >
          <Alert
            position="fixed"
            mb={5}
            display="flex"
            justifyContent="center"
            w="25%"
            bottom="0"
            status="success"
            variant="solid"
          >
            <AlertIcon />
            Email Address copied to clipboard.
          </Alert>
        </Box>
      </Fade>

      <Box p={7} w="100%" h="100%" pos="relative">
        <Text fontSize={[24, 24, 28, 28]}>
          Hello, I'm Will, a{" "}
          <Text display="inline" fontWeight="bold">
            Software Engineer
          </Text>{" "}
          who specializes in{" "}
          <Text display="inline" fontWeight="bold">
            Web Development
          </Text>
          .
        </Text>
        <Text fontSize={[14, 14, 14, 16]} pt={5}>
          I love to solve problems, make apps and improve my skills. I hope we
          can work together on something interesting!
        </Text>
        <Box id="intro-buttons" pos="absolute" bottom="0px" display="flex">
          <Tooltip
            label="Contact me thru G-Mail"
            placement="top-start"
            hasArrow
          >
            <Link
              mr="10px"
              mb={7}
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=wilmertingofficial@gmail.com"
              isExternal
            >
              <Button colorScheme="green">Contact me</Button>
            </Link>
          </Tooltip>
          <Tooltip label="Copy my email address" placement="top-start" hasArrow>
            <Button
              href="#"
              onClick={copyToClipboard}
              mr="10px"
              colorScheme="pink"
            >
              <MdEmail color="black" size={30} />
            </Button>
          </Tooltip>
          <Tooltip label="Download My Resume" placement="top-start" hasArrow>
            <a href="Wilmer_Ting_Web_Developer_Resume.pdf" download>
              <Button colorScheme="orange">
                <MdDriveFolderUpload color="black" size={30} />
              </Button>
            </a>
          </Tooltip>
        </Box>
      </Box>
    </GridItem>
  );
}

export default Introduction;
