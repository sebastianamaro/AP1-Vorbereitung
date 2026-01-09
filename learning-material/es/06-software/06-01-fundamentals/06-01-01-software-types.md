# Tipos de Software

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Distinguir entre software de sistema y software de aplicación
- Nombrar ejemplos de diferentes tipos de software
- Distinguir entre software estándar y software personalizado
- Conocer sobre software Open Source y propietario

---

## Contenido Principal

### Resumen: Tipos de Software

```
┌─────────────────────────────────────────────────────────────────┐
│                    TIPOS DE SOFTWARE                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                         SOFTWARE                                │
│                            │                                    │
│           ┌────────────────┴────────────────┐                  │
│           │                                 │                  │
│     ┌─────▼─────┐                    ┌─────▼─────┐            │
│     │  Software │                    │ Software  │            │
│     │ de Sistema│                    │    de     │            │
│     │           │                    │Aplicación │            │
│     └─────┬─────┘                    └─────┬─────┘            │
│           │                                 │                  │
│     ┌─────┴─────┐                    ┌─────┴─────┐            │
│     │• Sistema  │                    │• Office   │            │
│     │  Operativo│                    │• Navegador│            │
│     │• Drivers  │                    │• ERP      │            │
│     │• Firmware │                    │• Juegos   │            │
│     │• BIOS/UEFI│                    │• CAD      │            │
│     │• Utilidad.│                    │• Gráficos │            │
│     └───────────┘                    └───────────┘            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Software de Sistema

El **software de sistema** controla y gestiona el hardware y proporciona la base para el software de aplicación.

| Tipo | Descripción | Ejemplos |
|------|-------------|----------|
| **Sistema Operativo** | Gestiona hardware y recursos | Windows, Linux, macOS |
| **Drivers** | Permite la comunicación con el hardware | Drivers de tarjeta gráfica, drivers de impresora |
| **Firmware** | Software directamente en el hardware | BIOS/UEFI, firmware del router |
| **Utilidades** | Herramientas del sistema | Desfragmentación, antivirus |

---

### Software de Aplicación

El **software de aplicación** cumple tareas específicas para el usuario.

| Categoría | Descripción | Ejemplos |
|-----------|-------------|----------|
| **Software Office** | Procesamiento de texto, hojas de cálculo | Word, Excel, LibreOffice |
| **Comunicación** | Correo electrónico, mensajería | Outlook, Teams, Slack |
| **Software Industrial** | Especializado para industrias | ERP, CAD, Contabilidad |
| **Multimedia** | Edición de imagen, video, audio | Photoshop, Premiere |
| **Navegador** | Mostrar sitios web | Chrome, Firefox, Edge |
| **Juegos** | Entretenimiento | - |

---

### Software Estándar vs. Software Personalizado

```
┌────────────────────────────────────────────────────────────────┐
│          SOFTWARE ESTÁNDAR vs. SOFTWARE PERSONALIZADO          │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  SOFTWARE ESTÁNDAR                 SOFTWARE PERSONALIZADO      │
│  ┌────────────────────┐          ┌────────────────────┐      │
│  │                    │          │                    │      │
│  │ Desarrollado para  │          │ Adaptado para      │      │
│  │ muchos clientes    │          │ un cliente         │      │
│  │                    │          │                    │      │
│  │ • Microsoft Office │          │ • Solución         │      │
│  │ • SAP              │          │   específica       │      │
│  │ • Adobe Photoshop  │          │   de empresa       │      │
│  │                    │          │                    │      │
│  └────────────────────┘          └────────────────────┘      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Aspecto | Software Estándar | Software Personalizado |
|---------|-------------------|------------------------|
| **Grupo Objetivo** | Muchos clientes | Un cliente |
| **Costo** | Menor (distribuido entre muchos) | Mayor (desarrollo) |
| **Personalización** | Limitada | Completamente personalizable |
| **Disponibilidad** | Inmediata | Tiempo de desarrollo |
| **Actualizaciones** | Del proveedor | Individual |
| **Soporte** | Estandarizado | Individual |

---

### Modelos de Licencia (Resumen)

