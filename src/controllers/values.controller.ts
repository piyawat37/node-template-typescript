import { Controller, Get } from "routing-controllers";

@Controller()
export class ValuesController {
    @Get("/values")
    getAll() {
        return ["values_1", "values_2"]
    }
}