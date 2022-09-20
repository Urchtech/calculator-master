		let span=document.querySelector('#displaySpan');
		let strspan=toString(span).trim();
		let charDisplay=document.querySelector("#charDisplay");
		let operation=document.querySelector('#operation');
		let clearButton = document.querySelector('#clear');
		console.log(clearButton)
	//check math objects out
	function displayChar(x){
			charDisplay.value+=x;
			span.innerHTML+=x;
		}
	function del(){
			if (strspan!="") {
			let rep=charDisplay.value.substr(0,charDisplay.value.length-1);
			charDisplay.value=rep;
			span.innerHTML=rep;
			}
	}
	function approx(x) {
		charDisplay.value+=x;
		span.innerHTML+=x;
		let originalVal = Number(charDisplay.value.substr(0,charDisplay.value.length-1));
		let noOfDecimals = Number(prompt("How many decimal places? "));
		let approx = originalVal.toFixed(noOfDecimals);
		charDisplay.value = approx;
		span.innerHTML = approx;
		operation.innerHTML = originalVal + " to " +noOfDecimals+ " d.p is:"
	}
console.log(operation)
	function add() {
		let firstVal=Number(charDisplay.value.substring(0,charDisplay.value.indexOf("+")));
		let secondVal=Number(charDisplay.value.substr(charDisplay.value.indexOf("+")+1,charDisplay.length));
		let add=firstVal+secondVal;
		charDisplay.value=add;
		span.innerHTML=add;
		operation.innerHTML="The result of "+ firstVal+"+"+secondVal+" is:"	
	}
	clearButton.onclick = function clear() {
		if (charDisplay.value!=-1) {
			charDisplay.value=""
			span.innerHTML=""
			operation.innerText=""
		}
	}
	function subt() {
		firstVal=Number(charDisplay.value.substring(0,charDisplay.value.indexOf("-")));
		secondVal=Number(charDisplay.value.substr(charDisplay.value.indexOf("-")+1,charDisplay.length));
		subtract=firstVal-secondVal;
		charDisplay.value=subtract;
		span.innerHTML=subtract;
		operation.innerHTML="The result of "+ firstVal+"-"+secondVal+" is:"	
	}
	function divide() {
		firstVal=Number(charDisplay.value.substring(0,charDisplay.value.indexOf("/")));
		secondVal=Number(charDisplay.value.substr(charDisplay.value.indexOf("/")+1,charDisplay.length));
		divide=firstVal/secondVal;
		charDisplay.value=divide;	
		span.innerHTML=divide;
		operation.innerHTML="The result of "+ firstVal+"/"+secondVal+" is:"	
	}
	function multiply() {
		firstVal=Number(charDisplay.value.substring(0,charDisplay.value.indexOf("x")));
		secondVal=Number(charDisplay.value.substr(charDisplay.value.indexOf("x")+1,charDisplay.length));
		multiply=firstVal*secondVal;
		charDisplay.value=multiply;
		span.innerHTML=multiply;
		operation.innerHTML="The result of "+ firstVal+"x"+secondVal+" is:"	
	}
	function eql() {
		if (charDisplay.value.indexOf("/")!=-1) {
			divide();
		}else if (charDisplay.value.indexOf("x") !=-1) {
			multiply();
		}else if (charDisplay.value.indexOf("+") !=-1) {
			add();
		}else if (charDisplay.value.indexOf("-") !=-1) {
			subt(); 
		}
	}
	 