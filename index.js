//* *** Importación de clases *** *//
import { Cliente } from "./cliente.js";
//import { cuentaCorriente } from "./ctaCorriente.js";
//import { cuentaAhorro} from "./ctaAhorro.js";
import { Cuenta } from "./cuenta.js";

//* CTES
const cliente = new Cliente('Paco', '12345678', 'HETFJ0303937FJHT');
const cliente2 = new Cliente('Maria', '87654321', 'TEMIJ0404947MJHT');

//* CTAS
const cuentaDePaco = new Cuenta(cliente, '1', '001', 0);
const cuentaDeMaria = new Cuenta(cliente2, '2', '002', 0);

//* CTAS AHORRO
const cuentaAhorroPaco = new Cuenta(cliente, '12345678', '001', 0);

console.log(cuentaDePaco);
cuentaDePaco.depositoEnCta(150);
console.log(cuentaDePaco.verSaldo());
cuentaDePaco.retirarEnCta(70);
console.log(cuentaDePaco.verSaldo());
console.log(cuentaAhorroPaco);
cuentaAhorroPaco.depositoEnCta(200);
console.log(cuentaAhorroPaco.verSaldo());
cuentaAhorroPaco.retirarEnCta(120);
console.log(cuentaAhorroPaco.verSaldo());

