# Fundamentos de OOP

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Comprender los conceptos básicos de la programación orientada a objetos
- Distinguir entre clases y objetos
- Explicar atributos y métodos
- Leer diagramas de clases simples

---

## Contenido Principal

### ¿Qué es la Programación Orientada a Objetos?

La **Programación Orientada a Objetos (OOP)** es un paradigma de programación que combina datos y funciones en objetos.

```
┌─────────────────────────────────────────────────────────────────┐
│              PROGRAMACIÓN ORIENTADA A OBJETOS                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Idea básica: El mundo real consiste en objetos               │
│               Los programas modelan estos objetos               │
│                                                                 │
│   ┌─────────────────┐         ┌─────────────────┐             │
│   │   MUNDO REAL    │         │ MUNDO PROGRAMA  │             │
│   ├─────────────────┤         ├─────────────────┤             │
│   │ Coche           │  ───►   │ Clase Coche     │             │
│   │ - tiene color   │         │ - color         │             │
│   │ - tiene CV      │         │ - caballos      │             │
│   │ - puede conducir│         │ - conducir()    │             │
│   │ - puede frenar  │         │ - frenar()      │             │
│   └─────────────────┘         └─────────────────┘             │
│                                                                 │
│   Objetos = Datos + Comportamiento (encapsulados juntos)       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Clase y Objeto

```
┌────────────────────────────────────────────────────────────────┐
│                   CLASE vs. OBJETO                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   CLASE = Plantilla               OBJETO = Instancia Concreta  │
│   ┌────────────────────┐         ┌────────────────────┐      │
│   │       Coche        │         │     miCoche        │      │
│   ├────────────────────┤         ├────────────────────┤      │
│   │ - marca: String    │         │ marca = "VW"       │      │
│   │ - color: String    │  ───►   │ color = "rojo"     │      │
│   │ - cv: Integer      │         │ cv = 150           │      │
│   ├────────────────────┤         ├────────────────────┤      │
│   │ + arrancar()       │         │ arrancar()         │      │
│   │ + frenar()         │         │ frenar()           │      │
│   └────────────────────┘         └────────────────────┘      │
│                                                                │
│   De UNA clase se pueden crear MUCHOS objetos:                 │
│                                                                │
│   ┌────────────────┐  ┌────────────────┐  ┌────────────────┐ │
│   │   miCoche      │  │   tuCoche      │  │ cocheEmpresa   │ │
│   │ marca="VW"     │  │ marca="BMW"    │  │ marca="Audi"   │ │
│   │ color="rojo"   │  │ color="azul"   │  │ color="negro"  │ │
│   │ cv=150         │  │ cv=200         │  │ cv=180         │ │
│   └────────────────┘  └────────────────┘  └────────────────┘ │
│                                                                │
│   Todos los objetos tienen la misma estructura (clase),        │
│   pero diferentes valores.                                     │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Término | Explicación | Ejemplo |
|---------|-------------|---------|
| **Clase** | Plantilla/modelo para objetos | Clase "Coche" |
| **Objeto** | Instancia concreta de una clase | miCoche (es un Coche) |
| **Instancia** | Otra palabra para objeto | "miCoche es una instancia de Coche" |
| **Instanciación** | Crear un objeto a partir de una clase | `Coche miCoche = new Coche();` |

---

### Atributos

Los **atributos** son las propiedades/datos de un objeto.

```
┌────────────────────────────────────────────────────────────────┐
│                       ATRIBUTOS                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Clase: Cliente                                               │
│   ┌────────────────────┐                                      │
│   │     Cliente        │                                      │
│   ├────────────────────┤                                      │
│   │ - numCliente: int  │  ◄─── Atributos                      │
│   │ - nombre: String   │       (Propiedades)                  │
│   │ - email: String    │                                      │
│   │ - activo: boolean  │                                      │
│   ├────────────────────┤                                      │
│   │ ...                │                                      │
│   └────────────────────┘                                      │
│                                                                │
│   Objeto: cliente1                                             │
│   ┌────────────────────┐                                      │
│   │ numCliente = 12345 │                                      │
│   │ nombre = "García"  │  ◄─── Valores concretos              │
│   │ email = "g@x.com"  │                                      │
│   │ activo = true      │                                      │
│   └────────────────────┘                                      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Métodos

Los **métodos** son las funciones/comportamiento de un objeto.

```
┌────────────────────────────────────────────────────────────────┐
│                        MÉTODOS                                  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Clase: Cuenta                                                │
│   ┌────────────────────────────────┐                         │
│   │           Cuenta               │                         │
│   ├────────────────────────────────┤                         │
│   │ - numCuenta: String            │  Atributos              │
│   │ - saldo: double                │                         │
│   ├────────────────────────────────┤                         │
│   │ + depositar(monto: double)     │  Métodos                │
│   │ + retirar(monto: double)       │  (Comportamiento)       │
│   │ + obtenerSaldo(): double       │                         │
│   └────────────────────────────────┘                         │
│                                                                │
│   Los métodos pueden:                                          │
│   • Leer atributos (Getter)                                   │
│   • Modificar atributos (Setter)                              │
│   • Realizar cálculos                                         │
│   • Interactuar con otros objetos                             │
│                                                                │
│   Ejemplo en pseudocódigo:                                     │
│                                                                │
│   MÉTODO depositar(monto)                                      │
│       saldo = saldo + monto                                    │
│   FIN MÉTODO                                                   │
│                                                                │
│   MÉTODO retirar(monto)                                        │
│       SI saldo >= monto ENTONCES                               │
│           saldo = saldo - monto                                │
│           RETORNAR true                                        │
│       SINO                                                     │
│           RETORNAR false                                       │
│       FIN SI                                                   │
│   FIN MÉTODO                                                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Constructor

