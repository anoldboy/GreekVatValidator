//entering the vat number. In Greek 'AFM'
var vat_number = "123456789";

var count_digits = vat_number.length;
var array = vat_number.split("");

var sum_of_digits = 0;
for(i=0; i<9; i++){
  sum_of_digits = sum_of_digits + Number(vat_number[i]);
}

if (count_digits != 9 || sum_of_digits == 0){
  console.log("Vat number  is invalid");
}else {

  //A1 calculation as the readme.md file describes
  var m = 256;
  var a1 = 0;
  var i = 1;
  for (i = 0; i < 8; i++){
    console.log("m: " + m)
    a1 = a1 + Number(array[i]) * m;
    m = m / 2;
  }

  //A2 calculation as the readme.md file describes
  var a2 = a1 % 11;
  if (Number(array[8]) == a2 % 10){
    console.log("Vat number is valid!");
  }else {
    console.log("Vat number is invalid!")
  }
}
