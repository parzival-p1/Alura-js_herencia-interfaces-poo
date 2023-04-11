//* *** Importación de clases *** *//
//import { Cliente } from "./cliente.js";
import { cuentaCorriente } from "./cuentas/ctaCorriente.js";
import { cuentaAhorro } from "./cuentas/ctaAhorro.js";
import { Cuenta } from "./cuentas/cuenta.js";
import { cuentaNomina } from "./cuentas/ctaNomina.js";

//* CTES
//const cliente = new Cliente('Paco', '12345678', 'HETFJ0303937FJHT');
//const cliente2 = new Cliente('Maria', '87654321', 'TEMIJ0404947MJHT');

//* CTAS
const cuentaDePaco = new cuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new cuentaCorriente(cliente2, '2', '002');

//* CTAS AHORRO
const cuentaAhorroPaco = new cuentaAhorro(cliente, '12345678', '001', 0);

//* CTA NOMINA
const cuentaNominaPaco = new cuentaNomina(cliente, '12345678', '001', 0)
cuentaNominaPaco.depositoEnCta(250)
console.log(cuentaNominaPaco.verSaldo());

cuentaNominaPaco.retirarEnCta(50);
console.log(cuentaNominaPaco.verSaldo());