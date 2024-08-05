import {
  //Container,
  AbsoluteCenter,
  Button,
  //FormLabel,
  Input,
  FormControl,
  Stack,
  // Flex,
  Box,
  // Heading,
  Text,
  //   FormLabel,
  //   Input,
  //   FormHelperText,
  //   FormErrorMessage,
} from "@chakra-ui/react";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Login = () => {
  type IUserData = yup.InferType<typeof schema>;
  //   const [input, setInput] = useState("");

  //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  //     setInput(e.target.value);

  //   const isError = input === "";

  const schema = yup.object({
    email: yup
      .string()
      .email("Email inválido")
      .required("Preencha o campo com um email válido."),
    password: yup
      .string()
      .min(8, "Sua senha deve possuir, no mínimo, 8 caracteres.")
      .max(64)
      .required("Preencha o campo com sua senha."),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IUserData) => {
    console.log("oi", data);
  };
  // const breakpoints = {
  //   base: "0em", // 0px
  //   sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
  //   md: "48em", // ~768px
  //   lg: "62em", // ~992px
  //   xl: "80em", // ~1280px
  //   "2xl": "96em", // ~1536px
  // };
  return (
    
    <Box     width="100%"
    height="100vh"
    minHeight="100vh"
    overflowY="auto"
    display="flex"
    backgroundColor="#232425" 
      flexDirection={"column"}
      color="white">
      <AbsoluteCenter
 
        display={'flex'}
        color="white"

      >

<Box
  //width={500}
  // margin="auto"
>
  <FormControl
   width={'100%'}
            h={'auto'}
            as="form" 
            p={25}
            //m={'auto'}
            backgroundColor={'#1B1C1D'}
            borderRadius={'8px'}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Text
    display={{ base: "block", md: "none" }}
    fontWeight="bold"
    color="white"
    mt="15px"
    mb="5px"
  >
    Email
  </Text>
            <Input
              backgroundColor={"#232425"}
              borderRadius={6}
              w={'100%'}
              h={2}
              mb={4}
              p={6}
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && (
              <p
                style={{
                  color: "red",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {errors.email.message}
              </p>
            )}
               <Text
    display={{ base: "block", md: "none" }}
    fontWeight="bold"
    color="white"
    mt="15px"
    mb="5px"
  >
    Senha
  </Text>
            <Input
              backgroundColor={"#232425"}
              borderRadius={6}
              w={"100%"}
              h={25}
              //m={10}
              p={6}
              placeholder="Senha"
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <p
                style={{
                  color: "red",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {errors.password.message}
              </p>
            )}

            <Stack mt={4} mb={4} alignItems={"start"}>
              <Text fontWeight={550} color={"rgb(52, 143, 235)"}>
                Esqueci minha senha
              </Text>
            </Stack>
            <Button
            type="submit" 
              p={4}
              height={14}
              width={"100%"}
              borderRadius={"8px"}
              color={"#ffffff"}
              fontWeight={"600"}
              fontSize={"16px"}
              backgroundColor={"rgb(52, 143, 235)"}
              _hover={{ backgroundColor: "rgb(52, 160, 400)" }}
            >
              Entrar
            </Button>
            <Stack mt={4} alignItems={"center"}>
              <Text fontSize="15px">
                Não tem uma conta ?{" "}
                <strong style={{ color: "rgb(52, 143, 235)" }}>
                  Registre-se
                </strong>
              </Text>
            </Stack>
            {/* <Flex mt={'20px'} alignItems={'center'} borderTop={'1px solid #232425'} h={100} textAlign={"center"}>
              <Text

                mr={'auto'}
              >Ou entre com</Text>
              <Button
                p={5}
                height={45}
                width={220}
                borderRadius={"8px"}
                color={"#ffffff"}
                fontWeight={"600"}
                fontSize={"18px"}
                leftIcon={<FaGithub fontSize={"22px"} />}
                backgroundColor={"#232425"}
                textTransform={'uppercase'}
                _hover={{ backgroundColor: "hsl(0, 0%, 18%)" }}
              >
                Github
              </Button>

            </Flex> */}
          </FormControl>
        </Box>
      </AbsoluteCenter>
    </Box>
  );
};
export default Login;

{
  /* <Stack spacing={4}>
  <InputGroup>
  <InputLeftElement pointerEvents='none'>
  <PhoneIcon color='gray.300' />
  </InputLeftElement>
  <Input type='tel' placeholder='Phone number' />
  </InputGroup>
  
  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      color='gray.300'
      fontSize='1.2em'
    >
      $
    </InputLeftElement>
    <Input placeholder='Enter amount' />
    <InputRightElement>
      <CheckIcon color='green.500' />
    </InputRightElement>
  </InputGroup>
</Stack> */
}
