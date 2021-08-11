<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  //  .oooooo..o ooooooooooooo       .o.       ooooooooooooo oooooooooooo
  //  d8P'    `Y8 8'   888   `8      .888.      8'   888   `8 `888'     `8
  //  Y88bo.           888          .8"888.          888       888
  //   `"Y8888o.       888         .8' `888.         888       888oooo8
  //       `"Y88b      888        .88ooo8888.        888       888    "
  //  oo     .d8P      888       .8'     `888.       888       888       o
  //  8""88888P'      o888o     o88o     o8888o     o888o     o888ooooood8
  const [arr, setArr] = useState([]);
  const [balance, setBalance] = useState(0);
  const [update, setUpdate] = useState(false)

                                                                 

  // oooooooooooo oooooooooooo oooooooooooo oooooooooooo   .oooooo.   ooooooooooooo
  // `888'     `8 `888'     `8 `888'     `8 `888'     `8  d8P'  `Y8b  8'   888   `8
  //  888          888          888          888         888               888
  //  888oooo8     888oooo8     888oooo8     888oooo8    888               888
  //  888    "     888    "     888    "     888    "    888               888
  //  888       o  888          888          888       o `88b    ooo       888
  // o888ooooood8 o888o        o888o        o888ooooood8  `Y8bood8P'      o888o

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:666/details");
        const data = await res.json();
        setArr(data.details);
        setBalance(data.balance);
        console.log(data);
      } catch (error) {
        alert(`Get details failed in use effect of App.jsx`);
      }
    })();
  }, [update]);

  // oooooooooooo ooooo     ooo ooooo      ooo   .oooooo.   ooooooooooooo ooooo   .oooooo.   ooooo      ooo  .oooooo..o
  // `888'     `8 `888'     `8' `888b.     `8'  d8P'  `Y8b  8'   888   `8 `888'  d8P'  `Y8b  `888b.     `8' d8P'    `Y8
  //  888          888       8   8 `88b.    8  888               888       888  888      888  8 `88b.    8  Y88bo.
  //  888oooo8     888       8   8   `88b.  8  888               888       888  888      888  8   `88b.  8   `"Y8888o.
  //  888    "     888       8   8     `88b.8  888               888       888  888      888  8     `88b.8       `"Y88b
  //  888          `88.    .8'   8       `888  `88b    ooo       888       888  `88b    d88'  8       `888  oo     .d8P
  // o888o           `YbodP'    o8o        `8   `Y8bood8P'      o888o     o888o  `Y8bood8P'  o8o        `8  8""88888P'

  const add = async (act_id, amount) => {
    if (amount < 0) {
      return console.log("NO MINUS ALLOWED");
    }
    if (act_id === 1) {
      amount = 0 - amount;
    }
    try {
      const res = await fetch("http://localhost:666/details", {
        method: "POST",
        body: JSON.stringify({
          act_id,
          amount,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      // console.log(res.status);
      if(res.status===201){
        setUpdate(!update)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const del = async (id) => {
    try {
      const res = await fetch("http://localhost:666/details", {
        method: "DELETE",
        body: JSON.stringify({
          id,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      if(res.status===200){
        setUpdate(!update)
      }
      
    } catch (error) {
      console.log(error);
    }
  };

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
      <h1>Balance: {balance}</h1>
      <Form add={add} />
      <List arr={arr} del={del} />
    </div>
=======
import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Pay from "./components/Pay";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
          <Switch>
              <Route  path="/login" component={Login}/>
              <Route  path="/register" component={Register}/>
              <Route  path="/home" component={Home}/>
              <Route  path="/pay" component={Pay}/>
              <Redirect exact from="/" to="/login" />
          </Switch>
      </div>
    </Router>
>>>>>>> ff0ee525d3e6a087ea82a9a4be0efc2195fa1852
  );
}
