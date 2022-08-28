import React from "react";


function TitleField(props) {
    
    
    const checkedClasses = "text-left text-m ml-3 w-5/6 border-transparent text-slate-300 bg-slate-100 focus:text-slate-200 line-through"
    const unCheckedClasses = "underline cursor-pointer hover:text-slate-400 focus:text-slate-400 outline-offset-2 focus:outline-sky-200 text-lg"


    return (
        <input id={"input-" + props.listID} type="text" value={props.listTitle}
            className={unCheckedClasses}
            onChange={(event) => {
                props.changeTitle(event.target.value, props.listID);
            }}
        />
    )
}

export default TitleField;

// <h3 className="cursor-pointer" onClick={}>{props.listTitle}</h3>
// className={props.task.completed ? checkedClasses : unCheckedClasses}
// value={props.task.content} contentEditable={props.task.toEdit} disabled={props.task.completed ? true : false}
// onBlur={() => {
//     props.changeTaskProps("toEdit", false, props.taskID)
// }}
// onChange={(event) => {
//     props.changeTaskProps("content", event.target.value, props.taskID);
// }
// }