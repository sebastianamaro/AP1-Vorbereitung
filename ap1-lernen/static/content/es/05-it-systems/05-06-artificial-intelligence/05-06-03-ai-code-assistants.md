# Asistentes de Codigo IA

**Nota:** Las herramientas impulsadas por IA son NUEVAS en el catalogo de examenes 2025!

## Objetivos de Aprendizaje

Despues de este capitulo, deberias ser capaz de:
- Entender como funcionan los asistentes de codigo IA
- Conocer y distinguir herramientas populares
- Evaluar ventajas y desventajas
- Conocer el manejo responsable del codigo IA

---

## Contenido Principal

### Que son los Asistentes de Codigo IA?

Los **asistentes de codigo IA** son herramientas que apoyan a los desarrolladores en la programacion sugiriendo, generando, explicando o mejorando codigo.

```
┌─────────────────────────────────────────────────────────────────┐
│                    ASISTENTE DE CODIGO IA                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Desarrollador                               Asistente IA      │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │                                                         │  │
│   │  def calcular_impuesto(                                 │  │
│   │      _                   ←───────────────┐              │  │
│   │                                          │              │  │
│   │                          ┌───────────────┴────────────┐│  │
│   │                          │ Sugerencia:                 ││  │
│   │                          │                             ││  │
│   │                          │ def calcular_impuesto(ingr):││  │
│   │                          │     if ingr <= 10000:       ││  │
│   │                          │         return 0            ││  │
│   │                          │     return ingr * 0.2       ││  │
│   │                          └─────────────────────────────┘│  │
│   │                                                         │  │
│   │  [Tab] para aceptar                                     │  │
│   │                                                         │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│   La IA analiza:                                               │
│   • Contexto actual                                            │
│   • Estructura del proyecto                                    │
│   • Comentarios y nombres de funciones                         │
│   • Patrones comunes                                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Caracteristicas de los Asistentes de Codigo IA

| Caracteristica | Descripcion |
|----------------|-------------|
| **Completado de codigo** | Sugerencias mientras escribes |
| **Generacion de codigo** | Generar codigo completo desde descripcion |
| **Explicacion de codigo** | Explicar codigo existente |
| **Refactorizacion** | Sugerencias de mejora |
| **Deteccion de bugs** | Identificar errores potenciales |
| **Documentacion** | Generar comentarios y docstrings |
| **Tests unitarios** | Generar casos de prueba |
| **Revision de codigo** | Verificacion de calidad |

---

### Asistentes de Codigo IA Populares

| Herramienta | Proveedor | Caracteristica Especial |
|-------------|-----------|-------------------------|
| **GitHub Copilot** | GitHub/Microsoft | Integracion IDE, muy popular |
| **Claude** | Anthropic | Contextos mas largos, analisis de codigo |
| **ChatGPT** | OpenAI | Versatil, explica bien |
| **Amazon CodeWhisperer** | AWS | Integracion con AWS |
| **Tabnine** | Tabnine | Ejecucion local posible |
| **Codeium** | Codeium | Gratis para usuarios privados |

---

### GitHub Copilot en Detalle

```
┌────────────────────────────────────────────────────────────────┐
│                GITHUB COPILOT                                  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Integracion en:                                               │
│  • VS Code                                                     │
│  • Visual Studio                                               │
│  • JetBrains IDEs                                             │
│  • Neovim                                                      │
│                                                                │
│  Caracteristicas:                                              │
│  ┌────────────────────────────────────────────────────────┐   │
│  │ // Ordenar array ascendente                            │   │
│  │ function ordenarArray(arr) {                           │   │
│  │     return arr.sort((a, b) => a - b);  ← Sugerencia   │   │
│  │ }                                                       │   │
│  └────────────────────────────────────────────────────────┘   │
│                                                                │
│  Copilot Chat:                                                 │
│  ┌────────────────────────────────────────────────────────┐   │
│  │ Usuario: "Explica este codigo"                         │   │
│  │ Copilot: "Esta funcion ordena un array..."            │   │
│  └────────────────────────────────────────────────────────┘   │
│                                                                │
│  Precios (a partir de 2025):                                  │
│  • Individual: ~$10/mes                                        │
│  • Business: ~$19/mes                                          │
│  • Gratis para estudiantes y mantenedores de open-source      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Ventajas de los Asistentes de Codigo IA

| Ventaja | Descripcion |
|---------|-------------|
| **Aumento de productividad** | Desarrollo mas rapido |
| **Menos escritura** | Codigo boilerplate se genera |
| **Apoyo al aprendizaje** | Aprender nuevos conceptos y APIs |
| **Calidad de codigo** | Se sugieren mejores practicas |
| **Documentacion** | Comentarios automaticos |
| **Depuracion** | Ayuda con correccion de errores |

---

### Riesgos y Desventajas

