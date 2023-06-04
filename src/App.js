import "./App.css";
import Header from "./sections/Header";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Introduction from "./sections/Introduction";
import Skill from "./sections/Skill";
import fse from "./images/fullstack-engineer.jpg";
import ct from "./images/coding-tutor.jpg";
import cd from "./images/creative-developer.jpg";
import KanjiTrainer from "./images/KanjiTrainer.jpg";
import PokerStudyNotes from "./images/PokerStudyNotes.jpg";
import Work from "./sections/Work";
import { useState } from "react";
import Project from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  let jobInfo = {
    fullstack_engineer:
      "I worked on all aspect of a Content Management System from the frontend, backend to handling the database. I worked with the designer and followed their UI design to build the internal tools for employees and the landing page of the company.",
    coding_tutor:
      "I taught people how to do basic web development and python and introduce them to the world of programming.",
    creative_developer:
      "I produce google ads and social ads using an animation library and ui template to boost the reach of well known brands for their products and services.",
  };

  return (
    <Box display="flex" justifyContent="center">
      <Box width={["80%", "80%", "80%", "50%"]}>
        {/* <Header /> */}
        <Grid
          pb={10}
          pt={10}
          width="100%"
          templateColumns={"repeat(6, 1fr)"}
          gap={4}
        >
          <Introduction delayOnLoad={0.1} />
          <Skill
            skillName={"Frontend"}
            allSkill={"HTML\nJAVASCRIPT\nCSS"}
            delayOnLoad={0.3}
          />
          <Skill
            skillName={"Backend"}
            allSkill={"Node.js\nPython\nPHP"}
            delayOnLoad={0.5}
          />
          <Skill
            skillName={"Database"}
            allSkill={"MySQL\nPostgre\nMongoDB"}
            delayOnLoad={0.7}
          />
          <Skill
            skillName={"Frontend\nFramework"}
            allSkill={"React.js\nNext.js"}
            delayOnLoad={0.9}
          />
          <Skill
            skillName={"Styling\nFramework"}
            allSkill={"Chakra UI\nBootstrap"}
            delayOnLoad={1.1}
          />
          <Skill
            skillName={"Tools"}
            allSkill={"Git\ngithub\nbitbucket\nVSCode"}
            delayOnLoad={1.3}
          />
          <Work
            toUseImage={fse}
            jobName={"Fullstack\nEngineer"}
            jobInfo={jobInfo.fullstack_engineer}
            zIndexVal={1}
            delayOnLoad={1.5}
          />
          <Work
            toUseImage={ct}
            jobName={"Coding\nTutor"}
            jobInfo={jobInfo.coding_tutor}
            zIndexVal={2}
            delayOnLoad={1.7}
          />
          <Work
            toUseImage={cd}
            jobName={"Creative\nDeveloper"}
            jobInfo={jobInfo.creative_developer}
            zIndexVal={3}
            delayOnLoad={1.9}
          />
          <Project
            projectName={"Simple Kanji Trainer"}
            projectImage={KanjiTrainer}
            projectLink={"https://wirucodes.github.io/SimpleKanjiTrainer/"}
            delayOnLoad={2.1}
          />
          <Project
            projectName={"Poker Note Study"}
            projectImage={PokerStudyNotes}
            projectLink={"https://wirucodes.github.io/PokerStudyNotes/"}
            delayOnLoad={2.3}
          />
          <Contact delayOnLoad={2.5} />
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
