# Bases de Datos Relacionales

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Comprender el concepto de bases de datos relacionales
- Conocer los términos básicos (tabla, registro, campo)
- Explicar claves primarias y foráneas
- Comprender las relaciones entre tablas

---

## Contenido Principal

### ¿Qué es una Base de Datos Relacional?

Una **base de datos relacional** almacena datos en tablas que pueden estar relacionadas entre sí.

```
┌─────────────────────────────────────────────────────────────────┐
│                 BASE DE DATOS RELACIONAL                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │   NOTA: ¡SQL NO es parte del examen AP1 2025!           │  │
│   │   SQL ha sido movido a AP2.                             │  │
│   │   Aquí nos enfocamos en conceptos, no en consultas.     │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│   Características:                                              │
│   • Datos en forma tabular (filas y columnas)                  │
│   • Las tablas pueden estar vinculadas (relaciones)            │
│   • Identificación única mediante claves                       │
│   • Almacenamiento estructurado                                │
│                                                                 │
│   Estructura:                                                   │
│   ┌────────────────────────────────────────────────────────┐  │
│   │ Cliente                                                │  │
│   ├──────────┬───────────┬─────────────┬──────────────────┤  │
│   │ NoCliente│ Nombre    │ Ciudad      │ CódigoPostal     │  │
│   ├──────────┼───────────┼─────────────┼──────────────────┤  │
│   │ 1        │ Mueller   │ Berlín      │ 10115            │  │
│   │ 2        │ Schmidt   │ Hamburgo    │ 20095            │  │
│   │ 3        │ Weber     │ Múnich      │ 80331            │  │
│   └──────────┴───────────┴─────────────┴──────────────────┘  │
│      ▲              ▲                                         │
│      │              │                                         │
│   Columna        Fila = Registro                              │
│   (Atributo)     (Tupla)                                      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Términos Básicos

```
┌────────────────────────────────────────────────────────────────┐
│                     TÉRMINOS BÁSICOS                           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Término            │ Explicación        │ Ejemplo            │
│   ─────────────────┼────────────────────┼─────────────────────│
│   Base de datos      │ Colección de       │ BD de tienda con   │
│                      │ tablas             │ clientes, etc.     │
│   ─────────────────┼────────────────────┼─────────────────────│
│   Tabla              │ Estructura para    │ Tabla "Cliente"    │
│   (Relación)         │ datos similares    │                    │
│   ─────────────────┼────────────────────┼─────────────────────│
│   Registro           │ Una fila           │ Un cliente         │
│   (Tupla, Record)    │ (entrada completa) │ (No, Nombre, Ciudad)│
│   ─────────────────┼────────────────────┼─────────────────────│
│   Campo              │ Valor individual   │ "Mueller"          │
│   (Atributo)         │ en una celda       │                    │
│   ─────────────────┼────────────────────┼─────────────────────│
│   Columna            │ Todos los valores  │ Todos los nombres  │
│   (Atributo)         │ de un atributo     │                    │
│   ─────────────────┼────────────────────┼─────────────────────│
│   Tipo de dato       │ Tipo de campo      │ INTEGER, VARCHAR,  │
│                      │                    │ DATE, BOOLEAN      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Claves

