const { login } = require("../handlers/loginHandler");

router.post("/login", (req, res) => {
    login(req,res)
})

module.exports = router; 