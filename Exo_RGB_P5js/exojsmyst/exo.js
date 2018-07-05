var num = Math.floor(Math.random() * 9) + 1;
var NbEssais = 0;
function Devine() {
var choisi = document.form1.devine1.value;
NbEssais++;
status = "Nombre d'essais : " + NbEssais;
if (choisi < num) 
    document.form1.indice.value = "Essais plus grand..." + status ;

if (choisi > num)
    document.form1.indice.value = "Heuuu, plus petit..." + status ;

if (choisi == num) {
    alert("Yes Bravo! Enfin :) tu à trouvé en " + NbEssais + " essais.");
    location.reload();
    }
if (NbEssais == 3) {
    alert("T'es nul, va jouer a Adibou. Mon nombre est : " + num);
    location.reload();
    }
}