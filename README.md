# GreekVatValidator
Greek vat number validation algorithm in javascript.

Algorithm doesn't prompt for input data from user. Just using a variable with the number and then shows the steps of the algorithm. So in order to test it you have to statically change the price of the variable, before you run the program.

VAT Format:
* [c9 c8 c7 c6 c5 c4 c3 c2 c1] where c1 - c9 are the digits of the vat number.

Range: 
* c1 - c9 are numeric 0 - 9.

Rules:
* a1 = 256*c9 + 128*c8 + 64*c7 + 32*c6 + 16*c5 + 8*c4 + 4*c3 + 2*c2
* a2 = a1 modulo 11
* c1 = a2 modulo 10

