# Avdelningsassistent

En enkel lokal frontend for AT-lakare pa avdelning. Appen ar byggd som en statisk sida och innehaller:

- patientlista med alias, orsak till vard, bakgrundssjukdomar, labb, undersokningar och rondstatus
- dagens uppgifter kopplade till en patient eller fristaende
- patientsammanfattning som gar att kopiera for overlamning eller egen arbetsstruktur
- lokal lagring i webblasaren via `localStorage`
- valfri sync mot Supabase for central lagring och dagliga snapshots

## Starta

Oppna `index.html` i en webblasare.

## Supabase

1. Skapa ett projekt i Supabase.
2. Kor SQL-filen [schema.sql](/Users/olofwullt/Documents/AvdAss/supabase/schema.sql) i SQL Editor.
3. Oppna [supabase.config.js](/Users/olofwullt/Documents/AvdAss/supabase.config.js).
4. Fyll i:
   `SUPABASE_URL`
   `SUPABASE_ANON_KEY`
   `APP_STATE_ID`

Om `SUPABASE_URL` eller `SUPABASE_ANON_KEY` ar tomma fortsatter appen att fungera lokalt med `localStorage`.

### Datamodell

- `app_state`: aktuell synkad state for appen
- `app_snapshots`: en snapshot per dag for samma state-id

## Sakerhet och avgransning

- lagg inte in personnummer eller fullstandiga patientidentifierare
- anvand appen som arbetsstod, inte som medicinskt beslutsstod
- verifiera alltid ordinationer, journaluppgifter och prioriteringar i ordinarie system
