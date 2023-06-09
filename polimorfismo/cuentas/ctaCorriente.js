import { Cliente } from "../cliente.js";
import { Cuenta } from "./cuenta.js";

//? cta corriente
export class cuentaCorriente extends Cuenta {
    static cantidadCtas = 0; // att statico

    //^ constructor
    constructor(cliente, numero, agencia) {
        super(cliente, numero, agencia, 0);
        cuentaCorriente.cantidadCtas++;
    }

    //^metodo2
    retirarEnCta(valor) {  
        super._retirarEnCta(valor, 5); //Llamando al metodo priv         
    }
}