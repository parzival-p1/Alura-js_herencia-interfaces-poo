import { Cuenta } from "./cuenta.js";
export class cuentaNomina extends Cuenta {
    constructor(cliente, numero, agencia, saldo) {
        super(cliente, numero, agencia, saldo);
    }

    retirarEnCta(valor) { //comision de CtaNomina
        super._retirarEnCta(valor, 1);
    }
}