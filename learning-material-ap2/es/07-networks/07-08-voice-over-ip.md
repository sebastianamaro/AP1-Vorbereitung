# Voice over IP (VoIP)

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Explicar el principio básico de VoIP
- Ubicar los protocolos importantes (SIP, RTP)
- Comprender la importancia de QoS

---

## Contenido Principal

**VoIP** transmite la voz **digitalizada como paquetes IP** por la red de datos en lugar de por la red telefónica clásica. La voz se muestrea, se comprime mediante un **códec**, se empaqueta y se vuelve a componer en el receptor.

### Protocolos

| Protocolo | Función |
|-----------|---------|
| **SIP** (Session Initiation Protocol) | **Señalización**: establecimiento/cierre de la conexión |
| **RTP** (Real-Time Transport Protocol) | Transporte de los **datos de voz** en tiempo real |
| **Códecs** (p. ej. G.711, G.729, Opus) | Compresión/digitalización de la voz |

### QoS (Quality of Service)

La voz es **crítica en tiempo real** y sensible a:
- **Latencia** (retardo)
- **Jitter** (variación del tiempo de tránsito)
- **Pérdida de paquetes**

**QoS** **prioriza** los paquetes de VoIP frente al tráfico de datos normal (p. ej. mediante VLAN/DiffServ) para garantizar la calidad de la voz.

### Ventajas

- Ahorro de costes (una única infraestructura para datos + voz)
- Flexibilidad, funciones adicionales (buzón de voz, conferencias), integración en los sistemas de TI

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **SIP** | Señalización (establecimiento de la conexión) |
| **RTP** | Transporte en tiempo real de los datos de voz |
| **Códec** | Digitalización/compresión de la voz |
| **QoS** | Priorización de paquetes críticos en tiempo real |

---

## Consejos para el Examen

- Separa **SIP (señalización) frente a RTP (datos de voz)**.
- Explica **QoS** frente a latencia/jitter/pérdida de paquetes.
- Una **VLAN de voz** propia es una medida típica de QoS.

---

## Ejercicio Práctico

**Tarea:** Explica a un cliente el principio de VoIP, nombra los roles de SIP y RTP y justifica por qué QoS es importante para una buena calidad de voz.

---

## Referencias

- [07-07 VLANs](./07-07-vlans.md)
- [07-05 Routing](./07-05-routing.md)
