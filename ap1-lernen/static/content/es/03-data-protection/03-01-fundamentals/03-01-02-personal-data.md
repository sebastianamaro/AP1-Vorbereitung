# Datos Personales

## Objetivos de Aprendizaje

Despues de este capitulo, deberas ser capaz de:
- Definir datos personales
- Proporcionar ejemplos de datos personales
- Conocer categorias especiales de datos personales
- Distinguir que es personal y que no lo es

---

## Contenido Principal

### Definicion

**Datos personales** segun el Art. 4(1) RGPD es cualquier informacion relativa a una **persona fisica identificada o identificable**.

> Una persona es **identificable** si puede ser identificada directa o indirectamente, por ejemplo, por:
> - Nombre
> - Numero de identificacion
> - Datos de localizacion
> - Identificador en linea
> - Caracteristicas fisicas, fisiologicas, geneticas, mentales, economicas, culturales o sociales

---

### Tipos de Identificacion

```
┌─────────────────────────────────────────────────────────────────┐
│              DATOS PERSONALES                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  IDENTIFICACION DIRECTA          IDENTIFICACION INDIRECTA       │
│  ┌─────────────────────┐         ┌─────────────────────┐       │
│  │ • Nombre, apellido  │         │ • Direccion IP      │       │
│  │ • Direccion         │         │ • Numero de cliente │       │
│  │ • Numero de telefono│         │ • ID de cookie      │       │
│  │ • Correo electronico│         │ • Datos de ubicacion│       │
│  │ • Fecha de nacimient│         │ • ID de dispositivo │       │
│  │ • Foto              │         │ • IBAN              │       │
│  └─────────────────────┘         └─────────────────────┘       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Ejemplos de Datos Personales

| Categoria | Ejemplos |
|-----------|----------|
| **Datos de Identificacion** | Nombre, direccion, fecha de nacimiento, numero de ID |
| **Datos de Contacto** | Numero de telefono, correo electronico |
| **Datos Bancarios** | Numero de cuenta, IBAN, numero de tarjeta de credito |
| **Datos en Linea** | Direccion IP, ID de cookie, nombre de usuario |
| **Datos de Empleo** | Empleador, puesto, salario |
| **Caracteristicas Fisicas** | Foto, altura, peso |

---

### Categorias Especiales de Datos Personales (Art. 9 RGPD)

Ciertos datos son particularmente sensibles y estan sujetos a proteccion reforzada:

| Categoria | Ejemplos |
|-----------|----------|
| **Origen Racial/Etnico** | Pais de origen, color de piel |
| **Opiniones Politicas** | Afiliacion a partidos |
| **Creencias Religiosas** | Denominacion, practicas religiosas |
| **Afiliacion Sindical** | Membresia en un sindicato |
| **Datos Geneticos** | Analisis de ADN |
| **Datos Biometricos** | Huella dactilar, reconocimiento facial, escaneo de iris |
| **Datos de Salud** | Historiales medicos, diagnosticos, discapacidades |
| **Vida Sexual/Orientacion** | Preferencias sexuales |

**Importante:** El tratamiento de estos datos esta generalmente **prohibido** (Art. 9(1) RGPD), pero hay excepciones (Art. 9(2)).

---

### Que NO son Datos Personales?

| Datos | Razon |
|-------|-------|
| **Datos Anonimizados** | Ya no se puede establecer la referencia personal |
| **Datos de Empresas** | Solo se protegen las personas fisicas |
| **Personas Fallecidas** | El RGPD solo protege a personas vivas |
| **Estadisticas Agregadas** | No es posible sacar conclusiones sobre individuos |

---

### Ejemplos Practicos

#### Ejemplo 1: Direccion de Correo Electronico
**max.mustermann@empresa.de** = datos personales (nombre reconocible)
**info@empresa.de** = no son datos personales (no se puede identificar a una persona)

#### Ejemplo 2: Direccion IP
**Direccion IP dinamica** = datos personales (puede asignarse)
Segun la sentencia del TJUE, las direcciones IP se consideran datos personales.

#### Ejemplo 3: Numero de Cliente
**Numero de cliente 12345** = datos personales si existe una tabla de asignacion

---

## Terminos Clave

| Termino | Explicacion |
|---------|-------------|
| **Datos Personales** | Informacion sobre una persona identificada/identificable |
| **Identificable** | Atribuible directa o indirectamente a una persona |
| **Categorias Especiales** | Datos sensibles segun el Art. 9 RGPD |
| **Datos Biometricos** | Caracteristicas fisicas para identificacion |
| **Datos de Salud** | Informacion sobre el estado de salud |
| **Persona Fisica** | Ser humano (a diferencia de una entidad legal) |

---

## Consejos para el Examen

### Preguntas Comunes del Examen
- Que son los datos personales?
- Proporciona ejemplos de datos personales
- Cuales son las categorias especiales de datos personales?
- Es una direccion IP datos personales?

### Importante Recordar
- Las direcciones IP son datos personales (sentencia del TJUE)
- Los correos electronicos con nombres son datos personales
- Solo se protegen las **personas fisicas**
- Las categorias especiales estan sujetas a proteccion reforzada

---

## Ejercicios Practicos

### Ejercicio 1
Que son los datos personales segun el Art. 4(1) RGPD?

**Solucion:** Los datos personales son cualquier informacion relativa a una persona fisica identificada o identificable.

### Ejercicio 2
Nombra tres ejemplos de datos personales con identificacion directa y tres con identificacion indirecta.

**Solucion:**
Identificacion directa:
1. Nombre
2. Direccion
3. Numero de telefono

Identificacion indirecta:
1. Direccion IP
2. Numero de cliente
3. ID de cookie

### Ejercicio 3
Cuales de los siguientes datos pertenecen a categorias especiales segun el Art. 9 RGPD?
- [ ] Direccion de correo electronico
- [ ] Tipo de sangre
- [ ] Numero de cuenta
- [ ] Afiliacion sindical

**Solucion:**
- [ ] Direccion de correo electronico (no - datos personales regulares)
- [x] Tipo de sangre (si - datos de salud)
- [ ] Numero de cuenta (no - datos personales regulares)
- [x] Afiliacion sindical (si - categoria especial)

---

## Referencias Cruzadas

- [03-01-01 Principios del RGPD](./03-01-01-gdpr-principles.md) - Base legal
- [03-02-02 Anonimizacion-Seudonimizacion](../03-02-technical-measures/03-02-02-anonymization-pseudonymization.md) - Eliminacion de la referencia personal
- [04-01-01 Triada CIA](../../04-it-security/04-01-protection-goals/04-01-01-cia-triad.md) - Confidencialidad de datos
