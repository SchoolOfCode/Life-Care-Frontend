import { Center, Image, keyframes } from "@chakra-ui/react";
import gif from "../assets/lifecare-logo.svg";

const animation = keyframes`
0% {
  transform: scale(.75)
}
50% {
  transform: scale(1.25)
  }
100% {
  transform: scale(.75)
  }
`;

export const PageLoader = () => {
	const loadingImg = gif;
	const loadingAnimation = `${animation} infinite .5s`;

	return (
		<Center bgColor={"#fff"} h={"100vh"}>
			<Image src={loadingImg} alt="Loading..." w={50} h={50} animation={loadingAnimation} />
		</Center>
	);
};
