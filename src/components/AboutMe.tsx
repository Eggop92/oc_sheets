import { Heading, HStack, Image, List, VStack } from "@chakra-ui/react"

const AboutMe = () => {
    return (
        <HStack gap={10} align="start">
            <Image src="worlds.jpg" alt="About Me" />
            <VStack align="left" gap={4}>
                <Heading size="2xl" >
                    Learn more about me
                </Heading>
                <List.Root>
                    <List.Item>I'm Ego, M34.</List.Item>
                    <List.Item>My timezone is UTC+2 (Central European Time).</List.Item>
                    <List.Item>More active during weekdays mornings.</List.Item>
                    <List.Item>I had been writing and RPing since 2000 (sometimes more, sometimes less).
                        <List.Root ps="10">
                            <List.Item>Damn I feel old.</List.Item>
                        </List.Root>
                    </List.Item>
                    <List.Item>I love to create characters, worlds, stories and plots.</List.Item>
                    <List.Item>My main characters are male. Happy to create secondary or side female characters.
                        <List.Root ps="10">
                            <List.Item>Gay characters are more than welcome.</List.Item>
                        </List.Root>
                    </List.Item>
                    <List.Item>I'm used to write in first person, but I can write in third person as well.</List.Item>
                    <List.Item>My responses length depends on the contexts.
                        <List.Root ps="10">
                            <List.Item>Usually 2 or 3 paragraphs.</List.Item>
                            <List.Item>Sometimes more if left unsupervised.</List.Item>
                            <List.Item>Shorter for dialogues or quick events.</List.Item>
                        </List.Root>
                    </List.Item>
                    <List.Item>My favorite genres are:
                        <List.Root ps="10">
                            <List.Item>High fantasy: Warriors, princes, kings, dragons and high elfs.</List.Item>
                            <List.Item>Supernatural: Vampires, werewolves, ghosts, mages, witches, demons...</List.Item>
                            <List.Item>Science fiction: distopians, space travel...</List.Item>
                        </List.Root>
                    </List.Item>
                </List.Root>
            </VStack>
        </HStack>
    )
}

export default AboutMe