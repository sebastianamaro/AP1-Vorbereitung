# Fundamentos de IA

**Nota:** La Inteligencia Artificial es NUEVA en el catalogo de examenes 2025!

## Objetivos de Aprendizaje

Despues de este capitulo, deberias ser capaz de:
- Definir el termino Inteligencia Artificial
- Conocer las diferencias entre IA debil y fuerte
- Distinguir entre Machine Learning y Deep Learning
- Entender conceptos basicos de IA

---

## Contenido Principal

### Que es la Inteligencia Artificial?

**Inteligencia Artificial (IA)** se refiere a sistemas que pueden realizar tareas de inteligencia similares a las humanas como aprendizaje, resolucion de problemas, comprension del lenguaje o reconocimiento de patrones.

```
┌─────────────────────────────────────────────────────────────────┐
│                    INTELIGENCIA ARTIFICIAL                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              INTELIGENCIA ARTIFICIAL (IA)               │   │
│  │     (Sistemas que pueden actuar "inteligentemente")     │   │
│  │                                                          │   │
│  │   ┌───────────────────────────────────────────────────┐ │   │
│  │   │           MACHINE LEARNING (ML)                    │ │   │
│  │   │   (Sistemas que pueden aprender de datos)          │ │   │
│  │   │                                                    │ │   │
│  │   │   ┌─────────────────────────────────────────────┐ │ │   │
│  │   │   │           DEEP LEARNING (DL)                 │ │ │   │
│  │   │   │   (Redes neuronales con muchas capas)       │ │ │   │
│  │   │   │                                              │ │ │   │
│  │   │   │   Ejemplos: ChatGPT, reconocimiento imagen  │ │ │   │
│  │   │   └─────────────────────────────────────────────┘ │ │   │
│  │   └───────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### IA Debil vs. IA Fuerte

| Tipo | Descripcion | Ejemplos | Estado |
|------|-------------|----------|--------|
| **IA Debil** | Especializada para una tarea | Asistentes de voz, clasificacion de imagenes, ChatGPT | Existe hoy |
| **IA Fuerte (AGI)** | Inteligencia general similar a la humana | Como en ciencia ficcion | No existe |

```
┌────────────────────────────────────────────────────────────────┐
│              IA DEBIL vs. IA FUERTE                            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  IA DEBIL (ANI)                      IA FUERTE (AGI)          │
│  Inteligencia Artificial Estrecha    Inteligencia Art. General│
│                                                                │
│  ┌────────────────────┐           ┌────────────────────┐      │
│  │ Especialista para  │           │ Puede hacer TODO   │      │
│  │ UNA tarea          │           │ como un humano     │      │
│  │                    │           │                    │      │
│  │ • Jugar ajedrez    │           │ • Aprender         │      │
│  │ • Generar texto    │           │ • Entender         │      │
│  │ • Reconocer imagen │           │ • Ser creativo     │      │
│  │ • Reconocer voz    │           │ • Consciencia?     │      │
│  └────────────────────┘           └────────────────────┘      │
│                                                                │
│       ✓ REAL HOY                      ✗ HIPOTETICA            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Machine Learning (ML)

**Machine Learning** es un subcampo de la IA donde los sistemas aprenden de datos sin ser programados explicitamente.

#### Tipos de Aprendizaje ML

| Tipo de Aprendizaje | Descripcion | Ejemplo |
|---------------------|-------------|---------|
| **Aprendizaje Supervisado** | Aprendizaje con datos etiquetados | Filtro de spam (email → spam/no spam) |
| **Aprendizaje No Supervisado** | Encontrar patrones en datos no etiquetados | Segmentacion de clientes |
| **Aprendizaje por Refuerzo** | Aprendizaje mediante recompensa/castigo | IA de juegos, robots |

```
┌────────────────────────────────────────────────────────────────┐
│                PROCESO ML (Aprendizaje Supervisado)            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. Datos Entren.       2. Entrenamiento     3. Modelo       │
│   ┌─────────────────┐       ┌──────────┐       ┌──────────┐  │
│   │ Imagen → "Gato" │       │          │       │          │  │
│   │ Imagen → "Perro"│ ────► │Algoritmo │ ────► │  Modelo  │  │
│   │ Imagen → "Gato" │       │ aprende  │       │          │  │
│   │ ...             │       │          │       │          │  │
│   └─────────────────┘       └──────────┘       └──────────┘  │
│                                                      │        │
│   4. Aplicacion                                      ▼        │
│   ┌─────────────────┐                         ┌──────────┐   │
│   │ Nueva imagen    │ ────────────────────►   │  "Gato"  │   │
│   └─────────────────┘                         └──────────┘   │
│                                                               │
└────────────────────────────────────────────────────────────────┘
```

---

### Deep Learning

**Deep Learning** usa redes neuronales artificiales con muchas capas (deep = muchas capas).

