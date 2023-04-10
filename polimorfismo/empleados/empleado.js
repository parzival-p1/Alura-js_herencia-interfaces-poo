export class Empleado {
    #nombre;
    #dni;
    #salario;

    constructor(nombre, dni, salario) {
        this.#nombre = nombre;
        this.#dni = dni;
        this.#salario = salario;
    }

    //^ metodo abstracto
    verBonificacion() {
        return this.#salario;
    }

    //^ metodo priv
    _verBonificacion(bono) {
        return this.#salario + this.#salario * bono / 100;
    }
}