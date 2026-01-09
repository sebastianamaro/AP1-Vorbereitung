# Modelo en Cascada

## Objetivos de Aprendizaje

Después de este capítulo, usted debería ser capaz de:
- Explicar el modelo en cascada
- Conocer las fases del modelo en cascada
- Nombrar ventajas y desventajas
- Saber cuándo es adecuado el modelo en cascada

---

## Contenido Principal

### ¿Qué es el Modelo en Cascada?

El **modelo en cascada** es un **modelo de proceso lineal** para el desarrollo de software y la gestión de proyectos. Las fases se completan una tras otra, como una cascada que solo fluye en una dirección.

---

### Las Fases del Modelo en Cascada

```
+-----------------+
|   1. ANÁLISIS   |
+--------+--------+
         v
+-----------------+
|   2. DISEÑO     |
+--------+--------+
         v
+-----------------+
| 3. IMPLEMENTACIÓN |
+--------+--------+
         v
+-----------------+
|   4. PRUEBA     |
+--------+--------+
         v
+-----------------+
|  5. OPERACIÓN   |
+-----------------+
```

---

### Descripción de las Fases

| Fase | Descripción | Resultados |
|------|-------------|------------|
| **1. Análisis** | Capturar y documentar requisitos | Documento de requisitos, especificación de requisitos |
| **2. Diseño** | Diseñar solución técnica | Especificación funcional, arquitectura, diseño |
| **3. Implementación** | Programación/ejecución | Código fuente, módulos |
| **4. Prueba** | Verificar errores y requisitos | Protocolos de prueba, listas de errores |
| **5. Operación** | Despliegue en producción y mantenimiento | Documentación, soporte |

---

### Características

- **Secuencial:** Una fase después de otra
- **Orientado a documentación:** Cada fase produce documentos
- **Planificable:** Alcance y duración determinados de antemano
- **Formal:** Transiciones de fase claras e hitos

---

### Ventajas y Desventajas

#### Ventajas

| Ventaja | Explicación |
|---------|-------------|
| **Estructura clara** | Fácil de entender y planificar |
| **Buena documentación** | Cada fase produce resultados |
| **Predictibilidad** | Costos y tiempo calculables |
| **Trazabilidad** | Hitos y transiciones claras |

#### Desventajas

| Desventaja | Explicación |
|------------|-------------|
| **Inflexible** | Los cambios son costosos y llevan tiempo |
| **Resultados tardíos** | Producto funcional solo al final |
| **Riesgo** | Errores descubiertos tarde |
| **Involucración del cliente** | El cliente solo ve el resultado al final |

---

### ¿Cuándo es Adecuado el Modelo en Cascada?

**Adecuado para:**
- Proyectos con requisitos claros y estables
- Proyectos con tecnología conocida
- Áreas reguladas con requisitos de documentación
- Proyectos pequeños y manejables

**No adecuado para:**
- Proyectos con requisitos cambiantes
- Proyectos innovadores con tecnología desconocida
- Proyectos que necesitan entregar resultados rápidamente

---

### Retroceso en el Modelo en Cascada

Aunque el modelo teóricamente solo avanza hacia adelante, en la práctica a menudo hay **pasos de retroceso**:

```
+-----------------+
|   1. ANÁLISIS   |<------+
+--------+--------+       |
         v                | Retroceso en
+-----------------+       | caso de problemas
|   2. DISEÑO     |<------+
+--------+--------+       |
         v                |
+-----------------+       |
| 3. IMPLEMENTACIÓN |-----+
+--------+--------+
         v
        ...
```

**Importante:** ¡Después del retroceso, todas las fases siguientes deben completarse nuevamente!

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Modelo en Cascada** | Modelo de proceso lineal y secuencial |
| **Fase** | Sección completada con entradas y salidas definidas |
| **Hito** | Punto de control al final de una fase |
| **Documentación** | Resultados escritos de cada fase |

---

## Consejos para el Examen

### Preguntas Frecuentes del Examen
- Nombrar las fases en el orden correcto
- Ventajas y desventajas comparadas con métodos ágiles
- ¿Cuándo es adecuado el modelo en cascada?

### Comparación con Scrum
| Aspecto | Cascada | Scrum |
|---------|---------|-------|
| Proceso | Secuencial | Iterativo |
| Cambios | Difíciles | Bienvenidos |
| Documentación | Extensa | Mínima |
| Contacto con cliente | Al principio/fin | Continuo |
| Resultado | Al final | Después de cada Sprint |

---

## Ejercicios Prácticos

### Ejercicio 1
Nombre las cinco fases del modelo en cascada en el orden correcto.

**Solución:**
1. Análisis
2. Diseño
3. Implementación
4. Prueba
5. Operación

### Ejercicio 2
Nombre dos ventajas y dos desventajas del modelo en cascada.

**Solución:**
Ventajas:
- Estructura clara y buena predictibilidad
- Documentación extensa

Desventajas:
- Inflexible con los cambios
- Producto funcional solo visible al final

### Ejercicio 3
¿Para qué proyecto sería más adecuado el modelo en cascada?
a) Desarrollo de una aplicación innovadora con requisitos poco claros
b) Creación de software de contabilidad según estándares establecidos

**Solución:** b) - Requisitos claros a través de estándares, alcance estable

---

## Referencias Cruzadas

- [01-03-02 Scrum](./01-03-02-scrum.md) - Alternativa ágil
- [01-01-02 Fases del Proyecto](../01-01-fundamentals/01-01-02-project-phases.md) - Fases generales del proyecto
- [06-06-01 SDLC](../../06-software/06-06-development-process/06-06-01-sdlc.md) - Proceso de desarrollo de software
