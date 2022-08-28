import React from "react";


function AddTaskField(props) {
    let newTasksOnList = {
        content: "To do new",
        taskShowTooltip: false,
        toEdit: true,
        completed: false
    }

    return (
        <input id={"input-" + props.taskID} type="text" ref={props.inputField}
            className="text-left text-m ml-3 w-5/6 border-transparent bg-slate-100 focus:text-slate-400 outline-offset-2 focus:outline-sky-200"
            value={props.task.content} contentEditable={props.task.toEdit} disabled={props.task.completed ? true : false}
            onBlur={() => {
                props.changeTaskProps("toEdit", false, props.taskID)
            }}
            onChange={(event) => {
                props.changeTaskProps("content", event.target.value, props.taskID);
            }
            }

        />)
}


export default AddTaskField;