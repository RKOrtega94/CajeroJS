class Cajero {
  constructor(valor, cantidad) {
    this.valor = valor;
    this.cantidad = cantidad;
  }
}

function entregarDinero() {
  var monto = document.getElementById("txtMonto");
  dinero = parseInt(monto.value);

  for(var bi of caja)
  {
    if(dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);
      if(div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else
      {
        papeles = div;
      }

      entregado.push(new Cajero(bi.valor, papeles));
      dinero = dinero - (bi.valor * papeles);
    }
  }

  if(dinero > 0)
  {
    resultado.innerHTML = "No hay suficiente dinero";
  }
  else
  {
    for(var e of entregado)
    {
      if(e.cantidad > 0)
      {
        resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br/>";
      }
    }
  }
}

var caja = [];
var entregado = [];

caja.push(new Cajero(100, 5));
caja.push(new Cajero(50, 10));
caja.push(new Cajero(20, 100));
caja.push(new Cajero(10, 200));
caja.push(new Cajero(5, 500));

var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var btn = document.getElementById("btnSubmit");
btn.addEventListener("click", entregarDinero);
