export class Cuenta 
{
    #cliente; //att priv
    #saldo;  //att priv

    constructor(cliente, numero, agencia, saldo) {
        if (this.constructor == Cuenta) {
            throw new Error ('No se debe instanciar objetos de la clase Cuenta'); //! Errores personalizados 
        }
        this.numero = numero;    //att pub
        this.agencia = agencia; //att pub
        this.#cliente = cliente;
        this.#saldo = saldo;
    }

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

    //^ metodo1
    depositoEnCta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;    
    }

    //^metodo2
    retirarEnCta(valor) {
    //^ método abstracto
        throw new Error ('Debe implementar el método retirarEnCta en su clase'); 
    }

    //^metodo priv en la clase base
    _retirarEnCta(valor, comision) { 
        valor = valor * (1 + comision / 100);
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
