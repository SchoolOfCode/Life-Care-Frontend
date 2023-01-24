import { useAuth0 } from "@auth0/auth0-react";
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

export const Note = ({ content, error }) => {
  let date = new Date(content.time_stamp).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  let time = new Date(content.time_stamp).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const { user } = useAuth0();
  console.log(user);

  return (
    <>
      {error && (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      )}

      {content && (
        <>
          <Card mt="20px">
            <CardHeader>
              <Flex>
                <Heading size="md">{`${content.first_name} ${content.last_name}`}</Heading>
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
    </>
  );
};