Un **constructor** es un método especial que se llama al crear un objeto.

```
┌────────────────────────────────────────────────────────────────┐
│                      CONSTRUCTOR                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Propósito: Inicializar objeto (establecer atributos)         │
│                                                                │
│   Clase Persona:                                               │
│   ┌────────────────────────────────────────────────────────┐ │
│   │  class Persona {                                        │ │
│   │                                                         │ │
│   │      // Atributos                                       │ │
│   │      String nombre;                                     │ │
│   │      int edad;                                          │ │
│   │                                                         │ │
│   │      // Constructor (mismo nombre que la clase)         │ │
│   │      Persona(String n, int e) {                         │ │
│   │          nombre = n;                                    │ │
│   │          edad = e;                                      │ │
│   │      }                                                  │ │
│   │  }                                                      │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Creación de objeto con constructor:                          │
│   Persona p = new Persona("Max", 25);                          │
│                      └──┬──┘  └─┬─┘                           │
│                         │      │                               │
│                      nombre   edad                             │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Visibilidad (Modificadores de Acceso)

```
┌────────────────────────────────────────────────────────────────┐
│                    VISIBILIDAD                                  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Notación UML:                                                │
│   + public     │ Accesible desde cualquier lugar               │
│   - private    │ Solo dentro de la clase                       │
│   # protected  │ Clase y clases derivadas                      │
│                                                                │
│   Ejemplo:                                                     │
│   ┌────────────────────────────────┐                         │
│   │          Cuenta                │                         │
│   ├────────────────────────────────┤                         │
│   │ - saldo: double                │  private (protegido)    │
│   │ - pin: String                  │                         │
│   ├────────────────────────────────┤                         │
│   │ + obtenerSaldo(): double       │  public (accesible)     │
│   │ + depositar(monto: double)     │                         │
│   └────────────────────────────────┘                         │
│                                                                │
│   Buena práctica: Atributos private, acceso mediante métodos   │
│   (Encapsulamiento de Datos / Ocultación de Información)       │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Modificador | UML | Visible para |
|-------------|-----|--------------|
| **public** | + | Todos |
| **private** | - | Solo la propia clase |
| **protected** | # | Propia clase y subclases |

---

### Getter y Setter

Los **Getter** y **Setter** son métodos para acceso controlado a atributos privados.

```
┌────────────────────────────────────────────────────────────────┐
│                   GETTER Y SETTER                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Clase con atributos privados y métodos de acceso:            │
│                                                                │
│   class Producto {                                             │
│       private String nombre;                                   │
│       private double precio;                                   │
│                                                                │
│       // Getter - leer valor                                   │
│       public String getNombre() {                              │
│           return nombre;                                       │
│       }                                                        │
│                                                                │
│       // Setter - establecer valor (con validación posible)    │
│       public void setPrecio(double nuevoPrecio) {              │
│           if (nuevoPrecio >= 0) {     // ¡Validación!          │
│               precio = nuevoPrecio;                            │
│           }                                                    │
│       }                                                        │
│   }                                                            │
│                                                                │
│   Uso:                                                         │
│   Producto p = new Producto();                                 │
│   p.setPrecio(9.99);                  // Establecer precio     │
│   System.out.println(p.getNombre());  // Leer nombre           │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Beneficios de Getter/Setter:**
- Validación posible al establecer valores
- La representación interna puede cambiar
- Acceso controlado a los datos

---

### Concepto OOP: Encapsulamiento

El **encapsulamiento** significa que datos y métodos se combinan y protegen juntos.

```
┌────────────────────────────────────────────────────────────────┐
│                      ENCAPSULAMIENTO                            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ┌────────────────────────────────────────────────────────┐ │
│   │                        OBJETO                           │ │
│   │  ┌─────────────────────────────────────────────────┐   │ │
│   │  │                                                 │   │ │
│   │  │      Atributos Privados (protegidos)            │   │ │
│   │  │      - saldo                                    │   │ │
│   │  │      - pin                                      │   │ │
│   │  │                                                 │   │ │
│   │  └─────────────────────────────────────────────────┘   │ │
│   │                         │                               │ │
│   │                         ▼                               │ │
│   │  ┌─────────────────────────────────────────────────┐   │ │
│   │  │      Métodos Públicos (Interfaz)                │   │ │
│   │  │      + obtenerSaldo()                           │   │ │
│   │  │      + depositar()                              │   │ │
│   │  │      + retirar()                                │   │ │
│   │  └─────────────────────────────────────────────────┘   │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Desde fuera: Acceso solo a través de métodos públicos       │
│   Los detalles internos permanecen ocultos ("Caja Negra")     │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Resumen de Términos OOP

