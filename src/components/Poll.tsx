import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Option from './Option';


type Props = {
    // count: Number;
}

const Poll = (props: Props) => {
    // const { count } = props;
    const [optionsCount, setOptionsCount] = useState<number>(3);

    const options : any = [];
    for (let i = 0; i < optionsCount; i++) {
        options.push(<div className="option-row"><Option count={i} /></div>)
    }
    return (
        <React.Fragment>
        <form>
            <div className="poll-header">
            <input type="text" id="poll-name" name="poll-name" placeholder="Name Your Poll" />
            
            </div>
            <div className="poll-choices">{options}</div>
            <div className="poll-buttons">
                <Button variant="secondary" onClick={() => { setOptionsCount(optionsCount + 1) }} >Add Another Option</Button>
                <Button variant="primary" onClick={() => { alert("submit") }}>Submit Poll</Button>
            </div>
        </form>
        </React.Fragment>
    )
};

export default Poll;