```
┌────────────────────────────────────────────────────────────────┐
│                       CLAVES                                   │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   CLAVE PRIMARIA (PK)                                          │
│   ┌────────────────────────────────────────────────────────┐ │
│   │  • Identifica cada registro de manera ÚNICA            │ │
│   │  • No puede ser NULL                                   │ │
│   │  • No debe cambiar                                     │ │
│   │  • A menudo: número ID (autogenerado)                  │ │
│   │                                                        │ │
│   │  Ejemplo:                                              │ │
│   │  ┌──────────┬───────────┬─────────────┐               │ │
│   │  │ NoCliente│ Nombre    │ Email       │               │ │
│   │  │   (PK)   │           │             │               │ │
│   │  ├──────────┼───────────┼─────────────┤               │ │
│   │  │    1     │ Mueller   │ m@mail.de   │               │ │
│   │  │    2     │ Schmidt   │ s@mail.de   │               │ │
│   │  └──────────┴───────────┴─────────────┘               │ │
│   │       ▲                                                │ │
│   │       └── Cada valor aparece solo UNA VEZ              │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   CLAVE FORÁNEA (FK)                                           │
│   ┌────────────────────────────────────────────────────────┐ │
│   │  • Referencia a la clave primaria de otra tabla        │ │
│   │  • Establece relación entre tablas                     │ │
│   │  • Puede aparecer múltiples veces                      │ │
│   │                                                        │ │
│   │  Ejemplo:                                              │ │
│   │  Tabla "Pedido"                                        │ │
│   │  ┌────────────┬──────────┬────────────┐               │ │
│   │  │ NoPedido   │ NoCliente│ Fecha      │               │ │
│   │  │   (PK)     │   (FK)   │            │               │ │
│   │  ├────────────┼──────────┼────────────┤               │ │
│   │  │    1001    │    1     │ 2024-01-15 │               │ │
│   │  │    1002    │    2     │ 2024-01-16 │               │ │
│   │  │    1003    │    1     │ 2024-01-17 │  ← Cliente 1  │ │
│   │  └────────────┴──────────┴────────────┘     tiene 2   │ │
│   │                    │                        pedidos   │ │
│   │                    └── Referencia a Cliente           │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Relaciones Entre Tablas

```
┌────────────────────────────────────────────────────────────────┐
│                  TIPOS DE RELACIONES                           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   RELACIÓN 1:1 (Uno a Uno)                                     │
│   ┌─────────┐          ┌─────────┐                           │
│   │ Persona │──────────│Pasaporte│                           │
│   └─────────┘    1   1 └─────────┘                           │
│   Una persona tiene exactamente un pasaporte                   │
│   Un pasaporte pertenece a exactamente una persona             │
│                                                                │
│   ──────────────────────────────────────────────────────────  │
│                                                                │
│   RELACIÓN 1:N (Uno a Muchos) - ¡LA MÁS COMÚN!                │
│   ┌─────────┐          ┌──────────────┐                      │
│   │ Cliente │◄─────────│   Pedido     │                      │
│   └─────────┘    1   * └──────────────┘                      │
│   Un cliente tiene muchos pedidos                              │
│   Un pedido pertenece a un cliente                             │
│                                                                │
│   Implementación: FK en la tabla "Muchos"                      │
│   ┌─────────────┐      ┌───────────────────────┐             │
│   │   Cliente   │      │       Pedido          │             │
│   ├─────────────┤      ├───────────────────────┤             │
│   │ NoCliente PK│◄─────│ NoPedido PK           │             │
│   │ Nombre      │      │ NoCliente FK ─────────┘             │
│   └─────────────┘      │ Fecha                 │             │
│                        └───────────────────────┘             │
│                                                                │
│   ──────────────────────────────────────────────────────────  │
│                                                                │
│   RELACIÓN M:N (Muchos a Muchos)                              │
│   ┌─────────┐          ┌─────────┐                           │
│   │Estudiante│◄────────►│  Curso  │                          │
│   └─────────┘    *   * └─────────┘                           │
│   Un estudiante toma muchos cursos                             │
│   Un curso es tomado por muchos estudiantes                    │
│                                                                │
│   Implementación: ¡Mediante tabla intermedia!                  │
│   ┌─────────┐      ┌────────────────┐      ┌─────────┐      │
│   │Estudiante│     │   Inscripción  │      │  Curso  │      │
│   ├─────────┤      ├────────────────┤      ├─────────┤      │
│   │NoEstudiante◄───│ NoEstudiante FK│      │ NoCurso │      │
│   │ Nombre  │      │ NoCurso FK   ──┼─────►│ Nombre  │      │
│   └─────────┘      │ Semestre       │      └─────────┘      │
│                    └────────────────┘                        │
│                    Tabla intermedia                           │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Integridad Referencial

