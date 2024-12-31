/*
PROGRAMMERS Instructions

Watch this short video:
https://tk-assets.lambdaschool.com/1ea6e6a2-2ef1-45de-bcab-b99a8f775870_programmers.gif

This component keeps track of a list of pioneers in the field of programming on the one hand,
and the id of the currently celebrated programmer on the other. That's two slices of state!
We can only feature one awesome programmer at a time.

Find comments below to help you along.
*/

import React, { useState } from "react";

// Use this variable ONLY to initialize a slice of state!
// There is something in the JSX right now breaking this rule.
const listOfAwesome = [
  { id: "1", name: "Ada Lovelace" },
  { id: "2", name: "Grace Hopper" },
  { id: "3", name: "Evelyn Boyd Granville" },
  { id: "4", name: "Mary Kenneth Keller" },
  { id: "5", name: "Frances Allen" },
  { id: "6", name: "Carol Shaw" },
];

export default function Programmers() {
  // We'll have to use the state hook twice, as we need two slices of state.
  // The programmers on the one hand, and the id of the featured programmer on the other.
  const [programmers, setProgrammers] = useState(listOfAwesome);  // List of programmers
  const [featuredId, setFeaturedId] = useState(null);  // Featured programmer's ID



  const getNameOfFeatured = () => {
    if (featuredId) {
      const featuredProgrammer = programmers.find(programmer => programmer.id === featuredId);
      return featuredProgrammer ? featuredProgrammer.name : "Unknown Programmer";
    }
    return null;  // No featured programmer
  };

  const style = {
    fontSize: "1.5em",
    marginTop: "0.5em",
    color: "green",
  };

  return (
    <div className="widget-programmers container">
      <h2>Programmers</h2>
      
      {/* Step 3: Render the list of programmers dynamically */}
      <div className="programmers">
        {programmers.map((programmer) => (
          <div key={programmer.id}>
             {programmer.name}
            <button
              onClick={() => setFeaturedId(programmer.id)}  // Set the featured programmer
            >
             featured
            </button>
          </div>
        ))}
      </div>

      <div>
        {/* Step 4: Conditionally render the featured programmer */}
        {featuredId ? (
          <div style={style}> <img src="./src/components/celebration.svg"/>
Let's celebrate {getNameOfFeatured()}
          </div>
        ) : (
          <div style={style}>No featured programmer selected</div>
        )}
      </div>
    </div>
  );
}