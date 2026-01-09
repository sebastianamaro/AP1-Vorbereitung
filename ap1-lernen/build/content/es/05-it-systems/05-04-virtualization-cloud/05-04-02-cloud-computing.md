# Computación en la Nube

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Definir la computación en la nube
- Distinguir entre modelos de servicio (IaaS, PaaS, SaaS)
- Conocer los modelos de implementación
- Evaluar ventajas y desventajas

---

## Contenido Principal

### ¿Qué es la Computación en la Nube?

La **computación en la nube** se refiere a la provisión de recursos de TI (potencia de cómputo, almacenamiento, aplicaciones) a través de Internet, que se utilizan y pagan bajo demanda.

```
┌─────────────────────────────────────────────────────────────────┐
│                    COMPUTACIÓN EN LA NUBE                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Tradicional (On-Premise)       Computación en la Nube        │
│                                                                 │
│   ┌─────────────────────┐        ┌─────────────────────┐      │
│   │  Centro de          │        │      NUBE           │      │
│   │  Datos Propio       │        │                     │      │
│   │  ┌───┐ ┌───┐ ┌───┐ │        │   ┌───┐┌───┐┌───┐  │      │
│   │  │Srv│ │Srv│ │Srv│ │        │   │   ││   ││   │  │      │
│   │  └───┘ └───┘ └───┘ │        │   └───┘└───┘└───┘  │      │
│   └─────────────────────┘        └─────────────────────┘      │
│                                           ↕                    │
│   • Alta inversión              ┌──────────────────┐         │
│   • Autogestionado              │    Internet      │         │
│   • Costos fijos                └──────────────────┘         │
│                                           ↕                    │
│                                   ┌──────────────────┐        │
│                                   │    Empresa       │        │
│                                   └──────────────────┘        │
│                                                                │
│                                   • Sin inversión             │
│                                   • Proveedor gestiona        │
│                                   • Pago por uso             │
│                                                                │
└─────────────────────────────────────────────────────────────────┘
```

---

### Definición NIST: Características de la Computación en la Nube

| Característica | Descripción |
|----------------|-------------|
| **Autoservicio bajo demanda** | Reservar recursos por uno mismo según necesidad |
| **Amplio acceso por red** | Acceso vía Internet desde cualquier lugar |
| **Agrupación de recursos** | Los recursos se comparten entre clientes |
| **Elasticidad rápida** | Escalado rápido hacia arriba/abajo |
| **Servicio medido** | Pago por uso |

---

### Modelos de Servicio (as-a-Service)

```
┌────────────────────────────────────────────────────────────────┐
│                   MODELOS DE SERVICIO                          │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  On-Premise    IaaS         PaaS         SaaS                 │
│  (CD Propio)   Infraestruc. Plataforma   Software             │
│                                                                │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│  │Aplicación│ │Aplicación│ │Aplicación│ │██████████│ ←Nube  │
│  ├──────────┤ ├──────────┤ ├──────────┤ │██████████│        │
│  │Datos     │ │Datos     │ │██████████│ │██████████│        │
│  ├──────────┤ ├──────────┤ │██████████│ │██████████│        │
│  │Runtime   │ │Runtime   │ │██████████│ │██████████│        │
│  ├──────────┤ ├──────────┤ │██████████│ │██████████│        │
│  │Middleware│ │Middleware│ │██████████│ │██████████│        │
│  ├──────────┤ ├──────────┤ │██████████│ │██████████│        │
│  │SO        │ │██████████│ │██████████│ │██████████│        │
│  ├──────────┤ │██████████│ │██████████│ │██████████│        │
│  │Virtual.  │ │██████████│ │██████████│ │██████████│        │
│  ├──────────┤ │██████████│ │██████████│ │██████████│        │
│  │Servidor  │ │██████████│ │██████████│ │██████████│        │
│  ├──────────┤ │██████████│ │██████████│ │██████████│        │
│  │Almacenam.│ │██████████│ │██████████│ │██████████│        │
│  ├──────────┤ │██████████│ │██████████│ │██████████│        │
│  │Red       │ │██████████│ │██████████│ │██████████│        │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘        │
│                                                                │
│  ████ = Gestionado por proveedor de nube                       │
│  Vacío = Gestionado por cliente                                │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Modelo | Nombre Completo | Descripción | Ejemplos |
|--------|-----------------|-------------|----------|
| **IaaS** | Infrastructure as a Service | Hardware virtual (servidor, almacenamiento, red) | AWS EC2, Azure VMs, Google Compute |
| **PaaS** | Platform as a Service | Plataforma de desarrollo (SO, runtime, middleware) | Azure App Service, Heroku, Google App Engine |
| **SaaS** | Software as a Service | Aplicaciones listas para usar | Microsoft 365, Google Workspace, Salesforce |

---

### Modelos de Implementación

```
┌────────────────────────────────────────────────────────────────┐
│                 MODELOS DE IMPLEMENTACIÓN                      │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  NUBE PÚBLICA               NUBE PRIVADA                       │
│  ┌──────────────────┐     ┌──────────────────┐               │
│  │ Pública          │     │ Solo para una    │               │
│  │ para todos       │     │ organización     │               │
│  └──────────────────┘     └──────────────────┘               │
│                                                                │
│  NUBE HÍBRIDA               MULTI-NUBE                        │
│  ┌──────────────────┐     ┌──────────────────┐               │
│  │ Combinación de   │     │ AWS, Azure       │               │
│  │ Pública + Privada│     │ Google           │               │
│  │                  │     │ Múltiples proveed.│               │
│  └──────────────────┘     └──────────────────┘               │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Modelo | Descripción | Ventajas |
|--------|-------------|----------|
| **Nube Pública** | Pública, múltiples clientes | Económica, escalable |
| **Nube Privada** | Exclusiva para una organización | Control, seguridad |
| **Nube Híbrida** | Combinación Pública + Privada | Flexibilidad |
| **Multi-Nube** | Múltiples proveedores de nube | Sin dependencia de proveedor |

