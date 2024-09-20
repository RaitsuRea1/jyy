function LisaaTeksti() {
    var alue = document.getElementById('Tekstialue');
    var uusiTeksti = document.createElement('p');
    uusiTeksti.textContent = 'uusi kappale lisätty kello ' + new Date().toLocaleTimeString();
    uusiTeksti.style.color = 'rgb(' + Math.floor(Math.random() * 256) + ','
        + Math.floor(Math.random() * 256) + ','
        + Math.floor(Math.random() * 256) + ')';
    uusiTeksti.style.fontSize = (Math.random() * 20 + 10) + 'px';
    alue.appendChild(uusiTeksti);
}
