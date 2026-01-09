# Eficiencia Energetica en TI

## Objetivos de Aprendizaje

Despues de este capitulo, deberias ser capaz de:
- Entender la importancia de la eficiencia energetica en TI
- Conocer medidas para el ahorro de energia
- Explicar Green IT
- Estimar el consumo de energia de sistemas TI

---

## Contenido Principal

### Por que Eficiencia Energetica en TI?

Los sistemas TI consumen cantidades significativas de energia. La eficiencia energetica ahorra costos y protege el medio ambiente.

```
┌─────────────────────────────────────────────────────────────────┐
│                 CONSUMO DE ENERGIA TI                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Centros de datos mundiales: aprox. 200-250 TWh/ano           │
│   (aprox. 1% del consumo electrico mundial)                    │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │  CONSUMO DE ENERGIA DE UN CENTRO DE DATOS               │  │
│   │                                                          │  │
│   │   Servidores & Almacen.: ~40%   ████████░░░░░░░░░░      │  │
│   │   Refrigeracion:         ~40%   ████████░░░░░░░░░░      │  │
│   │   Red:                   ~10%   ██░░░░░░░░░░░░░░░░      │  │
│   │   Iluminacion, UPS:      ~10%   ██░░░░░░░░░░░░░░░░      │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│   La refrigeracion consume casi tanta energia como la TI!      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Green IT

**Green IT** se refiere a medidas para el uso de tecnologia de informacion de manera amigable con el medio ambiente y los recursos.

| Aspecto | Descripcion |
|---------|-------------|
| **Green a traves de TI** | TI ayuda a otras areas a ahorrar energia |
| **Green en TI** | Hacer la TI en si mas eficiente energeticamente |

```
┌────────────────────────────────────────────────────────────────┐
│                      GREEN IT                                  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  GREEN A TRAVES DE TI              GREEN EN TI                │
│  (TI como habilitador)              (Optimizar TI en si)      │
│                                                                │
│  • Videoconferencias en lugar     • Hardware eficiente        │
│    de viajes de negocios            energeticamente           │
│  • Documentos digitales           • Virtualizacion            │
│    en lugar de papel              • Refrigeracion eficiente   │
│  • Edificios inteligentes         • Gestion de energia        │
│  • Optimizacion                   • Nube en lugar de          │
│    Industria 4.0                    servidores locales        │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Medidas para el Ahorro de Energia

#### Hardware

| Medida | Descripcion |
|--------|-------------|
| **Procesadores eficientes** | CPUs modernas con bajo TDP |
| **SSD en lugar de HDD** | Los SSD consumen menos energia |
| **Fuentes de alimentacion eficientes** | Certificadas 80 PLUS |
| **Consolidacion** | Menos servidores mediante virtualizacion |
| **Apagado** | Apagar dispositivos no usados |

#### Software

| Medida | Descripcion |
|--------|-------------|
| **Gestion de energia** | Activar modos de ahorro de energia |
| **Virtualizacion** | Multiples VMs en menos hardware |
| **Cloud computing** | Externalizacion a centros de datos eficientes |
| **Software eficiente** | Programacion que conserva recursos |

#### Centro de Datos

| Medida | Descripcion |
|--------|-------------|
| **Free cooling** | Usar aire exterior |
| **Pasillo caliente/frio** | Flujos de aire separados |
| **Aprovechamiento de calor residual** | Calefaccion con calor residual del servidor |
| **Energia renovable** | Electricidad de solar, eolica |

---

### PUE (Power Usage Effectiveness)

**PUE** es una metrica para la eficiencia energetica de centros de datos.