---

### Ventajas de la Computación en la Nube

| Ventaja | Descripción |
|---------|-------------|
| **Escalabilidad** | Escalar recursos según necesidad |
| **Eficiencia de costos** | Sin inversiones, pago por uso |
| **Disponibilidad** | Acceso mundial, alta disponibilidad |
| **Sin mantenimiento** | El proveedor gestiona el hardware |
| **Aprovisionamiento rápido** | Nuevos recursos en minutos |
| **Recuperación ante desastres** | Respaldos geo-redundantes |

---

### Desventajas y Riesgos

| Desventaja | Descripción |
|------------|-------------|
| **Dependencia** | Dependencia del proveedor, dependencia de Internet |
| **Protección de datos** | Datos con terceros (importa el cumplimiento) |
| **Control** | Menos control sobre infraestructura |
| **Costos** | Puede ser más costoso que on-premise con alto uso |
| **Latencia** | Mayor retraso que sistemas locales |
| **Seguridad** | Infraestructura compartida |

---

### Proveedores de Nube

| Proveedor | Servicio | Característica Especial |
|-----------|----------|-------------------------|
| **Amazon** | AWS (Amazon Web Services) | Líder del mercado |
| **Microsoft** | Azure | Integración con productos Microsoft |
| **Google** | Google Cloud Platform | Servicios AI/ML |
| **Deutsche Telekom** | Open Telekom Cloud | Proveedor alemán |
| **IONOS** | IONOS Cloud | Cumple RGPD |

---

### Nube y Protección de Datos

| Aspecto | Importante |
|---------|------------|
| **Ubicación del servidor** | Preferir servidores UE para cumplimiento RGPD |
| **Acuerdo de procesamiento de datos** | Concluir DPA (Data Processing Agreement) |
| **Cifrado** | Transferir y almacenar datos cifrados |
| **Certificaciones** | Verificar ISO 27001, atestación C5 |

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Computación en la Nube** | Recursos de TI por Internet |
| **IaaS** | Infrastructure as a Service |
| **PaaS** | Platform as a Service |
| **SaaS** | Software as a Service |
| **Nube Pública** | Nube pública para todos |
| **Nube Privada** | Nube exclusiva para una organización |
| **Nube Híbrida** | Combinación de pública y privada |
| **Pago por uso** | Pago por uso |
| **Escalabilidad** | Ajustar recursos según necesidad |

---

## Consejos para el Examen

### Preguntas Comunes de Examen

- ¿Qué es la computación en la nube?
- Explica IaaS, PaaS, SaaS
- ¿Cuál es la diferencia entre nube pública y privada?
- Nombra ventajas y desventajas de la computación en la nube

### Importante Recordar

- **IaaS** = hardware virtual (servidor, almacenamiento)
- **PaaS** = plataforma de desarrollo
- **SaaS** = software listo para usar (Microsoft 365)
- **Nube Híbrida** = combinación para flexibilidad
- **RGPD:** ¡Considerar ubicación del servidor y DPA!

---

## Ejercicios Prácticos

### Ejercicio 1
Explica la diferencia entre IaaS, PaaS y SaaS con un ejemplo cada uno.

**Solución:**
| Modelo | Descripción | Ejemplo |
|--------|-------------|---------|
| **IaaS** | Infraestructura virtual (servidores, almacenamiento) | AWS EC2 - servidores virtuales |
| **PaaS** | Plataforma para desarrollo | Heroku - alojamiento de aplicaciones |
| **SaaS** | Aplicación lista para usar | Microsoft 365 - programas Office |

### Ejercicio 2
Una empresa quiere almacenar datos sensibles de clientes en la nube pero también usar servicios de nube pública. ¿Qué modelo de implementación recomiendas?

**Solución:** **Nube Híbrida**

Justificación:
- Datos sensibles en la **Nube Privada** para control y cumplimiento
- Servicios no sensibles en la **Nube Pública** para eficiencia de costos
- Combinación de ambos mundos para flexibilidad

### Ejercicio 3
Nombra tres ventajas y dos desventajas de la computación en la nube.

**Solución:**

**Ventajas:**
1. Escalabilidad - recursos según necesidad
2. Eficiencia de costos - sin inversiones, pago por uso
3. Sin mantenimiento - el proveedor gestiona el hardware

**Desventajas:**
1. Dependencia - dependencia del proveedor, conexión a Internet requerida
2. Protección de datos - datos con terceros, cumplimiento RGPD requerido

---

## Referencias Cruzadas

- [05-04-01 Virtualización](./05-04-01-virtualization.md) - Base para la nube
- [05-04-03 Escritorios Virtuales](./05-04-03-virtual-desktops.md) - Desktop as a Service
- [03-01-01 Principios RGPD](../../03-data-protection/03-01-fundamentals/03-01-01-gdpr-principles.md) - Protección de datos en la nube
