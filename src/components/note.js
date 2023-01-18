import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Card,
  CardHeader,
  Container,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";

export const Note = ({ content, error, isPending, key }) => {
  let date = new Date(content.time_stamp).toLocaleDateString();
  console.log(date);

  let time = new Date(content.time_stamp).toLocaleTimeString();
  console.log(time);

  return (
    <Container>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {content && (
        <>
          <Card mt="20px">
            <CardHeader>
              <Flex>
                <Heading size="md">Carer Name</Heading>
                <Spacer />
                <Flex direction="column">
                  <Box>{time}</Box>
                  <Box>{date}</Box>
                </Flex>
              </Flex>
            </CardHeader>

            <Accordion allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Overview
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{content.content}</AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Incident/Concerns
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{content.incidents}</AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Additional Information
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{content.additional}</AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Card>
        </>
      )}
    </Container>
  );
};
