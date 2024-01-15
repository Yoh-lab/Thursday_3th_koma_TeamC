import React from 'react'
import { Box, HStack, Image, Text, VStack, background } from "@chakra-ui/react";
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
    const icon = props.icon;
    const playerName = props.playerName;
    const sports = props.sports;
    const explanation = props.explanation;
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>
            <VStack>
                <Image src={thumbnail_image} onClick={onOpen} Size="xl" />
                <HStack>
                    <Image src={icon} boxSize={{ sm: "10", md: "10", lg: "10" }} />
                    <Text fontSize="xl" color="black" as="b">{playerName}</Text>
                </HStack>
            </VStack>
            <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}
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
                                <HStack>
                                    <Image src={icon} boxSize={{ sm: "10", md: "10", lg: "10" }} />
                                    <Text fontSize="3xl" color="black" as="b">{sports}</Text>
                                    <Text fontSize="3xl" color="black" as="b"> </Text>
                                    <Text fontSize="3xl" color="black" as="b">{playerName}</Text>
                                </HStack>
                                <Box marginTop="6" />
                                <Text fontSize="xl" color="black" as="b">{explanation}</Text>
                                <Box marginTop="10" />
                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                    閉じる
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