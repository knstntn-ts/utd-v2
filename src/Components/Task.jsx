import React from "react";
import TooltipButton from "./TaskComponents/TooltipButton";
import TaskInputField from "./TaskComponents/TaskInputField";
import TaskCheckBox from "./TaskComponents/TaskCheckBox";
import CompleteAddBtn from "./TaskComponents/CompleteAddBtn";
function Task(props) {

    const ref = React.useRef(null)

    const tooltipClasses = "inline-block absolute -right-5 -top-8 z-10 py-2 px-3 text-sm font-medium text-white bg-slate-500 rounded-lg shadow-sm transition-opacity duration-300 " + (!props.task.taskShowTooltip ? "opacity-0" : "opacity-2");


    React.useEffect(() => {
        if (props.task.newTask) {
            props.changeTaskProps("toEdit", true, props.taskID, ref);
            props.changeTaskProps("newTask", false, props.taskID, ref);
        }

    })

    let showLengthWarning = true
    if (props.task.content.length < 3) {
        showLengthWarning = true
    }
    else {
        showLengthWarning = false
    }

    return (

        <div className="relative flex items-center rounded-sm justify-between border-1 py-1 pr-0 pl-2 my-1 bg-slate-100">

            <TaskCheckBox taskID={props.taskID} task={props.task} changeTaskProps={props.changeTaskProps} />
            <TaskInputField taskID={props.taskID} task={props.task} changeTaskProps={props.changeTaskProps} inputField={ref} />

            {
                props.task.toEdit ? <CompleteAddBtn taskID={props.taskID} task={props.task} changeTaskProps={props.changeTaskProps} inputField={ref} /> :
                    <TooltipButton taskID={props.taskID} task={props.task} changeTaskProps={props.changeTaskProps} inputField={ref} />
            }

            {showLengthWarning ?
                <div className={"inline-block absolute left-10 -top-8 z-10 py-2 px-5 text-sm font-medium text-white bg-red-300 rounded-lg shadow-sm transition-opacity duration-300 "} >
                    <h1>The task is too short</h1>
                </div> : null}


            <div className={tooltipClasses} >
                <h1>Edit task</h1>
            </div>

        </div>

    )
}

export default Task;

