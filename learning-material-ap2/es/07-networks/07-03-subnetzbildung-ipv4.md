# Creación de subredes en IPv4

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Dividir una red en subredes del mismo tamaño
- Calcular la máscara de subred, las direcciones de red, el broadcast y los rangos de host
- Aplicar el método del "tamaño de bloque"

---

## Contenido Principal

### Principio

En el **subnetting** tomas prestados **bits de la parte de host** para formar varias subredes más pequeñas. Cada bit prestado **duplica** el número de subredes y **reduce a la mitad** los hosts por subred.

- **Número de subredes** = 2^(bits prestados)
- **Hosts por subred** = 2^(bits de host restantes) − 2

### Método del tamaño de bloque

**Tamaño de bloque = 256 − (valor del octeto de la máscara)**. Las subredes comienzan en múltiplos del tamaño de bloque.

### Ejemplo resuelto

**Tarea:** Divide `192.168.1.0/24` en **4 subredes del mismo tamaño**.

1. 4 subredes → tomar prestados 2 bits → nuevo prefijo **/26**
2. Máscara: `255.255.255.192` (último octeto 11000000 = 192)
3. **Tamaño de bloque = 256 − 192 = 64**
4. Subredes y direcciones:

| Subred | Dirección de red | primer/último host | Broadcast |
|---------|-------------|-------------------|-----------|
| 1 | 192.168.1.0 | .1 – .62 | 192.168.1.63 |
| 2 | 192.168.1.64 | .65 – .126 | 192.168.1.127 |
| 3 | 192.168.1.128 | .129 – .190 | 192.168.1.191 |
| 4 | 192.168.1.192 | .193 – .254 | 192.168.1.255 |

- Hosts por subred: 2^6 − 2 = **62**.

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Subnetting** | Dividir una red tomando prestados bits de host |
| **Tamaño de bloque** | 256 − octeto de la máscara; distancia entre subredes |
| **Extensión del prefijo** | Más bits de red = más subredes y más pequeñas |

---

## Consejos para el Examen

- Domina el **método del tamaño de bloque** – rápido y con pocos errores.
- Indica siempre **dirección de red, broadcast y rango de host** para cada subred.
- Hosts = 2^bits de host − 2 (red + broadcast).
- El subnetting se examina con mucha frecuencia – practica mucho.

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** Planifica para un laboratorio de redes la división de `10.0.0.0/24` en 8 subredes del mismo tamaño. Indica el prefijo, la máscara, el tamaño de bloque y, para las tres primeras subredes, la dirección de red/hosts/broadcast.

<details>
<summary>Solución</summary>

8 subredes → 3 bits → /27, máscara 255.255.255.224, tamaño de bloque 32, 30 hosts cada una. Subredes: .0, .32, .64, … Broadcast de la primera: .31.

</details>

---

## Referencias

- [07-04 Subredes de distinto tamaño (VLSM)](./07-04-subnetze-unterschiedlicher-groesse.md)
- [07-02 Direccionamiento IPv4](./07-02-ipv4-grundlagen.md)
