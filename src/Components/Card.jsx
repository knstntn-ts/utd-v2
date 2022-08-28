import React from "react";
import Task from "./Task";
import TitleField from "./ListCardComponents/TitleField";
import AddTaskButton from "./ListCardComponents/AddTaskButton";
import ExpandButton from "./ListCardComponents/ExpandButton";
import ClickAwayListener from "./ClickAwayListener";

function Card(props) {
    // Dummy empty task that can be added to the list (for initial testing)
    let emptyTask = {
        content: "New Task",
        taskShowTooltip: false,
        toEdit: false,
        completed: false,
        newTask: true
    }


    // Variables for limiting number of tasks, and keeping track of how many are displayed
    const limitTasksOnCard = 3;
    let currentNumTasks = 0;

    // States and hooks for managing the content of the card, namely tasks on it
    const [cardContent, setCardContent] = React.useState(props.cardContent)

    // States and hooks for managing whether the card is expanded or not
    const [cardExpand, setCardExpand] = React.useState(props.isExpanded)

    // Manages the changes made in the content of tasks or addition of new one
    function changeTaskProps(property, value, taskID, ref) {
        setCardContent((prev) => {
            // Adding tasks
            if (property === "add") {
                console.log("Going to add new task to " + props.listID);
                return ([...prev, emptyTask])
            }
            // Perform other manipulations to task, like changing content, setting it to edit, show/hide tooltip
            else if (taskID !== "all") {
                return (prev.map((task, index) => {
                    if (String(index) === taskID[taskID.length - 1]) {
                        task = { ...task, [property]: value }
                    }
                    return task
                }
                ))
            }
            // if taskID is all, then change property of each task
            else {
                return (prev.map((task) => {
                    return {...task, [property]: value}
                }))
            }

        }
        )
        // When new task is being added, it will focus newly added input area
        if (ref) {
            ref.current.focus();
        }
    }


    return (
        // Click Away listener
        <ClickAwayListener clickID={"clicklistener-" + props.listID}
            whenClicked={() => setCardExpand(true)}
            // In addtiton to setting the card to collapsed, set all tasks to toEdit: false, this way the check mark is not shown but the 3 dots thingy is
            whenUnClicked={() => {
                setCardExpand(false);
                changeTaskProps("toEdit", false, "all")
            }}>

            <div className="container mx-auto rounded-lg border-2 p-4 my-2 max-w-xs" id={props.listID}>
                {/* Title of the list */}
                <TitleField listTitle={props.listTitle} listID={props.listID} changeTitle={props.changeTitle} />

                {/* Cycle through all tasks on card and display them */}
                {cardContent.map((task, index) => {
                    // If there are more than 3 tasks, don't show them but show the expand button
                    if (currentNumTasks < limitTasksOnCard && !cardExpand) {
                        currentNumTasks++;
                        return <Task key={props.listID + "-" + index} taskID={props.listID + "-" + index} task={task} changeTaskProps={changeTaskProps} />
                    }
                    // In case the card is expanded, show all the tasks together with Add task button
                    else if (cardExpand) {
                        return <Task key={props.listID + "-" + index} taskID={props.listID + "-" + index} task={task} changeTaskProps={changeTaskProps} />
                    }
                })}

                {/* Display the expand button only in the case when Card is not expanded and there are more tasks than the limit, which is 3 for now */}
                {(!cardExpand && cardContent.length > limitTasksOnCard) &&
                    <ExpandButton key={props.listID + "-expandButton"} listID={props.listID} expandCard={props.expandCard} />}


                {/* Display the Add button only in the case when Card is expanded and there are less tasks than the limit, which is 3 for now */}
                {(cardExpand) ? <AddTaskButton listID={props.listID} changeTaskProps={changeTaskProps} /> :
                    (cardContent.length <= limitTasksOnCard) ? <AddTaskButton listID={props.listID} changeTaskProps={changeTaskProps} /> : null}
            </div>
        </ClickAwayListener>
    )
}

export default Card;