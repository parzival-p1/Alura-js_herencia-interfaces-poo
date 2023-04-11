export class Cliente
{   
    nombreCte;
    dniCte;
    rfcCte;
    #clave;

    constructor(nombreCte, dniCte, rfcCte) {
        this.nombreCte = nombreCte;
        this.dniCte = dniCte;
        this.rfcCte = rfcCte;
        this.#clave = '';
    }

    asignarClave(clave) {
        this.#clave = clave;
    }

 /*    autenticable(clave) { //metodo
        return false;
    } */
}