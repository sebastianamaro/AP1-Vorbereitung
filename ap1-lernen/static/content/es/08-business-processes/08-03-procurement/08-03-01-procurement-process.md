# Proceso de Aprovisionamiento

## Objetivos de Aprendizaje

Después de esta sección, serás capaz de:
- Nombrar las fases del proceso de aprovisionamiento
- Distinguir entre tipos de demanda
- Describir el proceso desde la determinación de la demanda hasta el pedido
- Asignar documentos relevantes en el proceso de aprovisionamiento

---

## Contenido Principal

### Visión General del Proceso de Aprovisionamiento

```
┌─────────────────────────────────────────────────────────────────────┐
│                    PROCESO DE APROVISIONAMIENTO                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌───────────────┐                                                  │
│  │ 1. DETERMINAR │  "¿Qué necesitamos?"                             │
│  │    DEMANDA    │  → Determinar tipo de demanda                    │
│  └───────┬───────┘  → Definir cantidad y tiempo                     │
│          │                                                          │
│          ▼                                                          │
│  ┌───────────────┐                                                  │
│  │ 2. BUSCAR     │  "¿Quién puede suministrar?"                     │
│  │   PROVEEDORES │  → Identificar proveedores potenciales           │
│  └───────┬───────┘  → Enviar solicitudes                            │
│          │                                                          │
│          ▼                                                          │
│  ┌───────────────┐                                                  │
│  │ 3. OBTENER    │  "¿Cuánto cuesta?"                               │
│  │   COTIZACIONES│  → Solicitar cotizaciones                        │
│  └───────┬───────┘  → Comparar condiciones                          │
│          │                                                          │
│          ▼                                                          │
│  ┌───────────────┐                                                  │
│  │ 4. COMPARAR   │  "¿Cuál oferta es mejor?"                        │
│  │  COTIZACIONES │  → Cuantitativa (costo total)                    │
│  └───────┬───────┘  → Cualitativa (análisis de utilidad)            │
│          │                                                          │
│          ▼                                                          │
│  ┌───────────────┐                                                  │
│  │ 5. TOMAR      │  "¿A quién elegimos?"                            │
│  │   DECISIÓN    │  → Selección de proveedor                        │
│  └───────┬───────┘  → Negociación si es necesario                   │
│          │                                                          │
│          ▼                                                          │
│  ┌───────────────┐                                                  │
│  │ 6. REALIZAR   │  "¡Compramos!"                                   │
│  │    PEDIDO     │  → Enviar orden de compra                        │
│  └───────┬───────┘  → Recibir confirmación de pedido                │
│          │                                                          │
│          ▼                                                          │
│  ┌───────────────┐                                                  │
│  │ 7. RECEPCIÓN  │  "¿Está todo?"                                   │
│  │   DE MERCANCÍA│  → Verificar entrega                             │
│  └───────┬───────┘  → Reportar defectos                             │
│          │                                                          │
│          ▼                                                          │
│  ┌───────────────┐                                                  │
│  │ 8. REVISIÓN   │  "¿Es correcta la factura?"                      │
│  │   DE FACTURA  │  → Comparar factura con pedido                   │
│  └───────┬───────┘  → Iniciar pago                                  │
│          │                                                          │
│          ▼                                                          │
│  ┌───────────────┐                                                  │
│  │ 9. PAGO       │  "¡Pagamos!"                                     │
│  │               │  → Usar descuento                                 │
│  └───────────────┘  → Registro contable                              │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Tipos de Demanda

```
┌─────────────────────────────────────────────────────────────────────┐
│                    TIPOS DE DEMANDA                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  DEMANDA PRIMARIA                                                   │
│  → Demanda de productos terminados                                  │
│  → Ej. PCs terminados vendidos a clientes                           │
│                                                                      │
│  DEMANDA SECUNDARIA                                                 │
│  → Demanda de componentes/partes para producción                    │
│  → Ej. procesadores, RAM, discos duros para ensamblaje de PC        │
│                                                                      │
│  DEMANDA TERCIARIA                                                  │
│  → Demanda de materiales auxiliares y suministros operativos        │
│  → Ej. tornillos, cables, embalaje, electricidad                    │
│                                                                      │
│  ────────────────────────────────────────────────────────────────   │
│                                                                      │
│  Para proveedores de servicios TI (ConSystem GmbH):                 │
│  → Demanda primaria: Soluciones terminadas para clientes            │
│  → Demanda secundaria: Hardware, software, licencias                │
│  → Demanda terciaria: Suministros de oficina, cables, herramientas  │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Métodos de Determinación de Demanda

