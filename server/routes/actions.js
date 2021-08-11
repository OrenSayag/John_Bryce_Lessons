const router = require('express').Router();
const {myQuery} = require('../DB/config')

// ROUTES
router.get('/', async (req, res)=>{
    // get it from the db
    try {
        const actions = await myQuery("SELECT * FROM actions")
        return res.status(201).send({actions})
    } catch (error) {
        return res.status(500).send({error})
    }
})

module.exports = router;