```
┌────────────────────────────────────────────────────────────────┐
│                      CALCULO PUE                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│                 Energia total del centro de datos              │
│   PUE  =  ─────────────────────────────────────────           │
│                 Energia para equipos TI                        │
│                                                                │
│   Ejemplo:                                                     │
│   200 kW Total / 100 kW TI = PUE 2.0                          │
│                                                                │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │  PUE       │ Calificacion                               │ │
│   │───────────────────────────────────────────────────────│ │
│   │  > 2.0     │ Pobre (50% para refrigeracion etc.)       │ │
│   │  1.6 - 2.0 │ Promedio                                  │ │
│   │  1.2 - 1.6 │ Bueno                                     │ │
│   │  < 1.2     │ Muy bueno (ej., Google: ~1.1)            │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                │
│   Ideal: PUE = 1.0 (toda la energia va a TI)                 │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Modos de Ahorro de Energia

| Modo | Windows | Descripcion |
|------|---------|-------------|
| **Suspension** | S3 | RAM permanece activa, despertar rapido |
| **Hibernacion** | S4 | RAM a disco duro, sin energia |
| **Ahorro de energia** | - | Rendimiento reducido |
| **Apagado** | S5 | Completamente apagado |

---

### Eficiencia Energetica en la Oficina

```
┌────────────────────────────────────────────────────────────────┐
│              CONSEJOS DE AHORRO DE ENERGIA OFICINA             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌────────────────────────────────────────────────────────┐   │
│  │ ✓ Apagar monitor durante pausas                        │   │
│  │ ✓ Activar modo de ahorro de energia                    │   │
│  │ ✓ Solo encender impresora cuando sea necesario         │   │
│  │ ✓ Laptop en lugar de desktop (menos consumo)           │   │
│  │ ✓ Regleta con interruptor                              │   │
│  │ ✓ Reducir brillo de pantalla                           │   │
│  │ ✓ Apagar completamente dispositivos despues del trabajo│   │
│  └────────────────────────────────────────────────────────┘   │
│                                                                │
│  Consumo tipico:                                               │
│  PC de escritorio:   60-250 Watts                              │
│  Laptop:             15-60 Watts                               │
│  Monitor:            20-40 Watts                               │
│  Impresora:          10-40 Watts (Standby: 1-5 Watts)         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Energia Renovable para TI

| Medida | Descripcion |
|--------|-------------|
| **Electricidad verde** | Compra de energia renovable |
| **Solar** | Sistema fotovoltaico en centro de datos |
| **Compensacion de CO2** | Compensacion a traves de proyectos |
| **Eleccion de ubicacion** | Clima mas frio = menos energia de refrigeracion |

---

## Terminos Clave

| Termino | Explicacion |
|---------|-------------|
| **Green IT** | TI amigable con el medio ambiente |
| **PUE** | Power Usage Effectiveness |
| **TDP** | Thermal Design Power (salida de calor de CPU) |
| **Standby** | Modo de ahorro de energia |
| **Virtualizacion** | Multiples VMs en un host |
| **Consolidacion** | Combinacion de servidores |

---

## Consejos para el Examen

### Preguntas Comunes del Examen

- Que es Green IT?
- Nombra medidas para el ahorro de energia
- Que es PUE?
- Como puedes ahorrar energia en la oficina?

### Importante Recordar

- **Green IT** = uso de TI amigable con el medio ambiente
- **PUE** = Energia total / Energia TI (ideal: 1.0)
- **Refrigeracion** = ~40% del consumo de energia del DC
- **Virtualizacion** = menos servidores = menos energia

---

## Ejercicios Practicos

### Ejercicio 1
Cual es la diferencia entre "Green a traves de TI" y "Green en TI"?

**Solucion:**
- **Green a traves de TI:** TI ayuda a otras areas a ahorrar energia (ej., videoconferencias en lugar de viajes de negocios, documentos digitales en lugar de papel)
- **Green en TI:** Hacer la TI en si mas eficiente energeticamente (ej., hardware de ahorro de energia, virtualizacion, refrigeracion eficiente)

### Ejercicio 2
Un centro de datos consume 500 kW, de los cuales 300 kW para equipos TI. Cual es el PUE?

**Solucion:**
```
PUE = Energia total / Energia TI
PUE = 500 kW / 300 kW = 1.67
```
**Calificacion:** Valor promedio. 40% de la energia no va a TI (refrigeracion, iluminacion, etc.).

### Ejercicio 3
Nombra tres medidas para reducir el consumo de energia en el puesto de trabajo de oficina.

**Solucion:**
1. **Activar modo de ahorro de energia:** PC entra automaticamente en standby
2. **Apagar monitor durante pausas:** Ahorra 20-40 Watts
3. **Usar laptop en lugar de desktop:** Laptops consumen 15-60 Watts en lugar de 60-250 Watts

---

## Referencias Cruzadas

- [05-09-02 Device Classes](./05-09-02-device-classes.md) - Clases de eficiencia energetica
- [05-04-01 Virtualization](../05-04-virtualization-cloud/05-04-01-virtualization.md) - Consolidacion de servidores
- [05-02-07 UPS](../05-02-hardware/05-02-07-usv.md) - Suministro de energia
