/*
COUNTER Instructions

Watch this short video:
https://tk-assets.lambdaschool.com/59036a85-0980-42c8-81ad-9afc8354497f_counter-clip.gif

How many slices of state do you think are necessary to act as "sources of truth" for all
the things that change in this widget? Give it some thought before continuing reading!

A naive developer might say 3 different slices:
  - The count
  - Whether the text is color crimson or royalblue
  - Whether the text reads "even" or "odd"

But a single slice of state is all that's needed here: the count!
The other things can simply be _derived_ from the count itself.

STEP 0:
  Start by studying the component below, and importing the state hook.

STEP 1:
  Using the state hook, create a 'count', 'setCount' pair.
  The 'count' state should be initialized to a number of your liking (probably zero).

STEP 2:
  The 'style' object has the 'color' property hard-coded to "royalblue".
  What the value of 'color' should be instead is a ternary expression that goes like this:
  If count is even, then "royalblue", else "crimson".

STEP 3:
  We need to replace some hard-coded info in the JSX with expressions, interpolated inside curly brackets.
  Start by replacing the character "0" with {count}. The 'count' slice of state is the source of truth here.
  Then, replace the word "even" with a ternary: {if count is even number, then string "even", else string "odd"}.

STEP 4:
  This click handler needs to use 'setCount' to schedule the 'count' to become the current 'count' plus one.
  These state changes are not synchronous: the updated count arrives on the next run of the Counter component.
  Do NOT simply do count++. The plus plus is forbidden! We never mutate a slice of state in place. Even if you could
  reassign a const, React would not be aware anything changed. Always use the state updater, passing in a new value.

STEP 5:
  This click handler needs to use 'setCount' to set the 'count' to be the current 'count' minus one.
  Do NOT do count--. That amounts to trying to mutate 'count' in place. This is the road to perdition.

STEP 6:
  This click handler needs to use 'setCount' to set the 'count' to be the initial number you chose.
*/

import React, {useState} from "react"; /* STEP 0 */

export default function Counter() {
  /* STEP 1 */

  const [number, setNumber] = useState(0);

  const style = {
    fontSize: "1.5em",
    marginBottom: "0.3em",
    color: number % 2 === 0 ? "blue" : "red",
  };

  const inclrementClick = () => {
    setNumber(number + 1);
  };

  const decrementClick = () => {
    setNumber(number - 1);
    if (number === 0)
      {setNumber(0)};
  };

  const resetClick = () => {
    setNumber(0);
  };

  const iseven = number % 2 === 0 ? "even" : "odd";

  return (
    <div className="widget-counter container">
      <h2>Counter</h2>
      <div style={style}> Number {number} is {iseven}</div>

      <div>
        <button style={{cursor: "pointer"}} onClick={inclrementClick}>Increment</button>
        <button style={{cursor:  number === 0 ? "none" : "pointer"}} onClick={decrementClick}>Decrement</button>
        <button style={{cursor: "pointer"}} onClick={resetClick}>Reset</button>
      </div>
    </div>
  );
}