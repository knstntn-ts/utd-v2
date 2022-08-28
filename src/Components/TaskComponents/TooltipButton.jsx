import React from "react";


function TooltipButton(props) {
    return (
        <button id={props.taskID} className="w-1/8 h-1/1 p-2 z-40"
            onMouseOver={() => {
                props.changeTaskProps("taskShowTooltip", true, props.taskID);
            }}
            onMouseOut={() => {
                props.changeTaskProps("taskShowTooltip", false, props.taskID);
            }}
            onClick={() => {
                props.changeTaskProps("toEdit", true, props.taskID, props.inputField);
            }
            }>



            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer text-right" viewBox="0 0 25 20" fill="currentColor">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>



        </button>)
}

export default TooltipButton

