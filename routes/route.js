import express from "express"
import { fetchData } from "../controllers/fetchData.js";

const router = express.Router()

router.get("/", (req, res) => {
    res.send(`Welcome to Elliot's Basic Information API`)
})
router.get("/fetch-data", fetchData)

export default router