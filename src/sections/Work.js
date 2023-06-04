import {
  Box,
  GridItem,
  Text,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  motion,
  isValidMotionProp,
  useAnimation,
  useCycle,
  AnimatePresence,
} from "framer-motion";

function Work({ toUseImage, jobName, jobInfo, zIndexVal, delayOnLoad }) {
  const [workVisible, setWorkVisible] = useState(true);
  // const [animate, cycle] = useCycle(
  //   { opacity: 1 },
  //   { opacity: 0 }
  // );
  const animation = useAnimation();

  return (
    <GridItem
      as={motion.GridItem}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { ease: "easeIn", duration: 0.8, delay: delayOnLoad },
      }}
      border="2px solid white"
      borderRadius={20}
      bgGradient="linear(to-r, #2980B9, #6DD5FA)"
      colSpan={[6, 6, 6, 2]}
      w="100%"
      aspectRatio="1/1"
      zIndex={zIndexVal}
      overflow="hidden"
      onClick={() => {
        setWorkVisible(!workVisible);
        let xHandler = "100%";
        let opacHandler = 1;
        !workVisible ? (xHandler = "100%") : (xHandler = "0%");
        !workVisible ? (opacHandler = 0) : (opacHandler = 1);
        animation.start({
          x: xHandler,
          opacity: opacHandler,
        });
      }}
    >
      <Box
        as={motion.div}
        initial={{ x: "0%", opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        whileHover={{ margin: "0px 0px 0px 25%" }}
        animate={animation}
        borderRadius={20}
        backgroundPosition="center"
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="100%"
        zIndex={1}
        aspectRatio="1/1"
        backgroundSize="cover"
        backgroundImage={`url(${toUseImage})`}
      >
        <Text
          userSelect="none"
          fontSize={[24, 24, 34, 34]}
          textShadow="-1px -1px 0 #000,  1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000"
          fontWeight="extrabold"
          textAlign="center"
          whiteSpace="pre-line"
        >
          {jobName}
        </Text>
      </Box>
      <Text
        ml={3}
        mr={3}
        fontSize={[20, 20, 20, 14]}
        fontWeight="semibold"
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        zIndex={-1}
        top="-50%"
        whiteSpace="break-spaces"
        h="0%"
        position="relative"
      >
        {jobInfo}
      </Text>
    </GridItem>
  );
}

export default Work;
