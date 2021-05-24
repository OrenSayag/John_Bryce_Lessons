const router = require("express").Router();
const { myQuery } = require("../DB/config");

// ROUTES
router.get("/", async (req, res) => {
  // get it from the db
  try {
    const details = await myQuery(
      "SELECT details.*, actions.act_name FROM details INNER JOIN actions ON details.act_id = actions.id;"
    );
    const balance = await myQuery(`SELECT sum(amount) AS balance FROM jb_34_bank.details;`)
    return res.status(201).send({ details, balance:balance[0].balance });
  } catch (error) {
    return res.status(500).send({ error });
  }
});

router.post("/", async (req, res) => {
  // post it to the db
  try {
    const { amount, act_id } = req.body;
    await myQuery(
      `INSERT INTO details (amount, act_id) VALUES (${amount},${act_id})`
    );
    return res.status(201).send();
  } catch (error) {
    return res.status(500).send({ error });
  }
});

router.delete("/", async (req, res) => {
  // get it from the db
  try {
    const { id } = req.body;
    await myQuery(`DELETE FROM details WHERE id=${id}`);
    return res.status(200).send();
  } catch (error) {
    return res.status(500).send({ error });
  }
});

module.exports = router;
