// import { SearchIcon } from "@chakra-ui/icons";

import {
  AbsoluteCenter,
  Box,
  Container,
  useBreakpointValue,
//   Flex,
  IconButton,
} from "@chakra-ui/react";
import { FaTruck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { BsPlusSquareFill } from "react-icons/bs";
import { IoIosMan } from "react-icons/io";
const Home = () => {
  const displayMode = useBreakpointValue({ base: 'initial', md: 'flex' });
    const navigate = useNavigate();
  const handlePageManagementClick = () => {
    navigate('/management');
  };
  // const handlePageSearchClick = () => {
  //   navigate('/search');
  // };
  const handlePageCreateTruckClick = () => {
    navigate('/create-truck');
  };

  const handlePageCreateDriverClick = () => {
    navigate('/create-driver')
  }
  return (
    <Container 
      maxW="100%" // Definindo largura máxima como 100%
      minHeight="100vh" // Definindo altura da tela
      backgroundColor="#232425" 
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <AbsoluteCenter w={"auto"} h={"auto"}>
        <Box display={displayMode} >

        <Box
        m={1}
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
            fontSize={"100px"}
            color={"#ffffff"}
            colorScheme="white"
            aria-label="Search database"
            icon={<FaTruck />}
            onClick={handlePageManagementClick}
            />
        </Box>
        {/* <Box
        m={1}
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
               fontSize={"100px"}
               color={"#ffffff"}
               colorScheme="white"
               aria-label="Search database"
            icon={<SearchIcon />}
            onClick={handlePageSearchClick}
            
            />
        </Box> */}
        </Box>
        <Box display={displayMode}>

        <Box
        m={1}
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
               fontSize={"100px"}
               color={"#ffffff"}
               colorScheme="white"
               aria-label="Search database"
            icon={<BsPlusSquareFill  />}
            onClick={handlePageCreateTruckClick}

            />


        </Box>
        <Box
        m={1}
         
          w={"200px"}
          h={"200px"}
          backgroundColor={"#1B1C1D"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"8px"}
          _hover={{ backgroundColor: "rgb(52, 160, 400)" }}>

        <IconButton
               fontSize={"100px"}
               color={"#ffffff"}
               colorScheme="white"
               aria-label="Search database"
            icon={<IoIosMan  />}
            onClick={handlePageCreateDriverClick}
            
            />
            </Box>
            </Box>
      </AbsoluteCenter>
    </Container>
  );
};
export default Home;
