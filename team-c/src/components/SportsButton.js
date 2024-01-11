import React from 'react'
import { Box, Center, HStack, Image, Square, Text, VStack } from "@chakra-ui/react";
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

const SportsButton = (props) => {
    const title = props.title;
    // const description = props.description;
    const thumbnail_image = props.thumbnail_image;
    const rule = props.rule;
    const highlight = props.highlight;
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>
            <VStack>
                <Image src={thumbnail_image} onClick={onOpen} boxSize={{ sm: "250", md: "250", lg: "250" }} />
                {/* <Square size={{ sm: "100", md: "150", lg: "250" }}
                    style={{
                        backgroundColor: "red",
                        objectFit: "cover",
                    }}
                >
                    <Image src={thumbnail_image} onClick={onOpen} />
                </Square> */}
                <Text fontSize="xl" color="black" as="b">{title}</Text>
            </VStack>
            <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}//これでモーダルのサイズを指定できる．
            // style={{
            //     // height: "70vh",
            //     width: "100%",
            //     backgroundColor: "blue",
            // }}
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
                            <Image src={thumbnail_image} boxSize={{ sm: "250", md: "250", lg: "300" }} />
                            <VStack>
                                <Text fontSize="3xl" color="black" as="b">{title}</Text>
                                <Box marginTop="6" />
                                <Text fontSize="xl" color="black" as="b">{rule}</Text>

                                <Text fontSize="xl" color="black" as="b">{highlight}</Text>
                                <Box marginTop="6" />
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

export default SportsButton