| Método | Descripción | Aplicación |
|--------|-------------|-------------|
| **Basado en programa** | Derivado del programa de producción | Demanda conocida |
| **Basado en consumo** | Basado en valores históricos | Demanda regular |
| **Heurístico** | Estimación de expertos | Demanda nueva/desconocida |

### Documentos en el Proceso de Aprovisionamiento

```
┌─────────────────────────────────────────────────────────────────────┐
│                    DOCUMENTOS EN EL PROCESO DE APROVISIONAMIENTO     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Fase                 │ Documento              │ De → A              │
│  ─────────────────────┼────────────────────────┼───────────────────  │
│  Notific. de demanda  │ Solicitud de compra    │ Departam. → Compras │
│  Búsqueda proveedor   │ Solicitud de cotización│ Compras → Proveedor │
│  Obtener cotizaciones │ Cotización             │ Proveedor → Compras │
│  Pedido               │ Orden de compra        │ Compras → Proveedor │
│  Confirmación         │ Confirmación de pedido │ Proveedor → Compras │
│  Entrega              │ Nota de entrega        │ Proveedor → Compras │
│  Facturación          │ Factura                │ Proveedor → Compras │
│                                                                      │
│  ────────────────────────────────────────────────────────────────   │
│                                                                      │
│  SOLICITUD  ≠  COTIZACIÓN  ≠  PEDIDO                                │
│                                                                      │
│  Solicitud:   "¿Cuánto cuesta X?" (sin compromiso)                  │
│  Cotización:  "X cuesta Y €" (vincula al proveedor)                 │
│  Pedido:      "¡Compro X!" (vincula al comprador)                   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Pedido vs. Confirmación de Pedido

```
┌─────────────────────────────────────────────────────────────────────┐
│               PEDIDO Y CONFIRMACIÓN DE PEDIDO                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  COMPRADOR                                         VENDEDOR          │
│  (ConSystem GmbH)                                  (Proveedor)       │
│                                                                      │
│       ┌─────────────────┐                                           │
│       │   PEDIDO        │ ─────────────────────────────►            │
│       │ • Artículo      │                                           │
│       │ • Cantidad      │                                           │
│       │ • Precio        │                                           │
│       │ • Fecha entrega │                                           │
│       └─────────────────┘                                           │
│                                                                      │
│                         ◄─────────────────────────────              │
│       ┌─────────────────┐                                           │
│       │CONFIRMACIÓN     │                                           │
│       │DE PEDIDO (CP)   │                                           │
│       │ • Confirma      │                                           │
│       │   el pedido     │                                           │
│       │ • O muestra     │                                           │
│       │   desviaciones  │                                           │
│       └─────────────────┘                                           │
│                                                                      │
│  IMPORTANTE: ¡SIEMPRE revisar la confirmación de pedido!            │
│  → ¿Coinciden artículo, cantidad, precio, fecha?                    │
│  → ¡Reportar desviaciones inmediatamente!                           │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Inspección de Recepción de Mercancía

