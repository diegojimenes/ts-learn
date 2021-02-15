import axios from "axios";
import { CepDados } from "../../entities/CepDados";
import { ICepDados } from "../../interfaces/ICepDados";
import { ICepRepository } from "../ICepRepository";

const buscarDados = async (cep) => {
    let data = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    let { logradouro, localidade, uf } = data.data
    return new CepDados({ rua: logradouro, cidade: localidade, estado: uf })
}

export class BuscaCepRepository implements ICepRepository {
    async searchCep(cep): Promise<ICepDados> {
        return await buscarDados(cep)
    }
}