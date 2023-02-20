import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Alert,
  AlertIcon,
  Box,
  Card,
  CardHeader,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";

export const Note = ({ note, error }) => {
  let date = new Date(note.time_stamp).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  let time = new Date(note.time_stamp).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      {error && (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      )}
      {note && (
        <>
          <Card mt="20px">
            <CardHeader>
              <Flex>
                <Heading size="md">{`${note.first_name} ${note.last_name}`}</Heading>
                <Spacer />
                <Flex direction="column">
                  <Box textAlign="right">{time}</Box>
                  <Box textAlign="right">{date}</Box>
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
                <AccordionPanel pb={4}>{note.overview}</AccordionPanel>
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
                <AccordionPanel pb={4}>{note.incidents}</AccordionPanel>
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
                <AccordionPanel pb={4}>{note.additional}</AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Card>
        </>
      )}
    </>
  );
};
