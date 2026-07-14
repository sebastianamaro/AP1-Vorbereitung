# VLANs

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Explicar el propósito y el funcionamiento de las VLANs
- Conocer los puertos de acceso (access) y troncales (trunk) así como el etiquetado 802.1Q
- Corregir afirmaciones falsas habituales sobre las VLANs

---

## Contenido Principal

Una **VLAN** (Virtual Local Area Network) subdivide **lógicamente** una red física de switches en varias redes separadas. Los dispositivos de distintas VLANs **no pueden comunicarse directamente** entre sí (solo a través de un router / switch de capa 3).

### Ventajas

- **Segmentación** sin hardware separado (separar dominios de broadcast)
- **Seguridad** (aislar los departamentos entre sí)
- **Flexibilidad** (asignación independiente de la ubicación física)
- menos **tráfico de broadcast**

### Puertos y etiquetado

| Término | Significado |
|---------|-----------|
| **Puerto de acceso (access)** | pertenece a **una** VLAN (dispositivo final) |
| **Puerto troncal (trunk)** | transporta **varias** VLANs entre switches |
| **Etiqueta 802.1Q** | identificador VLAN de 4 bytes en la trama Ethernet (en los trunks) |
| **VLAN-ID** | 12 bits (1–4094) |

Entre VLANs la comunicación se realiza mediante **inter-VLAN routing** (router-on-a-stick o switch de capa 3).

### Afirmaciones falsas frecuentes

| Afirmación | ¿Correcto? |
|---------|----------|
| "Los dispositivos de distintas VLANs se comunican directamente sin router." | ❌ Falso – hace falta routing |
| "Las VLANs reducen los dominios de broadcast." | ✅ Correcto |
| "Un puerto troncal pertenece a exactamente una VLAN." | ❌ Falso – un trunk transporta varias |

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **VLAN** | Segmentación lógica de la red en el switch |
| **Access/Trunk** | Una VLAN frente a varias VLANs por puerto |
| **802.1Q** | Estándar para el etiquetado de VLAN |
| **Inter-VLAN routing** | Comunicación entre VLANs mediante la capa 3 |

---

## Consejos para el Examen

- **Las VLANs separan dominios de broadcast**; la comunicación entre VLANs solo mediante router/switch L3.
- Distingue **access (1 VLAN) frente a trunk (varias, etiqueta 802.1Q)**.
- Tarea típica: comprobar la corrección de afirmaciones sobre VLANs (ver tabla).

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** Responde a las preguntas de un cliente sobre VLANs y comprueba la corrección de las afirmaciones (p. ej. "las VLANs se comunican sin router", "trunk = una VLAN").

---

## Referencias

- [07-01 Ethernet y direcciones MAC](./07-01-ethernet-mac.md)
- [07-05 Routing](./07-05-routing.md)
