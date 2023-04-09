import { Cliente } from "./cliente.js";

//? cta corriente
export class cuentaCorriente 
{
    #cliente; // att priv
    numero; 
    agencia;
    #saldo; // atributo privado
    static cantidadCtas = 0; // att statico

    //* setter
    set cliente(valor) {
        //si el val recibido es una instancia de la clase cliente
        if (valor instanceof Cliente) 
            this.#cliente = valor;
    }

    //* getter
    get cliente() {
        return this.#cliente;
    }

    //^ constructor
    constructor(cliente, numero, agencia) {
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = 0;
        cuentaCorriente.cantidadCtas++;
    }

    //^ metodo1
    depositoEnCta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;    
    }

    //^metodo2
    retirarEnCta(valor) {
        if (valor <= this.#saldo) //protec de codigo
            this.#saldo -= valor; 
        return this.#saldo;            
    }

    //^metodo3
    verSaldo() {
        return this.#saldo;
    }

    //^metodo4
    transferirParaCta(valor, ctaDestino) {
        this.retirarEnCta(valor);
        ctaDestino.depositoEnCta(valor);
        ctaDestino.depositoEnCta(valor);
        valor = 200;
        valor = valor * 100;
    }
}