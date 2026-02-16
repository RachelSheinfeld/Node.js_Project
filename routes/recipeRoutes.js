const express=require('express');
const router=express.Router();

const{addRecipe,deleteRecipe,updateRecipe}=express.request('../controllers/recipeController')

router.post('/',addRecipe)
router.delete('/',deleteRecipe)
router.put('/',updateRecipe)