import { Cuenta } from "./cuenta.js";

export class cuentaAhorro extends Cuenta {
    constructor(cliente, numero, agencia, saldo) {
        super(cliente, numero, agencia, saldo);
    }

    //^metodo2
    retirarEnCta(valor) { 
        //^ llamar al padre
        super._retirarEnCta(valor, 2);
    }
}