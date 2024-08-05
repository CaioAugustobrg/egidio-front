import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  // Center,
  Checkbox,
  // Flex,
  FormControl,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ToggleableInput from "./ToggleableInput";
import apiService from "../services/api";
import { Select } from "@chakra-ui/react";
import { ITruck } from "../types";
const AccordionComponent = () => {
  const toast = useToast();
  const [selectedTruckId, setSelectedTruckId] = useState("");
  const [inputValues, setInputValues] = useState(Array(13).fill(""));
  const [checkedItems, setCheckedItems] = useState(Array(13).fill(false));
  const [allTrucks, setAllTrucks] = useState<ITruck[]>([]);
  const inputNames = [
    "CLRV",
    "CVV",
    "ANTT",
    "Furos",
    "Vedação",
    "Borrachas de portas",
    "Aparelho/frio",
    "Ganchos",
    "Limpeza e quantidades",
    "Pneus/iluminação",
    "Faróis",
    "Lanternas",
    "Luz interna do baús",
  ];
  const handleCheckboxChange = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };
  const handleInputChange = (index: number, value: string) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };
  const sendForm = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const checkedAndInputs: any = [];

    for (let index = 0; index < checkedItems.length; index++) {
      if (index === index) {
        checkedAndInputs.push({
          checked: checkedItems[index],
          input: inputValues[index],
          name: inputNames[index],
        });
      }
      // console.log(checkedAndInputs)
    }

    const createTruckPromise = new Promise((resolve, reject) => {
      // Realiza a chamada à API para criar um caminhão
      apiService
        .post(`/truck/${selectedTruckId}`, checkedAndInputs)
        .then((response) => {
          // Se a chamada à API for bem-sucedida, resolve a promessa com os dados da resposta
          console.log(response.data);
          resolve(response.data);
          window.location.reload();
        })
        .catch((error) => {
          // Verifica se o erro possui uma resposta com dados de erro
          if (error.response && error.response.data) {
            // Rejeita a promessa com uma mensagem de erro específica
            reject(new Error(error.response.data));
          } else {
            // Rejeita a promessa com uma mensagem de erro genérica
            reject(
              new Error(
                "Falha na criação do caminhão. Tente novamente mais tarde"
              )
            );
          }
        });
    });

    // Utiliza a função `toast.promise` para exibir mensagens de feedback ao usuário
    toast.promise(createTruckPromise, {
      success: {
        title: "Caminhão criado com sucesso",
        description: "Tudo pronto para seguir viagem!",
      },
      error: (error) => ({
        title: "Erro na criação do caminhão",
        description: error.message,
      }),
      loading: {
        title: "Processando...",
        description: "Por favor, aguarde um momento.",
      },
    });
  };
  const findAllTrucks = async () => {
    await apiService.get("/find-all-trucks").then((response) => {
      setAllTrucks(response.findAllTrucks);
      console.log(response.findAllTrucks);
    });
  };

  useEffect(() => {
    findAllTrucks();
  }, []);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelectChange = (event: any) => {
    setSelectedTruckId(event.target.value);
    console.log(event.target.value);
  };
  return (
    <FormControl
      height="100vh"
      alignItems="center"
      justifyContent="center"
      backgroundColor={"#232425"}
      color="white"
    >
      <Accordion
        borderRadius={"8px"}
        backgroundColor={"#1B1C1D"}
        defaultIndex={[0]}
        allowMultiple
        width="100vw"
        height={"100vh"}
        overflow={"auto"}
        padding={2}
      >
        <AccordionItem
          border={"1px solid rgb(52, 160, 400)"}
          mt={15}
          mb={15}
          borderRadius={8}
        >
          <h2>
            <AccordionButton
              borderRadius={8}
              _hover={{ backgroundColor: "rgb(52, 160, 400)" }}
            >
              <Box
                fontWeight={"bold"}
                fontSize={"28px"}
                as="span"
                flex="1"
                textAlign="left"
              >
                Documentos
              </Box>
              <AccordionIcon fontSize={26} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack w={100}>
              
              <Box display={"flex"}>
                <Checkbox
                  minW={"80px"}
                  isChecked={checkedItems[0]}
                  onChange={() => handleCheckboxChange(0)}
                  colorScheme="green"
                  defaultChecked
                >
                  CLRV
                </Checkbox>
                <ToggleableInput
                  inputValue={inputValues[0]}
                  setInputValue={(value) => handleInputChange(0, value)}
                />
              </Box>
              <Box display={"flex"}>
                <Checkbox
                  minW={"80px"}
                  isChecked={checkedItems[1]}
                  onChange={() => handleCheckboxChange(1)}
                  colorScheme="green"
                  defaultChecked
                >
                  CVV
                </Checkbox>
                <ToggleableInput
                  inputValue={inputValues[1]}
                  setInputValue={(value) => handleInputChange(1, value)}
                />
              </Box>
              <Box display={"flex"}>
                <Checkbox
                  minW={"80px"}
                  isChecked={checkedItems[2]}
                  onChange={() => handleCheckboxChange(2)}
                  colorScheme="green"
                  defaultChecked
                >
                  ANTT
                </Checkbox>
                <ToggleableInput
                  inputValue={inputValues[2]}
                  setInputValue={(value) => handleInputChange(2, value)}
                />
              </Box>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem
          border={"1px solid rgb(52, 160, 400)"}
          mt={15}
          mb={15}
          borderRadius={8}
        >
          <h2>
            <AccordionButton
              borderRadius={"8px"}
              _hover={{ backgroundColor: "rgb(52, 160, 400)" }}
            >
              <Box
                fontWeight={"bold"}
                fontSize={"28px"}
                as="span"
                flex="1"
                textAlign="left"
              >
                Veículo
              </Box>
              <AccordionIcon fontSize={26} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            
            <Stack>
              <Text fontWeight={600} fontSize={22}>
                Baú - Estrutura interna e externa
              </Text>
              <Select w={160} fontSize={14} placeholder="Selecione a placa" onChange={handleSelectChange}>
                {allTrucks.map((truck) => (
                  <option key={truck.id} value={truck.id}>
                    {truck.licensePlate}{" "}
                  </option>
                ))}
              </Select>{" "}
              <Box display={"flex"}>
                <Checkbox
                  w={"120px"}
                  isChecked={checkedItems[3]}
                  onChange={() => handleCheckboxChange(3)}
                  colorScheme="green"
                  defaultChecked
                >
                  Furos
                </Checkbox>
                <ToggleableInput
                  inputValue={inputValues[3]}
                  setInputValue={(value) => handleInputChange(3, value)}
                />
              </Box>

              <Box display={"flex"}>
                <Checkbox
                  w={"120px"}
                  isChecked={checkedItems[4]}
                  onChange={() => handleCheckboxChange(4)}
                  colorScheme="green"
                  defaultChecked
                >
                  Vedação
                </Checkbox>
                <ToggleableInput
                  inputValue={inputValues[4]}
                  setInputValue={(value) => handleInputChange(4, value)}
                />
              </Box>
              <Box display={"flex"}>
                <Checkbox
                  w={"120px"}
                  isChecked={checkedItems[5]}
                  onChange={() => handleCheckboxChange(5)}
                  colorScheme="green"
                  defaultChecked
                >
                  <p style={{ width: "100%" }}>Borrachas de portas</p>
                </Checkbox>
                <ToggleableInput
                  inputValue={inputValues[5]}
                  setInputValue={(value) => handleInputChange(5, value)}
                />
              </Box>
              <Box display={"flex"}>
                <Checkbox
                  w={"120px"}
                  isChecked={checkedItems[6]}
                  onChange={() => handleCheckboxChange(6)}
                  colorScheme="green"
                  defaultChecked
                >
                  Aparelho/frio
                </Checkbox>
                <ToggleableInput
                  inputValue={inputValues[6]}
                  setInputValue={(value) => handleInputChange(6, value)}
                />
              </Box>
              <Box display={"flex"}>
                <Checkbox
                  w={"120px"}
                  isChecked={checkedItems[7]}
                  onChange={() => handleCheckboxChange(7)}
                  colorScheme="green"
                  defaultChecked
                >
                  Ganchos
                </Checkbox>
                <ToggleableInput
                  inputValue={inputValues[7]}
                  setInputValue={(value) => handleInputChange(7, value)}
                />
              </Box>
              <Box display={"flex"}>
                <Checkbox
                  w={"120px"}
                  isChecked={checkedItems[8]}
                  onChange={() => handleCheckboxChange(8)}
                  colorScheme="green"
                  defaultChecked
                >
                  Limpeza e quantidades
                </Checkbox>
                <ToggleableInput
                  inputValue={inputValues[8]}
                  setInputValue={(value) => handleInputChange(8, value)}
                />
              </Box>
              <Text fontWeight={600} fontSize={22}>
                Caminhão - Estrutura geral
              </Text>
              <Box display={"flex"}>
                <Checkbox
                  w={"120px"}
                  isChecked={checkedItems[9]}
                  onChange={() => handleCheckboxChange(9)}
                  colorScheme="green"
                  defaultChecked
                >
                  Pneus/iluminação
                </Checkbox>
                <ToggleableInput
                  inputValue={inputValues[9]}
                  setInputValue={(value) => handleInputChange(9, value)}
                />
              </Box>
              <Box display={"flex"}>
                <Checkbox
                  w={"120px"}
                  isChecked={checkedItems[10]}
                  onChange={() => handleCheckboxChange(10)}
                  colorScheme="green"
                  defaultChecked
                >
                  Faróis
                </Checkbox>
                <ToggleableInput
                  inputValue={inputValues[10]}
                  setInputValue={(value) => handleInputChange(10, value)}
                />
              </Box>
              <Box display={"flex"}>
                <Checkbox
                  w={"120px"}
                  isChecked={checkedItems[11]}
                  onChange={() => handleCheckboxChange(11)}
                  colorScheme="green"
                  defaultChecked
                >
                  Lanternas
                </Checkbox>
                <ToggleableInput
                  inputValue={inputValues[11]}
                  setInputValue={(value) => handleInputChange(11, value)}
                />
              </Box>
              <Box display={"flex"}>
                <Checkbox
                  w={"120px"}
                  isChecked={checkedItems[12]}
                  onChange={() => handleCheckboxChange(12)}
                  colorScheme="green"
                  defaultChecked
                >
                  Luz interna do baú
                </Checkbox>
                <ToggleableInput
                  inputValue={inputValues[12]}
                  setInputValue={(value) => handleInputChange(12, value)}
                />
              </Box>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <Button
          onClick={sendForm}
          p={8}
          mt={15}
          height={50}
          width={"15vh"}
          borderRadius={"8px"}
          color={"#ffffff"}
          fontWeight={"600"}
          fontSize={"16px"}
          backgroundColor={"rgb(52, 143, 235)"}
          _hover={{ backgroundColor: "rgb(52, 160, 400)" }}
        >
          Enviar
        </Button>{" "}
      </Accordion>
    </FormControl>
  );
};

export default AccordionComponent;
