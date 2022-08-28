import React from "react";

const checkedClasses = "text-left text-m ml-3 w-5/6 border-transparent text-slate-300 bg-slate-100 focus:text-slate-200 line-through "
const unCheckedClasses = "text-left text-m ml-3 w-5/6 border-transparent bg-slate-100 focus:text-slate-400 outline-offset-2 focus:outline-sky-200"

function TaskInputField(props) {

    return (
        <input id={"input-" + props.taskID} type="text" ref={props.inputField}
            minLength="3"
            className={props.task.completed ? checkedClasses : unCheckedClasses}
            value={props.task.content} contentEditable={props.task.toEdit} disabled={props.task.completed ? true : false}
            onBlur={() => {
                props.changeTaskProps("toEdit", false, props.taskID)
            }}
            onChange={(event) => {
                props.changeTaskProps("content", event.target.value, props.taskID);
            }
            }
            onFocus={() => {
                props.changeTaskProps("toEdit", true, props.taskID)
            }}

        />)
}

export default TaskInputField;