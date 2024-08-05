import {
  AbsoluteCenter,
  Button,
  Input,
  FormControl,
  Box,
  Text,
  useToast
} from "@chakra-ui/react";
import apiService from "../../services/api";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

const CreateTruck = () => {
  const toast = useToast();

  type IUserData = {
    licensePlate: string;
  };

  const schema = yup.object().shape({
    licensePlate: yup
      .string()
      .required("Preencha o campo com uma placa válida."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserData>({
    resolver: yupResolver(schema),
  });


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const createTruck = async (data: any) => {
      
    const loginPromise = new Promise((resolve, reject) => {
      apiService.post('/create/truck', data)
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
      success: { title: 'Caminhão cadastrado com sucesso' },
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
        <Box width="300px">
          <FormControl
            as="form"
            p={6}
            backgroundColor="#1B1C1D"
            borderRadius={8}
            onSubmit={handleSubmit(createTruck)}
          >
            <Text fontWeight="bold" color="white" mb={2}>
              Placa do caminhão
            </Text>
            <Input
              backgroundColor="#232425"
              borderRadius={6}
              mb={2}
              p={3}
              placeholder="Placa do caminhão"
              {...register("licensePlate")}
            />

            {errors.licensePlate && (
              <Text color="red" fontSize="sm" mb={2}>
                {errors.licensePlate.message}
              </Text>
            )}

            <Button
              type="submit"
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

export default CreateTruck;
