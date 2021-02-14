import { ICepDados } from "../interfaces/ICepDados";

export interface ICepRepository {
    searchCep(cep: String): Promise<ICepDados>
}