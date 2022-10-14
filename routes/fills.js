const express = require("express");


const router = express.Router();


router.post("/", require("./../controllers/fills").getPost);

router.get("/" ,require("./../controllers/fills").getAllusers); 

router.get("/:fillsId" ,require("./../controllers/fills").getUsers); // localhost://users/7383838395

router.delete("/:fillsId" ,require("./../controllers/fills").deleteUser);    

router.put("/:fillsId" ,require("./../controllers/fills").UpdateUser);



//http://localhost:5000/api/products/getallproducts


















module.exports = router;