import React from "react";
import Card from "./Card"
function DayCard(props) {

    const [cardsOnDay, setCardsOnDay] = React.useState(
        props.cardsOnDay
    )

    function changeTitle(newTitle, listID) {
        setCardsOnDay((prev) => {
            return (
                prev.map((list, index) => {
                    if (String(index) === listID[listID.length - 1]) {
                        list = { ...list, "listTitle": newTitle }
                    }
                    return list
                }))
        })
    }


    return (

        <div className="justify-items-center mx-auto rounded border-2 p-4 my-5 max-w-xs">
            <h1>Monday</h1>
            {cardsOnDay.map((card, index) => {
                return (
                    <Card key={"monday-list-" + index} listID={"monday-list-" + index} cardContent={card.cardContent} listTitle={card.listTitle} changeTitle={changeTitle}
                        isExpanded={card.expanded}
                    />
                )
            })}
        </div>

    )
}

export default DayCard;