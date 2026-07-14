# Escenarios de Amenaza

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Conocer las amenazas típicas para los sistemas informáticos
- Distinguir entre medidas preventivas y reacciones
- Proponer medidas adecuadas para un escenario dado

---

## Contenido Principal

### Amenazas típicas

| Amenaza | Ejemplo |
|-----------|----------|
| **Malware** | Virus, gusanos, troyanos, **ransomware** (cifrado + extorsión) |
| **Ingeniería social / phishing** | Engañar a empleados para que revelen credenciales de acceso |
| **Ataques** | Fuerza bruta, **DoS/DDoS**, SQL injection, man-in-the-middle |
| **Físico/ambiental** | Robo, fuego, agua, corte de electricidad |
| **Error humano** | Manejo incorrecto, borrado accidental |
| **Amenaza interna** | Robo de datos por parte de empleados |

### Prevención vs. reacción

| Escenario | Medida preventiva (evitar) | Reacción (cuando ocurre) |
|----------|-------------------------------|-------------------------|
| **Ransomware** | Copias de seguridad (¡offline!), actualizaciones, formación de concienciación, antivirus | Aislar el sistema, restaurar desde la copia de seguridad, **no pagar**, notificar el incidente |
| **Phishing** | Formaciones, filtros de spam/correo, 2FA | Cambiar contraseñas, bloquear cuentas, informar a los afectados |
| **DDoS** | Firewall/WAF, distribución de carga, protección DDoS en el proveedor | Filtrar el tráfico, involucrar al proveedor, escalar |
| **Corte de electricidad** | **SAI (UPS)**, energía de emergencia, redundancia | Cambiar a SAI/energía de emergencia, apagar de forma ordenada |
| **Pérdida de datos** | RAID, copias de seguridad periódicas | Restauración desde la copia de seguridad |

> **Frase para recordar:** Considera siempre **ambos** lados – *preventivo* (antes) y *reactivo* (después, incl. plan de emergencia/incident response).

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Ransomware** | Malware que cifra datos y exige un rescate |
| **Ingeniería social** | Manipulación de personas para que revelen información |
| **DoS/DDoS** | Ataques de sobrecarga (distribuidos) contra la disponibilidad |
| **Incident response** | Procedimiento planificado ante incidentes de seguridad |

---

## Consejos para el Examen

- Las tareas suelen requerir **una medida preventiva Y una reacción por cada amenaza** – aporta ambas.
- Para ransomware: **copias de seguridad (offline)** como prevención más importante, **no pagar rescate** como reacción recomendada.
- Saber asignar las medidas a los **objetivos de protección** (p. ej. copia de seguridad → disponibilidad/integridad).

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** Para escenarios de amenaza dados, propón una medida preventiva para evitarlos y una reacción adecuada si ocurren.

---

## Referencias

- [04-05 Analizar Vulnerabilidades](./04-05-schwachstellen-analysieren.md)
- [05-07 Sistema de Alimentación Ininterrumpida](../05-it-systems/05-07-usv.md)
