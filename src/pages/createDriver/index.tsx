import {
    AbsoluteCenter,
    Button,
    Input,
    FormControl,
    Box,
    Text,
    useToast
  } from "@chakra-ui/react";
  import { useForm } from "react-hook-form";
  import { yupResolver } from "@hookform/resolvers/yup";
  import * as yup from "yup";
  import { DOCUMENT_REGEX } from "../../constants";
import apiService from "../../services/api";
  
  const CreateDriver = () => {
    const toast = useToast()
    const schema = yup.object().shape({
      email: yup
        .string()
        .email("Email inválido")
        .required("Preencha o campo com um email válido."),
      name: yup
        .string()
        .min(3, "O nome deve possuir, no mínimo, 3 caracteres.")
        .max(64)
        .required("Preencha o campo com seu nome."),
      cpf: yup
        .string()
        .matches(DOCUMENT_REGEX, "Preencha o campo com um CPF válido.")
        .required("Preencha o campo com um CPF válido.")
        .length(11, "O CPF tem 11 dígitos"),
    });
  
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema),
    });
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const createUserDriver = async (data: any) => {
      
        const loginPromise = new Promise((resolve, reject) => {
          apiService.post('/create-user-driver', data)
            .then((response) => {
              resolve(response.data); 
            })
            .catch((error) => {
              
                console.log(error)
              if (error.response && error.response.data) {
                reject(new Error(error.response.data)); 
              } else {
                reject(new Error(error.message));
              }
            });
        });
      
        toast.promise(loginPromise, {
          success: { title: 'Caminhoneiro cadastrado com sucesso!'},
          error: (error) => ({
            title: error.message,
          }),
          loading: { title: 'Processando...', description: 'Aguarde' },
        })
      };
    return (
      <Box
        width="100%"
        height="100vh"
        overflowY="auto"
        display="flex"
        backgroundColor="#232425"
        flexDirection="column"
        color="white"
      >
        <AbsoluteCenter>
          <Box width={{ base: "100%", md: "400px" }}>
            <FormControl
              as="form"
              p={6}
              backgroundColor="#1B1C1D"
              borderRadius={8}
              onSubmit={handleSubmit(createUserDriver)}
            >
              <Text fontWeight="bold" color="white" mb={2} display={{ base: "block", md: "none" }}>
                Nome
              </Text>
              <Input
                backgroundColor="#232425"
                borderRadius={6}
                mb={2}
                p={3}
                placeholder="Nome"
                {...register("name")}
              />
              {errors.name && <Text color="red" fontSize="sm" mb={2}>{errors.name.message}</Text>}
  
              <Text fontWeight="bold" color="white" mt={2} mb={2} display={{ base: "block", md: "none" }}>
                Email
              </Text>
              <Input
                backgroundColor="#232425"
                borderRadius={6}
                mb={2}
                p={3}
                placeholder="Email"
                type="text"
                {...register("email")}
              />
              {errors.email && <Text color="red" fontSize="sm" mb={2}>{errors.email.message}</Text>}
  
              <Text fontWeight="bold" color="white" mt={2} mb={2} display={{ base: "block", md: "none" }}>
                CPF
              </Text>
              <Input
                backgroundColor="#232425"
                borderRadius={6}
                mb={2}
                p={3}
                placeholder="CPF"
                type="text"
                {...register("cpf")}
              />
              {errors.cpf && <Text color="red" fontSize="sm" mb={2}>{errors.cpf.message}</Text>}
  
              <Button
                type="submit"
                mt={4}
                height={12}
                width="100%"
                borderRadius={8}
                color="white"
                fontWeight="600"
                fontSize="16px"
                backgroundColor="rgb(52, 143, 235)"
                _hover={{ backgroundColor: "rgb(52, 160, 400)" }}
              >
                Criar
              </Button>
            </FormControl>
          </Box>
        </AbsoluteCenter>
      </Box>
    );
  };
  
  export default CreateDriver;
  