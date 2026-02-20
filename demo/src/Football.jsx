import React from "react";
import Goal from "./goal";
import MissedGoal from "./missedGoal";

function Football() {
  const isGoal = true; // change to false to test

  if (isGoal) {
    return <Goal />;
  } else {
    return <MissedGoal />;
  }
}

export default Football;