Descrizione: Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Questo è il primo esercizio suddiviso per milestone, quindi seguite le milestone nell'ordine: non passate alla successiva se non avete fatto la precedente
Numero minimo di push: 10
MILESTONE 0: Creare il file README.md
MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2: Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.



dichiarare una variabile per l'eta dell'utente
dichiarare una variabile per i chilometri che l'utente deve percorrere
ricavare il valore delle variabili tramite due prompt separati
dichiarare una variabile per il prezzo del biglietto
creare un if per verificare l'eta' dell'utente
? Se ha meno di 18 anni 
    sconto del 20%         (dichiarare variabile sconto 20%)
altrimenti se ha piu di 65 anni
    sconto del 40%         (dichiarare variabile sconto 40%)
altrimenti
    nessuno sconto
dichiarare variabile per il prezzo finale 
impostarla con massimo 2 decimali
? se lo sconto e' diverso da 0
    calcolare il prezzo finale
