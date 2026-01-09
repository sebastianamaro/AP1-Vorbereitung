# Diagrama de Casos de Uso UML

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Leer y comprender diagramas de casos de uso
- Identificar actores y casos de uso
- Conocer relaciones en diagramas de casos de uso
- Crear diagramas de casos de uso simples

---

## Contenido Principal

### ¿Qué es un Diagrama de Casos de Uso?

Un **diagrama de casos de uso** muestra qué funciones ofrece un sistema y quién las usa.

```
┌─────────────────────────────────────────────────────────────────┐
│                  DIAGRAMA DE CASOS DE USO                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Propósito:                                                    │
│   • Representar requisitos desde la perspectiva del usuario    │
│   • QUÉ debe hacer el sistema (no CÓMO)                        │
│   • Comunicación entre desarrolladores y clientes              │
│   • Visión general de las funciones del sistema                │
│                                                                 │
│   Muestra:                                                      │
│   • Actores (¿quién usa el sistema?)                           │
│   • Casos de uso (¿qué puede hacer el sistema?)                │
│   • Relaciones entre actores y casos de uso                    │
│   • Límites del sistema                                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Elementos de un Diagrama de Casos de Uso

```
┌────────────────────────────────────────────────────────────────┐
│                 ELEMENTOS EN DIAGRAMA DE CASOS DE USO           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. ACTOR                                                     │
│      Figura de palo con nombre                                 │
│                                                                │
│         O                                                      │
│        /|\     ← Actor (persona o sistema externo)             │
│        / \                                                     │
│       Cliente                                                  │
│                                                                │
│   2. CASO DE USO                                               │
│      Elipse con descripción                                    │
│                                                                │
│      ┌─────────────────────┐                                  │
│      │  (  Ordenar         )│  ← Caso de uso                   │
│      │  (  producto        )│     (Verbo + Objeto)             │
│      └─────────────────────┘                                  │
│                                                                │
│   3. LÍMITE DEL SISTEMA                                        │
│      Rectángulo alrededor de casos de uso                      │
│                                                                │
│      ┌─────────────────────┐                                  │
│      │    Tienda Online    │  ← Nombre del sistema             │
│      │                     │                                  │
│      │  (Casos de uso)     │                                  │
│      │                     │                                  │
│      └─────────────────────┘                                  │
│                                                                │
│   4. ASOCIACIÓN                                                │
│      Línea entre actor y caso de uso                           │
│                                                                │
│         O                                                      │
│        /|\────────(Caso de Uso)                                │
│        / \                                                     │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Actores

Los **actores** son entidades externas que interactúan con el sistema.

```
┌────────────────────────────────────────────────────────────────┐
│                        ACTORES                                  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Tipos de actores:                                            │
│                                                                │
│   PERSONAS                        SISTEMAS                     │
│      O                          ┌─────────┐                   │
│     /|\                         │ <<Sistema>> │               │
│     / \                         │  Sistema   │               │
│   Cliente                       │  de pago   │               │
│   Empleado                      └─────────┘                   │
│   Administrador                 Servidor Email                │
│                                 Base de datos                  │
│                                                                │
│   Un actor también puede ser:                                  │
│   • Un proceso activado por tiempo ("Temporizador")            │
│   • Un dispositivo de hardware (escáner de código de barras)   │
│   • Un sistema externo (banco, proveedor de pago)              │
│                                                                │
│   Pregunta: "¿Quién o qué interactúa con el sistema?"         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Casos de Uso

```
┌────────────────────────────────────────────────────────────────┐
│                    CASOS DE USO                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Nomenclatura:                                                │
│   • Verbo + Objeto                                             │
│   • Formulado desde la perspectiva del actor                   │
│   • Describe un objetivo completado                            │
│                                                                │
│   Buenos nombres de casos de uso:    Nombres malos:            │
│   ✓ Ordenar producto                 ✗ Orden                   │
│   ✓ Crear factura                    ✗ Factura                 │
│   ✓ Cambiar contraseña               ✗ Contraseña              │
│   ✓ Generar reporte                  ✗ Reportes                │
│                                                                │
│   Ejemplos de casos de uso típicos:                            │
│   ┌─────────────────────┐                                    │
│   │  ( Iniciar sesión ) │                                    │
│   │  ( Cerrar sesión  ) │                                    │
│   │  ( Buscar         ) │                                    │
│   │  ( Realizar pedido) │                                    │
│   │  ( Pagar          ) │                                    │
│   │  ( Cancelar       ) │                                    │
│   └─────────────────────┘                                    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Relaciones en Diagramas de Casos de Uso

