# HTML y XML

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Comprender la estructura básica de HTML
- Conocer las etiquetas HTML importantes
- Comprender XML y su diferencia con HTML
- Distinguir lenguajes de marcado de lenguajes de programación

---

## Contenido Principal

### ¿Qué son los Lenguajes de Marcado?

Los **lenguajes de marcado** se utilizan para estructurar y describir documentos - NO son lenguajes de programación.

```
┌─────────────────────────────────────────────────────────────────┐
│                    LENGUAJES DE MARCADO                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Lenguaje de marcado:                                          │
│   • Describe estructura y contenido                            │
│   • Usa etiquetas para marcar                                  │
│   • Sin lógica, sin cálculos                                   │
│   • Declarativo (describe QUÉ, no CÓMO)                        │
│                                                                 │
│   Lenguaje de programación:                                     │
│   • Contiene lógica y estructuras de control                   │
│   • Puede realizar cálculos                                    │
│   • Ejecuta acciones                                           │
│                                                                 │
│   Ejemplos:                                                     │
│   ┌─────────────────────┐    ┌─────────────────────┐          │
│   │   MARCADO           │    │   PROGRAMACIÓN      │          │
│   │   • HTML            │    │   • Java            │          │
│   │   • XML             │    │   • Python          │          │
│   │   • Markdown        │    │   • JavaScript      │          │
│   └─────────────────────┘    └─────────────────────┘          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### HTML (HyperText Markup Language)

**HTML** es el lenguaje de marcado estándar para páginas web.

```
┌────────────────────────────────────────────────────────────────┐
│                    ESTRUCTURA BÁSICA HTML                      │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   <!DOCTYPE html>           ← Declaración de tipo de documento │
│   <html>                    ← Elemento raíz                    │
│     <head>                  ← Metadatos (no visibles)          │
│       <title>Título</title> ← Título en pestaña del navegador  │
│     </head>                                                    │
│     <body>                  ← Contenido visible                │
│       <h1>Encabezado</h1>                                      │
│       <p>Un párrafo</p>                                        │
│     </body>                                                    │
│   </html>                                                      │
│                                                                │
│   Etiquetas:                                                   │
│   <etiqueta>Contenido</etiqueta>  ← Etiqueta apertura y cierre │
│   <etiqueta />                   ← Etiqueta autocerrada (ej. <br />)│
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Etiquetas HTML Importantes

```
┌────────────────────────────────────────────────────────────────┐
│                   ETIQUETAS HTML IMPORTANTES                   │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ESTRUCTURA:                                                  │
│   <html>        Elemento raíz                                  │
│   <head>        Metadatos                                      │
│   <body>        Área visible                                   │
│   <div>         Contenedor/sección                             │
│   <span>        Contenedor en línea                            │
│                                                                │
│   TEXTO:                                                       │
│   <h1> - <h6>   Encabezados (h1 más grande, h6 más pequeño)   │
│   <p>           Párrafo                                        │
│   <br />        Salto de línea                                 │
│   <strong>      Negrita/Importante                             │
│   <em>          Cursiva/Énfasis                                │
│                                                                │
│   LISTAS:                                                      │
│   <ul>          Lista no ordenada (viñetas)                    │
│   <ol>          Lista ordenada (numerada)                      │
│   <li>          Elemento de lista                              │
│                                                                │
│   ENLACES E IMÁGENES:                                          │
│   <a href="">   Enlace (hipervínculo)                          │
│   <img src="">  Imagen (autocerrada)                           │
│                                                                │
│   TABLAS:                                                      │
│   <table>       Tabla                                          │
│   <tr>          Fila de tabla                                  │
│   <td>          Celda de datos                                 │
│   <th>          Celda de encabezado                            │
│                                                                │
│   FORMULARIOS:                                                 │
│   <form>        Formulario                                     │
│   <input>       Campo de entrada                               │
│   <button>      Botón                                          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Atributos HTML

```
┌────────────────────────────────────────────────────────────────┐
│                    ATRIBUTOS HTML                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Atributos = Información adicional en la etiqueta de apertura│
│                                                                │
│   <etiqueta atributo="valor">Contenido</etiqueta>             │
│                                                                │
│   Atributos importantes:                                       │
│   ┌─────────────────────────────────────────────────────────┐│
│   │ id         │ Identificación única                       ││
│   │ class      │ Nombre de clase para estilo CSS            ││
│   │ href       │ URL para enlaces (<a>)                     ││
│   │ src        │ Fuente para imágenes (<img>)               ││
│   │ alt        │ Texto alternativo para imágenes            ││
│   │ style      │ CSS en línea                               ││
│   │ title      │ Texto de tooltip                           ││
│   └─────────────────────────────────────────────────────────┘│
│                                                                │
│   Ejemplos:                                                    │
│   <a href="https://example.com">Texto del enlace</a>          │
│   <img src="imagen.jpg" alt="Descripción" />                  │
│   <p id="intro" class="resaltado">Texto</p>                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### XML (eXtensible Markup Language)

**XML** es un lenguaje de marcado extensible para intercambio de datos estructurados.

