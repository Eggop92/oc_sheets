import { Tabs } from "@chakra-ui/react";
import AboutMe from "./AboutMe";

const Body = () => {

    return (
        <Tabs.Root variant="enclosed" fitted defaultValue="aboutMe">
            <Tabs.List>
                <Tabs.Trigger value="aboutMe">About me</Tabs.Trigger>
                <Tabs.Trigger value="tab-2">Characters</Tabs.Trigger>
                <Tabs.Trigger value="tab-3">Samples</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="aboutMe">
                <AboutMe />
            </Tabs.Content>
            <Tabs.Content value="tab-2">
                <p>Characters</p>
            </Tabs.Content>
            <Tabs.Content value="tab-3">
                <p>Samples</p>
            </Tabs.Content>
        </Tabs.Root>
    )
}

export default Body