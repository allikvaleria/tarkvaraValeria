function tervitus()
{
    let vastus=document.getElementById('vastus');
    let nimi=document.getElementById('nimi');
//radio-nupude nimed
    let tarpv23=document.getElementById('tarpv23');
    let tarpv24=document.getElementById('tarpv24');
    let logitpv23=document.getElementById('logitpv23');
    let logitpv24=document.getElementById('logitpv24');

//finktsiooni põhitegevus
    var ryhm=null;
    if(tarpv23.checked)
    {
        var ryhm=tarpv23.value;
    }
    else if(tarpv24.checked)
    {
        var ryhm=tarpv24.value;
    }
    else if(logitpv23.checked)
    {
        var ryhm=logitpv23.value;
    }
    else if(logitpv24.checked)
    {
        var ryhm=logitpv24.value;
    }
    else
    {
        ryhm=null;
    }
//check-box valik
    let python=document.getElementById('python');
    let html=document.getElementById('html');
    let csharp=document.getElementById('csharp');
    let java=document.getElementById('java');
    let css=document.getElementById('css');

    var keeled="";
    if(python.checked)
    {
        keeled+=python.value ;
    }
    if(html.checked)
    {
        keeled+=html.value ;
    }
    if(csharp.checked)
    {
        keeled+=csharp.value ;
    }
    if(java.checked)
    {
        keeled+=java.value ;
    }
    if(css.checked)
    {
        keeled+=css.value ;
    }
    if(keeled=="")
    {
        keeled="Sa ei oska keelt"
    }
    if(keeled>=0){
        keeled+= ' ,';
    }
    vastus.innerHTML='Tere, ' + nimi.value + '<br>' + 'sa oled ' + ryhm + ' rühmas.' + '<br>' + 'Valitud keeled on - ' + keeled;
    vastus.style.color='DarkMagenta';

    document.getElementById('nameAnswer').innerText = nimi.value;
    document.getElementById('groupAnswer').innerText = ryhm;
    document.getElementById('languagesAnswer').innerText = keeled;
}
function tervitus2()
{
    let vastus=document.getElementById('vastus');
    vastus.innerHTML='Täna on veebirakendus tund' ;
    vastus.style.color='DarkBlue';
}
function validateForm() {
    var nimi = document.forms["vorm1"]["nimi"].value;
    if (nimi == "") {
        alert("Nimi on kohustuslik!");
        return false;
    }
}