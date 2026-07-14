# Normalización

## Objetivos de Aprendizaje

Después de este capítulo deberías poder:
- Explicar el objetivo y la utilidad de la normalización
- Aplicar la 1ª, 2ª y 3ª forma normal (Normalform)
- Reconocer anomalías

---

## Contenido Principal

**Objetivo:** evitar redundancias y **anomalías** (de inserción, de modificación, de eliminación) distribuyendo los datos de forma limpia entre las tablas.

### 1ª Forma Normal (1NF)

- Todos los atributos son **atómicos** (sin valores múltiples/listas en una misma celda).
- Ejemplo de infracción: columna `Telefon = "0123, 0456"` → separarla.

### 2ª Forma Normal (2NF)

- 1NF **y** cada atributo no clave depende de la **totalidad** de la clave primaria (sin dependencias **parciales** con una clave compuesta).
- Ejemplo de infracción: en `Bestellposition(BestellID, ArtikelID, Artikelname)` el `Artikelname` depende solo de `ArtikelID` → trasladarlo a una tabla propia `Artikel`.

### 3ª Forma Normal (3NF)

- 2NF **y** sin dependencias **transitivas** (un atributo no clave que depende de otro atributo no clave).
- Ejemplo de infracción: `Kunde(KundenID, PLZ, Ort)` – `Ort` depende de `PLZ` → trasladar `Ort` a una tabla `Ort(PLZ, Ort)`.

```
Faustregel (3NF): Jedes Nicht-Schlüsselattribut hängt ab
"vom Schlüssel, vom ganzen Schlüssel und von nichts als dem Schlüssel".
```

### Anomalías (lo que la normalización evita)

- **Anomalía de inserción:** un registro nuevo solo puede insertarse junto con datos adicionales innecesarios
- **Anomalía de modificación:** un valor debe cambiarse en muchos lugares
- **Anomalía de eliminación:** al eliminar se borran por accidente datos aún necesarios

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Atómico (1NF)** | Solo valores indivisibles individuales por campo |
| **Dependencia parcial (2NF)** | Dependencia de una parte de la clave |
| **Dependencia transitiva (3NF)** | Dependencia a través de un atributo no clave |
| **Anomalía** | Problema de inserción/modificación/eliminación por redundancia |

---

## Consejos para el Examen

- Saber aplicar las tres formas normales **en orden** (tarea típica de GA2: llevar una tabla a la 3NF).
- Regla mnemotécnica de la 3NF: „vom Schlüssel, vom ganzen Schlüssel und von nichts als dem Schlüssel“ (de la clave, de toda la clave y de nada más que la clave).
- Saber nombrar las anomalías para justificar la **utilidad** de la normalización.

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** Convierte una tabla de pedidos no normalizada (con valores múltiples y datos redundantes de clientes/artículos) paso a paso a la 1ª, 2ª y 3ª forma normal.

---

## Referencias

- [06-03-02 Modelo ER](./06-03-02-er-modell.md)
- [06-03-01 Script SQL](./06-03-01-sql-skript.md)
