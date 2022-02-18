import React from "react";

const list = ['café da manhã', 'tomar banho', 'trabalhar', 'dormir'];



const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

class app extends React.Component {
  render() {
    return (
      <ul>{list.map((element) => Task(element))}</ul>
    )
  }
}

export default app;
