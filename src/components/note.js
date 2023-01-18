import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Alert, AlertIcon, Box, Card, CardHeader, Flex, Heading, Spacer } from "@chakra-ui/react";

export const Note = ({ content, error, isPending }) => {
	let date = new Date(content.time_stamp).toLocaleDateString();
	let time = new Date(content.time_stamp).toLocaleTimeString();

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
		</>
	);
};
