// import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

const useFetch = async (url) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);
	// const { getAccessTokenSilently } = useAuth0();




	
	useEffect(() => {
		async function fetchData() {
			try {
				// const accessToken = await getAccessTokenSilently();
				const response = await fetch(url);
				if (!response.ok) {
					throw Error("Could not fetch the data for that resource");
				}
				const json = await response.json();
				setData(json.payload);
				setIsPending(false);
				setError(null);
			} catch (err) {
				setIsPending(false);
				setError(err.message);
			}
		}
		fetchData();
	}, [url]);

	console.log(data, url, isPending, error);

	return data;
};

export default useFetch;
