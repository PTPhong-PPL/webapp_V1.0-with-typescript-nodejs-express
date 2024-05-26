import { Router } from "express";
import { getMemberX } from "../utils/db.js";


// import { checkPSearchString } from "../middlewares/validator.js";
// import { getProducts } from "../services/dbProducts.js";

const router = Router();

/* log in, send id and pass through
*/
router.get("/login", async (req, res) => {
    const id = req.query.id as string;
    const pass = req.query.pass as string;

    const user = getMemberX(id, pass);
    res.status(200).send(user);
})



// export router
export {router as userRoutes};