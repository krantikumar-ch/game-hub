import { HStack, Image } from "@chakra-ui/react";
import logo from "./../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearchText: (searchText: string) => void;
}

const NavBar = ({ onSearchText }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearchText={onSearchText} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
