import React from 'react'
import {
    Text,
} from '@chakra-ui/react';

const CountDown = () => {
    return (
        // <Text fontSize={{ base: '36px', md: '40px', lg: '42px' }} color="white" as="b">
        <Text fontSize="4xl" color="white" as="b">
            開催まであと◯時間◯分◯秒
        </Text >
    )
}

export default CountDown