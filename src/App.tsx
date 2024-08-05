import { ChakraProvider } from "@chakra-ui/react";
import AppRouter from "./routes/router.tsx";
import GlobalStyles from "./styles/globalStyles.ts";

function App() {
  return (
    <ChakraProvider>
      <AppRouter />
      <GlobalStyles />
    </ChakraProvider>
  );
}

export default App;