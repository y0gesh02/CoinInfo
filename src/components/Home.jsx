import { Box, Heading, Stack } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <>
      <Box
        bgImage="url('https://raw.githubusercontent.com/piyush-eon/react-crypto-tracker/master/public/banner2.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        w={"full"}
        h={"50vh"}
      >
        <Stack pt={"80px"}>
          <Heading
            as="h1"
            size="2xl"
            noOfLines={1}
            textAlign={"center"}
            color={"white"}
          >
            CoinInfo
          </Heading>

          <Heading
            as="h1"
            size="2xl"
            noOfLines={1}
            color="white"
            pt={"20px"}
            textAlign={"center"}
          >
            The Most Trusted Cryptocurrency Platform
          </Heading>

          <Heading
            as="h1"
            fontSize="xl"
            noOfLines={1}
            spacing={10}
            color="white"
            textAlign={"center"}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Heading>
        </Stack>
      </Box>
    </>
  );
};

export default Home;
