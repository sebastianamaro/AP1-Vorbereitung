# Aplicaciones de IA

**Nota:** La Inteligencia Artificial es NUEVA en el catalogo de examenes 2025!

## Objetivos de Aprendizaje

Despues de este capitulo, deberias ser capaz de:
- Conocer diversas areas de aplicacion de IA
- Nombrar ejemplos de IA en la vida cotidiana y el trabajo
- Evaluar ventajas y desventajas de las aplicaciones de IA
- Conocer herramientas impulsadas por IA para el sector TI

---

## Contenido Principal

### IA en la Vida Cotidiana

```
┌─────────────────────────────────────────────────────────────────┐
│                    IA EN LA VIDA COTIDIANA                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │  Asistentes  │  │   Recomen-   │  │   Navega-    │         │
│  │  de Voz      │  │  daciones    │  │   cion       │         │
│  │              │  │              │  │              │         │
│  │  "Hey Siri"  │  │  Netflix,    │  │  Prediccion  │         │
│  │  "Alexa"     │  │  Spotify     │  │  de trafico  │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │   Apps de    │  │  Feed Redes  │  │   Hogar      │         │
│  │   Fotos      │  │  Sociales    │  │   Inteligente│         │
│  │              │  │              │  │              │         │
│  │  Reconoc.    │  │  Algoritmo   │  │  Control de  │         │
│  │  facial      │  │  muestra pub.│  │  calefaccion │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

| Area | Aplicacion de IA | Ejemplo |
|------|------------------|---------|
| **Asistentes de voz** | Reconocimiento de voz, NLP | Siri, Alexa, Google Assistant |
| **Sistemas de recomendacion** | Personalizacion | Netflix, Spotify, Amazon |
| **Navegacion** | Planificacion de rutas, prediccion de trafico | Google Maps, Waze |
| **Fotografia** | Reconocimiento facial, filtros | iPhone Photos, Google Photos |
| **Email** | Filtro de spam, respuesta inteligente | Gmail, Outlook |
| **Traduccion** | Traduccion automatica | DeepL, Google Translate |

---

### IA en los Negocios

| Industria | Aplicacion | Beneficio |
|-----------|------------|-----------|
| **Servicio al cliente** | Chatbots, automatizacion | Disponibilidad 24/7 |
| **Marketing** | Publicidad personalizada | Mayor conversion |
| **Finanzas** | Deteccion de fraude, trading | Minimizacion de riesgos |
| **Logistica** | Optimizacion de rutas | Ahorro de costos |
| **Manufactura** | Control de calidad | Reduccion de errores |
| **Salud** | Apoyo al diagnostico | Deteccion temprana |

---

### IA en TI

```
┌────────────────────────────────────────────────────────────────┐
│                    IA EN TI                                    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  DESARROLLO          OPERACIONES           SEGURIDAD          │
│  ┌────────────────┐   ┌────────────────┐   ┌────────────────┐ │
│  │ Asistentes de  │   │ AIOps          │   │ Deteccion de   │ │
│  │ Codigo (Copilot)│  │ (Automatizacion│   │ Amenazas       │ │
│  │                │   │ TI)            │   │                │ │
│  │ Revision de    │   │ Monitoreo      │   │ Deteccion de   │ │
│  │ Codigo         │   │                │   │ Anomalias      │ │
│  │                │   │                │   │                │ │
│  │ Deteccion de   │   │ Planificacion  │   │ Deteccion de   │ │
│  │ Bugs           │   │ de Capacidad   │   │ Malware        │ │
│  │                │   │                │   │                │ │
│  │ Documentacion  │   │                │   │                │ │
│  └────────────────┘   └────────────────┘   └────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Area | Aplicacion de IA | Ejemplo |
|------|------------------|---------|
| **Desarrollo de software** | Generacion de codigo, depuracion | GitHub Copilot, Claude |
| **Operaciones TI (AIOps)** | Automatizacion, monitoreo | Dynatrace, Splunk |
| **Seguridad TI** | Deteccion de amenazas | SIEM con ML, EDR |
| **Soporte** | Chatbots, clasificacion de tickets | ServiceNow, Zendesk |
| **Pruebas** | Generacion de tests | Selenium + ML |

---

### Herramientas de IA Generativa

| Herramienta | Tipo | Aplicacion |
|-------------|------|------------|
| **ChatGPT** | LLM | Creacion de texto, responder preguntas |
| **Claude** | LLM | Analisis de texto, programacion |
| **GitHub Copilot** | Asistente de codigo | Completado de codigo |
| **DALL-E** | Text-to-Image | Generacion de imagenes |
| **Midjourney** | Text-to-Image | Imagenes creativas |
| **Gemini** | LLM | Multimodal (texto + imagen) |

---

### IA en Servicio al Cliente

