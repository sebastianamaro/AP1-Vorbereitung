# Claves e Integridad Referencial

## Objetivos de Aprendizaje

Después de este capítulo deberías poder:
- Distinguir claves primarias, foráneas y combinadas
- Explicar la integridad referencial
- Aplicar las acciones de restricción (CASCADE, SET NULL, RESTRICT)

---

## Contenido Principal

### Tipos de Clave

| Clave | Significado |
|-------|-------------|
| **Clave primaria (PK)** | identificación única; **NOT NULL**, sin duplicados, **como máximo una** por tabla |
| **Clave foránea (FK)** | referencia a la PK de otra tabla |
| **Clave combinada** | PK formada por **varias** columnas (compuesta) |
| **Clave candidata** | posibles PKs; se elige una |

**Ejemplo de clave combinada:** tabla `teilnahmen(person_id, event_id)` – la combinación es única (una persona participa en un evento una sola vez).

### Integridad Referencial

Una **clave foránea** debe referenciar siempre a un registro **existente** (sin referencias "huérfanas"). El DBMS lo impone.

### Acciones de Restricción (ON DELETE / ON UPDATE)

¿Qué ocurre con las filas FK cuando el registro referenciado se modifica/elimina?

| Acción | Comportamiento |
|--------|----------------|
| **CASCADE** | el cambio/eliminación se **propaga** (también a las filas dependientes) |
| **SET NULL** | la FK se establece en **NULL** |
| **SET DEFAULT** | la FK se establece en el **valor por defecto** |
| **RESTRICT / NO ACTION** | la acción se **impide** mientras existan referencias |

```sql
FOREIGN KEY (kunden_id) REFERENCES kunden(id)
    ON DELETE CASCADE
    ON UPDATE RESTRICT;
```

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Clave primaria** | Única, NOT NULL, una por tabla |
| **Clave foránea** | Referencia a una PK |
| **Integridad referencial** | La FK referencia siempre a un registro existente |
| **CASCADE / SET NULL / RESTRICT** | Comportamiento ante cambio/eliminación |

---

## Consejos para el Examen

- Indicar con seguridad las reglas de la PK (única, NOT NULL, una por tabla).
- **n:m** se resuelve mediante una **clave combinada** en la tabla intermedia.
- **CASCADE vs. RESTRICT vs. SET NULL** – tarea típica: determinar el comportamiento al eliminar.

---

## Ejercicio Práctico

**Tarea:** Define una clave foránea para `bestellung.kunden_id` y decide, de forma justificada, entre `ON DELETE CASCADE` y `ON DELETE RESTRICT` cuando se elimina un cliente.

---

## Referencias

- [06-03-02 Modelo ER](./06-03-02-er-modell.md)
- [04-06 Integridad de Datos](../../04-it-security/04-06-datenintegritaet.md)
