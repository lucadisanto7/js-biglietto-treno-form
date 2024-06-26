document.getElementById('calculate-price').addEventListener('click', function() {
    // Recupera i valori dai campi di input
    let name = document.getElementById('name').value;
    let km = document.getElementById('km').value;
    let age = document.getElementById('age').value;

    // Calcola il prezzo del biglietto
    let prezzo_biglietto = 0.21 * km;
    let sconto = 0;

    // Determina lo sconto in base all'età
    if (age === "Minorenne") {
        sconto = 20;
    } else if (age === "Over 65") {
        sconto = 40;
    }

    // Calcola il prezzo finale con lo sconto se applicabile
    let prezzo_finale = prezzo_biglietto;
    if (sconto > 0) {
        let prezzo_scontato = prezzo_biglietto * sconto / 100;
        prezzo_finale = prezzo_biglietto - prezzo_scontato;
    }
  
    // Lettura dati biglietto
    document.getElementById('passeggero').innerHTML = name
    document.getElementById('carrozza').innerHTML= Math.floor(Math.random() * 10 + 1)
    document.getElementById('codiceCP').innerHTML= Math.floor(Math.random() * 90000 + 10000)
    document.getElementById('costo_biglietto').innerHTML = '€' + prezzo_finale.toFixed(2)
});
    // Reset dei dati
    document.getElementById('reset-fields').addEventListener('click', function() {
    document.getElementById('name').value = '';
    document.getElementById('km').value = '';
    document.getElementById('age').selectedIndex = 0;
});
