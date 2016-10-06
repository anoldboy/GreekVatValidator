//entering the vat number. In Greek 'AFM'
var vat_number = "033323630";
//count the digits of the vat_number
var count_digits = vat_number.length;
//console.log("Vat_number: " + vat_number);
//console.log("Number of digits: " + count_digits);
var array = vat_number.split("");
//console.log("Transfer to array: " + array);
//console.log(": " + Number(array[0]));


var sum_of_digits = 0;
for(i=0; i<9; i++){
  sum_of_digits = sum_of_digits + Number(vat_number[i]);
  //console.log(" " + vat_number[i]);
}
//console.log("vat_number sum: " + sum_of_digits);


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
    //console.log("m: " + m)
    console.log("a1 " + a1);
    console.log("vat_number: " + Number(array[i]));
  }



  //console.log("a1 " + a1);
  //A2 calculation as the readme.md file describes
  var a2 = a1 % 11;
  if (Number(array[8]) == a2 % 10){
    console.log("Vat number is valid!");
  }else {
    console.log("Vat number is invalid!")
  }
}