```
┌─────────────────────────────────────────────────────────────────────┐
│                    INSPECCIÓN DE RECEPCIÓN DE MERCANCÍA              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  1. VERIFICACIÓN DE CANTIDAD (inmediatamente al recibir)            │
│     → ¿Coincide el número de paquetes?                              │
│     → ¿Están todos los artículos pedidos?                           │
│     → ¡Anotar en el albarán de entrega!                             │
│                                                                      │
│  2. INSPECCIÓN VISUAL (inmediatamente al recibir)                   │
│     → ¿El embalaje está sin daños?                                  │
│     → ¿Daños de transporte visibles?                                │
│     → Si hay daños: ¡Documentar y reportar INMEDIATAMENTE!          │
│                                                                      │
│  3. CONTROL DE CALIDAD (después de desembalar)                      │
│     → ¿La mercancía coincide con el pedido?                         │
│     → ¿La mercancía funciona correctamente?                         │
│     → ¿Defectos ocultos?                                            │
│                                                                      │
│  En caso de defectos:                                               │
│  → Reportar dentro del plazo de reclamación (usualmente inmediato)  │
│  → Hacer valer derechos de garantía                                 │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Términos Clave

| Término | Explicación |
|------|-------------|
| **Determinación de demanda** | Identificar qué se necesita en qué cantidad |
| **Solicitud de cotización** | Petición sin compromiso para obtener una cotización |
| **Cotización** | Declaración vinculante sobre precio y condiciones |
| **Pedido** | Intención de compra vinculante del cliente |
| **Confirmación de pedido** | Confirmación del pedido por el proveedor |
| **Nota de entrega** | Acompaña la mercancía durante la entrega |
| **Plazo de reclamación** | Período para reportar defectos |

---

## Consejos para el Examen

1. **Secuencia de documentos:**
   - Solicitud → Cotización → Pedido → CP → Nota de entrega → Factura

2. **Recuerda la diferencia:**
   - Solicitud = sin compromiso
   - Cotización = vincula al VENDEDOR
   - Pedido = vincula al COMPRADOR

3. **Inspección de recepción de mercancía:**
   - Reportar defectos INMEDIATAMENTE (¡deber de reclamación!)
   - Documentar en la nota de entrega

---

## Ejercicios Prácticos

### Ejercicio 1: Pasos del Proceso de Pedido

Pon los pasos en el orden correcto:

- [ ] Pagar factura
- [ ] Comparar cotizaciones
- [ ] Realizar pedido
- [ ] Determinar demanda
- [ ] Verificar recepción de mercancía
- [ ] Obtener cotizaciones
- [ ] Buscar proveedores

<details>
<summary>Mostrar solución</summary>

1. Determinar demanda
2. Buscar proveedores
3. Obtener cotizaciones
4. Comparar cotizaciones
5. Realizar pedido
6. Verificar recepción de mercancía
7. Pagar factura

</details>

### Ejercicio 2: Asignar Tipos de Demanda

ConSystem GmbH planea entregar 10 estaciones de trabajo PC a un cliente. Asigna:

a) Los 10 PCs terminados para el cliente
b) Procesadores y RAM para el ensamblaje de PC
c) Bridas para cableado
d) Cajas para envío

<details>
<summary>Mostrar solución</summary>

a) **Demanda primaria** - Productos terminados para el cliente
b) **Demanda secundaria** - Componentes para producción
c) **Demanda terciaria** - Materiales auxiliares
d) **Demanda terciaria** - Suministros operativos/embalaje

</details>

### Ejercicio 3: Verificación de Recepción de Mercancía

Al recibir 20 monitores notas:
- 2 cajas están abolladas
- Según la nota de entrega, solo hay 18 monitores incluidos

¿Qué pasos debes tomar?

<details>
<summary>Mostrar solución</summary>

**Medidas inmediatas:**
1. **Documentar diferencia de cantidad:**
   - Anotar en el albarán: "Solo 18 en lugar de 20 monitores recibidos"
   - Hacer que el transportista lo firme

2. **Documentar cajas dañadas:**
   - Tomar fotos
   - Anotar en el albarán: "2 cajas dañadas"

3. **Contactar al proveedor:**
   - Reportar inmediatamente por teléfono/email
   - Reportar faltante y daño
   - Enviar reclamación por escrito

4. **Verificar mercancía:**
   - Abrir cajas dañadas
   - Probar funcionalidad de monitores
   - Documentar resultados

5. **Documentación interna:**
   - Crear informe de recepción de mercancía
   - Para revisión de factura: ¡Solo pagar por 18 monitores!

</details>

---

## Referencias Cruzadas

- [Comparación de Ofertas](../08-02-economics/08-02-04-offer-comparison.md) - Métodos de comparación
- [Tipos de Contrato](../08-04-contract-law/08-04-01-contract-types.md) - Contrato de compraventa
- [Perturbaciones Contractuales](../08-04-contract-law/08-04-03-contract-disruptions.md) - Derechos de garantía
