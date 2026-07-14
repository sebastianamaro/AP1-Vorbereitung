# Ethernet y direcciones MAC

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Conocer la estructura y el propósito de una dirección MAC
- Distinguir la dirección MAC (capa 2) de la dirección IP (capa 3)
- Comprender el papel del switch en Ethernet

---

## Contenido Principal

### Dirección MAC

La **dirección MAC** (Media Access Control) identifica de forma única una tarjeta de red en la **capa de enlace de datos (capa 2 del modelo OSI)**.

- **48 bits**, hexadecimal, p. ej. `00:1A:2B:3C:4D:5E`
- Los primeros 3 bytes = **OUI** (fabricante), los últimos 3 bytes = específicos del dispositivo
- **física/fija** (a diferencia de la dirección IP lógica y modificable)

### MAC frente a IP

| | Dirección MAC | Dirección IP |
|--|-------------|------------|
| Capa OSI | 2 (enlace de datos) | 3 (red) |
| Validez | red local (LAN) | entre redes |
| Asignación | fija (fabricante) | lógica/configurable |
| Correspondencia IP↔MAC | mediante **ARP** | – |

### Switch y trama Ethernet

Un **switch** opera en la capa 2, aprende las direcciones MAC de los dispositivos conectados (**tabla de direcciones MAC**) y reenvía las **tramas** de forma dirigida al puerto correcto (en lugar de a todos los puertos como un hub). Una **trama Ethernet** contiene la MAC de destino/origen, el tipo, los datos útiles y la suma de comprobación (FCS).

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Dirección MAC** | Dirección de hardware de 48 bits (capa 2) |
| **ARP** | Resuelve direcciones IP a direcciones MAC |
| **Switch** | Reenvía tramas de forma dirigida según la tabla MAC |
| **Trama (Frame)** | Unidad de datos de la capa 2 |

---

## Consejos para el Examen

- Separa claramente **MAC (capa 2, fija) frente a IP (capa 3, lógica)**.
- **ARP** conecta ambos mundos (IP → MAC).
- Switch = capa 2 (MAC), router = capa 3 (IP).

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** Interpreta el tráfico de red registrado: explica para qué sirven la MAC de origen/destino y cómo reenvía un switch basándose en la tabla MAC.

---

## Referencias

- [07-02 Direccionamiento IPv4](./07-02-ipv4-grundlagen.md)
- [07-07 VLANs](./07-07-vlans.md)