```
┌────────────────────────────────────────────────────────────────┐
│                     TIPOS DE RELACIÓN                           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. ASOCIACIÓN (Actor ↔ Caso de Uso)                          │
│      Línea simple = Actor usa el caso de uso                   │
│                                                                │
│         O                                                      │
│        /|\────────( Buscar producto )                          │
│        / \                                                     │
│                                                                │
│   2. INCLUDE (<<include>>)                                     │
│      El caso de uso base SIEMPRE INCLUYE el otro               │
│      Flecha punteada con <<include>>                           │
│                                                                │
│      ( Realizar pedido )─ ─ ─<<include>>─ ─ ─►( Pagar )        │
│                                                                │
│      "Realizar pedido siempre incluye pagar"                   │
│                                                                │
│   3. EXTEND (<<extend>>)                                       │
│      Opcional: El caso de uso extendido PUEDE ser añadido      │
│      Flecha punteada con <<extend>>                            │
│                                                                │
│      ( Canjear cupón )─ ─<<extend>>─ ─►( Realizar pedido )     │
│                                                                │
│      "Canjear cupón opcionalmente extiende realizar pedido"    │
│                                                                │
│   4. GENERALIZACIÓN (Actores)                                  │
│      Un actor específico hereda de uno general                 │
│                                                                │
│         O  Usuario                                             │
│        /|\     ▲                                              │
│        / \     │                                              │
│                │                                              │
│         O──────┘                                              │
│        /|\  Administrador                                     │
│        / \                                                    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Include vs. Extend

| Aspecto | <<include>> | <<extend>> |
|---------|-------------|------------|
| **Significado** | SIEMPRE ejecutado | OPCIONALMENTE ejecutado |
| **Dirección de flecha** | De base a incluido | De extensión a base |
| **Ejemplo** | Realizar pedido incluye Pagar | Envío exprés extiende Realizar pedido |
| **Regla mnemotécnica** | "Siempre incluye" | "Puede extender" |

---

### Ejemplo: Tienda Online

```
┌────────────────────────────────────────────────────────────────┐
│                 EJEMPLO: TIENDA ONLINE                          │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ┌──────────────────────────────────────────────────────┐   │
│   │                     Tienda Online                      │   │
│   │                                                        │   │
│   │                    ( Buscar producto )                 │   │
│   │                           │                            │   │
│   │                           │                            │   │
│  O                  ( Gestionar carrito )                  │   │
│ /|\─────────────────────────│                              │   │
│ / \                         │                              │   │
│Cliente                 ( Realizar pedido )                 │   │
│   │                         │                              │   │
│   │                         │<<include>>                   │   │
│   │                         ▼                              │   │
│   │            ─ ─ ─►( Procesar pago )                     │   │
│   │           │                     │                      │   │
│   │           │                     │<<include>>           │   │
│   │           │                     ▼                      │   │
│   │           │        ( Confirmar pedido )                │   │
│   │           │                                            │   │
│   │        <<extend>>                                      │   │
│   │           │                                            │   │
│   └───────────┴──( Canjear cupón )                         │   │
│                                                            │   │
│                                                        O   │   │
│                    ( Cancelar pedido )──────────────/|\ │   │
│                                                       / \  │   │
│                                                    Admin   │   │
│                    ( Gestionar inventario )────────│    │   │
│                                                        │   │
│                    ( Crear reporte )───────────────────┘   │   │
│   └────────────────────────────────────────────────────────┘   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Ejemplo Simple: Cajero Automático

