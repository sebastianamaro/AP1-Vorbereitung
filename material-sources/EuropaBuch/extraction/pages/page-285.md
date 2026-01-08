
---
## Page 285
---


### Fachkompetenz Software


### Moglicher Pseudoalgorithmus:


### PROGRAMMSTART

Festlegen Variable anzahl vom Typ Ganzzahl Festlegen Variable index vom Typ Ganzzahl Festlegen Variable i vom Typ Ganzzahl index := 0


### SOLANGE ( index < BildDaten.Getlength() )

anzahl := 0 i := index


### SOLANGE ( i < BildDaten.Getlength()

UND BildDaten[i] = BildDaten[index] )

i := i + 1 anzahl := anzahl + 1


### ENDE SOLANGE


# FALLS ( anzahl > 3) DANN


## index .- index + anzahl;

KomprimierteDaten.Add("§") KomprimierteDaten.Add(anzahl) KomprimierteDaten.Add(BildDaten[index])


### ENDE FALLS


### SONST

i := 0


### SOLANGE ( i < anzahl)

KomprimierteDaten.Add(BildDaten[index]) i := i + 1


### ENDE SOLANGE

index .- index + anzahl;


### ENDE SONST


### ENDE SOLANGE


### PROGRAMMENDE

283


**[VISUAL: CONSYSTEM GMBH LOGO]**
Company logo header for the ConSystem GmbH training materials.

**[VISUAL: RLE COMPRESSION PSEUDOCODE - SOLUTION]**
The pseudocode above describes a Run-Length Encoding (RLE) compression algorithm that:
1. Iterates through image data
2. Counts consecutive identical values
3. If count > 3, stores marker "§" + count + value
4. Otherwise stores values individually
