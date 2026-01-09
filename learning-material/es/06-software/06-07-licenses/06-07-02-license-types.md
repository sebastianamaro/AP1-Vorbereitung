# Tipos de Licencias

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Conocer varios modelos de licencias de software
- Distinguir licencias propietarias y de código abierto
- Conocer las licencias de código abierto más importantes
- Comprender las obligaciones de las licencias

---

## Contenido Principal

### ¿Qué es una Licencia de Software?

```
┌────────────────────────────────────────────────────────────────────┐
│                      LICENCIA DE SOFTWARE                          │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Definición:                                                      │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ Una licencia es un contrato que regula bajo qué condiciones │ │
│   │ se puede utilizar el software.                               │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   La licencia define:                                               │
│   • QUIÉN puede usar el software                                   │
│   • CÓMO se puede usar el software                                 │
│   • DÓNDE se puede usar el software                                │
│   • Bajo qué CONDICIONES                                           │
│                                                                     │
│   Distinción básica:                                                │
│                                                                     │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │                    CATEGORÍAS DE LICENCIAS                   │ │
│   │                                                              │ │
│   │     ┌────────────────┐        ┌────────────────┐           │ │
│   │     │  PROPIETARIA   │        │  CÓDIGO ABIERTO│           │ │
│   │     │   (cerrada)    │        │    (abierta)   │           │ │
│   │     └───────┬────────┘        └───────┬────────┘           │ │
│   │             │                         │                     │ │
│   │     • Código fuente secreto   • Código fuente abierto      │ │
│   │     • Uso restringido         • Uso permitido              │ │
│   │     • De pago (generalmente)  • Gratis (generalmente)      │ │
│   │     • Sin modificaciones      • Modificaciones permitidas  │ │
│   │                                                              │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Licencias Propietarias

```
┌────────────────────────────────────────────────────────────────────┐
│                    LICENCIAS PROPIETARIAS                          │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Características:                                                  │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ • Código fuente NO accesible                                │ │
│   │ • El software se entrega solo como archivo ejecutable       │ │
│   │ • Términos de uso estrictos (EULA)                          │ │
│   │ • Modificaciones y redistribución prohibidas                │ │
│   │ • Generalmente de pago                                       │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   MODELOS DE LICENCIA                                              │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │                                                             │  │
│   │ LICENCIA DE USUARIO ÚNICO                                   │  │
│   │ ┌────────────────────────────────────────────────────────┐ │  │
│   │ │ • Un usuario, un dispositivo                           │ │  │
│   │ │ • Instalación en UNA computadora                       │ │  │
│   │ │ • Ejemplo: Microsoft Office Home                       │ │  │
│   │ └────────────────────────────────────────────────────────┘ │  │
│   │                                                             │  │
│   │ LICENCIA POR VOLUMEN                                        │  │
│   │ ┌────────────────────────────────────────────────────────┐ │  │
│   │ │ • Múltiples instalaciones/usuarios                     │ │  │
│   │ │ • Descuentos por cantidades mayores                    │ │  │
│   │ │ • Gestión centralizada posible                         │ │  │
│   │ │ • Ejemplo: Microsoft Volume Licensing                  │ │  │
│   │ └────────────────────────────────────────────────────────┘ │  │
│   │                                                             │  │
│   │ LICENCIA CONCURRENTE/FLOTANTE                               │  │
│   │ ┌────────────────────────────────────────────────────────┐ │  │
│   │ │ • Número limitado de usuarios simultáneos              │ │  │
│   │ │ • Más instalaciones que licencias posibles             │ │  │
│   │ │ • Servidor de licencias gestiona el acceso             │ │  │
│   │ │ • Ejemplo: AutoCAD Network License                     │ │  │
│   │ └────────────────────────────────────────────────────────┘ │  │
│   │                                                             │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

