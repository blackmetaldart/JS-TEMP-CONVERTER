//THIS SECTION SETS UP THE EVENT LISTENERS FOR THE CALCULATE FUNCTIONS ON THE BUTTONS
document.getElementById('celsButton').addEventListener('click', celsTransfer );
document.getElementById('kelvButton').addEventListener('click', kelvTransfer);
document.getElementById('fahrenButton').addEventListener('click', fahrenTransfer);

//THE FUNCTION TO CHANGE THE VALUES FROM A CELSIUS-BASE METRIC
function celsTransfer () {
  var celsius = parseInt(document.getElementById('userNum').value, 10);

  let transBox = document.getElementById('transferTemp1');
  let transBox2 = document.getElementById('transferTemp2')

  document.getElementById('taip1').innerText = "FAHRENHEIT";
  document.getElementById('taip2').innerText = "KELVIN";

  const newKelv = (celsius + 273.15);
  var newFahren = (celsius * 1.8) + 32;

  document.getElementById('one').innerText = `${newFahren}`;
  document.getElementById('two').innerText  = `${newKelv}`;
}

//THE FUNCTION TO CHANGE THE VALUES FROM A KELVIN-BASE METRIC
function kelvTransfer () {
  var kelvin = parseInt(document.getElementById('userNum').value, 10);

  let transBox = document.getElementById('transferTemp1');
  let transBox2 = document.getElementById('transferTemp2');

  document.getElementById('taip1').innerText = "CELSIUS";
  document.getElementById('taip2').innerText = "FAHRENHEIT";

  const newCels = (kelvin - 273.15) ;
  var newFahren = ((kelvin - 273) * 1.8) + 32 ;

  document.getElementById('one').innerText = `${newCels}`;
  document.getElementById('two').innerText  = `${newFahren}`;
}


//THE FUNCTION TO CHANGE THE VALUES FROM A FAHRENHEIT-BASE METRIC
function fahrenTransfer () {
  var fahrenheit = parseInt(document.getElementById('userNum').value, 10);

  let transBox = document.getElementById('transferTemp1');
  let transBox2 = document.getElementById('transferTemp2');

  document.getElementById('taip1').innerText = "KELVIN";
  document.getElementById('taip2').innerText = "CELSIUS";


  var newKelv = ((fahrenheit - 32) /1.8) + 273.15;
  const newCels = (fahrenheit - 32) / (9/5);

  document.getElementById('one').innerText = `${newKelv}`;
  document.getElementById('two').innerText  = `${newCels}`;
}
