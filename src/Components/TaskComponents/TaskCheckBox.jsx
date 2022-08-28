import React from "react";


function TaskCheckBox(props) {
    return (
        <input name={props.taskID} type="checkbox" className="w-5 h-5 accent-slate-400 flex-none"
            checked={(props.task.completed ? true : false)} autoComplete="off"
            onChange={() => {
                props.changeTaskProps("completed", !props.task.completed, props.taskID)
            }}
        />)
}

export default TaskCheckBox;