```
┌────────────────────────────────────────────────────────────────┐
│                 RED NEURONAL                                   │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Capa            Capas Ocultas              Capa              │
│   Entrada         (Hidden Layers)            Salida            │
│                                                                │
│     ○───────────○───────────○──────────────○                  │
│     ○─────┬─────○─────┬─────○──────────────○                  │
│     ○─────┼─────○─────┼─────○──────────────○                  │
│     ○─────┴─────○─────┴─────○                                 │
│                                                                │
│   Pixeles        Reconocimiento         Clasificacion         │
│   imagen         caracteristicas        "Gato"                │
│                                                                │
│   → Mas capas = patrones mas complejos reconocibles           │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Aspecto | Machine Learning | Deep Learning |
|---------|------------------|---------------|
| **Estructura de datos** | Datos estructurados | Datos no estructurados (imagenes, texto) |
| **Ingenieria de caracteristicas** | Manual | Automatica |
| **Cantidad de datos** | Menos datos necesarios | Grandes cantidades necesarias |
| **Potencia de calculo** | Menor | GPU/TPU requeridos |

---

### Terminos Importantes de IA

| Termino | Explicacion |
|---------|-------------|
| **Entrenamiento** | Entrenar modelo de IA con datos |
| **Inferencia** | Aplicar el modelo entrenado |
| **Modelo** | El conocimiento aprendido de la IA |
| **Parametros** | Valores ajustables en el modelo |
| **Dataset** | Coleccion de datos de entrenamiento |
| **Etiqueta** | Respuesta correcta para datos de entrenamiento |
| **Alucinacion** | IA genera informacion falsa de forma convincente |
| **Prompt** | Entrada/consulta a una IA |

---

### IA Generativa

**IA Generativa** crea nuevo contenido (texto, imagenes, codigo, musica).

| Tipo | Descripcion | Ejemplos |
|------|-------------|----------|
| **LLM (Large Language Model)** | Grandes modelos de lenguaje | ChatGPT, Claude, Gemini |
| **Text-to-Image** | Imagenes desde descripciones | DALL-E, Midjourney, Stable Diffusion |
| **Generacion de Codigo** | Codigo desde descripciones | GitHub Copilot, Claude |

---

### Riesgos y Limitaciones de la IA

| Riesgo | Descripcion |
|--------|-------------|
| **Sesgo** | IA adopta sesgos de los datos de entrenamiento |
| **Alucinaciones** | IA inventa desinformacion que suena plausible |
| **Caja negra** | Decisiones a menudo no rastreables |
| **Proteccion de datos** | Datos de entrenamiento pueden ser sensibles |
| **Desplazamiento laboral** | Automatizacion de tareas |
| **Mal uso** | Deepfakes, desinformacion |

---

## Terminos Clave

| Termino | Explicacion |
|---------|-------------|
| **IA** | Inteligencia Artificial |
| **ML** | Machine Learning |
| **DL** | Deep Learning |
| **LLM** | Large Language Model |
| **IA Debil** | Especializada para una tarea |
| **IA Fuerte** | Inteligencia general (hipotetica) |
| **Red Neuronal** | Arquitectura de IA inspirada en el cerebro |
| **IA Generativa** | IA que crea nuevo contenido |

---

## Consejos para el Examen

### Preguntas Comunes del Examen

- Que es la Inteligencia Artificial?
- Cual es la diferencia entre IA debil y fuerte?
- Que es Machine Learning?
- Nombra riesgos de la IA

### Importante Recordar

- **IA Debil** = especializada, existe hoy (ChatGPT, Alexa)
- **IA Fuerte** = generalmente inteligente, no existe
- **ML** = aprendizaje de datos
- **Deep Learning** = redes neuronales con muchas capas
- **Alucinaciones** = IA inventa informacion falsa pero plausible

---

## Ejercicios Practicos

### Ejercicio 1
Cual es la diferencia entre IA debil y fuerte?

**Solucion:**
- **IA Debil (ANI):** Esta especializada para una tarea especifica (ej., jugar ajedrez, generar texto). Existe hoy y se usa en muchas aplicaciones.
- **IA Fuerte (AGI):** Tendria inteligencia general, similar a la humana y podria resolver cualquier tarea intelectual. Actualmente no existe y es hipotetica.

### Ejercicio 2
Que significa "alucinacion" en sistemas de IA?

**Solucion:** Una **alucinacion** es cuando una IA genera informacion falsa que suena plausible y convincente. El sistema de IA "inventa" hechos que no existen, ej., referencias de fuentes falsas, estadisticas inventadas o personas inexistentes. Por lo tanto, las salidas de IA siempre deben revisarse criticamente.

### Ejercicio 3
Nombra tres riesgos al usar IA.

**Solucion:**
1. **Sesgo:** IA puede adoptar sesgos de los datos de entrenamiento
2. **Alucinaciones:** IA genera informacion falsa de forma convincente
3. **Proteccion de datos:** Datos de entrenamiento o entradas de usuario pueden contener informacion sensible

(Adicional: Problema de caja negra, desplazamiento laboral, mal uso para desinformacion)

---

## Referencias Cruzadas

- [05-06-02 AI Applications](./05-06-02-ai-applications.md) - Uso practico de IA
- [05-06-03 AI Code Assistants](./05-06-03-ai-code-assistants.md) - IA en desarrollo
- [05-06-04 EU AI Act](./05-06-04-eu-ai-act.md) - Regulacion de IA
