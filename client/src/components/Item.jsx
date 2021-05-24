import React from "react";

// ooooooooo.   ooooooooo.     .oooooo.   ooooooooo.    .oooooo..o
// `888   `Y88. `888   `Y88.  d8P'  `Y8b  `888   `Y88. d8P'    `Y8
//  888   .d88'  888   .d88' 888      888  888   .d88' Y88bo.
//  888ooo88P'   888ooo88P'  888      888  888ooo88P'   `"Y8888o.
//  888          888`88b.    888      888  888              `"Y88b
//  888          888  `88b.  `88b    d88'  888         oo     .d8P
// o888o        o888o  o888o  `Y8bood8P'  o888o        8""88888P'

export default function Item({ record, del }) {

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
      <span>${record.amount}, it was an {record.act_name}</span>
      <button onClick={()=>{del(record.id)}}>delete</button>
    </div>
  );
}
