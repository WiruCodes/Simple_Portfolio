import {
  Fade,
  GridItem,
  Text,
  keyframes,
  chakra,
  shouldForwardProp,
  Grid,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  motion,
  animate,
  isValidMotionProp,
  useAnimation,
} from "framer-motion";

function Skill({ skillName, allSkill, delayOnLoad }) {
  const [showSkillName, setShowSkillName] = useState(true);
  const [showAllSkill, setShowAllSkill] = useState(false);
  const [scaleVal, setScaleVal] = useState(1);

  return (
    <GridItem
      as={motion.GridItem}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { ease: "easeIn", duration: 0.8, delay: delayOnLoad },
      }}
      colSpan={[3, 3, 2, 1]}
      borderRadius={999}
      whileHover={{
        y: [0, -10, 0],
        transition: { ease: "easeIn", duration: 0.2 },
      }}
      bgGradient="linear(to-r, #4e54c8, #8f94fb)"
      margin="auto"
      w={["50%", "50%", "50%", "100%"]}
      display="flex"
      justifyContent="center"
      alignItems="center"
      aspectRatio="1/1"
      onMouseEnter={() => {
        setShowSkillName(false);
        setShowAllSkill(true);
      }}
      onMouseLeave={() => {
        setShowSkillName(true);
        setShowAllSkill(false);
      }}
    >
      <Fade in={showSkillName}>
        <Text
          fontSize={[14, 14, 14, 14]}
          fontWeight={["bold"]}
          transform="translate(-50%, -50%)"
          position="absolute"
          textAlign="center"
          whiteSpace="pre-line"
        >
          {skillName}
        </Text>
      </Fade>
      <Fade in={showAllSkill}>
        <Text
          fontSize={[12]}
          transform="translate(-50%, -50%)"
          position="absolute"
          fontWeight="bold"
          textAlign="center"
          whiteSpace="pre-line"
        >
          {allSkill}
        </Text>
      </Fade>
    </GridItem>
  );
}

export default Skill;