```
┌────────────────────────────────────────────────────────────────┐
│                ARQUITECTURA DE CHATBOT                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Cliente             Sitio Web/App            Backend IA      │
│   ┌─────┐              ┌─────────┐              ┌─────────┐   │
│   │     │   Pregunta   │         │   Analisis   │ Motor   │   │
│   │     │────────────► │ Widget  │────────────► │ NLP     │   │
│   │     │              │ Chatbot │              │         │   │
│   │     │◄────────────│         │◄────────────│ Recono- │   │
│   │     │   Respuesta  │         │   Respuesta  │ cimiento│   │
│   └─────┘              └─────────┘              │ Intencion│  │
│                                                 └─────────┘   │
│                                                      │        │
│                                                      ▼        │
│                                               ┌─────────┐     │
│   Para preguntas complejas:                   │Base de  │     │
│   Transferencia a humano                      │Conoci-  │     │
│                                               │miento,FAQ│    │
│                                               └─────────┘     │
│                                                               │
└────────────────────────────────────────────────────────────────┘
```

**Ventajas de los Chatbots de IA:**
- Disponibilidad 24/7
- Respuestas inmediatas
- Ahorro de costos
- Escalable

**Limitaciones:**
- Consultas complejas
- Empatia para quejas
- Escenarios imprevistos

---

### Automatizacion Impulsada por IA

| Tipo de Automatizacion | Descripcion | Ejemplo |
|------------------------|-------------|---------|
| **RPA + IA** | Automatizacion Robotica de Procesos con IA | Procesamiento de facturas |
| **Mantenimiento Predictivo** | Prediccion de necesidades de mantenimiento | Monitoreo de maquinas |
| **Procesamiento de Documentos** | Extraccion automatica de datos | OCR + NLP |

---

### Ventajas y Desventajas de las Aplicaciones de IA

| Ventajas | Desventajas |
|----------|-------------|
| Aumento de eficiencia | Perdida de empleos en algunas areas |
| Disponibilidad 24/7 | Preocupaciones de proteccion de datos |
| Ahorro de costos | Altos costos iniciales |
| Procesamiento mas rapido | Dependencia de la calidad de los datos |
| Personalizacion | Falta de transparencia en decisiones |
| Reduccion de errores | Sesgo en datos de entrenamiento |

---

## Terminos Clave

| Termino | Explicacion |
|---------|-------------|
| **Chatbot** | Asistente basado en IA para servicio al cliente |
| **NLP** | Procesamiento de Lenguaje Natural |
| **Sistema de recomendacion** | IA para sugerencias personalizadas |
| **AIOps** | IA para operaciones TI |
| **RPA** | Automatizacion Robotica de Procesos |
| **Mantenimiento Predictivo** | Mantenimiento predictivo |

---

## Consejos para el Examen

### Preguntas Comunes del Examen

- Nombra ejemplos de IA en la vida cotidiana
- Como se usa la IA en TI?
- Cuales son las ventajas y desventajas de los chatbots de IA?

### Importante Recordar

- **IA en la vida cotidiana:** Asistentes de voz, sistemas de recomendacion, navegacion
- **IA en TI:** Asistentes de codigo, AIOps, seguridad
- **Chatbots:** 24/7, pero limitados para consultas complejas
- **IA Generativa:** ChatGPT, Claude, Copilot para texto y codigo

---

## Ejercicios Practicos

### Ejercicio 1
Nombra tres ejemplos de aplicaciones de IA en la vida cotidiana.

**Solucion:**
1. **Asistentes de voz:** Siri, Alexa, Google Assistant - entienden el habla y ejecutan comandos
2. **Sistemas de recomendacion:** Netflix, Spotify - sugieren contenido personalizado
3. **Navegacion:** Google Maps - optimiza rutas y predice trafico

(Adicional: Filtros de spam, reconocimiento facial, traductores)

### Ejercicio 2
Una empresa quiere usar IA para servicio al cliente. Nombra dos ventajas y dos limitaciones.

**Solucion:**

**Ventajas:**
1. **Disponibilidad 24/7:** Los clientes pueden obtener ayuda en cualquier momento
2. **Respuestas rapidas:** Respuesta inmediata a preguntas comunes

**Limitaciones:**
1. **Consultas complejas:** El chatbot no puede resolver problemas individuales
2. **Falta de empatia:** El contacto humano es mejor para quejas

### Ejercicio 3
Que es "AIOps" y para que se usa?

**Solucion:** **AIOps (Inteligencia Artificial para Operaciones TI)** se refiere al uso de IA en operaciones TI. Aplicaciones:
- Monitoreo y alertas automaticas
- Analisis de causa raiz para incidentes
- Planificacion de capacidad y pronosticos
- Resolucion automatica de errores

El objetivo es la automatizacion y mejora de las operaciones TI mediante IA.

---

## Referencias Cruzadas

- [05-06-01 AI Fundamentals](./05-06-01-ai-fundamentals.md) - Conocimiento basico
- [05-06-03 AI Code Assistants](./05-06-03-ai-code-assistants.md) - IA en desarrollo
- [08-06-01 Service Requests](../../08-business-processes/08-06-service-management/08-06-01-service-requests.md) - Servicio al cliente
