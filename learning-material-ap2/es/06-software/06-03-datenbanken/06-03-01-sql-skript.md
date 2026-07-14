# Script SQL

## Objetivos de Aprendizaje

Después de este capítulo deberías poder:
- Distinguir los comandos DDL y DML
- Crear tablas con CREATE TABLE (incluidas las claves)
- Insertar datos y consultarlos con SELECT (incluido JOIN)

---

## Contenido Principal

### Categorías de SQL

| Categoría | Propósito | Comandos |
|-----------|-----------|----------|
| **DDL** (Data Definition) | Estructura | `CREATE`, `ALTER`, `DROP` |
| **DML** (Data Manipulation) | Datos | `INSERT`, `UPDATE`, `DELETE`, `SELECT` |
| **DCL** (Data Control) | Permisos | `GRANT`, `REVOKE` |

### Crear una Tabla (DDL)

```sql
CREATE TABLE Kategorie (
    KategorieID   INT           PRIMARY KEY AUTO_INCREMENT,
    Bezeichnung   VARCHAR(50)   NOT NULL
);

CREATE TABLE Artikel (
    ArtikelID     INT           PRIMARY KEY AUTO_INCREMENT,
    Name          VARCHAR(100)  NOT NULL,
    Preis         DECIMAL(8,2)  NOT NULL,
    KategorieID   INT,
    FOREIGN KEY (KategorieID) REFERENCES Kategorie(KategorieID)
);
```

- **PRIMARY KEY** – clave única
- **FOREIGN KEY … REFERENCES** – clave foránea (integridad referencial)

### Insertar Datos (DML)

```sql
INSERT INTO Kategorie (Bezeichnung) VALUES ('Hardware');
INSERT INTO Artikel (Name, Preis, KategorieID) VALUES ('SSD 1TB', 79.90, 1);
```

### Consultas

```sql
SELECT Name, Preis FROM Artikel
WHERE Preis < 100
ORDER BY Preis DESC;

-- JOIN über zwei Tabellen
SELECT a.Name, k.Bezeichnung
FROM Artikel a
JOIN Kategorie k ON a.KategorieID = k.KategorieID;

-- Aggregat mit Gruppierung
SELECT KategorieID, COUNT(*) AS Anzahl, AVG(Preis) AS Schnitt
FROM Artikel
GROUP BY KategorieID
HAVING COUNT(*) > 1;
```

- **WHERE** filtra filas, **GROUP BY** agrupa, **HAVING** filtra grupos.
- Tipos de **JOIN**: INNER, LEFT/RIGHT (OUTER).
- Funciones de agregación: `COUNT, SUM, AVG, MIN, MAX`.

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **DDL/DML** | Comandos de estructura vs. de datos |
| **PRIMARY/FOREIGN KEY** | Clave primaria/foránea |
| **JOIN** | Vinculación de tablas |
| **WHERE vs. HAVING** | Filtro de filas vs. de grupos |

---

## Consejos para el Examen

- **SQL es relevante en GA2** (trasladado de AP1 a AP2) – practica `CREATE TABLE`, `INSERT`, `SELECT` con `JOIN`/`WHERE`/`GROUP BY`.
- **WHERE (filas) vs. HAVING (grupos)** – una pregunta trampa frecuente.
- Definir correctamente las claves foráneas (integridad referencial, ver [04-06](../../04-it-security/04-06-datenintegritaet.md)).

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** Escribe un script SQL que cree las tablas `Kategorie` y `Artikel` (con clave foránea) y las rellene con datos de ejemplo, además de una consulta de todos los artículos por categoría.

---

## Referencias

- [06-03-02 Modelo ER](./06-03-02-er-modell.md)
- [06-03-03 Normalización](./06-03-03-normalisierung.md)
