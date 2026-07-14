# Routing

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Comprender la función de un router y de una tabla de enrutamiento
- Distinguir el enrutamiento estático y dinámico
- Ubicar el default gateway (puerta de enlace predeterminada) y la ruta por defecto

---

## Contenido Principal

### Router y routing

Un **router** conecta **redes diferentes** (capa 3 del modelo OSI) y reenvía paquetes IP según la **dirección de destino** a través de la **tabla de enrutamiento**. Dentro de una subred, los hosts se comunican directamente; para otras redes envían el paquete a su **default gateway** (el router).

### Tabla de enrutamiento

Contiene entradas: **red de destino / máscara → siguiente salto (gateway) / interfaz / métrica**.

```
Zielnetz          Maske             Gateway        Metrik
10.0.1.0          255.255.255.0     direkt (eth0)  0
10.0.2.0          255.255.255.0     10.0.1.2       1
0.0.0.0           0.0.0.0           10.0.1.1       (Standardroute)
```

- **Ruta por defecto (0.0.0.0/0):** se utiliza cuando ninguna entrada específica coincide (normalmente hacia Internet).
- Gana el **prefijo coincidente más largo** (Longest Prefix Match).

### Estático frente a dinámico

| | Enrutamiento estático | Enrutamiento dinámico |
|--|--------------------|---------------------|
| Mantenimiento | manual | automático mediante protocolos |
| Protocolos | – | **RIP, OSPF, BGP** |
| Idoneidad | redes pequeñas/estables | redes grandes/cambiantes |
| Esfuerzo/errores | poca sobrecarga, pero exige mantenimiento | autoadaptable, más sobrecarga |

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Tabla de enrutamiento** | Red de destino → siguiente salto |
| **Default gateway** | Router para todos los destinos no locales |
| **Ruta por defecto** | 0.0.0.0/0 como ruta de reserva |
| **OSPF/BGP** | Protocolos de enrutamiento dinámico |

---

## Consejos para el Examen

- Saber explicar el **default gateway** y la **ruta por defecto (0.0.0.0/0)**.
- **Estático frente a dinámico** con una ventaja/desventaja de cada uno.
- Longest Prefix Match: gana la entrada más específica.

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** Para una red compuesta por varias subredes: crea la tabla de enrutamiento de un router (redes de destino, gateways) incluyendo una ruta por defecto hacia Internet.

---

## Referencias

- [07-03 Creación de subredes en IPv4](./07-03-subnetzbildung-ipv4.md)
- [07-06 Subnetting de IPv6](./07-06-ipv6-subnetting.md)
