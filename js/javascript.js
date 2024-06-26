let age = 0
let chilometri = 0

let prezzo_biglietto = 0.21 * chilometri;
let sconto = 0
let prezzo_scontato
let prezzo_finale

if (age < 18){
    sconto = 20;
}
else if (age > 65){
    sconto = 40;
}
if (sconto != 0){
    prezzo_scontato = prezzo_biglietto * sconto / 100;
    prezzo_finale = prezzo_biglietto - prezzo_scontato
    console.log(prezzo_scontato)
}
else{
    prezzo_finale = prezzo_biglietto
}

console.log(prezzo_finale)