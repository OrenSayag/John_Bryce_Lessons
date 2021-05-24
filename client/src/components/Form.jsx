import React, { useEffect, useState } from "react";

// ooooooooo.   ooooooooo.     .oooooo.   ooooooooo.    .oooooo..o
// `888   `Y88. `888   `Y88.  d8P'  `Y8b  `888   `Y88. d8P'    `Y8
//  888   .d88'  888   .d88' 888      888  888   .d88' Y88bo.
//  888ooo88P'   888ooo88P'  888      888  888ooo88P'   `"Y8888o.
//  888          888`88b.    888      888  888              `"Y88b
//  888          888  `88b.  `88b    d88'  888         oo     .d8P
// o888o        o888o  o888o  `Y8bood8P'  o888o        8""88888P'
export default function Form({ add }) {
  //  .oooooo..o ooooooooooooo       .o.       ooooooooooooo oooooooooooo
  //  d8P'    `Y8 8'   888   `8      .888.      8'   888   `8 `888'     `8
  //  Y88bo.           888          .8"888.          888       888
  //   `"Y8888o.       888         .8' `888.         888       888oooo8
  //       `"Y88b      888        .88ooo8888.        888       888    "
  //  oo     .d8P      888       .8'     `888.       888       888       o
  //  8""88888P'      o888o     o88o     o8888o     o888o     o888ooooood8
  const [amount, setAmount] = useState(0);
  const [act_id, setAct_id] = useState(1);
  const [actions, setActions] = useState([]);

  //   oooooooooooo oooooooooooo oooooooooooo oooooooooooo   .oooooo.   ooooooooooooo
  //   `888'     `8 `888'     `8 `888'     `8 `888'     `8  d8P'  `Y8b  8'   888   `8
  //    888          888          888          888         888               888
  //    888oooo8     888oooo8     888oooo8     888oooo8    888               888
  //    888    "     888    "     888    "     888    "    888               888
  //    888       o  888          888          888       o `88b    ooo       888
  //   o888ooooood8 o888o        o888o        o888ooooood8  `Y8bood8P'      o888o
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:666/actions");
        const data = await res.json();
        setActions(data.actions);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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
      <select name="" id="" onChange={(e) => setAct_id(+e.target.value)}>
        {!actions.length && <option>Loading...</option>}
        {actions.map((action) => (
          <option key={action.id} value={action.id}>
            {action.act_name}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="amount"
        onChange={(e) => {
          setAmount(+e.target.value);
        }}
      />
      <button
        onClick={() => {
          add(act_id, amount);
        }}
      >
        Save
      </button>
    </div>
  );
}
