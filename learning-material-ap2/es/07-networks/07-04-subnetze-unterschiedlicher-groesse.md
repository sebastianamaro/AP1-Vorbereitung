# Subredes de distinto tamaño (VLSM)

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Explicar VLSM y diferenciarlo del subnetting uniforme
- Asignar subredes según la necesidad (por número de hosts)
- Evitar el desperdicio de direcciones

---

## Contenido Principal

### Idea

**VLSM** (Variable Length Subnet Mask) divide una red en subredes de **distinto tamaño** – ajustadas a la necesidad real. Así se aprovecha el espacio de direcciones de forma eficiente (nada de "una talla para todos").

### Procedimiento

1. **Ordenar la demanda:** subredes por número de hosts necesarios en orden **descendente**.
2. **Determinar el prefijo por subred:** la máscara más pequeña que ofrezca suficientes hosts (hosts ≤ 2^bits de host − 2).
3. **Asignar de arriba hacia abajo:** la subred más grande primero, luego los siguientes bloques de forma consecutiva.

### Ejemplo resuelto

**Red:** `192.168.1.0/24`. Demanda: A=50 hosts, B=25, C=10, D=2 (punto a punto).

| Subred | Hosts necesarios | Prefijo | Tamaño | Rango |
|---------|-------------|--------|-------|---------|
| A | 50 | /26 (62) | 64 | 192.168.1.0 – .63 |
| B | 25 | /27 (30) | 32 | 192.168.1.64 – .95 |
| C | 10 | /28 (14) | 16 | 192.168.1.96 – .111 |
| D | 2 | /30 (2) | 4 | 192.168.1.112 – .115 |

- Para 50 hosts se necesita **/26** (62 utilizables), para 2 hosts basta con **/30** (2 utilizables – ideal para enlaces entre routers).

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **VLSM** | Subredes de tamaño variable según la necesidad |
| **/30** | Subred práctica más pequeña (2 hosts, enlaces entre routers) |
| **Eficiencia de direcciones** | La menor cantidad posible de direcciones sin usar |

---

## Consejos para el Examen

- **Asigna siempre desde la mayor demanda hasta la menor** – de lo contrario surgen huecos/solapamientos.
- Usa **/30** para conexiones punto a punto.
- Comprueba que las subredes **no se solapen**.

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** Divide `172.16.0.0/24` mediante VLSM para departamentos con 60, 30, 12 y 2 hosts. Indica para cada subred el prefijo, la dirección de red y el broadcast.

---

## Referencias

- [07-03 Creación de subredes en IPv4](./07-03-subnetzbildung-ipv4.md)
- [07-05 Routing](./07-05-routing.md)
