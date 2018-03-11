var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "venturismo"
});

/**Funcion para el inicio de sesion**/

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  var sql = "INSERT INTO compra_reserva (origen, destino, agencia, NroTarjeta, fecha, idcliente, idCompraReserva, numero_pasaje, isCompra, isReserva)"+
  "VALUES('Valencia', 'Vargas', 'ViajesPP', '0108-0903-4455-8799-42', '2018-02-11', 23426483, 3, 2, 'Y','N')";
  
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
	

  });
  
});