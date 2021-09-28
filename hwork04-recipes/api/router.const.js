const router = require("express").Router();
const recipesRouter = require("./routers/recipes.routes");

router.use(recipesRouter);

module.exports = router;
