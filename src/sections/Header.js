import { Box } from "@chakra-ui/react";

function Header() {
  return (
    <Box
      id="header"
      zIndex="999"
      position="fixed"
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      width={["100%", "100%", "50%"]}
      backgroundColor="gray.500"
      height={[25, 25, 50]}
    >
      <Box display="flex" justifyContent="space-evenly">
        <Box padding={3}>Home</Box>
        <Box padding={3}>Projects</Box>
        <Box padding={3}>Contact</Box>
      </Box>
    </Box>
  );
}

export default Header;
