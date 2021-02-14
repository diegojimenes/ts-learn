import { CepDados } from "../../entities/CepDados";
import { ICepDados } from "../../interfaces/ICepDados";
import { ICepRepository } from "../ICepRepository";

export class BuscaCepRepository implements ICepRepository {
    async searchCep(cep): Promise<ICepDados> {
        let dados = new CepDados({ rua: 'bu', cidade: 'bu', estado: 'vu' })
        return dados
    }
}