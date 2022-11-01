import {
  Avatar,
  Box,
  Center,
  Stack,
  Text,
  VStack,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://avatars.githubusercontent.com/u/25058652";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      mt={"50"}
      px={"10"}
      py={["10", "0"]}
    >
      {/* <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
           

        </VStack> */}

      <Center color="white">
        <a href="https://github.com/y0gesh02" target={"blank"}>
          {" "}
          <Heading noOfLines={1}>Made with ❤ by Yogesh</Heading>
        </a>
      </Center>
      {/* <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Our Founder</Text>
        </VStack> */}
    </Box>
  );
};

export default Footer;
