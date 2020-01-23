<SCRIPT>
function passWord() {
var testV = 1;
var pass1 = prompt('Passord:',' ');
while (testV < 3) {
if (!pass1) 
history.go(-1);
if (pass1.toLowerCase() == "ballenemine") {
alert('Korrekt!');
window.open('videoarkiv.html');
break;
} 
testV+=1;
var pass1 = 
prompt('Adgang nektet - Feil passord, Prøv igjen, eller kom deg vekk!','Password');
}
if (pass1.toLowerCase()!="password" & testV ==3) 
history.go(-1);
return " ";
} 
</SCRIPT>
<CENTER>
<FORM>
<input type="button" value="Enter Protected Area" onClick="passWord()">
</FORM>
</CENTER>