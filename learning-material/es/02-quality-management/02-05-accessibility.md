# Accesibilidad en TI

## Objetivos de Aprendizaje

Después de este capítulo usted debería ser capaz de:
- Definir la accesibilidad en el sector de TI
- Conocer los fundamentos legales (Directiva de la UE, BITV 2.0)
- Describir medidas para TI accesible
- Conocer las directrices WCAG

---

## Contenido Principal

### ¿Qué es la Accesibilidad?

**Accesibilidad** significa que los sistemas de TI, sitios web y aplicaciones están diseñados de manera que puedan ser utilizados por **todas las personas** - independientemente de limitaciones físicas o mentales.

> **Definición:** La tecnología de la información accesible permite que las personas con discapacidades utilicen ofertas digitales sin restricciones.

---

### ¿Por Qué es Importante la Accesibilidad?

| Razón | Explicación |
|-------|-------------|
| **Inclusión** | Participación de todas las personas en el mundo digital |
| **Requisito Legal** | Se deben cumplir los requisitos legales |
| **Grupo Objetivo** | Aproximadamente el 10% de la población tiene limitaciones |
| **Facilidad de Uso** | Mejora la usabilidad para todos los usuarios |
| **Económico** | Mayor base de clientes |

---

### Fundamentos Legales

#### Directiva de la UE 2016/2102

La Directiva de la UE sobre la accesibilidad de sitios web y aplicaciones móviles de organismos del sector público:

- Se aplica a instituciones públicas
- Requiere accesibilidad de presencias web
- Se refiere a WCAG 2.1

#### BITV 2.0

La **Barrierefreie-Informationstechnik-Verordnung** (Ordenanza de Tecnología de la Información Accesible - BITV 2.0) es la implementación alemana:

| Aspecto | Detalles |
|---------|----------|
| **Ámbito** | Autoridades federales y organismos públicos |
| **Norma de Referencia** | WCAG 2.1 Nivel AA |
| **Requisitos** | Perceptibilidad, operabilidad, comprensibilidad, robustez |
| **Monitoreo** | Se requiere revisión regular |

---

### Directrices WCAG

Las **Web Content Accessibility Guidelines (WCAG)** son estándares internacionales para contenido web accesible.

#### Los Cuatro Principios (POUR)

```
┌─────────────────────────────────────────────────────────────────┐
│                    WCAG - Principios POUR                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │           P - PERCEPTIBLE                               │   │
│  │   El contenido debe presentarse de formas perceptibles  │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │           O - OPERABLE                                  │   │
│  │   La interfaz de usuario debe ser operable              │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │           U - COMPRENSIBLE (Understandable)             │   │
│  │   La información y operación deben ser comprensibles    │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │           R - ROBUSTO                                   │   │
│  │   El contenido debe ser interpretable por               │   │
│  │   tecnologías de asistencia                             │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Niveles de Conformidad WCAG

| Nivel | Descripción |
|-------|-------------|
| **A** | Accesibilidad mínima |
| **AA** | Estándar (requerido por BITV 2.0) |
| **AAA** | Máxima accesibilidad |

---

### Medidas para TI Accesible

#### Para Sitios Web

| Área | Medida |
|------|--------|
| **Imágenes** | Textos alternativos (atributos alt) para lectores de pantalla |
| **Contraste** | Contraste de color suficiente (mín. 4.5:1) |
| **Fuente** | Tamaños de fuente escalables (sin valores fijos en píxeles) |
| **Navegación** | Navegación por teclado posible |
| **Formularios** | Campos de entrada etiquetados (labels) |
| **Videos** | Subtítulos y audiodescripción |
| **Estructura** | HTML semántico (encabezados h1-h6) |

#### Ejemplo: Sitio Web Accesible

```html
<!-- CORRECTO: Imagen accesible -->
<img src="producto.jpg" alt="Portátil negro con pantalla de 15 pulgadas">

<!-- INCORRECTO: No accesible -->
<img src="producto.jpg">

