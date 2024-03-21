import { SearchIcon } from "@chakra-ui/icons";
import {
  AbsoluteCenter,
  Box,
  Container,
//   Flex,
  IconButton,
} from "@chakra-ui/react";
import { FaTruck } from "react-icons/fa";
const Home = () => {
  return (
    <Container backgroundColor={"#232425"} width={"100vw"} height={"100vh"}>
      <AbsoluteCenter w={"auto"} h={"auto"}>
        <Box
          w={"200px"}
          h={"200px"}
          backgroundColor={"#1B1C1D"}
          mb={"10px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"8px"}
          _hover={{ backgroundColor: "rgb(52, 160, 400)" }}
        >
          <IconButton
            fontSize={"100px"}
            color={"#ffffff"}
            colorScheme="white"
            aria-label="Search database"
            icon={<FaTruck />}
          />
        </Box>
        <Box
          mt={"10px"}
          w={"200px"}
          h={"200px"}
          backgroundColor={"#1B1C1D"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"8px"}
          _hover={{ backgroundColor: "rgb(52, 160, 400)" }}
        >
          <IconButton
            color={"#ffffff"}
            fontSize={"100px"}
            colorScheme="blue"
            aria-label="Search database"
            icon={<SearchIcon />}
          />
        </Box>
      </AbsoluteCenter>
    </Container>
  );
};
export default Home;