```
┌────────────────────────────────────────────────────────────────────┐
│              MODELOS DE LICENCIA PROPIETARIA (Continuación)        │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   SUSCRIPCIÓN                                                      │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Uso temporal                                             │  │
│   │ • Pago regular (mensual/anual)                             │  │
│   │ • Siempre versión actual                                   │  │
│   │ • Software-as-a-Service (SaaS)                             │  │
│   │ • Ejemplo: Microsoft 365, Adobe Creative Cloud             │  │
│   │                                                             │  │
│   │    ┌─────┬─────┬─────┬─────┬─────┐                        │  │
│   │    │ Ene │ Feb │ Mar │ Abr │ ... │  → Pago continuo       │  │
│   │    │  €  │  €  │  €  │  €  │  €  │                        │  │
│   │    └─────┴─────┴─────┴─────┴─────┘                        │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   LICENCIA OEM (Original Equipment Manufacturer)                   │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Vinculada al hardware                                    │  │
│   │ • Solo vendida junto con el dispositivo                    │  │
│   │ • No transferible                                          │  │
│   │ • Más barata que la versión retail                         │  │
│   │ • Ejemplo: Windows preinstalado en laptop                  │  │
│   │                                                             │  │
│   │    ┌─────────────┐                                         │  │
│   │    │   Laptop    │ ← La licencia OEM de Windows está       │  │
│   │    │  + Windows  │    VINCULADA a este laptop, no          │  │
│   │    └─────────────┘    transferible                         │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   LICENCIA RETAIL                                                  │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Comprada en tienda                                       │  │
│   │ • Transferible a nueva computadora                         │  │
│   │ • Más cara que OEM                                         │  │
│   │ • A menudo incluye medios físicos                          │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Licencias de Código Abierto

```
┌────────────────────────────────────────────────────────────────────┐
│                    LICENCIAS DE CÓDIGO ABIERTO                     │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Principios fundamentales:                                         │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ ✓ El código fuente está disponible libremente               │ │
│   │ ✓ El software puede ser modificado                          │ │
│   │ ✓ El software puede ser redistribuido                       │ │
│   │ ✓ Sin discriminación contra personas/grupos                 │ │
│   │ ✓ Sin restricción en el tipo de uso                         │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   ¡IMPORTANTE: Código Abierto ≠ Dominio Público!                   │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ El Código Abierto tiene condiciones de licencia que DEBEN   │ │
│   │ cumplirse.                                                   │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Dos categorías principales:                                       │
│                                                                     │
│   ┌────────────────────────┐    ┌────────────────────────┐        │
│   │     COPYLEFT           │    │    PERMISIVA           │        │
│   │    (estricta)          │    │    (liberal)           │        │
│   ├────────────────────────┤    ├────────────────────────┤        │
│   │ • Las modificaciones   │    │ • Las modificaciones   │        │
│   │   deben estar bajo la  │    │   también pueden ser   │        │
│   │   misma licencia       │    │   propietarias         │        │
│   │ • "Viral" - la licencia│    │ • Máxima libertad      │        │
│   │   se propaga           │    │   para uso             │        │
│   │                        │    │                        │        │
│   │ Ejemplos:              │    │ Ejemplos:              │        │
│   │ • GPL                  │    │ • MIT                  │        │
│   │ • AGPL                 │    │ • Apache 2.0           │        │
│   │ • LGPL                 │    │ • BSD                  │        │
│   └────────────────────────┘    └────────────────────────┘        │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Licencias de Código Abierto Importantes

