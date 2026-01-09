# Simulacion de Examen 3: Fabricacion CNC "PrecisionTech GmbH"

## Instrucciones del Examen

- **Tiempo de Procesamiento:** 90 minutos
- **Recursos Permitidos:** Calculadora (no programable)
- **Puntos:** 100 puntos en total
- **Umbral de Aprobacion:** 50 puntos

---

## Situacion Inicial

**PrecisionTech GmbH** es una empresa de fabricacion CNC mediana con 75 empleados en la ubicacion de Stuttgart. La empresa produce componentes de precision para las industrias automotriz y aeroespacial.

Usted es un aprendiz de especialista en TI para integracion de sistemas en el departamento de TI de PrecisionTech GmbH. El departamento de TI consta de 5 empleados y es responsable tanto de la TI de oficina como de la interconexion de las instalaciones de produccion.

Como parte de una iniciativa de **Industria 4.0**, la produccion sera digitalizada aun mas. Se planea:
- Interconexion de todas las maquinas CNC
- Introduccion de un Sistema de Ejecucion de Manufactura (MES)
- Uso de IA para control de calidad
- Mantenimiento predictivo para las maquinas

Entorno de TI actual:
- 15 maquinas CNC (parcialmente interconectadas)
- Sistema ERP "ProAlpha"
- 40 estaciones de trabajo de oficina
- Centro de datos propio con 3 servidores
- Red de produccion separada (OT) y red de oficina (TI)

---

## Tarea 1: Industria 4.0 e IA (20 Puntos)

### Tarea 1.1 (6 Puntos)

La direccion quiere entender que significa **Industria 4.0** para la empresa.

a) Explique el termino **Industria 4.0** y nombre **tres** caracteristicas distintivas. (4 Puntos)

b) Nombre **dos** beneficios concretos que PrecisionTech GmbH puede esperar de la digitalizacion de la produccion. (2 Puntos)

### Tarea 1.2 (8 Puntos)

Para el control de calidad, se utilizara un **sistema de IA** que detecta automaticamente defectos en las piezas fabricadas.

a) Explique que se entiende por **inteligencia artificial (IA)** en el contexto de aplicaciones industriales. (2 Puntos)

b) Nombre **dos** areas de aplicacion de la IA en la fabricacion ademas del control de calidad. (2 Puntos)

c) La **Ley de IA de la UE** clasifica los sistemas de IA por categorias de riesgo. ¿En que categoria de riesgo probablemente caeria el sistema de control de calidad planificado? Justifique su respuesta. (4 Puntos)

### Tarea 1.3 (6 Puntos)

PrecisionTech GmbH planea introducir un **asistente de codigo impulsado por IA** para su departamento de desarrollo.

a) Nombre **dos** beneficios que puede ofrecer un asistente de codigo con IA. (2 Puntos)

b) Nombre **dos** riesgos o desventajas que deben considerarse al usar asistentes de codigo con IA. (2 Puntos)

c) ¿Por que el codigo generado siempre debe ser revisado por un humano? (2 Puntos)

---

## Tarea 2: Red y Seguridad Informatica (26 Puntos)

### Tarea 2.1 (8 Puntos)

Las maquinas CNC deben operarse a traves de un segmento de red separado (red OT) que esta separado de la red de oficina (red TI).

a) Explique por que la **separacion de redes TI y OT** es sensata. Nombre **dos** razones. (4 Puntos)

b) ¿Como se puede habilitar el intercambio controlado de datos entre las redes a pesar de la separacion? Nombre **dos** enfoques tecnicos. (4 Puntos)

### Tarea 2.2 (10 Puntos)

Para la nueva red de produccion, se asigna el rango **10.10.0.0/16**. Las maquinas CNC deben colocarse en su propia subred.

a) ¿Cuantas direcciones de host estan disponibles en el rango 10.10.0.0/16 en total? Muestre su trabajo. (2 Puntos)

b) Quiere crear una subred para las 15 maquinas CNC que desperdicie la menor cantidad posible de direcciones IP. ¿Que mascara de subred (notacion CIDR) usaria? Justifique su eleccion. (3 Puntos)

c) A una maquina CNC se le asigna la direccion IP 10.10.5.100/27. Determine: (5 Puntos)
   - Direccion de red: _______
   - Direccion de broadcast: _______
   - Mascara de subred en notacion decimal: _______

### Tarea 2.3 (8 Puntos)

Un atacante podria intentar penetrar la red de produccion a traves de la red de oficina.

a) Nombre **cuatro** posibles **amenazas** para instalaciones industriales interconectadas. (4 Puntos)

b) Describa **cuatro** medidas de proteccion tecnicas que recomendaria para asegurar la red de produccion. (4 Puntos)

---

## Tarea 3: Hardware y Tecnologia de Sistemas (18 Puntos)

### Tarea 3.1 (6 Puntos)

Se requiere un nuevo servidor para el nuevo sistema MES. La direccion de TI quiere decidir entre HDD y SSD para el almacenamiento.

a) Explique la diferencia tecnica entre **HDD** y **SSD**. (2 Puntos)

b) Nombre **dos** ventajas cada uno de HDD y SSD en el contexto de un servidor para un sistema MES. (4 Puntos)