```
┌────────────────────────────────────────────────────────────────┐
│               INTEGRIDAD REFERENCIAL                           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Regla: ¡Los valores de clave foránea deben existir en la    │
│          tabla referenciada!                                   │
│                                                                │
│   Ejemplo:                                                     │
│   ┌────────────┐              ┌──────────────────┐           │
│   │  Cliente   │              │     Pedido       │           │
│   ├────────────┤              ├──────────────────┤           │
│   │ 1 │ Mueller│◄─────────────│ 1001 │ 1 │ ...  │           │
│   │ 2 │ Schmidt│              │ 1002 │ 2 │ ...  │           │
│   │   │        │              │ 1003 │ 5 │ ... ✗│           │
│   └────────────┘              └──────────────────┘           │
│                                         ▲                     │
│                                         │                     │
│                               ¡El cliente 5 no existe!        │
│                               → Viola la integridad           │
│                                 referencial                   │
│                                                                │
│   Consecuencias al eliminar/actualizar:                        │
│   • CASCADE: Los datos dependientes también se eliminan/actualizan │
│   • RESTRICT: Se impide la eliminación                         │
│   • SET NULL: FK se establece a NULL                           │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### DBMS (Sistema de Gestión de Bases de Datos)

| Término | Explicación |
|---------|-------------|
| **DBMS** | Software para gestionar la base de datos |
| **Ejemplos** | MySQL, PostgreSQL, Oracle, Microsoft SQL Server |
| **Funciones** | Almacenamiento, consultas, seguridad, operación multiusuario |

---

### Ventajas de las Bases de Datos Relacionales

| Ventaja | Descripción |
|---------|-------------|
| **Integridad de datos** | Consistencia mediante claves y reglas |
| **Minimización de redundancia** | Almacenar datos solo una vez |
| **Flexibilidad** | Consultas a través de múltiples tablas |
| **Seguridad** | Derechos de acceso a nivel de tabla |
| **Estandarizado** | SQL como lenguaje unificado (AP2) |

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Relación** | Tabla en una BD relacional |
| **Tupla** | Fila/registro |
| **Atributo** | Columna/campo |
| **Clave Primaria** | Identificación única (PK) |
| **Clave Foránea** | Referencia a otra tabla (FK) |
| **Integridad Referencial** | FK debe apuntar a PK existente |
| **DBMS** | Sistema de Gestión de Bases de Datos |

---

## Consejos para el Examen

### Preguntas Comunes del Examen

- ¿Qué es una clave primaria, qué es una clave foránea?
- ¿Cómo se implementa una relación M:N?
- ¿Qué significa integridad referencial?

### Importante Recordar

- **Clave Primaria (PK)** = única, nunca NULL
- **Clave Foránea (FK)** = referencia a PK de otra tabla
- **1:N** = FK en la tabla "N"
- **M:N** = Tabla intermedia con dos FKs
- **SQL NO está en AP1** (¡solo AP2!)

---

## Ejercicios Prácticos

### Ejercicio 1
¿Cuál es la diferencia entre una clave primaria y una clave foránea?

**Solución:**
- **Clave Primaria (PK):** Identifica de manera única cada registro en una tabla. No puede ser NULL y aparece solo una vez. Ejemplo: NoCliente en la tabla Cliente.
- **Clave Foránea (FK):** Hace referencia a la clave primaria de otra tabla y así establece una relación. Puede aparecer múltiples veces. Ejemplo: NoCliente en la tabla Pedido.

### Ejercicio 2
¿Cómo se implementa una relación M:N entre "Artículo" y "Proveedor" (un artículo puede obtenerse de múltiples proveedores, un proveedor entrega múltiples artículos)?

**Solución:**
Mediante una tabla intermedia:

```
┌─────────────┐    ┌─────────────────┐    ┌─────────────┐
│   Artículo  │    │     Entrega     │    │  Proveedor  │
├─────────────┤    ├─────────────────┤    ├─────────────┤
│ NoArtículo PK◄───│ NoArtículo FK   │    │ NoProveedor PK│
│ Descripción │    │ NoProveedor FK ─┼───►│ Nombre      │
│ Precio      │    │ PrecioCompra    │    │ Dirección   │
└─────────────┘    │ TiempoEntrega   │    └─────────────┘
                   └─────────────────┘
```

La tabla intermedia "Entrega" contiene dos claves foráneas.

### Ejercicio 3
¿Por qué el siguiente registro violaría la integridad referencial?

Tabla Cliente: NoCliente 1, 2, 3
Nuevo Pedido: NoPedido 1005, NoCliente 7

**Solución:**
La violación ocurre porque la clave foránea `NoCliente = 7` hace referencia a una clave primaria que no existe en la tabla Cliente. La integridad referencial requiere que cada valor FK debe tener un valor PK correspondiente en la tabla referenciada. El cliente 7 no existe, por lo tanto el pedido es inválido.

---

## Referencias Cruzadas

- [06-04-02 ERD](./06-04-02-erd.md) - Diagrama Entidad-Relación
- [06-04-03 Redundancia y Formas Normales](./06-04-03-redundancy-normal-forms.md) - Optimización de bases de datos
- [06-03-01 Diagrama de Clases](../06-03-uml/06-03-01-class-diagram.md) - Representación estructural similar
