export class SistemaAutenticacion {
    static login(usuario, clave) { //Funcion estatica
        if ("autenticable" in usuario && usuario.autenticable instanceof Function) // interfaz utenticable
            return usuario.autenticable(clave);
        else 
            return false;    
    }
}