| Riesgo | Descripcion |
|--------|-------------|
| **Vulnerabilidades de seguridad** | IA puede sugerir codigo inseguro |
| **Sugerencias incorrectas** | El codigo puede contener bugs |
| **Derechos de autor** | Entrenado con codigo de otros |
| **Dependencia** | Sobredependencia |
| **Perdida de comprension** | Adoptar codigo sin entenderlo |
| **Privacidad de datos** | Codigo se envia a la nube |

---

### Mejores Practicas para Codigo IA

```
┌────────────────────────────────────────────────────────────────┐
│          MANEJO RESPONSABLE DEL CODIGO IA                      │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ✓ SIEMPRE revisar y entender el codigo                       │
│                                                                │
│  ✓ Especialmente revisar codigo relevante para seguridad      │
│                                                                │
│  ✓ Escribir tests para codigo generado                        │
│                                                                │
│  ✓ Considerar derechos de autor (especialmente open source)   │
│                                                                │
│  ✓ No usar datos sensibles en prompts                         │
│                                                                │
│  ✓ Usar como herramienta, no como reemplazo del conocimiento  │
│                                                                │
│  ✗ Aceptar ciegamente                                          │
│                                                                │
│  ✗ Ingresar contrasenas o API keys en prompts                 │
│                                                                │
│  ✗ Aceptar codigo critico de seguridad sin verificar          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Problemas de Seguridad Tipicos con Codigo IA

| Problema | Ejemplo |
|----------|---------|
| **SQL Injection** | Entrada de usuario sin filtrar |
| **Credenciales Hardcoded** | Contrasenas en el codigo |
| **Validacion Faltante** | Entrada no verificada |
| **Librerias Obsoletas** | Versiones inseguras |
| **XSS** | Salida insegura |

**Importante:** El codigo generado por IA debe verificarse para seguridad como cualquier otro codigo!

---

## Terminos Clave

| Termino | Explicacion |
|---------|-------------|
| **Code Completion** | Completado automatico |
| **Prompt** | Instruccion a la IA |
| **GitHub Copilot** | Asistente de codigo IA popular |
| **LLM** | Large Language Model (base de la IA) |
| **Boilerplate** | Codigo estandar repetitivo |
| **Refactorizacion** | Mejorar codigo sin cambiar funcion |

---

## Consejos para el Examen

### Preguntas Comunes del Examen

- Que es un asistente de codigo IA?
- Nombra ventajas y riesgos
- Como deberias manejar el codigo generado por IA?

### Importante Recordar

- **Asistentes de codigo IA:** Apoyan, pero no reemplazan al desarrollador
- **Ventajas:** Productividad, menos escritura, ayuda de aprendizaje
- **Riesgos:** Vulnerabilidades de seguridad, derechos de autor, confianza ciega
- **Mejor practica:** SIEMPRE revisar y entender el codigo!

---

## Ejercicios Practicos

### Ejercicio 1
Que es un asistente de codigo IA y como apoya a los desarrolladores?

**Solucion:** Un **asistente de codigo IA** es una herramienta que apoya a los desarrolladores en la programacion. Usa inteligencia artificial para:
- Sugerir codigo mientras escribes
- Generar codigo desde lenguaje natural
- Explicar codigo existente
- Hacer sugerencias de mejora
- Crear documentacion

Ejemplos: GitHub Copilot, Claude, ChatGPT

### Ejercicio 2
Nombra dos ventajas y dos riesgos al usar asistentes de codigo IA.

**Solucion:**

**Ventajas:**
1. **Aumento de productividad:** Los desarrolladores pueden programar mas rapido
2. **Apoyo al aprendizaje:** Aprender nuevas APIs y patrones

**Riesgos:**
1. **Vulnerabilidades de seguridad:** IA puede sugerir codigo inseguro
2. **Perdida de comprension:** Los desarrolladores adoptan codigo sin entenderlo

### Ejercicio 3
Un desarrollador junior usa GitHub Copilot y acepta todas las sugerencias sin revision. Cual es el problema y como deberia proceder?

**Solucion:**

**Problema:**
- El codigo puede contener bugs o vulnerabilidades de seguridad
- Codigo problematico con derechos de autor posible
- El desarrollador no entiende su propio codigo
- Sin efecto de aprendizaje

**Mejor enfoque:**
1. Leer y entender cada sugerencia
2. Verificar codigo para problemas de seguridad
3. Escribir tests para codigo generado
4. Hacer preguntas o leer documentacion cuando no esta claro
5. Usar IA como herramienta, no como reemplazo del conocimiento

---

## Referencias Cruzadas

- [05-06-01 AI Fundamentals](./05-06-01-ai-fundamentals.md) - Conocimiento basico
- [05-06-02 AI Applications](./05-06-02-ai-applications.md) - Otras aplicaciones
- [06-06-02 Testing](../../06-software/06-06-development-process/06-06-02-testing.md) - Pruebas de codigo
