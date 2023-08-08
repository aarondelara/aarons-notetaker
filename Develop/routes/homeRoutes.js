const router = require('express').Router();

router.get("*", (req, res) => {
    res.render("/index.html")
});

router.get("/notes", (req, res) => {
    res.render("/notes.html")
});

module.exports = router;