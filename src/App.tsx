import React from 'react';
import logo from './logo.svg';
import './App.css';

// App.tsx
import {ChakraProvider, useDisclosure} from "@chakra-ui/react";
import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import "@fontsource/inter";
import theme from "./theme";

function App() {
    // Pull the disclosure methods
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        // lets us use Chakra UI syntax across our app:
        <ChakraProvider theme={theme}>
            <Layout>
                <p style={{color: "white"}}>Hello, world!</p>
                {/* <ConnectButton /> */}
                {/* Our connect button will only handle opening */}
                <ConnectButton handleOpenModal={onOpen} />
                {/* Our Account modal will handle open state & closing */}
                <AccountModal isOpen={isOpen} onClose={onClose} />
            </Layout>
        </ChakraProvider>
    );
}

export default App;
