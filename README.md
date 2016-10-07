# GreekVatValidator
Greek vat number validation algorithm in javascript.

Algorithm doesn't prompt for input data from user. Just using a variable with the number and then shows the steps of the algorithm. So in order to test it you have to statically change the price of the variable, before you run the program.

VAT Format:
* [c1 c2 c3 c4 c5 c6 c7 c8 c9] where c1 - c9 are the digits of the vat number.

Range:
* c1 - c9 are numeric 0 - 9.

Rules:
* a1 = 256\*c1 + 128\*c2 + 64\*c3 + 32\*c4 + 16\*c5 + 8\*c6 + 4\*c7 + 2\*c8
* a2 = a1 modulo 11
* c9 = a2 modulo 10
