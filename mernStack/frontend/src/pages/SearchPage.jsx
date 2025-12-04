import { Button, Input, Container, Text, Stack, Heading, For, Card, SimpleGrid} from "@chakra-ui/react"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function SearchPage() {

    var [name, setName] = useState()
    const nameUpdate = (event) => {
        setName(event.target.value)
        console.log(name)
    }
    const filterUpdate = (event) => {

        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        
    }

    const demoClubs = [
        {
            id: '1',
            name: 'Club a',
            description: 'Sample text',
            tags: ['a', 'b', 'c']
        },
        {
            id: '2',
            name: 'Club aa',
            description: 'Sample text',
            tags: ['e', 'f']
        },
        {
            id: '3',
            name: 'Club b',
            description: 'Sample text',
            tags: ['b']
        },
    ]
    const tagsList = ['a', 'b', 'c', 'd', 'e', 'f']


    return (
        <Container py={12} centerContent>
            <Stack spacing={6} align="center">
                <Heading>Search Page</Heading>
                <Text>Search for your Club!</Text>

                <Input name="searchBar" onChange={nameUpdate} onClick={nameUpdate} placeholder="Enter a club's name..."></Input>
                <SimpleGrid columns={10} gap={5}>
                    <For each={tagsList}>
                        {
                            (item, index) =>
                                <Button key={index} onClick={filterUpdate}>{item}</Button>
                        }
                    </For>
                </SimpleGrid>


                <Button>Submit</Button>
                <SimpleGrid columns={4} gap={10}>
                    <For each={demoClubs}>
                        {
                            (item, index) =>
                                <Card.Root key={index}>
                                    <Card.Header>
                                        <Link>{item.name}</Link>
                                    </Card.Header>
                                    <Card.Body>{item.description}</Card.Body>
                                    <Card.Footer>
                                        <For each={item.tags}>
                                            {
                                                (tag, tagIndex) =>
                                                    <Text key={tagIndex}>{tag}</Text>
                                            }
                                        </For>
                                    </Card.Footer>
                                </Card.Root>
                        }
                    </For>
                </SimpleGrid>
            </Stack>
        </Container>
    )
}
