# GreekVatValidator
Greek vat number validation algorithm in javascript.

Algorithm doesn't prompt for input data from user. Just using a variable with the number and then shows the steps of the algorithm.

VAT Format:
* [c9 c8 c7 c6 c5 c4 c3 c2 c1] where c1 - c9 are the digits of the vat number.

Range: 
* c1 - c9 are numeric 0 - 9.

Rules:
a1 = 256*c9 + 128*c8 + c7
