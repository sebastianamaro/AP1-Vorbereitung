# Sistemas de almacenamiento (DAS/NAS/SAN)

## Objetivos de Aprendizaje

Después de este capítulo deberías ser capaz de:
- Distinguir DAS, NAS y SAN
- Clasificar el acceso por bloques y por archivos
- Seleccionar un concepto de almacenamiento adecuado

---

## Contenido Principal

### Las tres arquitecturas

| Concepto | Conexión | Acceso | Uso |
|----------|----------|--------|-----|
| **DAS** (Direct Attached Storage) | directamente en el servidor (p. ej. discos internos, USB) | por bloques | servidor único, sencillo y económico |
| **NAS** (Network Attached Storage) | a través de la **LAN** (Ethernet) | **por archivos** (SMB/NFS) | almacenamiento de archivos compartido en la red |
| **SAN** (Storage Area Network) | red de almacenamiento dedicada (Fibre Channel/iSCSI) | **por bloques** | centros de datos, alto rendimiento/escalabilidad |

- **NAS** ofrece **recursos compartidos de archivos** (como una unidad de red), fácil de configurar.
- **SAN** ofrece **almacenamiento por bloques** (como un disco local para el servidor), potente pero complejo/costoso.

> **Nota:** En la AP1 solo se hace referencia todavía a **NAS**; **SAN** ha pasado al área de la AP2/profundización (véanse los [cambios del catálogo](../00-exam-overview/00-02-catalog-changes.md)).

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **DAS** | Almacenamiento conectado directamente al servidor |
| **NAS** | Almacenamiento de red por archivos (LAN) |
| **SAN** | Red de almacenamiento dedicada por bloques |
| **Por bloques vs. por archivos** | Bloques en bruto (como un disco) vs. archivos/recursos compartidos |

---

## Consejos para el Examen

- **NAS = por archivos (LAN)**, **SAN = por bloques (red propia)** – la diferencia clave.
- Para un escenario dado, justificar el concepto adecuado (coste vs. rendimiento vs. uso compartido).
- Combinar los sistemas de almacenamiento con **RAID** (tolerancia a fallos) y **backup** (protección de datos).

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** Un cliente necesita acceso compartido a archivos para varios empleados y una red de almacenamiento de alto rendimiento para servidores virtualizados. Recomienda DAS, NAS o SAN en cada caso y justifícalo.

---

## Referencias

- [05-04 Sistemas redundantes (RAID)](./05-04-redundante-systeme.md)
- [05-08 Sistemas de servidor](./05-08-serversysteme.md)
