import React from 'react';

type Props = {
    count: number;
}

const RenderOption = (props: Props) => {
    const { count } = props;

    return (
        <div className="poll-option">
            <label >Option {count + 1}:</label>
            <input type="text" name="poll-option" placeholder="Fill This Field" {...((count === 0) ? 'required' : '')} />
            
        </div>
    )
};

export default RenderOption;