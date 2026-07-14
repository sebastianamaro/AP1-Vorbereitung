# Subnetting de IPv6

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Conocer la estructura y la notación de una dirección IPv6
- Dividir un prefijo IPv6 en subredes
- Ubicar el prefijo, el Subnet-ID y el Interface-ID

---

## Contenido Principal

### Estructura

Una **dirección IPv6** tiene **128 bits** de longitud, escrita en ocho **hextetos** (16 bits) en hexadecimal, separados por `:`, p. ej. `2001:0db8:0000:0000:0000:0000:0000:0001`.

**Reglas de abreviación:**
- Omitir los ceros a la izquierda de cada bloque: `0db8 → db8`
- Sustituir **una** secuencia de bloques de ceros por `::`: `2001:db8::1`

### Estructura (típica)

```
| Global Routing Prefix |  Subnet-ID  |     Interface-ID (64 Bit)     |
|      /48 (vom ISP)     |   16 Bit    |            /64                 |
```

- Un **/64** es la subred estándar (una LAN). A partir de un **/48** se pueden formar **2^16 = 65.536** subredes /64.

### Ejemplo de subnetting

**Tarea:** El ISP asigna `2001:db8:abcd::/48`. Forma subredes para varias áreas.

- Asigna las subredes como **/64** contando el **Subnet-ID** (bits 49–64):
  - `2001:db8:abcd:0000::/64`
  - `2001:db8:abcd:0001::/64`
  - `2001:db8:abcd:0002::/64` …
- Cada /64 ofrece prácticamente hosts ilimitados (2^64).

> En IPv6 **no hay broadcast** (en su lugar, multicast) y normalmente **no es necesario NAT** – hay direcciones de sobra.

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Hexteto** | Bloque de 16 bits de la dirección IPv6 |
| **`::`** | Sustituye exactamente una secuencia de bloques de ceros |
| **/64** | Tamaño de subred estándar (una LAN) |
| **Interface-ID** | Los 64 bits inferiores, identifican la interfaz |

---

## Consejos para el Examen

- Aplica las **reglas de abreviación** con seguridad (ceros a la izquierda, `::` solo una vez).
- De **/48 → /64** resultan **2^16 subredes**; incrementa el Subnet-ID.
- IPv6 **no tiene broadcast**, sino multicast – pregunta frecuente.
- La configuración de IPv6 está **recién enfatizada** en el catálogo actualizado.

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** Un cliente recibe `2001:db8:1234::/48`. Forma cuatro subredes /64 para cuatro áreas de la empresa e indica sus prefijos.

<details>
<summary>Solución</summary>

`2001:db8:1234:0::/64`, `…:1::/64`, `…:2::/64`, `…:3::/64`.

</details>

---

## Referencias

- [07-02 Direccionamiento IPv4](./07-02-ipv4-grundlagen.md)
- [07-05 Routing](./07-05-routing.md)
