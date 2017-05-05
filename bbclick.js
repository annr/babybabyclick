document.getElementById("last_name").innerHTML = document.getElementById("lastNameInput").value;

function setBackground() {
  var boySwitch = document.getElementById('boySwitch').checked;
  var girlSwitch = document.getElementById('girlSwitch').checked;
  var famousBoySwitch = document.getElementById('famousBoySwitch').checked;
  var famousGirlSwitch = document.getElementById('famousGirlSwitch').checked;

  var girl = girlSwitch || famousGirlSwitch;
  var boy = boySwitch || famousBoySwitch;
  if(girl && boy) {
    document.body.style.backgroundColor = 'Thistle';
  } else if (girl) {
    document.body.style.backgroundColor = '#f4dcea'; //#f4dcea
  } else if (boy) {
    document.body.style.backgroundColor = 'PaleTurquoise'; //AliceBlue
  } else {
    document.body.style.backgroundColor = 'Gainsboro';
  }

  // if famous is selected add background:
  // if(famousGirlSwitch || famousBoySwitch) {

  // }
}

function Getnewname() {
  var names = [];
  if(document.getElementById('boySwitch').checked) {
    names = names.concat(popularBoy);
  }
  if(document.getElementById('girlSwitch').checked) {
    names = names.concat(popularGirl);
  }
  // if(document.getElementById('fictionSwitch').checked) {
  //   names = names.concat(fictionNames);
  // }

  if(document.getElementById('famousBoySwitch').checked) {
    names = names.concat(famousBoy);
  }

  if(document.getElementById('famousGirlSwitch').checked) {
    names = names.concat(famousGirl);
  }

  var random = Math.floor(Math.random() * names.length) ;

  if(names.length > 0) {
    document.getElementById("first_name").innerHTML= names[random].name;
    document.getElementById("last_name").innerHTML = document.getElementById("lastNameInput").value;
  } else {
    document.getElementById("first_name").innerHTML= 'Please select at least one option below.';
  }

}
