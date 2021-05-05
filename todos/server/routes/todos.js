//imports + router-init
const router = require("express").Router();
const fs = require("fs").promises;
const uuid = require("uuid");

// TOOLS
const getTodos = async ()=>{
  try {
    const todosStr = await fs.readFile("./db/todos.json", "utf8");
    const todosArr = JSON.parse(todosStr);
    return todosArr;
  } catch (error) {
    return error;
  }
}

// requests handlers
router.get("/", async (req, res) => {
  try {
    res.send(await getTodos());
  } catch (err) {
    res.status(500).send("There was an error maaaaaannnnnn");
  }
});

router.post("/", async (req, res) => {
  let title = req.body.title;
  // console.log(title)
  // console.log('hey')
  // title = 'hey'  
  try {
    const todosArr = await getTodos();
    // push to array ({id, title, completed})
    todosArr.push({
      id: uuid.v4(),
      title,
      completed: false,
    });
    // convert to json string
    todosStr = JSON.stringify(todosArr);
    // save to file
    await fs.writeFile("./db/todos.json", todosStr);
    res.status(201).send(todosArr);
    // res.status(201).send("success brother");
  } catch (err) {
    // res.status(500).send(err)
    console.log(err);
    res.status(500).send("server problem");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    //read from file
    const todosArr = await getTodos()
    //filter arr no id
    const filteredArr = todosArr.filter(todo=>todo.id !== req.params.id)
    const stringed = JSON.stringify(filteredArr)
    //save to file
    await fs.writeFile("./db/todos.json", stringed);
    //send all array
    res.status(201).send(filteredArr);
  } catch (error) {
    console.log(error);
    res.status(500).send("server problem");
  }
  
});

router.put("/:id", async (req, res) => {
  try {
    //get array
    const todos = await getTodos()
    //find in array
    //change to completed
    let todo = todos.find(todo=>todo.id===req.params.id)
    todo.completed = !todo.completed;
    //save to file
    const stringed = JSON.stringify(todos)
    await fs.writeFile("./db/todos.json", stringed);
    //send res
    res.status(201).send(stringed);
  } catch (error) {
    console.log(error);
    res.status(500).send("server problem");
  }
});

//export
module.exports = router;
