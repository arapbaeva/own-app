import React, {useState} from 'react';

export const OnnOff = () => {
    const [on, setOn] = useState(false)

    const onStyle = {
        height: "30px",
        width: "30px",
        backgroundColor: on ? "green" : "white",
        display:"inline-block",
        marginLeft: "2px",
        border: "spx solid black"
    }
    const offStyle = {
        height: "30px",
        width: "30px",
        backgroundColor:  on ? "white" : "red",
        display:"inline-block",
        border: "spx solid black"
    }
    const indicate = {
        height: "15px",
        width: "15px",
        backgroundColor: on ? "green" : "red",
        borderRadius: "5px",
        marginLeft: "2px",
        display:"inline-block",
    }
    return (
        <div>
            <div style={onStyle} onClick={()=>{setOn(true)}}>on</div>
            <div style = {offStyle} onClick={()=>{setOn(false)}}>Off</div>
            <div style={indicate}></div>
        </div>
    );
};

