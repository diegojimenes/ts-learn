import { Router } from "express";
import { consultaCepController } from "./useCases/ConsultarCep";

const router = Router()

router.post('/', (req, res) => {
    return res.status(201).send('aplicação teste')
})

router.post('/cep', (req, res) => {
    return consultaCepController.handle(req, res)
})

export { router }
