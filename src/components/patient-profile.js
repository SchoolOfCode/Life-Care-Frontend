import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";

export const PatientProfile = () => {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    `http://localhost:3005/api/patients/${id}`
  );

  return (
    <div className="patient-details">
      <Wrap>
        <WrapItem>
          <Avatar
            size="2xl"
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
          />
        </WrapItem>
      </Wrap>
      <h1>Name</h1>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && JSON.stringify(data)}
    </div>
  );
};