### Tarea 3.2 (6 Puntos)

El servidor debe protegerse con un **SAI** (Sistema de Alimentacion Ininterrumpida).

a) Explique el proposito de un SAI y nombre **dos** situaciones en las que es importante. (3 Puntos)

b) El SAI tiene una capacidad de 1500 VA. El servidor requiere 800 W. ¿Cuanto tiempo puede teoricamente mantenerse el servidor si la capacidad de la bateria es de 1000 Wh? Muestre su trabajo. (3 Puntos)

### Tarea 3.3 (6 Puntos)

Las maquinas CNC se comunican a traves de varios protocolos industriales.

a) Nombre **dos** protocolos de comunicacion industrial comunes utilizados en produccion. (2 Puntos)

b) Explique que es **OPC UA** y que beneficios ofrece para aplicaciones de Industria 4.0. (4 Puntos)

---

## Tarea 4: Software y Programacion (18 Puntos)

### Tarea 4.1 (6 Puntos)

El sistema MES debe visualizar datos de produccion. Se requiere una interfaz que entregue datos en formato **JSON** o formato **XML**.

a) Explique la diferencia entre **JSON** y **XML**. Nombre **una** ventaja de cada uno. (4 Puntos)

b) Se da el siguiente extracto XML:

```xml
<machine id="CNC-001">
    <status>active</status>
    <temperature>45.2</temperature>
    <pieceCount>1523</pieceCount>
</machine>
```

Convierta este extracto a **formato JSON**. (2 Puntos)

### Tarea 4.2 (6 Puntos)

Se esta creando un **Diagrama de Casos de Uso UML** para el sistema ERP. Muestra la interaccion de un empleado con el sistema.

a) Explique que representa un **Diagrama de Casos de Uso** y que elementos contiene tipicamente. Nombre **tres** elementos. (3 Puntos)

b) Dibuje un Diagrama de Casos de Uso simple con el actor "Empleado de Produccion" y los casos de uso:
   - Mostrar pedido
   - Reportar cantidad de piezas
   - Documentar averia

   (3 Puntos)

### Tarea 4.3 (6 Puntos)

El aseguramiento de calidad utiliza la siguiente logica para evaluar una pieza de trabajo:

```
FUNCION verificarPieza(longitud, diametro, longitudObjetivo, diametroObjetivo, tolerancia)
    longitudOK = (longitud >= longitudObjetivo - tolerancia) Y (longitud <= longitudObjetivo + tolerancia)
    diametroOK = (diametro >= diametroObjetivo - tolerancia) Y (diametro <= diametroObjetivo + tolerancia)

    SI longitudOK Y diametroOK ENTONCES
        RETORNAR "OK"     // En Orden
    SINO SI longitudOK O diametroOK ENTONCES
        RETORNAR "NOK-P"  // No OK, parcial
    SINO
        RETORNAR "NOK"    // No OK
    FIN SI
FIN FUNCION
```

Realice una **prueba de escritorio** para las siguientes llamadas y proporcione el resultado:

a) `verificarPieza(100.2, 25.0, 100, 25, 0.5)` (2 Puntos)
b) `verificarPieza(101.0, 25.3, 100, 25, 0.5)` (2 Puntos)
c) `verificarPieza(99.3, 24.2, 100, 25, 0.5)` (2 Puntos)

---

## Tarea 5: Economia y Gestion de Proyectos (18 Puntos)

### Tarea 5.1 (10 Puntos)

La direccion quiere saber si la inversion en el nuevo sistema MES es economicamente viable.

Datos de inversion:
- Costo de adquisicion del sistema MES: 120,000 EUR
- Costos de licencia anuales: 15,000 EUR
- Costos de mantenimiento anuales: 8,000 EUR
- Ahorros anuales esperados: 45,000 EUR
- Periodo de observacion: 5 años

a) Calcule los **costos totales** durante el periodo de observacion. (2 Puntos)

b) Calcule los **ahorros totales** durante el periodo de observacion. (1 Punto)

c) Calcule el **ROI (Retorno sobre la Inversion)** para la inversion. Use la formula:
   ROI = (Beneficio / Inversion) x 100%
   (3 Puntos)

d) ¿Despues de cuantos años se alcanza la **amortizacion** (punto de equilibrio)? Muestre su trabajo. (4 Puntos)

### Tarea 5.2 (8 Puntos)

El equipo de TI recibe un reporte de falla:

"La maquina CNC No. 3 ya no esta enviando datos al sistema MES. Sin embargo, la produccion continua normalmente."

a) ¿Es esto un **Incidente** o un **Problema**? Justifique brevemente. (2 Puntos)

b) ¿Que **prioridad** (P1-P4) asignaria a este incidente? Justifique basandose en Impacto y Urgencia. (3 Puntos)

c) Describa **tres** pasos sistematicos para el analisis de errores que realizaria. (3 Puntos)

---

## Fin del Examen

**¡Revise sus respuestas!**

Nota: Las soluciones a esta simulacion se pueden encontrar en [10-03-03-solution-cnc-industry40.md](../10-03-solutions/10-03-03-solution-cnc-industry40.md)
