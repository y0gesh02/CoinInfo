import { Button, HStack, useColorMode } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <HStack p={"5"} shadow={"base"} bgColor={"white.800"} spacing="50px">
        <Button variant={"unstyled"} color={"#2B6CB0"} size="lg" fontSize="3xl">
          CoinInfo
        </Button>
        <Button variant={"unstyled"} color={"black"} size="lg">
          <Link to="/coins">Coins</Link>
        </Button>
        <Button variant={"unstyled"} color={"black"} size="lg">
          <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button onClick={toggleColorMode} align="right">
          {colorMode === "light" ? "Dark" : "Light"} Mode
        </Button>
      </HStack>
    </>
  );
};

export default Header;
