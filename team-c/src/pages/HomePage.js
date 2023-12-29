import React from 'react'
import { useEffect } from "react";
import {
  Box, Flex, Heading, Text, Image, Stack, HStack, Container, VStack
} from '@chakra-ui/react';
import HeaderImage from "../assets/HeaderImage.png";
import ParisImage from "../assets/ParisImage.png";
import Sports1 from "../assets/Sports1.png";
import Sports2 from "../assets/Sports2.png";
import Sports3 from "../assets/Sports3.png";
import Sports4 from "../assets/Sports4.png";
import JapanFlag from "../assets/JapanFlag.png";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      style={{
        // backgroundImage: `url(${BackgroundImage})`,
        // backgroundPosition: "center",
        // backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // maxHeight: "200vh", // 高さを画面の高さの2倍に設定
        // backgroundColor: "red",
      }}
    >
      <section
        style={{
          backgroundImage: `url(${HeaderImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "30vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack>
          <Text fontSize="5xl" color="white" as="b">
            第33回オリンピック競技大会
          </Text>
          <HStack spacing={10}>
            <Text fontSize="8xl" color="white" as="b">
              PARIS 2024
            </Text>
            <Text fontSize={{ base: '36px', md: '40px', lg: '42px' }} color="white" as="b">
              開催まであと◯時間◯分◯秒
            </Text>
          </HStack>
        </Stack>
      </section>

      <section
        style={{
          height: "70vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HStack spacing={50} marginLeft={10} marginRight={10}>
          <Image src={ParisImage} />
          <VStack>
            <Text fontSize="5xl" color="blue" as="b">
              概要
            </Text>
            <Text fontSize="xl" color="black" as="b">
              {`2024年夏にフランスのパリで開催される予定の第33回オリンピック競技大会（パリオリンピック）についての情報を発信するサイトです。\n
              このサイトでは、パリオリンピックについての基本情報や、競技の種類、日本選手団の情報などを紹介しています。\n
              また、パリオリンピックについてのニュースも掲載しています。`}
            </Text>
          </VStack>
        </HStack>
      </section>
      <section
        style={{
          height: "60vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <VStack>
          <Box style={{
            width: "90vw", display: "flex",
            flexDirection: "raw", justifyContent: "start",
          }}>
            <Text fontSize="6xl" color="blue" as="b">
              新競技
            </Text>
          </Box>
          <HStack spacing={50} marginLeft={10} marginRight={10}>
            <VStack>
              <Image src={Sports1} />
              <Text fontSize="xl" color="black" as="b">
                スポーツクライミング
              </Text>
            </VStack>
            <VStack>
              <Image src={Sports2} />
              <Text fontSize="xl" color="black" as="b">
                スケートボード
              </Text>
            </VStack>
            <VStack>
              <Image src={Sports3} />
              <Text fontSize="xl" color="black" as="b">
                ブレイキン
              </Text>
            </VStack>
            <VStack>
              <Image src={Sports4} />
              <Text fontSize="xl" color="black" as="b">
                サーフィン
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </section>
      <section
        style={{
          height: "60vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <VStack>
          <Box style={{
            width: "90vw", display: "flex",
            flexDirection: "raw", justifyContent: "start",
          }}>
            <Text fontSize="6xl" color="blue" as="b">
              注目の日本人選手
            </Text>
          </Box>
          <HStack spacing={50} marginLeft={10} marginRight={10}>
            <Image src={JapanFlag} />
            <Text fontSize="xl" color="black" as="b">
              hogehogehogehogehogehoge
            </Text>
          </HStack>
        </VStack>
      </section>
    </div >
  )
}

export default HomePage