| Término | Explicación | Ejemplo |
|---------|-------------|---------|
| **Clase** | Plantilla para objetos | `class Coche { ... }` |
| **Objeto** | Instancia de una clase | `Coche miCoche = new Coche();` |
| **Atributo** | Propiedad/elemento de datos | `color`, `cv` |
| **Método** | Función en una clase | `arrancar()`, `frenar()` |
| **Constructor** | Inicializa objeto | `Coche(String marca)` |
| **Encapsulamiento** | Proteger datos | atributos private |
| **Getter/Setter** | Métodos de acceso | `getNombre()`, `setNombre()` |

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **OOP** | Programación Orientada a Objetos |
| **Clase** | Plantilla/modelo para objetos |
| **Objeto** | Instancia concreta de una clase |
| **Atributo** | Propiedad de un objeto |
| **Método** | Función de un objeto |
| **Constructor** | Método especial para inicialización |
| **Encapsulamiento** | Protección de datos internos |

---

## Consejos para el Examen

### Preguntas Comunes de Examen

- ¿Cuál es la diferencia entre una clase y un objeto?
- ¿Qué son atributos y métodos?
- Explica el principio de encapsulamiento
- ¿Qué hace un constructor?

### Importante Recordar

- **Clase** = Plantilla, **Objeto** = instancia concreta
- **Atributos** = Propiedades (datos)
- **Métodos** = Capacidades (funciones)
- **Encapsulamiento** = Proteger datos con private
- **Constructor** = inicializa el objeto

---

## Ejercicios Prácticos

### Ejercicio 1
Explica la diferencia entre una clase y un objeto usando un ejemplo.

**Solución:**
- **Clase:** Una clase es una plantilla o modelo. Define qué propiedades (atributos) y capacidades (métodos) tendrán los objetos. Ejemplo: La clase "Smartphone" define que un smartphone tiene una marca, un modelo y capacidad de almacenamiento.
- **Objeto:** Un objeto es una instancia concreta de una clase con valores concretos. Ejemplo: "miTelefono" es un objeto de la clase Smartphone con marca="Samsung", modelo="Galaxy S21", almacenamiento=128.

### Ejercicio 2
Dada la siguiente descripción de clase. Identifica atributos y métodos:

```
Clase: Libro
- titulo
- autor
- isbn
- prestado
+ prestar()
+ devolver()
+ obtenerInfo()
```

**Solución:**

**Atributos (Propiedades con -):**
- titulo (presumiblemente String)
- autor (presumiblemente String)
- isbn (presumiblemente String)
- prestado (presumiblemente Boolean)

**Métodos (Funciones con +):**
- prestar() - establece prestado a true
- devolver() - establece prestado a false
- obtenerInfo() - retorna información sobre el libro

### Ejercicio 3
¿Por qué los atributos generalmente deben declararse como privados?

**Solución:**
Los atributos deben ser privados porque:
1. **Integridad de Datos:** Los valores pueden validarse al establecerlos (ej., sin precio negativo)
2. **Encapsulamiento:** La implementación interna puede cambiar sin cambiar la interfaz
3. **Control:** Acceso solo a través de métodos getter/setter definidos
4. **Reducción de Errores:** Se previenen cambios no controlados desde el exterior

---

## Referencias Cruzadas

- [06-01-02 Paradigmas de Programación](../06-01-fundamentals/06-01-02-programming-paradigms.md) - OOP como paradigma
- [06-03-01 Diagrama de Clases](../06-03-uml/06-03-01-class-diagram.md) - Representación UML
- [06-02-03 Procedimientos y Funciones](./06-02-03-procedures-functions.md) - Bases de métodos
