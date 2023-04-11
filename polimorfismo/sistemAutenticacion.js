export class SistemaAutenticacion {
    static login(usuario, clave) { //Funcion estatica
        return usuario.autenticable(clave);
    }
} 