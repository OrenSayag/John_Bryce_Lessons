import React, { useState } from "react";
import Item from "./Item";

// ooooooooo.   ooooooooo.     .oooooo.   ooooooooo.    .oooooo..o
// `888   `Y88. `888   `Y88.  d8P'  `Y8b  `888   `Y88. d8P'    `Y8
//  888   .d88'  888   .d88' 888      888  888   .d88' Y88bo.
//  888ooo88P'   888ooo88P'  888      888  888ooo88P'   `"Y8888o.
//  888          888`88b.    888      888  888              `"Y88b
//  888          888  `88b.  `88b    d88'  888         oo     .d8P
// o888o        o888o  o888o  `Y8bood8P'  o888o        8""88888P'
export default function List({ arr, del }) {
  //  .oooooo..o ooooooooooooo       .o.       ooooooooooooo oooooooooooo
  //  d8P'    `Y8 8'   888   `8      .888.      8'   888   `8 `888'     `8
  //  Y88bo.           888          .8"888.          888       888
  //   `"Y8888o.       888         .8' `888.         888       888oooo8
  //       `"Y88b      888        .88ooo8888.        888       888    "
  //  oo     .d8P      888       .8'     `888.       888       888       o
  //  8""88888P'      o888o     o88o     o8888o     o888o     o888ooooood8
  const [filter, setFilter] = useState(0);

  //   oooo  .oooooo..o ooooooo  ooooo
  //   `888 d8P'    `Y8  `8888    d8'
  //    888 Y88bo.         Y888..8P
  //    888  `"Y8888o.      `8888'
  //    888      `"Y88b    .8PY888.
  //    888 oo     .d8P   d8'  `888b
  // .o. 88P 8""88888P'  o888o  o88888o
  // `Y888P
  return (
    <div>
      <div className="filters">
        <button onClick={() => setFilter(1)}>Outcome</button>
        <button onClick={() => setFilter(2)}>Income</button>
        <button onClick={() => setFilter(3)}>Loan</button>
        <button onClick={() => setFilter(0)}>All</button>
      </div>
      {!arr.length && <h1>No records yet...</h1>}
      {arr
        .filter((record) => {
          if (!filter) {
            return true;
          } else {
            return record.act_id === filter;
          }
        })
        .map((record) => (
          <Item key={record.id} record={record} del={del} />
        ))}
    </div>
  );
}
