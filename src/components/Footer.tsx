import { HStack, IconButton, Link, Text } from '@chakra-ui/react';
import { BsReddit } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <HStack>
                <Text>Where to find me: </Text>
                <IconButton aria-label="Discord" size='sm'> <FaDiscord color="white" /> </IconButton>
                <Link href="https://www.reddit.com/user/Eggop92/"><IconButton aria-label="Reddit" size='sm'> <BsReddit /> </IconButton></Link>
            </HStack >

        </>
    )
}

export default Footer