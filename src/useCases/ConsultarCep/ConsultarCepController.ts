import { Request, Response } from "express";
import { ConsultarCepUseCase } from "./ConsultarCepUseCase";

export class ConsultarCepController {
    constructor(
        private ConsultarCepUseCase: ConsultarCepUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { cep } = request.body

        try {
            let dados = await this.ConsultarCepUseCase.execute({ cep })
            return response.status(201).json(dados)
        } catch (error) {
            return response.status(400).json({ message: error.message || 'erro' })
        }
    }
}