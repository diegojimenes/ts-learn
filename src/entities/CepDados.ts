import { ICepDados } from "../interfaces/ICepDados";

export class CepDados {
    public rua
    public cidade
    public estado
    constructor(Props: ICepDados) {
        this.rua = Props.rua
        this.cidade = Props.cidade
        this.estado = Props.estado
    }
} 