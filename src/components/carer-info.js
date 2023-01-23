import useFetch from "../hooks/useFetch";
import { Avatar, Wrap, WrapItem, Heading, Card, Center, AlertIcon, Alert } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

export const CarerInfo = () => {
	const { user } = useAuth0();
	const { data: carer, error } = useFetch(`${process.env.REACT_APP_API_SERVER_URL}/api/carers/${user.carer_id}`);

	return (
		<>
			{error && (
				<Alert status="error">
					<AlertIcon />
					{error}
				</Alert>
			)}

			{carer && (
				<>
					<Center m="20px">
						<Wrap>
							<WrapItem>
								<Avatar size="2xl" src={carer.avatar} />
							</WrapItem>
						</Wrap>
					</Center>
					{/* <Center m="10px"> */}
					<Heading textAlign={"center"}>{`Welcome back, ${carer.first_name}!`}</Heading>
					{/* </Center> */}
					<Card></Card>
				</>
			)}
		</>
	);
};
