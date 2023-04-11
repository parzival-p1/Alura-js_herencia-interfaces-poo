export class Empleado {
    #nombre;
    #dni;
    #salario;
    #clave;

    constructor(nombre, dni, salario) {
        this.#nombre = nombre;
        this.#dni = dni;
        this.#salario = salario;
        this.#clave = '';
    }

    asignarClave(clave) {
        this.#clave = clave;
    }

    autenticable(clave) { //metodo
        return clave == this.#clave;
    } // no se accede al att, se encapsula en un metodo

    //^ metodo abstracto
    verBonificacion() {
        return this.#salario;
    }

    //^ metodo priv
    _verBonificacion(bono) {
        return this.#salario + this.#salario * bono / 100;
    }
}