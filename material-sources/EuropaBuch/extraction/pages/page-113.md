
---
## Page 113
---

Software


**[VISUAL: XML/DTD ANNOTATED CODE HEADER]**
Header image introducing XML and DTD file structure for Content Management System work.


### Ausgangsszenario:

Ein Kunde der IT-Firma ConSystem GmbH arbeitet mit einem Content-Management-System. Ein Mit- arbeiter des Kunden soll sich in diesen Bereich einarbeiten. Unter anderem braucht dieser Mitarbeiter Kenntnisse im Bereich XML-Dateien und HTML-Grundlagen.


### Aufgabenstellung:

Der Leiter der Entwicklungsabteilung hat dazu Beispiele entwickelt. Als erfahrene/-r Auszubildende/-r der Abteilung erhalten Sie den Auftrag, die Beispiele zu vervollstandigen und die korrekten Zuordnun- gen vorzunehmen.


### Zurordung von XML-Grundbegriffen in XML-Dateien


**[VISUAL: XML/DTD STRUCTURE WITH NUMBERED ANNOTATIONS]**
Two code files with numbered arrows/callouts pointing to different elements that students must identify:

**File 1: kunden.dtd (DTD file)**
```xml
<!ELEMENT name (#PCDATA)>           ← [3] Elementtyp mit Text als Inhalt
<!ELEMENT strasse (#PCDATA)>
<!ELEMENT adresse (name, strasse, wohnort, telefonnummern)>  ← [4] Elementtyp mit Element-Inhalt
<!ELEMENT wohnort (#PCDATA)>
<!ELEMENT telefonnummern (nummer)+>  ← [5] Elementtyp mit beliebiger Wiederholung
<!ELEMENT nummer (#PCDATA)>         ← [7] Wiederholungselement
```

**File 2: kunden.xml (XML file)**
```xml
<?xml version="1.0"?>               ← [9] Kennzeichnung als XML-Datei
<!-- kundendaten -->                ← [8] Kommentar
<!DOCTYPE kundendaten SYSTEM "kunden.dtd">  ← [10] Verweis auf externe DTD
<adresse>
  <name>Hans Kaiser</name>          ← [6] Element mit Daten
  ...
</adresse>
```

Students match numbers 1-10 to the correct element types.


### Zuzuordnende Elemente:


### l. XML-Datei ,,kunden.xml"


### 2. DTD-Datei ,,kunden.dtd"


### 3. Elementtyp mit Text als lnhalt


### 4. Elementtyp mit Element-lnhalt


### 6. Element mit Daten


### 7. Wiederholungselement


### 8. Kommentar


### 9. Kennzeichnung der Datei als XML-Datei


### 10. Verweis auf eine externe DTD-Datei

5. Elementtyp mit beliebiger Wiederholung (mindestens einmal)


### Dateil: ~


# ~

<!ELEMENT name (#PCDATA)>

<!ELEMENT strasse (#PCDATA)>


# ~

<!ELEMENT adresse (name, strasse, wohnort, telefonnummern)>

<!ELEMENT wohnort (#PCDATA)>


# ~

<!ELEMENT telefonnummern (nummer)+> < ! ELEMENT nummer (#PCDATA)>


### Datei2: ~

<?xml version="l.0"?>


**[VISUAL: XML/DTD STRUCTURE WITH NUMBERED ANNOTATIONS]**
Two code files with numbered arrows/callouts pointing to different elements that students must identify:

**File 1: kunden.dtd (DTD file)**
```xml
<!ELEMENT name (#PCDATA)>           ← [3] Elementtyp mit Text als Inhalt
<!ELEMENT strasse (#PCDATA)>
<!ELEMENT adresse (name, strasse, wohnort, telefonnummern)>  ← [4] Elementtyp mit Element-Inhalt
<!ELEMENT wohnort (#PCDATA)>
<!ELEMENT telefonnummern (nummer)+>  ← [5] Elementtyp mit beliebiger Wiederholung
<!ELEMENT nummer (#PCDATA)>         ← [7] Wiederholungselement
```

**File 2: kunden.xml (XML file)**
```xml
<?xml version="1.0"?>               ← [9] Kennzeichnung als XML-Datei
<!-- kundendaten -->                ← [8] Kommentar
<!DOCTYPE kundendaten SYSTEM "kunden.dtd">  ← [10] Verweis auf externe DTD
<adresse>
  <name>Hans Kaiser</name>          ← [6] Element mit Daten
  ...
</adresse>
```

Students match numbers 1-10 to the correct element types.


## ____.Í\

<!-- kundendaten --> 1


# <!DOCTYPE kundendaten SYSTEM "kunden.dtd"> ~

<adresse>

<name> Hans Kaiser </name>

<strasse> Masurenalle 12 </strasse>


**[VISUAL: XML/DTD STRUCTURE WITH NUMBERED ANNOTATIONS]**
Two code files with numbered arrows/callouts pointing to different elements that students must identify:

**File 1: kunden.dtd (DTD file)**
```xml
<!ELEMENT name (#PCDATA)>           ← [3] Elementtyp mit Text als Inhalt
<!ELEMENT strasse (#PCDATA)>
<!ELEMENT adresse (name, strasse, wohnort, telefonnummern)>  ← [4] Elementtyp mit Element-Inhalt
<!ELEMENT wohnort (#PCDATA)>
<!ELEMENT telefonnummern (nummer)+>  ← [5] Elementtyp mit beliebiger Wiederholung
<!ELEMENT nummer (#PCDATA)>         ← [7] Wiederholungselement
```

**File 2: kunden.xml (XML file)**
```xml
<?xml version="1.0"?>               ← [9] Kennzeichnung als XML-Datei
<!-- kundendaten -->                ← [8] Kommentar
<!DOCTYPE kundendaten SYSTEM "kunden.dtd">  ← [10] Verweis auf externe DTD
<adresse>
  <name>Hans Kaiser</name>          ← [6] Element mit Daten
  ...
</adresse>
```

Students match numbers 1-10 to the correct element types.

<wohnort> 20000 Hamburg </wohnort>


**[VISUAL: XML/DTD STRUCTURE WITH NUMBERED ANNOTATIONS]**
Two code files with numbered arrows/callouts pointing to different elements that students must identify:

**File 1: kunden.dtd (DTD file)**
```xml
<!ELEMENT name (#PCDATA)>           ← [3] Elementtyp mit Text als Inhalt
<!ELEMENT strasse (#PCDATA)>
<!ELEMENT adresse (name, strasse, wohnort, telefonnummern)>  ← [4] Elementtyp mit Element-Inhalt
<!ELEMENT wohnort (#PCDATA)>
<!ELEMENT telefonnummern (nummer)+>  ← [5] Elementtyp mit beliebiger Wiederholung
<!ELEMENT nummer (#PCDATA)>         ← [7] Wiederholungselement
```

**File 2: kunden.xml (XML file)**
```xml
<?xml version="1.0"?>               ← [9] Kennzeichnung als XML-Datei
<!-- kundendaten -->                ← [8] Kommentar
<!DOCTYPE kundendaten SYSTEM "kunden.dtd">  ← [10] Verweis auf externe DTD
<adresse>
  <name>Hans Kaiser</name>          ← [6] Element mit Daten
  ...
</adresse>
```

Students match numbers 1-10 to the correct element types.

<telefonnummern> <nummer> 123456 </nummer> <nummer> 654321 </nummer> <nummer> 111111 </nummer> </telefonnummern>

</adresse>

111
