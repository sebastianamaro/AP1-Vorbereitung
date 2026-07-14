# Monitoreo de sistemas

## Objetivos de Aprendizaje

Después de este capítulo deberías ser capaz de:
- Explicar la finalidad del monitoreo de sistemas
- Conocer métricas y conceptos importantes
- Clasificar el alerting y las herramientas típicas

---

## Contenido Principal

El **monitoreo** supervisa los sistemas informáticos de forma **continua** para detectar la carga, advertir pronto las averías y garantizar la **disponibilidad**. *(Nuevo en el catálogo.)*

### Métricas típicas

- **Carga:** CPU, RAM, espacio de almacenamiento, rendimiento de red
- **Disponibilidad / uptime**, tiempos de respuesta (latencia)
- **Tasas de error**, número de solicitudes, colas de espera

### Componentes

| Componente | Tarea |
|------------|-------|
| **Métricas** | indicadores medibles a lo largo del tiempo |
| **Logging** | registros de eventos (centralizados, a prueba de manipulaciones) |
| **Alerting** | notificación al superarse un valor umbral |
| **Dashboards** | visualización (tendencias, estado) |

### Activo vs. pasivo

- **Monitoreo activo:** el sistema consulta activamente los servicios (p. ej. ping/health check).
- **Monitoreo pasivo:** evaluación de los datos/logs entrantes.

### Herramientas

**Prometheus** (métricas), **Grafana** (dashboards), **Nagios/Zabbix** (monitoreo clásico), ELK/Loki (logs).

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Monitoreo** | Supervisión continua de los sistemas |
| **Métrica** | Indicador medible a lo largo del tiempo |
| **Alerting** | Notificación al alcanzar valores umbral |
| **Uptime/Disponibilidad** | Proporción de tiempo de operación sin fallos |

---

## Consejos para el Examen

- Nombrar la finalidad (detección temprana, disponibilidad) y las **métricas** típicas (CPU/RAM/uptime).
- **Alerting** = valor umbral → notificación; relación con el **SLA** (disponibilidad).
- Ser capaz de nombrar una herramienta (p. ej. Prometheus/Grafana).

---

## Ejercicio Práctico

**Tarea:** Nombra tres métricas que monitorearías en un servidor web y cuál sería un valor umbral de alerta razonable.

---

## Referencias

- [05-04 Sistemas redundantes](./05-04-redundante-systeme.md)
- [01-07 SLA & SOP](../01-project-management/01-07-sla-sop.md)
