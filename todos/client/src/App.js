import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [arr, setArr] = useState([]);

  const add = async (title) => {
    try {
      const res = await fetch("http://localhost:666/todos", {
        method: "POST",
        body: JSON.stringify({title}),
        headers: { "Content-Type": "application/json" },
      });
      // console.log('hello from add')
      // console.log('this is the title:',title)
      const todos = await res.json();
      setArr(todos);
    } catch (error) {
      console.log(error);
    }
  };
  const update = async (id) => {
    try {
      const res = await fetch("http://localhost:666/todos/" + id, {
        method: "PUT",
      });
      const todos = await res.json();
      setArr(todos);
    } catch (error) {
      console.log(error);
    }
  };
  const remove = async (id) => {
    try {
      const res = await fetch("http://localhost:666/todos/" + id, {
        method: "DELETE",
      });
      const todos = await res.json();
      setArr(todos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await fetch("http://localhost:666/todos/", {
          method: "GET",
        });
        const todos = await res.json();
        setArr(todos);
      } catch (error) {
        console.log(error);
      }
    };

    getTodos();
  }, []);

  return (
    <div>
      <Form add={add} />
      <List arr={arr} remove={remove} update={update} />
    </div>
  );
}
