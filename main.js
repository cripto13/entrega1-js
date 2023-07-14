// TIENDA ONLINE PAGO EN EFECTIVO O TARJETA+FINANCIACION //

let nombre = prompt("Bienvenido, escriba su nombre:")

alert("Hola " + nombre + "! Ingresaste a TuTienda")
alert("Elija la categoria que este buscando:")

let pagoEfectivo = 0.10
let pagoTarjeta = 0.10
let precio = 0

function calcEfectivo(precio, pagoEfectivo, precio) {
    return (precio - (precio * pagoEfectivo))
}
function calcTarjeta(precio, pagoTarjeta, precio) {
    return (precio + (precio * pagoTarjeta))
}
let seleccionUsuario = prompt("Combo1[1], Combo2[2], Combo3[3]")


while (seleccionUsuario) {
    if (seleccionUsuario == 1) {
        let formaPago = prompt("Eligio el combo 1, Escriba su forma de pago(efectivo/tarjeta).").toLowerCase()
        if (formaPago == "efectivo") {
            let precio = 10000
            let compraCombo = confirm("Pagando en efectivo le quedaria en $" + calcEfectivo(precio, pagoEfectivo, precio) + " ¿Confirma su compra?")
            if (compraCombo === false) {
                formaPago = prompt("Eligio el combo 1, Escriba su forma de pago(efectivo/tarjeta).").toLowerCase()
                if (formaPago == "tarjeta") {
                    let compraCombo = confirm("Pagando con tarjeta le quedaria en $" + calcTarjeta(precio, pagoTarjeta, precio) + " ¿Confirma su compra?")
                    if (compraCombo == true) {
                        alert("Su compra ha sido aprobada, muchas gracias!")
                    }
                    break
                }
            }
            else if (compraCombo === true){
                alert("Muchas gracias por su compra!")
                break
            }
        }
        else if (formaPago == "tarjeta") {
            let precio = 10000
            let compraCombo = confirm("Pagando con tarjeta le quedaria en $" + calcTarjeta(precio, pagoTarjeta, precio) + " ¿Confirma su compra?")
            if (compraCombo === false) {
                formaPago = prompt("Eligio el combo 1, Escriba su forma de pago(efectivo/tarjeta).").toLowerCase()
                if (formaPago == "efectivo") {
                    let compraCombo = confirm("Pagando en efectivo le quedaria en $" + calcEfect(precio, pagoEfectivo, precio) + " ¿Confirma su compra?")
                    if (compraCombo == true) {
                        alert("Su compra ha sido aprobada, muchas gracias!")
                    }
                    break
                }
            }
            else if (compraCombo === true){
                alert("Muchas gracias por su compra!")
                break
            }
        }
    }
    else if (seleccionUsuario == 2) {
        let formaPago = prompt("Eligio el combo 2, Escriba su forma de pago(efectivo/tarjeta).").toLowerCase()
        if (formaPago == "efectivo") {
            let precio = 20000
            let compraCombo = confirm("Pagando en efectivo le quedaria en $" + calcEfectivo(precio, pagoEfectivo, precio) + " ¿Confirma su compra?")
            if (compraCombo === false) {
                formaPago = prompt("Eligio el combo 2, Escriba su forma de pago(efectivo/tarjeta).").toLowerCase()
                if (formaPago == "tarjeta") {
                    let compraCombo = confirm("Pagando con tarjeta le quedaria en $" + calcTarjeta(precio, pagoTarjeta, precio) + " ¿Confirma su compra?")
                    if (compraCombo == true) {
                        alert("Su compra ha sido aprobada, muchas gracias!")
                    }
                    break
                }
            }
            else if (compraCombo === true) {
                alert("Muchas gracias por su compra!")
                break
            }
        }
        else if (formaPago == "tarjeta") {
            let precio = 20000
            let compraCombo = confirm("Pagando con tarjeta le quedaria en $" + calcTarjeta(precio, pagoTarjeta, precio) + " ¿Confirma su compra?")
            if (compraCombo === false) {
                formaPago = prompt("Eligio el combo 2, Escriba su forma de pago(efectivo/tarjeta).").toLowerCase()
                if (formaPago == "efectivo") {
                    let compraCombo = confirm("Pagando en efectivo le quedaria en $" + calcEfect(precio, pagoEfectivo, precio) + " ¿Confirma su compra?")
                    if (compraCombo == true) {
                        alert("Su compra ha sido aprobada, muchas gracias!")
                    }
                    break
                }
            }
            else if (compraCombo === true){
                alert("Muchas gracias por su compra!")
                break
            }
        }
    }
    else if (seleccionUsuario == 3) {
        let formaPago = prompt("Eligio el combo 3, Escriba su forma de pago(efectivo/tarjeta).").toLowerCase()
        if (formaPago == "efectivo") {
            let precio = 30000
            let compraCombo = confirm("Pagando en efectivo le quedaria en $" + calcEfectivo(precio, pagoEfectivo, precio) + " ¿Confirma su compra?")
            if (compraCombo === false) {
                formaPago = prompt("Eligio el combo 3, Escriba su forma de pago(efectivo/tarjeta).").toLowerCase()
                if (formaPago == "tarjeta") {
                    let compraCombo = confirm("Pagando con tarjeta le quedaria en $" + calcTarjeta(precio, pagoTarjeta, precio) + " ¿Confirma su compra?")
                    if (compraCombo == true) {
                        alert("Su compra ha sido aprobada, muchas gracias!")
                    }
                    break
                }
            }
            else if (compraCombo === true){
                alert("Muchas gracias por su compra!")
                break
            }
        }
        else if (formaPago == "tarjeta") {
            let precio = 30000
            let compraCombo = confirm("Pagando con tarjeta le quedaria en $" + calcTarjeta(precio, pagoTarjeta, precio) + " ¿Confirma su compra?")
            if (compraCombo === false) {
                formaPago = prompt("Eligio el combo 3, Escriba su forma de pago(efectivo/tarjeta).").toLowerCase()
                if (formaPago == "efectivo") {
                    let compraCombo = confirm("Pagando en efectivo le quedaria en $" + calcEfect(precio, pagoEfectivo, precio) + " ¿Confirma su compra?")
                    if (compraCombo == true) {
                        alert("Su compra ha sido aprobada, muchas gracias!")
                    }
                    break
                }
            }
            else if (compraCombo === true){
                alert("Muchas gracias por su compra!")
                break
            }
        }
    }
    else (seleccionUsuario == "" || seleccionUsuario > 3); {
        alert("Ocurrio un error, vuelva a intentarlo")
    }
    break;
}