```
┌────────────────────────────────────────────────────────────────┐
│                    MODELOS DE LICENCIA                          │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  PROPIETARIO                       OPEN SOURCE                 │
│  ┌────────────────────┐          ┌────────────────────┐      │
│  │                    │          │                    │      │
│  │ • Código fuente    │          │ • Código fuente    │      │
│  │   secreto          │          │   abierto          │      │
│  │ • Uso por          │          │ • Generalmente     │      │
│  │   licencia         │          │   gratis           │      │
│  │ • Modificación no  │          │ • Modificación     │      │
│  │   permitida        │          │   permitida        │      │
│  │                    │          │                    │      │
│  │ Ejemplos:          │          │ Ejemplos:          │      │
│  │ Windows, Office,   │          │ Linux, Firefox,    │      │
│  │ Adobe CC           │          │ LibreOffice        │      │
│  └────────────────────┘          └────────────────────┘      │
│                                                                │
│  FREEWARE             SHAREWARE                               │
│  ┌────────────────────┐          ┌────────────────────┐      │
│  │ Uso gratuito       │          │ Versión de prueba  │      │
│  │ Código fuente      │          │ Versión completa   │      │
│  │ secreto            │          │ requiere pago      │      │
│  └────────────────────┘          └────────────────────┘      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Tipo de Licencia | Costo | Código Fuente | Ejemplos |
|------------------|-------|---------------|----------|
| **Propietario** | De pago | Cerrado | Windows, MS Office |
| **Open Source** | Generalmente gratis | Abierto | Linux, Firefox |
| **Freeware** | Gratis | Cerrado | VLC Player |
| **Shareware** | Período de prueba, luego de pago | Cerrado | WinRAR |

---

### Software-as-a-Service (SaaS)

Además de la instalación tradicional, hoy existe **SaaS** - software desde la nube.

| Aspecto | Software Tradicional | SaaS |
|---------|---------------------|------|
| **Instalación** | Local | Ninguna (en navegador) |
| **Actualizaciones** | Manual | Automática |
| **Pago** | Compra única | Suscripción |
| **Acceso** | Solo en dispositivo instalado | Desde cualquier lugar |
| **Ejemplos** | MS Office (clásico) | Microsoft 365 |

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Software de Sistema** | Gestiona hardware (SO, drivers) |
| **Software de Aplicación** | Cumple tareas del usuario |
| **Software Estándar** | Desarrollado para muchos clientes |
| **Software Personalizado** | Adaptado para un cliente |
| **Open Source** | Código fuente abierto, uso libre |
| **Propietario** | Código fuente cerrado |
| **SaaS** | Software como Servicio |

---

## Consejos para el Examen

### Preguntas Comunes de Examen

- ¿Cuál es la diferencia entre software de sistema y software de aplicación?
- Nombra ventajas y desventajas del software estándar
- ¿Qué es Open Source?

### Importante Recordar

- **Software de sistema** = Sistema operativo, drivers (relacionado con hardware)
- **Software de aplicación** = Office, ERP, navegador (relacionado con usuario)
- **Software estándar** = más barato, disponible rápidamente
- **Software personalizado** = más caro, a medida

---

## Ejercicios Prácticos

### Ejercicio 1
Categoriza el siguiente software: Windows 11, SAP, Driver de tarjeta gráfica, LibreOffice

**Solución:**
| Software | Categoría |
|----------|-----------|
| Windows 11 | Software de sistema (Sistema operativo) |
| SAP | Software de aplicación (ERP) |
| Driver de tarjeta gráfica | Software de sistema (Driver) |
| LibreOffice | Software de aplicación (Software Office) |

### Ejercicio 2
Una empresa necesita software de contabilidad. Nombra dos ventajas del software estándar y dos ventajas del software personalizado.

**Solución:**

**Software Estándar:**
1. **Costo:** Más barato, distribuido entre muchos clientes
2. **Disponibilidad:** Usable inmediatamente, sin tiempo de desarrollo

**Software Personalizado:**
1. **Personalización:** Exactamente adaptado a los procesos de la empresa
2. **Flexibilidad:** Puede modificarse en cualquier momento

### Ejercicio 3
¿Cuál es la diferencia entre Open Source y Freeware?

**Solución:**
- **Open Source:** El código fuente está abierto, puede verse y modificarse (ej., Linux)
- **Freeware:** El software es de uso gratuito, pero el código fuente está cerrado (ej., VLC)

---

## Referencias Cruzadas

- [06-07-02 Tipos de Licencia](../06-07-licenses/06-07-02-license-types.md) - Detalles sobre licencias
- [05-03-01 Sistemas Operativos](../../05-it-systems/05-03-operating-systems/05-03-01-fundamentals-operating-systems.md) - Software de sistema
- [05-08-01 Sistemas ERP](../../05-it-systems/05-08-enterprise-software/05-08-01-erp-systems.md) - Software de aplicación
