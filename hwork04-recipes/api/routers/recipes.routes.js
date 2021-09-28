const router = require("express").Router();
const Recipe = require("../models/recipe.model");

//get all recipes
router.get("/recipes", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).send(recipes);
  } catch (error) {
    res.status(400).send(error);
  }
});

//add a recipe
router.post("/recipe", async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(201).send(recipe);
  } catch (error) {
    res.status(400).json(error);
  }
});

//get recipe by id
router.get("/recipe/:id", async (req, res) => {
  try {
    const recipe = Recipe.findById(req.params.id);
    res.status(200).send(recipe);
  } catch (error) {
    res.status(404).send(error);
  }
});

//update recipe
router.put("/recipe/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    const updateKeys = Object.keys(req.body);

    updateKeys.forEach(key => {
      recipe[key] = req.body[key];
    });

    await recipe.save();

    res.status(200).send(recipe);
  } catch (error) {
    res.status(400).send(error);
  }
});

//delete recipe
router.delete("/recipe/:id", async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "success" });
  } catch (error) {
    res.status(404).send();
  }
});

module.exports = router;
