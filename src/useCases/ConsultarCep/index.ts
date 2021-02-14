import { BuscaCepRepository } from '../../repository/implementations/buscaCepRepository'
import { ConsultarCepController } from './ConsultarCepController'
import { ConsultarCepUseCase } from './ConsultarCepUseCase'

const buscaCep = new BuscaCepRepository()

const consultaCep = new ConsultarCepUseCase(buscaCep)

const consultaCepController = new ConsultarCepController(consultaCep)

export { consultaCepController, consultaCep }