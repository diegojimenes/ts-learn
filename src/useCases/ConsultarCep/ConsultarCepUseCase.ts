import { ICepRepository } from "../../repository/ICepRepository";
import { IConsultarCepRequestDTO } from "./ConsultarCepDTO";

export class ConsultarCepUseCase {
    constructor(
        private CepRepository: ICepRepository
    ) { }

    async execute(data: IConsultarCepRequestDTO) {
        return await this.CepRepository.searchCep(data.cep)
    }
}