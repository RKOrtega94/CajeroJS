class Cajero {
  constructor(valor, cantidad) {
    this.valor = valor;
    this.cantidad = cantidad;
  }
}

function entregarDinero() {
  var monto = document.getElementById("txtMonto");
}

var caja[];
var entregado[];

caja.push(new Cajero(100, 5));
caja.push(new Cajero(50, 10));
caja.push(new Cajero(20, 100));
caja.push(new Cajero(10, 200));
caja.push(new Cajero(5, 500));

var btn = document.getElementById("btnSubmit");
btn.addEventListener("click", entregarDinero);
