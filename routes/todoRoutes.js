const express = require('express');


const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({msg: "we got data"})
});

module.exports = router;