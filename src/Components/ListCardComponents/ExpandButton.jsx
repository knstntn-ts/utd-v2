import React from "react";


function ExpandButton(props) {
    return (
        <div className="relative flex items-center rounded-b-lg justify-center border-0 py-0 cursor-pointer pr-0 pl-2 -mt-1 mb-1 z-40 bg-slate-200 "
            onClick={() => {
                console.log("clicked")
                props.expandCard(props.listID)
            }}>
            <div className="flex w-8 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    )

}


export default ExpandButton;