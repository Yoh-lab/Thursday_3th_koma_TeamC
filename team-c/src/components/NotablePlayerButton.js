import React from 'react'
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import {
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

const NotablePlayerButton = (props) => {
    const title = props.title;
    // const description = props.description;
    const thumbnail_image = props.thumbnail_image;
    const playerName = props.playerName;
    const explanation = props.explanation;
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>
            <VStack>
                <Image src={thumbnail_image} onClick={onOpen} />
                <Text fontSize="xl" color="black" as="b">{title}</Text>
            </VStack>
            <Modal isOpen={isOpen} onClose={onClose}
                style={{
                    // height: "70vh",
                    width: "100%",
                    backgroundColor: "blue",
                }}
            >
                <ModalOverlay />
                <ModalContent
                    style={{
                        // height: "70vh",
                        width: "100%",
                        // backgroundColor: "red",
                    }}
                >
                    {/* <ModalHeader>{title}</ModalHeader> */}
                    <ModalCloseButton />
                    <ModalBody
                        style={{
                            // height: "90vh",
                            // width: "100vw",
                        }}
                    >
                        <HStack spacing={10} marginTop={10} marginBottom={10} marginLeft={10} marginRight={10}>
                            <Image src={thumbnail_image} />
                            <VStack>
                                {/* <Text fontSize="xl" color="black" as="b">{playerName}</Text> */}
                                <Text fontSize="xl" color="black" as="b">{title}</Text>
                                <Text fontSize="xl" color="black" as="b">{explanation}</Text>
                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                    Close
                                </Button>
                            </VStack>
                        </HStack>
                    </ModalBody>

                    {/* <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter> */}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default NotablePlayerButton