```
┌────────────────────────────────────────────────────────────────┐
│                         XML                                    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Características:                                             │
│   • Se pueden definir etiquetas personalizadas (extensible)   │
│   • Estrictamente estructurado                                 │
│   • Separación de datos y presentación                        │
│   • Legible por máquinas                                       │
│                                                                │
│   Ejemplo:                                                     │
│   <?xml version="1.0" encoding="UTF-8"?>                      │
│   <catalogoproductos>                                          │
│     <producto id="P001">                                       │
│       <nombre>Laptop</nombre>                                  │
│       <precio moneda="EUR">999.00</precio>                    │
│       <stock>15</stock>                                        │
│     </producto>                                                │
│     <producto id="P002">                                       │
│       <nombre>Ratón</nombre>                                   │
│       <precio moneda="EUR">29.99</precio>                     │
│       <stock>50</stock>                                        │
│     </producto>                                                │
│   </catalogoproductos>                                         │
│                                                                │
│   Uso:                                                         │
│   • Archivos de configuración                                  │
│   • Intercambio de datos entre sistemas                       │
│   • Web Services (SOAP)                                        │
│   • Documentos de Office (DOCX, XLSX son ZIP con XML)         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### HTML vs. XML

| Aspecto | HTML | XML |
|---------|------|-----|
| **Propósito** | Mostrar páginas web | Estructurar datos |
| **Etiquetas** | Predefinidas (h1, p, div) | Autodefinibles |
| **Sintaxis** | Tolerante | Estricta (bien formado) |
| **Mayúsculas/minúsculas** | No importa | Importa |
| **Etiquetas de cierre** | Parcialmente opcionales | Siempre requeridas |
| **Visualización** | Visible en navegador | Sin visualización |

---

### Reglas XML (Bien formado)

```
┌────────────────────────────────────────────────────────────────┐
│                  REGLAS XML                                    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. Exactamente UN elemento raíz                              │
│      ✓ <raiz><hijo/></raiz>                                   │
│      ✗ <a/><b/> (dos elementos raíz)                          │
│                                                                │
│   2. Todas las etiquetas deben estar cerradas                 │
│      ✓ <nombre>Valor</nombre>                                 │
│      ✓ <vacio />                                              │
│      ✗ <nombre>Valor                                          │
│                                                                │
│   3. Las etiquetas deben estar correctamente anidadas         │
│      ✓ <a><b></b></a>                                         │
│      ✗ <a><b></a></b>                                         │
│                                                                │
│   4. Valores de atributos entre comillas                      │
│      ✓ <etiqueta attr="valor">                                │
│      ✗ <etiqueta attr=valor>                                  │
│                                                                │
│   5. Sensibilidad a mayúsculas/minúsculas                     │
│      <Nombre> ≠ <nombre> ≠ <NOMBRE>                           │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Ejemplo HTML5: Página Completa

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Página de Ejemplo</title>
</head>
<body>
    <header>
        <h1>Bienvenido</h1>
    </header>

    <nav>
        <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
    </nav>

    <main>
        <article>
            <h2>Título del Artículo</h2>
            <p>Aquí está el texto.</p>
            <img src="imagen.jpg" alt="Descripción" />
        </article>
    </main>

    <footer>
        <p>&copy; 2025 Ejemplo S.A.</p>
    </footer>
</body>
</html>
```

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **HTML** | HyperText Markup Language |
| **XML** | eXtensible Markup Language |
| **Etiqueta** | Elemento de marcado (<etiqueta>) |
| **Atributo** | Info adicional en etiqueta (nombre="valor") |
| **Elemento** | Etiqueta con contenido |
| **Bien formado** | XML cumple todas las reglas |

---

## Consejos para el Examen

### Preguntas Comunes del Examen

- ¿Cuál es la diferencia entre HTML y XML?
- ¿Es HTML un lenguaje de programación?
- Nombrar etiquetas HTML importantes

### Importante Recordar

- **¡HTML/XML NO son lenguajes de programación!**
- **HTML** = Etiquetas predefinidas para páginas web
- **XML** = Etiquetas personalizadas para intercambio de datos
- Etiquetas: `<abrir>Contenido</cerrar>`
- XML es más estricto que HTML

---

## Ejercicios Prácticos

### Ejercicio 1
¿Es HTML un lenguaje de programación? Explica.

**Solución:**
**No**, HTML NO es un lenguaje de programación, sino un lenguaje de marcado.

Razones:
- HTML no puede realizar cálculos
- HTML no contiene estructuras de control (if, bucles)
- HTML solo describe la estructura y apariencia de documentos
- HTML no ejecuta acciones

Un lenguaje de programación como Python o Java puede ejecutar lógica, mientras que HTML solo describe CÓMO debe mostrarse el contenido.

### Ejercicio 2
¿Cuál es la diferencia entre HTML y XML?

**Solución:**
| HTML | XML |
|------|-----|
| Para mostrar páginas web | Para intercambio de datos |
| Etiquetas predefinidas (h1, p, div) | Se pueden definir etiquetas propias |
| El navegador muestra el contenido | Sin visualización, solo datos |
| Más tolerante a errores | Reglas estrictas (bien formado) |
| No sensible a mayúsculas | Sensible a mayúsculas/minúsculas |

### Ejercicio 3
Corrige el siguiente XML erróneo:

```xml
<productos>
<Producto id=1>
  <Nombre>Laptop
  <precio>999</Precio>
</PRODUCTO>
```

**Solución:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<productos>
  <Producto id="1">
    <Nombre>Laptop</Nombre>
    <precio>999</precio>
  </Producto>
</productos>
```

Los errores fueron:
1. Valor del atributo sin comillas (id=1 → id="1")
2. `<Nombre>` no cerrado
3. `<precio>` y `</Precio>` diferente mayúscula/minúscula
4. `</PRODUCTO>` en lugar de `</Producto>`

---

## Referencias Cruzadas

- [06-01-02 Paradigmas de Programación](../06-01-fundamentals/06-01-02-programming-paradigms.md) - Lenguajes declarativos
- [02-05 Accesibilidad](../../02-quality-management/02-05-accessibility.md) - HTML accesible
- [07-01-03 Protocolos](../../07-networks/07-01-network-fundamentals/07-01-03-protocols.md) - HTTP
