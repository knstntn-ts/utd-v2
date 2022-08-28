import React from "react";


function AddTaskButton(props) {


    return (
        <div className="relative flex items-center rounded-sm justify-center border-1 py-0 cursor-pointer pr-0 pl-2 my-0 bg-white z-40">
            <div className="flex w-8 items-center justify-center hover:bg-slate-100 transition duration-500"
                onClick={() => props.changeTaskProps("add")}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
            </div>
        </div>
    )

}


export default AddTaskButton;