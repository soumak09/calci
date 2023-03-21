import React, { useState } from "react";
import Button from "./Button";
import InputArea from "./InputArea";

function Theme2() {
  const [input, setInput] = useState("");

  function handleButtonClick(event) {
    setInput(input + event.target.value);
  }

  function handleDeleteButtonClick() {
    setInput(input.slice(0, -1));
  }

  function handleClearButtonClick() {
    setInput("");
  }

  function calculateResult() {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Invalid Expression");
    }
  }
  return (
    <>
      <InputArea value={input} bgColor="#d9d9d9" textColor="#000000" />
      <div className="row">
        <Button
          onClick={handleClearButtonClick}
          bgColor="#666666"
          textColor="#ffffff"
          border="1px solid white"
          width="80px"
          height="80px"
          font-size="24px"
          margin="10px"
        >
          AC
        </Button>
        <Button
          onClick={handleDeleteButtonClick}
          bgColor="#666666"
          textColor="#ffffff"
          border="1px solid white"
          width="80px"
          height="80px"
          font-size="24px"
          margin="10px"
        >
          BACK
        </Button>
        <Button
          onClick={handleButtonClick}
          value="%"
          bgColor="#666666"
          textColor="#ffffff"
          border="1px solid white"
          width="80px"
          height="80px"
          font-size="24px"
          margin="10px"
        >
          %
        </Button>
        <Button
          onClick={handleButtonClick}
          value="/"
          bgColor="#1a1aff"
          textColor="#ffffff"
          border="1px solid white"
          width="80px"
          height="80px"
          font-size="24px"
          margin="10px"
        >
          /
        </Button>
      </div>
      <div className="row">
        <Button
          onClick={handleButtonClick}
          value="7"
          bgColor="#000000"
          textColor="#ffffff"
          border="1px solid white"
          width="80px"
          height="80px"
          font-size="24px"
          margin="10px"
        >
          7
        </Button>
        <Button
          onClick={handleButtonClick}
          value="8"
          bgColor="#000000"
          textColor="#ffffff"
          border="1px solid white"
          width="80px"
          height="80px"
          font-size="24px"
          margin="10px"
        >
          8
        </Button>
        <Button
          onClick={handleButtonClick}
          value="9"
          bgColor="#000000"
          textColor="#ffffff"
          border="1px solid white"
          width="80px"
          height="80px"
          font-size="24px"
          margin="10px"
        >
          9
        </Button>
        <Button
          onClick={handleButtonClick}
          value="*"
          bgColor="#1a1aff"
          textColor="white"
          border="1px solid white"
          width="80px"
          height="80px"
          font-size="24px"
          margin="10px"
        >
          <b>X</b>
        </Button>
      </div>
      <div className="row">
        <Button
          onClick={handleButtonClick}
          value="4"
          bgColor="#000000"
          textColor="#ffffff"
          border="1px solid white"
          width="80px"
          height="80px"
          font-size="24px"
          margin="10px"
        >
          4
        </Button>
        <Button
          onClick={handleButtonClick}
          value="5"
          bgColor="#000000"
          textColor="#ffffff"
          border="1px solid white"
          width="80px"
          height="80px"
          font-size="24px"
          margin="10px"
        >
          5
        </Button>
        <Button
          onClick={handleButtonClick}
          value="6"
          bgColor="#000000"
          textColor="#ffffff"
          border="1px solid white"
          width="80px"
          height="80px"
          font-size="24px"
          margin="10px"
        >
          6
        </Button>
        <Button
          onClick={handleButtonClick}
          value="-"
          bgColor="#1a1aff"
          textColor="white"
          border="1px solid white"
          width="80px"
          height="80px"
          font-size="24px"
          margin="10px"
        >
          -
        </Button>
      </div>
      <div className="row">
        <Button
          onClick={handleButtonClick}
          value="1"
          bgColor="#000000"
          textColor="#ffffff"
          border="1px solid white"
          width="80px"
          height="80px"
          font-size="24px"
          margin="10px"
        >
          1
        </Button>
        <Button
          onClick={handleButtonClick}
          value="2"
          bgColor="#000000"
          textColor="#ffffff"
          border="1px solid white"
          width="80px"
          height="80px"
          font-size="24px"
          margin="10px"
        >
          2
        </Button>
        <Button
          onClick={handleButtonClick}
          value="3"
          bgColor="#000000"
          textColor="#ffffff"
          border="1px solid white"
          width="80px"
          height="80px"
          font-size="24px"
          margin="10px"
        >
          3
        </Button>
        <Button
          onClick={handleButtonClick}
          value="+"
          bgColor="#1a1aff"
          textColor="white"
          border="1px solid white"
          width="80px"
          height="80px"
          font-size="24px"
          margin="10px"
        >
          +
        </Button>
      </div>
      <div className="row">
        <Button
          onClick={handleButtonClick}
          value="0"
          bgColor="#000000"
          textColor="#ffffff"
          pad="10px 79px"
          border="1px solid white"
          width="80px"
          height="80px"
          font-size="24px"
          margin="10px"
        >
          0
        </Button>
        <Button
          onClick={handleButtonClick}
          value="."
          bgColor="#000000"
          textColor="#ffffff"
          border="1px solid white"
          width="80px"
          height="80px"
          font-size="24px"
          margin="10px"
        >
          .
        </Button>
        <Button
          onClick={calculateResult}
          bgColor="#1a1aff"
          textColor="white"
          border="1px solid white"
          width="80px"
          height="80px"
          font-size="24px"
          margin="10px"
        >
          =
        </Button>
      </div>
    </>
  );
}

export default Theme2;