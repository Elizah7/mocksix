import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Welcome from './components/Welcome';
import { Box } from '@chakra-ui/react';

import Classes from './components/Classes';
import Teachers from './components/Teachers';
import Footer from './components/footer';

function App() {
  return (
    <div>
     <nav>
      <Navbar/>
     </nav>
     <Box marginTop="1%">
      <Welcome/>
     </Box>
     <Box marginTop="1%">
      <Classes/>
     </Box>
     <Box marginTop="1%">
      <Teachers/>
     </Box>
     <Box marginTop="5%" backgroundColor="blue" color="white">
     <Footer/>
     </Box>

    </div>
  );
}

export default App;
