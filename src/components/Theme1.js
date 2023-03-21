import React, { useState } from "react";
import Button from "./Button";
import InputArea from "./InputArea";

function Theme1() {
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
      <InputArea value={input} bgColor="#010000" textColor="#FEFEFE" />
      <div className="row">
        <Button
          onClick={handleClearButtonClick}
          bgColor="#b3b3b3"
          textColor="Black"
          border="1px solid black"
          width="80px"
          height="80px"
          font-size="24px"
          margin="10px"
        >
          AC
        </Button>
        <Button
          onClick={handleDeleteButtonClick}
          bgColor="#b3b3b3"
          textColor="Black"
          border="1px solid black"
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
          bgColor="#b3b3b3"
          textColor="Black"
          border="1px solid black"
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
          bgColor="#ff9900"
          textColor="white"
          border="1px solid black"
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
          bgColor="#e6e6e6"
          textColor="Black"
          border="1px solid black"
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
          bgColor="#e6e6e6"
          textColor="Black"
          border="1px solid black"
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
          bgColor="#e6e6e6"
          textColor="Black"
          border="1px solid black"
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
          bgColor="#ff9900"
          textColor="white"
          border="1px solid black"
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
          bgColor="#e6e6e6"
          textColor="Black"
          border="1px solid black"
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
          bgColor="#e6e6e6"
          textColor="Black"
          border="1px solid black"
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
          bgColor="#e6e6e6"
          textColor="Black"
          border="1px solid black"
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
          bgColor="#ff9900"
          textColor="white"
          border="1px solid black"
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
          bgColor="#e6e6e6"
          textColor="Black"
          border="1px solid black"
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
          bgColor="#e6e6e6"
          textColor="Black"
          border="1px solid black"
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
          bgColor="#e6e6e6"
          textColor="Black"
          border="1px solid black"
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
          bgColor="#ff9900"
          textColor="white"
          border="1px solid black"
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
          bgColor="#e6e6e6"
          textColor="Black"
          pad="10px 79px"
          border="1px solid black"
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
          bgColor="#e6e6e6"
          textColor="Black"
          border="1px solid black"
          width="80px"
          height="80px"
          font-size="24px"
          margin="10px"
        >
          .
        </Button>
        <Button
          onClick={calculateResult}
          bgColor="#ff9900"
          textColor="white"
          border="1px solid black"
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

export default Theme1;