// ConnectButton.tsx
import {Button, Box, Text} from "@chakra-ui/react";
import {useEthers, useEtherBalance} from "@usedapp/core";
import {formatEther} from "@ethersproject/units";
import Identicon from "./Identicon";


type Props = {
    handleOpenModal: any;
};


function DisplayBox({handleOpenModal}: Props) {
    const {account} = useEthers();
    const etherBalance = useEtherBalance(account);

    return (
        <Box
            onClick={handleOpenModal}
            display="flex"
            alignItems="center"
            background="gray.700"
            borderRadius="xl"
            py="0"
        >
            <Box px="3">
                <Text color="white" fontSize="md">
                    {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
                </Text>
                {/* <Text color="white" fontSize="md"> */}
                {/*     {etherBalance && JSON.stringify(etherBalance)} ETH */}
                {/* </Text> */}
                {/* <Text color="white" fontSize="md"> */}
                {/*     {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(6)} ETH */}
                {/* </Text> */}
            </Box>

            <Button
                bg="gray.800"
                border="1px solid transparent"
                _hover={{
                    border: "1px",
                    borderStyle: "solid",
                    borderColor: "blue.400",
                    backgroundColor: "gray.700",
                }}
                borderRadius="xl"
                m="1px"
                px={3}
                height="38px"
            >
                <Text color="white" fontSize="md" fontWeight="medium" mr="2">
                    {/* check account is defined and then slice the string */}
                    {account &&
                        `${account.slice(0, 6)}...${account.slice(
                            account.length - 4,
                            account.length
                        )}`}
                </Text>
                <Identicon />
            </Button>
        </Box>
    )
}


export default function ConnectButton({handleOpenModal}: Props) {
    const {activateBrowserWallet, account} = useEthers();


    function handleConnectWallet() {
        activateBrowserWallet();
    }


    return account ? (
        // Split to a function above
        //   + Call the function
        //   + forward handleOpenModal onClick to the function
        < DisplayBox handleOpenModal={handleOpenModal} />
    ) : (
        < Button
            onClick={handleConnectWallet}
            bg="blue.800"
            color="blue.300"
            fontSize="lg"
            fontWeight="medium"
            borderRadius="xl"
            border="1px solid transparent"
            _hover={{
                borderColor: "blue.700",
                color: "blue.400",
            }
            }
            _active={{
                backgroundColor: "blue.800",
                borderColor: "blue.700",
            }}
        >
            Connect to a wallet
        </Button >
    );
}
