function suma() {
    var first = document.getElementById("firstnumber").value;
    var second = document.getElementById("secondnumber").value;
    var operacion = parseFloat(first) + parseFloat(second);
    document.getElementById("final").innerHTML = operacion;
  }
  
  function resta() {
    var first = document.getElementById("firstnumber").value;
    var second = document.getElementById("secondnumber").value;
    var ingresomensual = document.getElementById("ingresomensual").value;
    var alquiler = document.getElementById("alquiler").value;
    var operacion = ingresomensual - first - second - alquiler;
    document.getElementById("final").innerHTML = operacion;
  }
  
  
 