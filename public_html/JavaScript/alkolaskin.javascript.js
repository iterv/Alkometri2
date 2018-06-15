/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function alkolaskin() {
    var paino = 0;
    var määrä = 0;
    var aika = 0;
    var sukupuoli = 0;
    var litrat = 0;
    var grammat = 0;
    var palamisvauhti = 0;
    var jäljellä = 0; 
    var promillet = 0; 


    var määrä = document.getElementById("määrä").value;
    var aika = document.getElementById("aika").value;
    
    paino = parseInt(document.getElementById("paino").value);
    
    if (document.getElementById("nainen").checked) {
        sukupuoli = document.getElementById("nainen").value;
    }
    else {
        sukupuoli = document.getElementById("mies").value;
    }
    
    litrat = määrä * 0.33;
    grammat = litrat * 8 * 4.5;
    palamisvauhti = paino / 10;
    jäljellä = grammat - (aika * palamisvauhti);
    promillet = jäljellä / (paino * sukupuoli);
    
   
    document.getElementById("promillet").innerHTML = promillet.toFixed(1);
}

