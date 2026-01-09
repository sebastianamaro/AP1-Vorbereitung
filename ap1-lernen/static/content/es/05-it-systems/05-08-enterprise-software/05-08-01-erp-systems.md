# Sistemas ERP

**Nota:** El software empresarial es NUEVO en el catalogo de examenes 2025!

## Objetivos de Aprendizaje

Despues de este capitulo, deberias ser capaz de:
- Definir el termino ERP
- Conocer los modulos tipicos de ERP
- Describir las ventajas de los sistemas ERP
- Nombrar proveedores de ERP conocidos

---

## Contenido Principal

### Que es ERP?

**ERP (Enterprise Resource Planning)** es una solucion de software integrada que reune todos los procesos de negocio de una empresa en un sistema.

```
┌─────────────────────────────────────────────────────────────────┐
│                    SISTEMA ERP                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    ┌───────────────────┐                       │
│                    │  BASE DE DATOS    │                       │
│                    │  CENTRAL          │                       │
│                    └─────────┬─────────┘                       │
│                              │                                  │
│      ┌───────────────────────┼───────────────────────┐         │
│      │           │           │           │           │         │
│  ┌───▼───┐  ┌───▼───┐  ┌───▼───┐  ┌───▼───┐  ┌───▼───┐      │
│  │Finanzas│  │Recursos│  │Produc-│  │Ventas │  │Compras│      │
│  │       │  │Humanos │  │cion   │  │& CRM  │  │       │      │
│  │       │  │(RRHH)  │  │       │  │       │  │       │      │
│  │• Conta-│ │• Nomina│  │• Fabri-│ │• Clien-│ │• Pedidos│    │
│  │ bilidad│ │• Control│ │ cacion │ │ tes   │  │       │      │
│  │• Control│ │ tiempo │  │• Alma- │ │• Ofert-│ │• Prove-│     │
│  │ costos │ │• Planif.│ │ cen   │ │ as    │  │ edores │      │
│  │        │ │ personal││• Calidad│ │• Pedidos│ │       │      │
│  └────────┘ └────────┘  └────────┘ └───────┘  └───────┘      │
│                                                                 │
│   Todos los datos estan integrados y son consistentes!         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### ERP vs. Soluciones Aisladas

```
┌────────────────────────────────────────────────────────────────┐
│           SOLUCIONES AISLADAS vs. ERP                          │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  SIN ERP (Soluciones isla):     CON ERP:                      │
│                                                                │
│  ┌─────┐  ┌─────┐  ┌─────┐      ┌─────────────────────────┐  │
│  │Conta-│ │Alma- │ │RRHH │      │                         │  │
│  │bilidad│ │cen  │ │     │      │     SISTEMA ERP         │  │
│  └──┬──┘  └──┬──┘  └──┬──┘      │                         │  │
│     │        │        │         │  ┌─────┐┌─────┐┌─────┐  │  │
│     └────?───┴────?───┘         │  │Conta││Almac││RRHH │  │  │
│                                  │  └──┬──┘└──┬──┘└──┬──┘  │  │
│  • Mantener datos multiples veces│     └──────┼──────┘     │  │
│  • Inconsistencias posibles      │            │            │  │
│  • Interfaces manuales           │     BD CENTRAL          │  │
│  • Sin vision general            │                         │  │
│                                  │  • Una fuente de datos  │  │
│                                  │  • Flujo automatico     │  │
│                                  │  • Datos en tiempo real │  │
│                                  └─────────────────────────┘  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Modulos Tipicos de ERP

| Modulo | Funcion |
|--------|---------|
| **Contabilidad Financiera (FI)** | Balance, PyG, cuentas |
| **Controlling (CO)** | Contabilidad de costos, presupuestos |
| **Gestion de Materiales (MM)** | Compras, gestion de almacen |
| **Ventas y Distribucion (SD)** | Ofertas, pedidos, facturacion |
| **Planificacion de Produccion (PP)** | Planificacion y control de produccion |
| **Recursos Humanos (HR)** | Nomina, tiempo, planificacion de personal |
| **Gestion de Calidad (QM)** | Planes de inspeccion, aseguramiento de calidad |
| **Mantenimiento de Planta (PM)** | Mantenimiento, reparacion |

---

### Ventajas de los Sistemas ERP

| Ventaja | Descripcion |
|---------|-------------|
| **Integracion** | Todos los datos en un sistema |
| **Consistencia** | Datos uniformes y actuales |
| **Eficiencia** | Procesos automatizados |
| **Transparencia** | Vision general de la empresa en tiempo real |
| **Estandarizacion** | Procesos uniformes |
| **Cumplimiento** | Apoyo para requisitos legales |
| **Escalabilidad** | Crece con la empresa |

---

### Desventajas y Desafios

| Desventaja | Descripcion |
|------------|-------------|
| **Altos costos** | Licencia, implementacion, mantenimiento |
| **Complejidad** | Proyectos de implementacion largos |
| **Personalizacion** | A menudo se requiere customizing |
| **Esfuerzo de formacion** | Los empleados necesitan capacitacion |
| **Dependencia** | Bloqueo de proveedor |

