//* *** Importación de clases *** *//
import { Cliente } from "./cliente.js";
import { cuentaCorriente } from "./ctaCorriente.js";
import { cuentaAhorro} from "./ctaAhorro.js";

//* CTES
const cliente = new Cliente('Paco', '12345678', 'HETFJ0303937FJHT');
const cliente2 = new Cliente('Maria', '87654321', 'TEMIJ0404947MJHT');

//* CTAS
const cuentaDePaco = new cuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new cuentaCorriente(cliente2, '2', '002');

//* CTAS AHORRO
const cuentaAhorroPaco = new cuentaAhorro(cliente, '12345678', '001', 0);
console.log(cuentaDePaco);
console.log(cuentaAhorroPaco);