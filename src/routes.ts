import { Router } from "express";

const router = Router()

router.post('/', (req, res) => {
    return res.status(201).send('aplicação teste')
})

export { router }