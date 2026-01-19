<!-- Ciao ragazzi,
esercizio di oggi: Express Blog - API CRUD (parte 1)

repo: express-blog-api-crud

Esercizio

Milestone 1

Come prima cosa, creiamo un controller per i nostri post, in una cartella controllers. 

All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna la logica delle funzioni che attualmente si trovano nel router (al momento restituiscono solo dei messaggi). 

Poi torniamo sul file delle rotte. Qui importiamo le funzioni dichiarate nel controller e le associamo alle varie rotte, come visto in classe.

Testiamo su postman se chiamando gli endpoint riceviamo effettivamente le stesse risposte che avevamo prima. 

Se tutto funziona, passiamo alla prossima milestone

Milestone 2


Ora passiamo ad implementare le logiche delle nostre CRUD:

Index dovrà restituire la lista dei post in formato JSON
Show dovrà restituire un singolo post in formato JSON
Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (console.log) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.

Bonus
Implementare un filtro di ricerca nella index che mostri solo i post che hanno un determinato Tag
In Show e Destroy, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.

Buon Lavoro e buon divertimento 💪 -->

Ciao ragazzi,
esercizio di oggi: Express Blog - API CRUD (parte 2)

repo: express-blog-api-crud

Esercizio
Milestone 1

Per iniziare, andiamo su Postman e prepariamo una nuova chiamata verso la nostra rotta store. 

Impostiamo il verbo e l’endpoint corretti
Selezioniamo il tab body e scegliamo il formato raw e JSON
Inseriamo come corpo della nostra request un oggetto che rappresenti un nuovo post

Nota: se vogliamo avere delle immagini, inventiamole pure. 

Nota: ricordiamo che non bisogna passare l’id quando si crea una nuova risorsa: sarà il server (con l’aiuto del database) a fornirlo.

Milestone 2

Impostiamo il body-parser per far sì che la nostra app riesca a decifrare il request body.

Poi, all’interno della rotta Store, stampiamo nel terminale i dati in arrivo, grazie a un console.log 

Milestone 3

Implementiamo quindi la logica per aggiungere un nuovo post al nostro blog, e prepariamo la risposta adeguata.

Testiamolo con postman.

Milestone 4

Ripetiamo il procedimento per la rotta di Update, in modo da avere la possibilità di modificare le nostre risorse. 

Bonus
Quelli del giorno prima, se non già fatti: 404 per la show e destroy, query string param in index per fare il filtro singolo
In Update, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.
Controllare la correttezza di dati nello store e update, inviando nel caso errore 400
Provate ad aggiungere filtri multipli (2 - 3 filtri) nella rotta index

Buon Lavoro e buon divertimento

# Brief progetto: **Booking API (Express)**

## Contesto

State costruendo una piccola API per gestire le **prenotazioni** di una struttura (es. affittacamere / B&B).
Non useremo database: i dati stanno **in memoria** (array/oggetti).

L’obiettivo della lezione è:

1. **Progettare** l’API (documentazione chiara)
2. **Implementare** l’API in Express rispettando la doc

---

## Regole del gioco

- Lavorate in **gruppi da 3–4**
- Prima fase: **solo documentazione** (niente codice)
- Seconda fase: implementazione Express
- Risposte sempre in **JSON**
- Validazioni minime e errori coerenti
- Le Date devono essere salvate in formato `YYYY-MM-DD`

---

# Fase 1 — Documentazione (30–40 min)

Create una mini-doc in Markdown (anche 1 file `API.md`) con:

### 1) Risorse e modello dati

Definite il modello “Booking”:

Campi minimi consigliati:

- `id` (string o number)
- `guestName` (string)
- `from` (YYYY-MM-DD)
- `to` (YYYY-MM-DD)
- `guests` (number)
- `status` (es. `"confirmed"` / `"cancelled"`)

### 2) Endpoint richiesti

Per ogni endpoint scrivete:

- Metodo + path
- Query/body params
- Esempio request
- Esempio response
- Errori possibili (status code + messaggio)

### 3) Regole di validazione

Scrivete chiaramente le regole (esempi):

- `from` e `to` sono obbligatorie
- `from` < `to`
- `guests` >= 1
- (opzionale) nessuna sovrapposizione con prenotazioni confermate

### 4) Convenzioni errori

Scegliete un formato unico, ad esempio:

```json
{ "error": { "code": "VALIDATION_ERROR", "message": "from is required" } }
```

Olga Demina — 11:13
# 📘 API Documentation

## Endpoint: `GET /bookings`

### Descrizione