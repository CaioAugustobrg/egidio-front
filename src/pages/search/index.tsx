// import { useState } from 'react';
// import {
//   AbsoluteCenter,
//   //Container,
//   Table,
//   //TableCaption,
//   TableContainer,
//   Tbody,
//   Td,
//   //Tfoot,
//   Th,
//   Thead,
//   Tr,
//   //Input,
//   Box,
// } from "@chakra-ui/react";
// //import { useNavigate } from "react-router-dom";

// const Search = () => {
//   // const navigate = useNavigate();
//   // const handleLoginClick = () => {
//   //   navigate('/management');
//   // };

//   // Definindo os dados da tabela
//   const initialData = [
//     { checked: false, input: "", name: "CLRV" },
//     { checked: false, input: "", name: "CVV" },
//     { checked: false, input: "", name: "ANTT" },
//     { checked: false, input: "ssssssssss", name: "Furos" },
//     { checked: false, input: "", name: "Vedação" },
//     { checked: false, input: "", name: "Borrachas de portas" },
//     { checked: true, input: "", name: "Aparelho/frio" },
//     { checked: false, input: "", name: "Ganchos" },
//     { checked: false, input: "", name: "Limpeza e quantidades" },
//     { checked: false, input: "", name: "Pneus/iluminação" },
//     { checked: false, input: "sddddddddddddddddddddddddddd", name: "Faróis" },
//     { checked: false, input: "", name: "Lanternas" },
//     { checked: false, input: "", name: "Luz interna do baús" },
//   ];

//   const [data, setData] = useState(initialData);

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const handleInputChange = (index: any, event: any) => {
//     const newData = [...data];
//     newData[index].input = event.target.value;
//     setData(newData);
//   };handleInputChange(1,2)
//   return (
//     <Box   maxW="100%" // Definindo largura máxima como 100%
//     height="100vh" // Definindo altura da tela
//     backgroundColor="#232425" 
//     display="flex"
//     justifyContent="center"
//     alignItems="center"
//     h={'100vh'}
//     w={'100vw'}>
//       <AbsoluteCenter>
//         <TableContainer
//           // m={'auto'}
//           // overflowX={'auto'} /* Adicionando barra de rolagem horizontal */
//           color={'#ffffff'}
//           display={'flex'}
//           justifyContent={'center'}
//           alignItems={'center'}
//         >
//           <Table 
//           //w={"auto"}
//             >
//             <Thead textAlign={'left'}>
//               <Tr border={"3px solid rgb(52, 143, 235)"}>
//                 <Th padding={'1rem'}>Nome</Th> {/* Utilizando padding responsivo */}
//                 <Th padding={'1rem'}>Status</Th> {/* Utilizando padding responsivo */}
//                 <Th height={'50px '} padding={'1rem'}>Observação</Th> {/* Utilizando padding responsivo */}
//               </Tr>
//             </Thead>
//             <Tbody>
//               {/* Mapeando os dados e criando as linhas da tabela */}
//               {data.map((item, index) => (
//                 <Tr border={"3px solid  rgb(52, 143, 235)"} key={index} style={{height: '50px',overflowWrap: 'break-word', maxWidth: '300px'}}>
//                   <Td style={{ padding: '1rem', overflowWrap: 'break-word', maxWidth: '300px' }}>{item.name}</Td> {/* Utilizando padding responsivo */}
//                   <Td style={{ padding: '1rem' }}>{item.checked === true ? 'OK' : ''}</Td> {/* Utilizando padding responsivo */}
//                   <Td style={{ padding: '1rem', height: '50px' ,wordBreak: 'break-all',width:'400px', maxWidth: '500px',textAlign: 'justify' }}>{item.input}</Td>
//                 </Tr>
//               ))}
//             </Tbody>
//           </Table>
//         </TableContainer>
//       </AbsoluteCenter>
//     </Box>
//   );
// };

// export default Search;


// import React from 'react';
// import DataTable, { TableColumn } from "react-data-table-component";
// import { format } from 'date-fns';
// import { Badge } from 'your-ui-library'; 



// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const columns: TableColumn<any>[] = [
//   {
//     name: "Nome",
//     selector: 'name',
//     sortable: true,
//   },
//   {
//     name: "Input",
//     selector: 'input',
//     sortable: true,
//   },
//   {
//     name: "Checked",
//     selector: (row) => row.checked ? "Sim" : "Não",
//     sortable: true,
//   },
// ];
const YourComponent = () => {
  const initialData = [
    { checked: false, input: "", name: "CLRV" },
    { checked: false, input: "", name: "CVV" },
    { checked: false, input: "", name: "ANTT" },
    { checked: false, input: "ssssssssss", name: "Furos" },
    { checked: false, input: "", name: "Vedação" },
    { checked: false, input: "", name: "Borrachas de portas" },
    { checked: true, input: "", name: "Aparelho/frio" },
    { checked: false, input: "", name: "Ganchos" },
    { checked: false, input: "", name: "Limpeza e quantidades" },
    { checked: false, input: "", name: "Pneus/iluminação" },
    { checked: false, input: "sddddddddddddddddddddddddddd", name: "Faróis" },
    { checked: false, input: "", name: "Lanternas" },
    { checked: false, input: "", name: "Luz interna do baús" },
  ];
  return (
    <div>
      <table style={{ margin: 'auto' }}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Input</th>
            <th>Checked</th>
          </tr>
        </thead>
        <tbody>
          {initialData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.input}</td>
              <td>{item.checked ? 'Sim' : 'Não'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default YourComponent;