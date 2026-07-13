import { Heading, HStack } from "@chakra-ui/react";

const Header = () => {
    return (
        <>
            <HStack justifyContent="space-between" width="100%" paddingX="4" paddingY="2">
                <Heading size="4xl">Eggop's Original Characters</Heading>
                {/* <IconButton aria-label="Menu" size='sm'>
                    <CiMenuBurger />
                </IconButton> */}
            </HStack>
        </>
    )
}

export default Header