import React from "react";


function CompleteAddBtn(props) {




    return (
        <button id={props.taskID} className="w-1/8 h-1/1 p-2 z-40"
            onMouseOver={() => {
                props.changeTaskProps("taskShowTooltip", true, props.taskID);
            }}
            onMouseOut={() => {
                props.changeTaskProps("taskShowTooltip", false, props.taskID);
            }}
            onClick={() => {
                props.changeTaskProps("toEdit", false, props.taskID, props.inputField);
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>

        </button>)
}

export default CompleteAddBtn;

// onClick={() => {
//     props.changeTaskProps("toEdit", !props.task.toEdit, props.taskID, props.inputField);
// }
// }