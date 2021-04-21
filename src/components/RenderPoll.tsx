import React, { useState } from "react";
import { Button } from "react-bootstrap";
import RenderOption from "./RenderOption";
import { DataStore } from "@aws-amplify/datastore";
import { Poll } from "../models";

type tOption = {
  id: string;
  pollID: string;
  value: string;
  count: number;
};

type tPoll = {
  Title: string;
  id: string;
  Options: tOption[];
};

const RenderPoll = () => {
  const [optionsCount, setOptionsCount] = useState<number>(3);

  const createPoll = async (pollData: tPoll) => {
    try {
      await DataStore.save(
        new Poll({
          Title: pollData.Title,
          Options: pollData.Options,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const shortid = require("shortid");
    let submittedPoll: tPoll = {
      Title: "",
      id: shortid.generate(),
      Options: [],
    };

    submittedPoll.Title = event.target["poll-name"].value;
    for (let i = 0; i < event.target["poll-option"].length; i++) {
      if (event.target["poll-option"][i].value !== "") {
        submittedPoll.Options.push({
          id: shortid.generate(),
          pollID: submittedPoll.id,
          value: event.target["poll-option"][i].value,
          count: 0,
        });
      }
    }

    if (submittedPoll.Options.length < 2) {
      alert("please give your poll at least two options");
    } else {
      createPoll(submittedPoll);
      console.log(submittedPoll);
      alert("poll submitted");
    }
  };

  const options: any = [];
  for (let i = 0; i < optionsCount; i++) {
    options.push(
      <div className="option-row">
        <RenderOption count={i} />
      </div>
    );
  }
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div className="poll-header">
          <input
            required
            type="text"
            name="poll-name"
            placeholder="Name Your Poll"
          />
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

export default RenderPoll;
