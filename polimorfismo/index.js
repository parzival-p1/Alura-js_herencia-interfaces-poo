//* *** Importación de clases *** *//
import { Cliente } from "./cliente.js";
import { Empleado } from './empleados/empleado.js';
import { Gerente } from './empleados/gerente.js'
import { Director } from './empleados/director.js'
import { SistemaAutenticacion } from "./sistemAutenticacion.js";

//const cliente2 = new Cliente('Maria', '87654321', 'TEMIJ0404947MJHT');

const empleado = new Empleado('Paco Hdez', 'HTEFJ030393', 10000);
empleado.asignarClave('123456')
console.log(SistemaAutenticacion.login(empleado, '123456'));

const gerente  = new Gerente('Pedro Navajas', 'PNAVJ040596', 12000);
gerente.asignarClave('54321');
console.log(SistemaAutenticacion.login(gerente, '54321'));
//const director = new Director('Elena Rios', 'ELRI050687', 15000);

//* CTES
const cliente  = new Cliente('Paco', '12345678', 'HETFJ0303937FJHT');
cliente.asignarClave('01111');
console.log(SistemaAutenticacion.login(cliente, '01111'));
