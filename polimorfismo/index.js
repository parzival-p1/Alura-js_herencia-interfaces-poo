//* *** Importación de clases *** *//
import { Cliente } from "./cliente.js";
import { cuentaCorriente } from "./cuentas/ctaCorriente.js";
import { cuentaAhorro } from "./cuentas/ctaAhorro.js";
import { Cuenta } from "./cuentas/cuenta.js";
import { cuentaNomina } from "./cuentas/ctaNomina.js";
import { Empleado } from './empleados/empleado.js';
import { Gerente } from './empleados/gerente.js'
import { Director } from './empleados/director.js'

//* CTES
const cliente  = new Cliente('Paco', '12345678', 'HETFJ0303937FJHT');
const cliente2 = new Cliente('Maria', '87654321', 'TEMIJ0404947MJHT');

const empleado = new Empleado('Paco Hdez', 'HTEFJ030393', 10000);
const gerente  = new Gerente('Pedro Navajas', 'PNAVJ040596', 12000);
const director = new Director('Elena Rios', 'ELRI050687', 15000);

console.log(empleado.verBonificacion());
console.log(gerente.verBonificacion());
console.log(director.verBonificacion());