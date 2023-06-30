import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Admin  from './components/admin';
import { Routing } from './routes/routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          {/* <Admin/> */}
          <Routing/>
          </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
