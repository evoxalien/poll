import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Option from "./Option";

type tPoll = {
  name: string;
  options: string[];
};

const Poll = () => {
  const [optionsCount, setOptionsCount] = useState<number>(3);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    let submittedPoll: tPoll = { name: "", options: [] };

    submittedPoll.name = event.target["poll-name"].value;
    for (let i = 0; i < event.target["poll-option"].length; i++) {
      if (event.target["poll-option"][i].value !== "") {
        submittedPoll.options.push(event.target["poll-option"][i].value);
      }
    }
    
    if(submittedPoll.options.length < 2){
        alert("please give your poll at least two options");
    }
    else{
        alert("poll submitted");
    }
  };

  const options: any = [];
  for (let i = 0; i < optionsCount; i++) {
    options.push(
      <div className="option-row">
        <Option count={i} />
      </div>
    );
  }
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div className="poll-header">
          <input required type="text" name="poll-name" placeholder="Name Your Poll" />
        </div>
        <div className="poll-choices">{options}</div>
        <div className="poll-buttons">
          <Button
            variant="secondary"
            onClick={() => {
              setOptionsCount(optionsCount + 1);
            }}
          >
            Add Another Option
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              //   alert("submit");
            }}
          >
            Submit Poll
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Poll;
