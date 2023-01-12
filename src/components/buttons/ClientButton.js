import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ClientButton() {
	const navigate = useNavigate();


    const [isButtonClicked, setIsButtonClicked] = useState(false);
  
    const handleClick = () => {
      if (!isButtonClicked) {
        setIsButtonClicked(true);
        navigate('/client-profile')
      }
    }
    return (
      <button onClick={handleClick}>Client</button>
    )
  }