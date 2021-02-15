import axios from "axios";
import { CepDados } from "../../entities/CepDados";
import { ICepDados } from "../../interfaces/ICepDados";
import { ICepRepository } from "../ICepRepository";

const correios = async (cep) => {
    let data = await axios.get(`https://buscacepinter.correios.com.br/app/endereco/carrega-cep-endereco.php?pagina=%2Fapp%2Fendereco%2Findex.php&cepaux=&mensagem_alerta=&endereco=${cep}&tipoCEP=ALL`)
    let { logradouroDNEC, localidade, uf } = data.data.dados[0]
    return new CepDados({ rua: logradouroDNEC, cidade: localidade, estado: uf })
}


const viaCep = async (cep) => {
    let data = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    let { logradouro, localidade, uf } = data.data
    return new CepDados({ rua: logradouro, cidade: localidade, estado: uf })
}

export class BuscaCepRepository implements ICepRepository {
    async searchCep(cep): Promise<ICepDados> {
        return await Promise.race([correios(cep), viaCep(cep)])
    }
}