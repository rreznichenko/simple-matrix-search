function findWord(text, mas){
var width = mas[0].length;
var height = mas.length;

function reverseStr(str) {
    var newStr = '', i;
    for (i = str.length - 1; i >= 0; i--) {
        newStr += str.charAt(i);
    }
    return newStr;
}

function change1(mas){
	var mas1 = [];
	for (var i=0; i<height; i++){
  		mas1[i] = reverseStr(mas[i]);
	}
    return mas1;
}

function change2(mas){
	var mas2 = [];
	for (var i=0; i<width; i++){
  		mas2[i] = '';
  		for(var j=0; j<height; j++){
   			mas2[i] += mas[j][i]
  		}
	}
    return mas2;
}

function change3(mas){
	var mas3 = [];
	for (var i=0; i<width; i++){
  		mas3[i] = '';
  		for(var j=0; j<height; j++){
   			mas3[i] += mas[j][i]
 		}
	}
    return mas3;
}

function checkData(mas, text){
	const stringL = mas[0].length;
	return !(mas.some(item => !(item.length > 0 
							&& item.length < 100 
                            && item.length === stringL && 
                            /^[А-ЯЁ][а-яё]*$/i.test(item))))
                            &&(text.length>0)
                            &&(text.length<100)&& 
                            /^[А-ЯЁ][а-яё]*$/i.test(text)

}


if (!checkData(mas, text)) return alert('You don\'t have enough parameters to run this function correctly!');
 
 	
	var mas1 = change1(mas);
    var mas2 = change2(mas1);
    var mas3 = change3(mas);
    var mas4 = mas.concat(mas1, mas2, mas3);

   return mas4.some(elem => elem.indexOf(text)!=-1)
	 
}