---

### Proveedores de ERP

| Proveedor | Sistema | Grupo Objetivo |
|-----------|---------|----------------|
| **SAP** | SAP S/4HANA | Grandes empresas |
| **Microsoft** | Dynamics 365 | Mediana empresa, grandes empresas |
| **Oracle** | Oracle ERP Cloud | Grandes empresas |
| **Sage** | Sage 100/X3 | PYME |
| **Haufe** | Lexware | Pequenas empresas |
| **proALPHA** | proALPHA | Mediana empresa (manufactura) |

---

### Implementacion de ERP

```
┌────────────────────────────────────────────────────────────────┐
│                FASES DE IMPLEMENTACION ERP                     │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  1. Analisis       2. Seleccion     3. Concepcion             │
│  ┌──────────┐     ┌──────────┐     ┌──────────┐              │
│  │Procesos  │     │Comparar  │     │Procesos  │              │
│  │actuales  │ ─► │proveedores│ ─► │objetivo  │              │
│  └──────────┘     └──────────┘     └──────────┘              │
│                                           │                    │
│  6. Go-Live        5. Pruebas      4. Implementacion          │
│  ┌──────────┐     ┌──────────┐     ┌──────────┐              │
│  │Operacion │     │Pruebas de│     │Customizing│             │
│  │productiva│ ◄─ │integracion│ ◄─ │Migracion │              │
│  └──────────┘     └──────────┘     └──────────┘              │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Cloud ERP vs. On-Premise

| Aspecto | Cloud ERP | On-Premise |
|---------|-----------|------------|
| **Operacion** | En el proveedor | Centro de datos propio |
| **Costos** | Cuotas mensuales | Alta inversion inicial |
| **Mantenimiento** | Por el proveedor | TI propia |
| **Flexibilidad** | Escalable | Limitada |
| **Control de datos** | Con el proveedor | Control propio |
| **Actualizaciones** | Automaticas | Auto-administradas |

---

## Terminos Clave

| Termino | Explicacion |
|---------|-------------|
| **ERP** | Enterprise Resource Planning |
| **Modulo** | Area funcional en ERP (FI, HR, etc.) |
| **Integracion** | Vinculacion de todas las areas de negocio |
| **Customizing** | Adaptacion a necesidades de la empresa |
| **Go-Live** | Inicio de produccion del sistema |
| **Cloud ERP** | ERP como Software-as-a-Service |

---

## Consejos para el Examen

### Preguntas Comunes del Examen

- Que es ERP?
- Nombra modulos tipicos de ERP
- Cuales son las ventajas de un sistema ERP?
- Nombra proveedores de ERP

### Importante Recordar

- **ERP** = software integrado para todos los procesos de negocio
- **Base de datos central** = una verdad para todos
- **Modulos:** FI (Finanzas), HR (Recursos Humanos), MM (Materiales), SD (Ventas)
- **SAP** = lider del mercado para grandes empresas

---

## Ejercicios Practicos

### Ejercicio 1
Que es un sistema ERP y cual es la principal ventaja sobre las soluciones aisladas?

**Solucion:** Un **sistema ERP (Enterprise Resource Planning)** es una solucion de software integrada que reune todos los procesos de negocio de una empresa en un sistema.

**Principal ventaja sobre soluciones aisladas:** Todos los modulos trabajan con una **base de datos central**. Esto significa:
- Los datos solo necesitan ingresarse una vez
- Todos los departamentos tienen la misma informacion actual
- No se necesitan interfaces manuales entre sistemas

### Ejercicio 2
Nombra cuatro modulos tipicos de un sistema ERP.

**Solucion:**
1. **Contabilidad Financiera (FI):** Balance, PyG, gestion de cuentas
2. **Gestion de Materiales (MM):** Compras, gestion de almacen
3. **Ventas y Distribucion (SD):** Ofertas, pedidos, facturas
4. **Recursos Humanos (HR):** Nomina, control de tiempo

(Adicional: Controlling, Produccion, Gestion de Calidad)

### Ejercicio 3
Cual es la diferencia entre Cloud ERP y On-Premise ERP?

**Solucion:**
| Aspecto | Cloud ERP | On-Premise |
|---------|-----------|------------|
| **Ubicacion** | En el proveedor | En centro de datos propio |
| **Costos** | Cuotas mensuales | Alta inversion inicial |
| **Mantenimiento** | El proveedor lo maneja | Departamento TI propio |
| **Control de datos** | Datos con el proveedor | Datos en casa |

---

## Referencias Cruzadas

- [05-08-02 CRM and SCM](./05-08-02-crm-scm.md) - Sistemas complementarios
- [05-04-02 Cloud Computing](../05-04-virtualization-cloud/05-04-02-cloud-computing.md) - Cloud ERP
- [08-02-01 Costs and Cost Types](../../08-business-processes/08-02-economics/08-02-01-costs-cost-types.md) - Contabilidad de costos
