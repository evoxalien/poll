import React from 'react';

type Props = {
    count: number;
}

const Option = (props: Props) => {
    const { count } = props;

    return (
        <div className="poll-option">
            <label >Option {count + 1}:</label>
            <input type="text" id={`label-${count}`} name="option" placeholder="Fill This Field" />
            
        </div>
    )
};

export default Option;