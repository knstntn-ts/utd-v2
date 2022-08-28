
import './App.css';

import React from 'react';
import DayCard from './Components/DayCard';

function App() {
  const dummyCardContent = [
    {
      content: "To do 1",
      taskShowTooltip: false,
      toEdit: false,
      completed: false
    },
    {
      content: "To do 2",
      taskShowTooltip: false,
      toEdit: false,
      completed: false
    },
    {
      content: "To do 3",
      taskShowTooltip: false,
      toEdit: false,
      completed: false
    },
    {
      content: "To do 4",
      taskShowTooltip: false,
      toEdit: false,
      completed: false
    }
  ]
  const dummyCardContent2 = [
    {
      content: "To do 1",
      taskShowTooltip: false,
      toEdit: false,
      completed: false
    },
    {
      content: "To do 2",
      taskShowTooltip: false,
      toEdit: false,
      completed: false
    },
    {
      content: "To do 3",
      taskShowTooltip: false,
      toEdit: false,
      completed: false
    }
  ]
  const cards = [{
    listTitle: "List 1",
    expanded: false,
    cardContent: dummyCardContent
  },
  {
    listTitle: "List 2",
    expanded: false,
    cardContent: dummyCardContent2
  }

  ]

  return (
    <div className="App justify-items-center">
      <DayCard cardsOnDay={cards} />
    </div>
  );
}

export default App;
{/* <div>
<input ref={ref} id="message" name="message" className="flex-1 container text-left text-m ml-3 w-5/6 focus:ring-blue-500 focus:border-blue-500 focus:text-blue-400"
disabled={false} contentEditable={true} />

<hr />

<button onClick={handleClick}>Focus input</button>
</div> */}