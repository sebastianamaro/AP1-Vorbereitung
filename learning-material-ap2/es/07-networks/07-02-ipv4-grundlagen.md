# Direccionamiento IPv4 – Fundamentos

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Comprender la estructura de una dirección IPv4 y de la máscara de subred
- Determinar la parte de red y la parte de host
- Conocer los rangos de direcciones privadas y las direcciones especiales

---

## Contenido Principal

### Estructura

Una **dirección IPv4** tiene **32 bits** de longitud, escrita como cuatro **octetos** (0–255), p. ej. `192.168.1.10`. La **máscara de subred** separa la **parte de red** (unos) de la **parte de host** (ceros).

- `255.255.255.0` = **/24** (prefijo CIDR = número de bits de red)
- Bits de red fijos = dirección de red; bits de host variables = hosts

### Direcciones importantes en una subred

- **Dirección de red:** todos los bits de host a **0** (p. ej. 192.168.1.0/24)
- **Broadcast:** todos los bits de host a **1** (p. ej. 192.168.1.255)
- **Hosts utilizables:** 2^(bits de host) − 2 (restar red y broadcast)

### Rangos de direcciones privadas (RFC 1918)

| Rango | Máscara |
|---------|-------|
| 10.0.0.0 – 10.255.255.255 | /8 |
| 172.16.0.0 – 172.31.255.255 | /12 |
| 192.168.0.0 – 192.168.255.255 | /16 |

Adicionales: **127.0.0.0/8** = loopback (localhost), **169.254.0.0/16** = APIPA (link-local).

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Máscara de subred** | Separa la parte de red y la de host |
| **Prefijo CIDR** | Número de bits de red (p. ej. /24) |
| **Broadcast** | Dirección para todos los hosts de la subred |
| **RFC 1918** | Rangos de direcciones privadas, no enrutables |

---

## Consejos para el Examen

- **Hosts utilizables = 2^bits de host − 2** (restar red + broadcast) – fórmula estándar.
- Memoriza los rangos privados (10/8, 172.16/12, 192.168/16).
- Saber convertir el prefijo CIDR ↔ máscara de subred (/24 = 255.255.255.0).

---

## Ejercicio Práctico

**Tarea:** Determina para `192.168.10.130/25`: dirección de red, broadcast, primera/última dirección de host utilizable y número de hosts utilizables.

<details>
<summary>Solución</summary>

/25 → máscara 255.255.255.128, tamaño de bloque 128. Red: 192.168.10.128, broadcast: 192.168.10.255, hosts: .129–.254, utilizables: 2^7−2 = **126**.

</details>

---

## Referencias

- [07-03 Creación de subredes en IPv4](./07-03-subnetzbildung-ipv4.md)
- [07-05 Routing](./07-05-routing.md)