```
┌────────────────────────────────────────────────────────────────────┐
│                 LICENCIAS DE CÓDIGO ABIERTO IMPORTANTES            │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   GPL (GNU General Public License)                                 │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Tipo: Copyleft (estricta)                                  │  │
│   │                                                             │  │
│   │ Características principales:                                │  │
│   │ • El código fuente debe estar disponible                   │  │
│   │ • Las obras derivadas TAMBIÉN deben ser GPL                │  │
│   │ • La licencia se "propaga" (viral)                         │  │
│   │ • Uso comercial permitido                                   │  │
│   │                                                             │  │
│   │ Ejemplos: Linux kernel, WordPress, MySQL                    │  │
│   │                                                             │  │
│   │ ⚠ Precaución en empresas: ¡Su propio software podría       │  │
│   │   también tener que estar bajo GPL!                         │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   LGPL (Lesser GPL)                                                │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Tipo: Copyleft (más débil)                                 │  │
│   │                                                             │  │
│   │ Características principales:                                │  │
│   │ • Como GPL, pero diseñada para bibliotecas                 │  │
│   │ • Vinculación con código propietario permitida             │  │
│   │ • Solo los cambios a la biblioteca deben ser LGPL          │  │
│   │                                                             │  │
│   │ Ejemplos: glibc, Qt (parcialmente)                          │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

```
┌────────────────────────────────────────────────────────────────────┐
│            LICENCIAS DE CÓDIGO ABIERTO IMPORTANTES (Cont.)         │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   LICENCIA MIT                                                      │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Tipo: Permisiva (muy liberal)                              │  │
│   │                                                             │  │
│   │ Características principales:                                │  │
│   │ • Licencia muy corta y simple                              │  │
│   │ • Casi sin restricciones                                    │  │
│   │ • Puede usarse en software propietario                     │  │
│   │ • Única condición: Mantener el aviso de copyright          │  │
│   │                                                             │  │
│   │ Ejemplos: jQuery, React, Node.js                           │  │
│   │                                                             │  │
│   │ → A menudo la opción "más segura" para empresas            │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   LICENCIA APACHE 2.0                                              │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Tipo: Permisiva                                            │  │
│   │                                                             │  │
│   │ Características principales:                                │  │
│   │ • Similar a MIT, pero más detallada                        │  │
│   │ • Licencia de patente explícita incluida                   │  │
│   │ • Los cambios deben documentarse                           │  │
│   │ • Uso propietario permitido                                 │  │
│   │                                                             │  │
│   │ Ejemplos: Android, Apache HTTP Server, Kubernetes          │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   LICENCIA BSD                                                      │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Tipo: Permisiva                                            │  │
│   │                                                             │  │
│   │ Características principales:                                │  │
│   │ • Muy liberal, similar a MIT                               │  │
│   │ • Varias variantes (2-Clause, 3-Clause)                    │  │
│   │ • Puede usarse en software propietario                     │  │
│   │                                                             │  │
│   │ Ejemplos: FreeBSD, macOS (partes), PostgreSQL              │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Comparación de Licencias

```
┌────────────────────────────────────────────────────────────────────┐
│                      COMPARACIÓN DE LICENCIAS                      │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Licencia    │ Código  │ Modificar│ Propie-  │ Patente │ Copyleft│
│               │ abierto │ permitido│ tario OK │ protege │         │
│   ────────────┼─────────┼──────────┼──────────┼─────────┼─────────│
│   Propietaria │    ✗    │    ✗     │   n/a    │   n/a   │   ✗     │
│   GPL         │    ✓    │    ✓     │    ✗     │   ✗     │   ✓     │
│   LGPL        │    ✓    │    ✓     │  (✓)*    │   ✗     │  (✓)*   │
│   MIT         │    ✓    │    ✓     │    ✓     │   ✗     │   ✗     │
│   Apache 2.0  │    ✓    │    ✓     │    ✓     │   ✓     │   ✗     │
│   BSD         │    ✓    │    ✓     │    ✓     │   ✗     │   ✗     │
│                                                                     │
│   * LGPL: Solo con vinculación, no con incorporación directa      │
│                                                                     │
│   Recomendado para empresas:                                        │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ MIT / Apache / BSD → Bajo riesgo legal                      │ │
│   │ GPL → Usar con precaución (cuidado con propagación de       │ │
│   │       licencia)                                              │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Conceptos Adicionales de Licencias

```
┌────────────────────────────────────────────────────────────────────┐
│                   CONCEPTOS ADICIONALES DE LICENCIAS               │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   FREEWARE                                                         │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Libre para usar                                          │  │
│   │ • Pero NO es Código Abierto (código fuente no disponible)  │  │
│   │ • No se permiten modificaciones                            │  │
│   │ • Ejemplo: Adobe Reader, WhatsApp                          │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   SHAREWARE                                                        │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Libre para probar (versión de prueba)                    │  │
│   │ • Funciones limitadas o tiempo limitado                    │  │
│   │ • La versión completa es de pago                           │  │
│   │ • Ejemplo: WinRAR                                          │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   DOMINIO PÚBLICO                                                  │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Sin derechos de autor                                    │  │
│   │ • Completamente libre para usar                            │  │
│   │ • Sin condiciones, sin restricciones                       │  │
│   │ • Difícil de lograr en Alemania                            │  │
│   │ • Alternativa: CC0 (Creative Commons Zero)                 │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   CREATIVE COMMONS (CC)                                            │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Principalmente para contenido (textos, imágenes, música) │  │
│   │ • Varias combinaciones:                                     │  │
│   │   - BY: Atribución requerida                               │  │
│   │   - NC: Sin uso comercial                                  │  │
│   │   - ND: Sin obras derivadas                                │  │
│   │   - SA: Compartir Igual (misma licencia)                   │  │
│   │ • Ejemplo: CC BY-SA (como Wikipedia)                       │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Propietaria** | Licencia cerrada, comercial |
| **Código Abierto** | Código fuente abierto, ciertas libertades |
| **Copyleft** | Las modificaciones deben estar bajo la misma licencia |
| **Permisiva** | Pocas restricciones, liberal |
| **EULA** | Acuerdo de Licencia de Usuario Final |
| **OEM** | Fabricante de Equipo Original |
| **Freeware** | Gratis, pero no es Código Abierto |
| **Dominio Público** | Sin derechos de autor, uso libre |

