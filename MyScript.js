
function nimi(){
    const vastus = document.getElementById('nimi-tabelist-container');
    const input = document.getElementById('nimi');
    if(input.value === ""){
        alert("sisesta midagi");
        return;
    }
    vastus.innerHTML=`tere, ${input.value}`;
}
function ruhm(){
    const vastus = document.getElementById('ruhm-tabelist-container');
    const radiobuttons = document.getElementsByName('ryhm');
    let access = true;
    radiobuttons.forEach(radiobutton => {
        console.log(radiobutton);
        if (radiobutton.checked){
            vastus.innerText =  `sinu rühm on, ${radiobutton.value}`;
            access = false;
        }
    })
    if(access){
        alert("Vali oma ryhm");
    }
}
function keeled(){
    const checkboxes = document.getElementsByName('keel');
    const vastus = document.getElementById('keel-tabelist-container');
    let text = "Sa oled õpinnud -"
    checkboxes.forEach(checkbox => {
        if (checkbox.checked){
            text += `${checkbox.value}, `;
        }
    })
    vastus.innerHTML=text;
}
function date(){
    const input = document.getElementById('input-date');
    const vastus = document.getElementById('sunnipaev-tabelist-container');
    vastus.innerText = `Sinu sünnipäev: ${input.value}`;
}
function varv(){
    const input = document.getElementById('input-varv');
    const vastus = document.getElementById('lemmik-varv-container');
    vastus.style.color = input.value;
    vastus.innerText = "Sinu lemmik varv" + ": " + input.value;

}
function fail(){
    const failInput = document.getElementById('input-file');
    console.log(failInput.value);
    const vastus = document.getElementById('fail-tabelist-container');
    vastus.innerText = `sinu faili path on ${failInput.value}`;
}
function salasona(){
    const input = document.getElementById('input-password');
    const vastus = document.getElementById('salasona-tabelist-container');

    vastus.innerText = `Sinu salasona on ${'********'}`;
    alert(input.value + " =)");
}
function clear(){
    console.log(123);
    const vastus = document.getElementById('nimi-tabelist-container');
    const vastus2 = document.getElementById('ruhm-tabelist-container');
    const vastus3 = document.getElementById('keel-tabelist-container');
    const vastus4 = document.getElementById('sunnipaev-tabelist-container');
    const vastus5 = document.getElementById('lemmik-varv-container');
    const vastus6 = document.getElementById('fail-tabelist-container');
    const vastus7 = document.getElementById('salasona-tabelist-container');
    const vastused = [vastus, vastus2, vastus3, vastus4, vastus5, vastus6, vastus7];

    vastused.forEach(vastus => {
        console.log(vastus);
        vastus.innerText = "";
    })

}