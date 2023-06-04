import { Box, GridItem, Image, Text } from "@chakra-ui/react";
import { motion, useAnimation, animate } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";

function Project({ projectName, projectImage, projectLink, delayOnLoad }) {
  const animation = useAnimation();

  return (
    <GridItem
      as={motion.GridItem}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { ease: "easeIn", duration: 0.8, delay: delayOnLoad },
      }}
      overflow="hidden"
      position="relative"
      border="2px solid white"
      borderRadius={20}
      bgGradient="linear(to-r, #2980B9, #6DD5FA)"
      colSpan={3}
      w="100%"
      aspectRatio="1/1"
      display="flex"
      justifyContent="center"
      alignItems="center"
      onMouseEnter={() => animation.start({ scale: 1.2 })}
      onMouseLeave={() => animation.start({ scale: 1 })}
      onClick={() => window.open(projectLink)}
    >
      <Box
        zIndex={1}
        w="20px"
        h="20px"
        position="absolute"
        top="15px"
        right="15px"
        borderRadius="500px"
        backgroundColor="white"
      >
        <BsArrowUpRight style={{ padding: "3px" }} size="10x" color="black" />
      </Box>
      <Text
        zIndex={1}
        position="absolute"
        userSelect="none"
        fontSize={[24, 28, 44, 44]}
        textShadow="-1px -1px 0 #000,  1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000"
        fontWeight="extrabold"
        textAlign="center"
        whiteSpace="pre-line"
      >
        {projectName}
      </Text>
      <Image
        as={motion.img}
        loading="lazy"
        position="absolute"
        draggable="false"
        margin="auto"
        borderRadius={20}
        src={projectImage}
        animate={animation}
      ></Image>
    </GridItem>
  );
}

export default Project;
