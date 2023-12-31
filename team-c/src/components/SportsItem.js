import React from 'react'
import { Box, Image, Text, VStack } from "@chakra-ui/react";
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

const SportsItem = (props) => {
    const title = props.title;
    // const description = props.description;
    const thumbnail_image = props.thumbnail_image;
    const rule = props.rule;
    const highlights = props.highlights;
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>
            <VStack>
                <Image src={thumbnail_image} onClick={onOpen} />
                <Text fontSize="xl" color="black" as="b">{title}</Text>
            </VStack>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack>
                            <Image src={thumbnail_image} />
                            <Text fontSize="xl" color="black" as="b">{rule}</Text>
                            <Text fontSize="xl" color="black" as="b">{highlights}</Text>
                        </VStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default SportsItem