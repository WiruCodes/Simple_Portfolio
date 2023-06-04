import { Box, GridItem, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Contact({ delayOnLoad }) {
  return (
    <GridItem
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
      height="200px"
    >
      <Box padding={5}>
        <Text fontSize={[24, 24, 24, 33]} fontWeight="extrabold">
          Want to work together?
        </Text>
        <Text fontSize={[14, 14, 18, 18]}>
          If you're interested in doing a project with me or just want to talk,
          please reach out!
        </Text>
        <Text fontSize={18} pt={5}>
          Email: wilmertingofficial@gmail.com
        </Text>
      </Box>
    </GridItem>
  );
}

export default Contact;
