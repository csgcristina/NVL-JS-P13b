function esPalindromo(a){
	a=a.replace(/ /g,"");
	a=a.toLowerCase();
	var originalArray=a.split("");
	var reverseArray=a.split("").reverse();
	var palindromo=true;
	for(var x=0; x < originalArray.length; x++) {
		if (originalArray[x] != reverseArray[x]) {
			palindromo=false;
		}
	}
	return palindromo;
}
esPalindromo("Dabale arroz a la zorra el abad");