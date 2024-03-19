/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {   Input, InputGroup } from "@chakra-ui/react";
import { AddIcon, CheckIcon } from '@chakra-ui/icons'
interface ToggleableInputProps {
    inputValue: string;
    setInputValue: (value: string) => void;
  }
const ToggleableInput = ({inputValue, setInputValue}: ToggleableInputProps) => {
  const [isEditing, setIsEditing] = useState(false);
// const [inputText, setInputText] = useSate([])
  const handleButtonClick = () => {
    setIsEditing(true);
  };

//   const handleInputChange = (event: any) => {
//     setInputValue(event.target.value);
//   };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  const handleCloseButtonClick = () => {
    setIsEditing(false); // Fecha o campo de entrada
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <AddIcon
        onClick={handleButtonClick}
        style={{
          opacity: isEditing ? 0 : 1,
          pointerEvents: isEditing ? "none" : "auto",
          transition: "opacity 0.5s ease",
          cursor: "pointer",
          fontSize: '16px',
          marginLeft: '10px'
        }}
      />
      <InputGroup
        style={{
          flex: 1,
          opacity: isEditing ? 1 : 0,
          pointerEvents: isEditing ? "auto" : "none",
          transition: "opacity 0.5s ease",
          marginTop: "10px",
        }}
      >
        <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
          onBlur={handleInputBlur}
          autoFocus={isEditing}
          pr="4.5rem"
          backgroundColor={"#232425"}
          borderRadius={6}
          h={25}
          mb={10}
          p={10}
        />
        {isEditing && (
          <CheckIcon
            onClick={handleCloseButtonClick}
            style={{
                marginLeft: '10px',
            fontSize: '22px',
              cursor: "pointer",
            }}
          />
        )}
      </InputGroup>
    </div>
  );
};

export default ToggleableInput;
