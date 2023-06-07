const router = require("express").Router();

router.get("/", async (req, res) => {

    if (req.session.logged_in) {
        res.redirect('/home');
    }

    res.render("welcomePage", { layout: 'welcome'});
});

module.exports = router;