```
┌────────────────────────────────────────────────────────────────┐
│                EJEMPLO: CAJERO AUTOMÁTICO                       │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ┌─────────────────────────────────────────────────────┐    │
│   │                Cajero Automático                     │    │
│   │                                                      │    │
│   │                ( Insertar tarjeta )                  │    │
│   │                        │                             │    │
│   │                        │<<include>>                  │    │
│   │                        ▼                             │    │
│   │               ( Ingresar PIN )                       │    │
│   │                        │                             │    │
│  O │                       │                             │    │
│ /|\──────────────( Retirar efectivo )                    │    │
│ / \│                       │                             │    │
│Cliente                     │<<include>>                  │    │
│    │                       ▼                             │    │
│    │              ( Expulsar tarjeta )                   │    │
│    │                                                     │    │
│    │                                                     │    │
│    └─────────────( Consultar saldo )                     │    │
│                                                          │    │
│                  ( Realizar transferencia )──────────────│    │
│                                                          │    │
│   └─────────────────────────────────────────────────────┘    │
│                                                       │      │
│                                                   ┌───┴───┐  │
│                                                   │<<Sistema>>│
│                                                   │ Servidor│  │
│                                                   │ banco  │  │
│                                                   └───────┘  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Consejos para la Creación

```
┌────────────────────────────────────────────────────────────────┐
│                  CONSEJOS PARA LA CREACIÓN                      │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   HACER:                                                       │
│   ✓ Colocar actores fuera del límite del sistema              │
│   ✓ Nombrar casos de uso como "Verbo + Objeto"                │
│   ✓ Pensar desde la perspectiva del usuario (QUÉ, no CÓMO)    │
│   ✓ Etiquetar límite del sistema con nombre                   │
│   ✓ Usar include para procesos obligatorios                   │
│   ✓ Usar extend para extensiones opcionales                   │
│                                                                │
│   NO HACER:                                                    │
│   ✗ Demasiados detalles (¡no es un diagrama de flujo!)        │
│   ✗ Detalles técnicos de implementación                       │
│   ✗ Nombrar casos de uso solo como sustantivos                │
│   ✗ Actores dentro del límite del sistema                     │
│   ✗ Más de 15-20 casos de uso (muy complejo)                  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Caso de Uso** | Caso de aplicación, función del sistema |
| **Actor** | Persona o sistema que interactúa con el sistema |
| **Límite del Sistema** | Delimitación del sistema observado |
| **Include** | Relación de contención (siempre) |
| **Extend** | Relación de extensión (opcional) |
| **Asociación** | Conexión entre actor y caso de uso |

---

## Consejos para el Examen

### Preguntas Comunes de Examen

- ¿Qué actores y casos de uso contiene el diagrama?
- ¿Qué significa <<include>> y <<extend>>?
- Crea un diagrama de casos de uso para un escenario dado

### Importante Recordar

- **Actor** = fuera del límite del sistema
- **Caso de Uso** = "Verbo + Objeto" (ej., "Ordenar producto")
- **<<include>>** = SIEMPRE incluido
- **<<extend>>** = OPCIONAL, extiende
- El diagrama de casos de uso muestra QUÉ, no CÓMO

---

## Ejercicios Prácticos

### Ejercicio 1
¿Cuál es la diferencia entre <<include>> y <<extend>>?

**Solución:**
- **<<include>>:** El caso de uso incluido se ejecuta SIEMPRE. Ejemplo: "Realizar pedido" siempre incluye "Pagar".
- **<<extend>>:** El caso de uso que extiende se ejecuta OPCIONALMENTE. Ejemplo: "Envío exprés" puede extender "Realizar pedido", pero no tiene que hacerlo.

### Ejercicio 2
Identifica al menos tres actores y cuatro casos de uso para un sistema de biblioteca.

**Solución:**
**Actores:**
1. Usuario de biblioteca
2. Bibliotecario
3. Administrador

**Casos de Uso:**
1. Prestar libro
2. Devolver libro
3. Buscar libro
4. Crear cuenta de usuario
5. Enviar recordatorio
6. Gestionar inventario

### Ejercicio 3
Dado el siguiente escenario. Dibuja un diagrama de casos de uso.

"Un sistema de tickets permite a los clientes crear tickets y seguir su estado. El personal de soporte puede procesar y cerrar tickets. Los administradores pueden además gestionar usuarios."

**Solución:**
```
┌─────────────────────────────────────────────────┐
│                Sistema de Tickets                │
│                                                  │
│           ( Crear ticket )────────O Cliente     │
│                    │                 /|\         │
│           ( Seguir ticket )──────────/ \         │
│                                                  │
│           ( Procesar ticket )                    │
│                    │               O             │
│           ( Cerrar ticket )──────/|\Soporte     │
│                                   / \            │
│                                                  │
│           ( Gestionar usuarios )─────O Admin    │
│                                  /|\             │
│                                  / \             │
└─────────────────────────────────────────────────┘
```

---

## Referencias Cruzadas

- [06-03-01 Diagrama de Clases](./06-03-01-class-diagram.md) - Diagrama estructural
- [06-03-03 Diagrama de Actividad](./06-03-03-activity-diagram.md) - Representación de flujo
- [01-04-01 Especificación de Requisitos](../../01-project-management/01-04-documentation/01-04-01-requirements-specification.md) - Requisitos
