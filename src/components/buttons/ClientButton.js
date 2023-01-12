import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ClientButton() {
	const navigate = useNavigate();


    const [isButtonClicked, setIsButtonClicked] = useState(false);
  
    const handleClick = () => {
      if (!isButtonClicked) {
        console.log("Button Clicked");
        setIsButtonClicked(true);
        navigate('/ClientProfilePage')
      }
    }
    return (
      <button onClick={handleClick}>Client</button>
    )
  }