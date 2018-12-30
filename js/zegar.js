function odliczanie()
{
	var zegar = new Date();
	
	var hour = zegar.getHours();
	if (hour < 10) hour = "0"+hour;
	var minute = zegar.getMinutes();
	if (minute < 10) minute = "0"+minute;
	var second = zegar.getSeconds();
	if (second < 10) second = "0"+second;
	
	var dzien = zegar.getDate();
	
	var miesiac = zegar.getMonth()+1;
	if (miesiac == 1) miesiac = "Stycznia";
	else if (miesiac == 2) miesiac = "Luty";
	else if (miesiac == 3) miesiac = "Marca";
	else if (miesiac == 4) miesiac = "Kwietnia";
	else if (miesiac == 5) miesiac = "Maja";
	else if (miesiac == 6) miesiac = "Czerwca";
	else if (miesiac == 7) miesiac = "Lipca";
	else if (miesiac == 8) miesiac = "Sierpnia";
	else if (miesiac == 9) miesiac = "Września";
	else if (miesiac == 10) miesiac = "Października";
	else if (miesiac == 11) miesiac = "Listopada";
	else if (miesiac == 12) miesiac = "Grudnia";
    var rok = zegar.getFullYear();
	
	
	
	
	
	
	document.getElementById("zegar").innerHTML = hour+":"+minute+":"+second;
	document.getElementById("kalendarz").innerHTML = dzien+" "+miesiac+" "+rok;
	

	setTimeout("odliczanie()",1000);
	
}