<!-- CORRECTO: Campo de formulario etiquetado -->
<label for="email">Dirección de correo electrónico:</label>
<input type="email" id="email" name="email">

<!-- CORRECTO: Estructura de encabezados semántica -->
<h1>Encabezado principal</h1>
  <h2>Subcapítulo</h2>
    <h3>Sección</h3>
```

---

### Tecnologías de Asistencia

| Tecnología | Grupo de Usuarios | Función |
|------------|-------------------|---------|
| **Lector de Pantalla** | Personas con discapacidad visual | Lee el contenido de la pantalla en voz alta |
| **Ampliador de Pantalla** | Personas con discapacidad visual | Amplía secciones de la pantalla |
| **Pantalla Braille** | Personas ciegas | Muestra texto en Braille |
| **Control por Voz** | Personas con discapacidad motora | Operación por voz |
| **Teclados Especiales** | Personas con discapacidad motora | Dispositivos de entrada adaptados |

---

### Accesibilidad en Software

| Aspecto | Medida |
|---------|--------|
| **Contraste de Color** | Alto contraste entre texto y fondo |
| **Tamaño de Fuente** | Tamaño de fuente ajustable |
| **Control por Teclado** | Todas las funciones accesibles vía teclado |
| **Mensajes de Error** | Formulados de manera clara y comprensible |
| **Límites de Tiempo** | Tiempo suficiente o que se pueda desactivar |
| **Animaciones** | Pueden pausarse o desactivarse |

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Accesibilidad** | Usabilidad de TI para todas las personas |
| **WCAG** | Web Content Accessibility Guidelines |
| **BITV 2.0** | Ordenanza de Tecnología de la Información Accesible (alemana) |
| **Lector de Pantalla** | Software para leer el contenido de la pantalla en voz alta |
| **Texto Alt** | Texto alternativo para imágenes |
| **POUR** | Perceptible, Operable, Comprensible, Robusto |

---

## Consejos para el Examen

### Preguntas Comunes del Examen
- ¿Qué se entiende por accesibilidad en TI?
- ¿Qué regula BITV 2.0?
- Nombre medidas para sitios web accesibles

### Importante para el Examen
- Conocer los cuatro principios POUR
- Textos alt como medida importante
- BITV 2.0 como ordenanza alemana

---

## Ejercicios Prácticos

### Ejercicio 1
¿Cómo se define la accesibilidad en el sector de TI?

**Solución:** Accesibilidad significa que los sistemas de TI, sitios web y aplicaciones están diseñados de manera que puedan ser utilizados por todas las personas - independientemente de limitaciones físicas o mentales.

### Ejercicio 2
Describa BITV 2.0.

**Solución:** La Ordenanza de Tecnología de la Información Accesible (BITV 2.0) es la implementación alemana de la Directiva de la UE 2016/2102. Requiere que las autoridades federales y los organismos públicos cumplan con WCAG 2.1 Nivel AA para sus ofertas digitales.

### Ejercicio 3
Nombre tres medidas concretas para un sitio web accesible.

**Solución:**
1. **Textos alternativos** para imágenes (atributos alt) para lectores de pantalla
2. **Contraste de color suficiente** entre texto y fondo
3. **Navegación por teclado** - todas las funciones deben ser accesibles vía teclado
(o: tamaños de fuente escalables, estructura HTML semántica, subtítulos para videos)

### Ejercicio 4
¿Qué significa la abreviatura POUR en las directrices WCAG?

**Solución:**
- **P** = Perceptible (Perceivable)
- **O** = Operable (Operable)
- **U** = Comprensible (Understandable)
- **R** = Robusto (Robust)

---

## Referencias Cruzadas

- [02-04 Calidad del Software](./02-04-software-quality.md) - Usabilidad como característica de calidad
- [06-05-01 HTML-XML](../06-software/06-05-web-development/06-05-01-html-xml.md) - HTML semántico
- [05-06-04 EU AI Act](../05-it-systems/05-06-artificial-intelligence/05-06-04-eu-ai-act.md) - Regulaciones de la UE
