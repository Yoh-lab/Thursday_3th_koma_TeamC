import React from 'react'
import { useEffect } from "react";
import {
  Box,
  Text,
  Image,
  Stack,
  HStack,
  VStack
} from '@chakra-ui/react';
import HeaderImage from "../assets/HeaderImage.png";
import ParisImage from "../assets/ParisImage.png";
// import JapanFlag from "../assets/JapanFlag.png";
import CountDown from '../components/CountDown';
import SportsItems from '../components/SportsItems';
import NotablePlayerItems from '../components/NotablePlayerItems';

const HomePage = () => {
  const abstruct_text = `
  2024年夏にフランスのパリで開催される予定の第33回オリンピック競技大会（パリオリンピック）についての情報を発信するサイトです。\n
  このサイトでは、パリオリンピックについての基本情報や、競技の種類、日本選手団の情報などを紹介しています。\n
  また、パリオリンピックについてのニュースも掲載しています。
  `;
  const abstruct_lines = abstruct_text.trim().split("\n");

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
          height: "40vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack spacing={0} marginTop={0}>
          <Text fontSize={{ sm: "3xl", md: "4xl", lg: "4xl" }} color="white" as="b">
            第33回オリンピック競技大会
          </Text>
          <Text fontSize={{ sm: "7xl", md: "8xl", lg: "8xl" }} color="white" as="b">
            PARIS 2024
          </Text>
          <CountDown />
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
          marginTop: "10vh",
        }}
      >
        <HStack spacing={50} marginLeft={10} marginRight={10}>
          <Image src={ParisImage} boxSize={{ sm: "250", md: "250", lg: "500" }} />
          <VStack>
            <Text fontSize="5xl" color="blue" as="b">
              概要
            </Text>
            {abstruct_lines.map((line) => (
              <Text fontSize="xl" color="black" as="b" textAlign={'left'}>
                {line}
              </Text>
            ))}

          </VStack>
        </HStack>
      </section>
      <section
        style={{
          // height: "60vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "10vh",
        }}
      >
        <VStack>
          <Box style={{
            width: "90vw", display: "flex",
            flexDirection: "raw", justifyContent: "start",
          }}>
            <Text fontSize={{ sm: "4xl", md: "6xl", lg: "6xl" }} color="blue" as="b">
              新競技
            </Text>
          </Box>
          <SportsItems />
          {/* <HStack spacing={50} marginLeft={10} marginRight={10}>
            <ItemClimbing />
            <ItemSkateboard />
            <ItemBreaking />
            <ItemSurfing />
          </HStack> */}
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
          marginTop: "10vh",
        }}
      >
        <VStack>
          <Box style={{
            width: "90vw", display: "flex",
            flexDirection: "raw", justifyContent: "start",
          }}>
            <Text fontSize={{ sm: "4xl", md: "6xl", lg: "6xl" }} color="blue" as="b">
              注目の日本人選手
            </Text>
          </Box>
          <NotablePlayerItems />
          {/* <HStack spacing={50} marginLeft={10} marginRight={10}>
            <Image src={JapanFlag} />
            <Text fontSize="xl" color="black" as="b">
              hogehogehogehogehogehoge
            </Text>
          </HStack> */}
        </VStack>
      </section>
    </div >
  )
}

export default HomePage