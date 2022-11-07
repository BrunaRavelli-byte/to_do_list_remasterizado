const express = require("express");

const router = express.Router();

router.get("/checklist", (res, req) => {
    console.log('Olá')
    res.setEncoding();
})

module.exports = router;