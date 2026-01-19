### 1) Risorse e modello dati

Struttura della prenotazione:

- `id` (string o number)
- `guestName` (string)
- `from` (YYYY-MM-DD)
- `to` (YYYY-MM-DD)
- `guests` (number)
- `status` (es. `"confirmed"` / `"cancelled"`)

### 2) Endpoint richiesti

Endpoint: "Get /bookings"
descrizione: Endpoint che usa il metodo Get e restituisce i dati seguendo la struttura sopra riportata, se non inserisci

query params: Status (confirmed/cancelled),filtro per data(from-to)

esempio request status: filtro prenotazione confermata
esempio request data: filtro per data

esempio response status "Get /bookings?status=confirmed"
esempio response2 status "Get /bookings?status=cancelled"

esempio response data "Get /bookings?date_from?=datainizio/date_end=datafine

