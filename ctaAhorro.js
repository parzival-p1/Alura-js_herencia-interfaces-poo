export class cuentaAhorro 
{
    #cliente; //att priv
    #saldo;  //att priv

    constructor(cliente, numero, agencia, saldo) {
        this.numero = numero;    //att pub
        this.agencia = agencia; //att pub
        this.#cliente = cliente;
        this.#saldo = saldo;
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