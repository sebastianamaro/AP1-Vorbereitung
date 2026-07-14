# Sistemas redundantes (RAID, alta disponibilidad)

## Objetivos de Aprendizaje

Después de este capítulo deberías ser capaz de:
- Entender la redundancia como medio para aumentar la disponibilidad
- Distinguir los niveles RAID más importantes
- Clasificar la alta disponibilidad y el failover

---

## Contenido Principal

### Redundancia

La **redundancia** significa mantener los componentes críticos disponibles **por duplicado (o más)**, de modo que, cuando falla un componente, otro asume su función → mayor **disponibilidad**. Ejemplos: fuentes de alimentación dobles, rutas de red redundantes, clústeres, servidores replicados.

### RAID (Redundant Array of Independent Disks)

Combina varios discos duros en un conjunto para lograr **tolerancia a fallos** o **rendimiento**:

| RAID | Principio | Redundancia | Capacidad útil |
|------|-----------|-------------|----------------|
| **RAID 0** | Striping (división) | **ninguna** (solo rendimiento) | 100 % |
| **RAID 1** | Mirroring (réplica) | sí (1 disco puede fallar) | 50 % |
| **RAID 5** | Striping + paridad distribuida | 1 disco puede fallar | (n−1)/n |
| **RAID 6** | como el 5, doble paridad | 2 discos pueden fallar | (n−2)/n |
| **RAID 10** | combinación 1+0 (stripes replicados) | sí | 50 % |

> **Recuerda:** RAID 0 no ofrece **ninguna** redundancia. RAID **no sustituye a una copia de seguridad** (no protege frente a borrados/ransomware).

### Alta disponibilidad (HA)

- **Failover / clúster:** toma de control automática por un sistema de reserva
- La **disponibilidad** suele medirse en "nueves" (p. ej. 99,9 % ≈ 8,7 h de caída al año)
- Otras medidas: USV (Unterbrechungsfreie Stromversorgung / sistema de alimentación ininterrumpida, para la corriente), conexión de red redundante, ubicaciones georredundantes

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Redundancia** | Provisión múltiple de componentes críticos |
| **RAID** | Conjunto de discos para tolerancia a fallos/rendimiento |
| **Paridad** | Información de comprobación para la reconstrucción tras un fallo de disco |
| **Failover** | Toma de control automática por un sistema de reserva |

---

## Consejos para el Examen

- Conocer los **niveles RAID** y su redundancia/capacidad útil (sobre todo 0/1/5/10).
- **RAID ≠ copia de seguridad** – una afirmación frecuente en el examen.
- Vincular la disponibilidad con medidas concretas (RAID, USV, clúster).
- **Nota:** RAID/SAN han pasado de la AP1 al área de la AP2/profundización (véanse los [cambios del catálogo](../00-exam-overview/00-02-catalog-changes.md)).

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** Un cliente quiere aumentar la disponibilidad. Explica RAID 1, RAID 5 y RAID 10 con su respectiva tolerancia a fallos y por qué RAID no sustituye a una copia de seguridad.

---

## Referencias

- [05-06 Sistemas de almacenamiento](./05-06-speichersysteme.md)
- [05-07 Sistema de alimentación ininterrumpida](./05-07-usv.md)