---

## Consejos para el Examen

### Preguntas Comunes del Examen

- ¿Cuál es la diferencia entre GPL y MIT?
- ¿Qué significa Copyleft?
- Distinguir Freeware de Código Abierto

### Importante Recordar

- **Código Abierto ≠ gratis ≠ Dominio Público**
- **GPL:** Copyleft, las modificaciones también deben ser GPL
- **MIT:** Permisiva, puede usarse en software propietario
- **Licencia OEM:** Vinculada al hardware
- **Freeware:** Gratis, pero SIN código fuente
- ¡Código GPL en tu propio producto: Tu propio producto también se vuelve GPL!

---

## Ejercicios Prácticos

### Ejercicio 1
Una empresa quiere incorporar una biblioteca JavaScript en su software comercial. La biblioteca está bajo GPL. ¿Qué debe considerarse?

**Solución:**
Si se incorpora código GPL, todo el software debe también colocarse bajo GPL. Esto significa:
- El código fuente del software comercial tendría que publicarse
- El software tendría que ser libremente redistribuible

**Recomendación:** Usar una biblioteca alternativa con licencia MIT o Apache, o adquirir una licencia comercial para la biblioteca (si está disponible).

### Ejercicio 2
¿Cuál es la diferencia entre Freeware y Código Abierto?

**Solución:**
| Freeware | Código Abierto |
|----------|----------------|
| Libre para usar | Libre para usar (generalmente) |
| Código fuente NO disponible | Código fuente DISPONIBLE |
| No se permiten modificaciones | Modificaciones permitidas |
| Ejemplo: Adobe Reader | Ejemplo: Firefox |

### Ejercicio 3
Un empleado quiere descargar software de un sitio web. Está etiquetado como "Dominio Público". ¿Qué significa eso?

**Solución:**
**Dominio Público** significa que el software está en el dominio público:
- Sin protección de derechos de autor
- Puede usarse, modificarse y redistribuirse libremente
- Sin tarifas de licencia, sin condiciones
- También puede usarse en productos comerciales

**Precaución:** Verificar la etiqueta - no todas las afirmaciones son correctas. En Alemania, renunciar a los derechos de autor es problemático.

---

## Referencias Cruzadas

- [06-07-01 Derechos de Autor](./06-07-01-copyright.md) - Fundamentos legales
- [08-04-01 Tipos de Contratos](../../08-business-processes/08-04-contract-law/08-04-01-contract-types.md) - Contratos de licencia
- [06-01-01 Tipos de Software](../06-01-fundamentals/06-01-01-software-types.md) - Categorías de software
