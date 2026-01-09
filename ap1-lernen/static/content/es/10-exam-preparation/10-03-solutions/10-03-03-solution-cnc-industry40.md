# Solucion: Simulacion de Examen 3 - Fabricacion CNC "PrecisionTech GmbH"

---

## Tarea 1: Industria 4.0 e IA (20 Puntos)

### Tarea 1.1 (6 Puntos)

**a) Industria 4.0 y tres caracteristicas (4 Puntos):**

**Definicion:** Industria 4.0 se refiere a la cuarta revolucion industrial, en la que las instalaciones de produccion, productos y personas estan conectados a traves del Internet de las Cosas (IoT) y los datos se intercambian en tiempo real.

**Tres caracteristicas distintivas:**
1. **Interconexion** - Maquinas, sistemas y personas estan interconectados
2. **Datos en tiempo real** - Sensores capturan datos continuamente para analisis
3. **Automatizacion** - Sistemas inteligentes toman decisiones autonomamente

**b) Dos beneficios para PrecisionTech (2 Puntos):**
1. **Mayor productividad** a traves de procesos automatizados y menos tiempos de inactividad
2. **Mejor calidad** a traves de monitoreo integral y deteccion temprana de errores

### Tarea 1.2 (8 Puntos)

**a) IA en aplicacion industrial (2 Puntos):**
La inteligencia artificial en un contexto industrial se refiere a sistemas que pueden aprender de datos y reconocer patrones para tomar decisiones o predicciones independientes sin estar explicitamente programados.

**b) Dos areas adicionales de aplicacion de IA (2 Puntos):**
1. **Mantenimiento Predictivo** - Prediccion de fallas de maquinas basada en datos de sensores
2. **Planificacion de produccion** - Optimizacion de procesos de fabricacion y asignacion de recursos

**c) Categoria de riesgo segun la Ley de IA de la UE (4 Puntos):**
El sistema de control de calidad probablemente caeria en la categoria de **"Riesgo Limitado"** o **"Riesgo Minimo"**.

**Justificacion:**
- Es un sistema de asistencia industrial
- Sin impacto directo en personas (solo en piezas de trabajo)
- Sin decisiones automatizadas con consecuencias legales
- No es un area de alto riesgo como infraestructura critica o sistemas de seguridad

### Tarea 1.3 (6 Puntos)

**a) Dos beneficios de asistentes de codigo con IA (2 Puntos):**
1. **Ahorro de tiempo** - Generacion mas rapida de codigo repetitivo y funciones estandar
2. **Evitar errores** - Soporte con sintaxis y mejores practicas

**b) Dos riesgos/desventajas (2 Puntos):**
1. **Riesgos de seguridad** - El codigo generado puede contener vulnerabilidades de seguridad
2. **Problemas de derechos de autor** - Licenciamiento poco claro del codigo generado

**c) Por que la revision humana es importante (2 Puntos):**
- La IA puede generar soluciones incorrectas o ineficientes
- La comprension contextual del asistente de IA es limitada
- Las verificaciones de seguridad y calidad deben ser realizadas por expertos
- La responsabilidad del codigo recae en el desarrollador

---

## Tarea 2: Red y Seguridad Informatica (26 Puntos)

### Tarea 2.1 (8 Puntos)

**a) Dos razones para la separacion TI/OT (4 Puntos):**
1. **Seguridad** - Un ataque a la red de oficina no puede propagarse directamente a los sistemas de produccion
2. **Estabilidad** - Los sistemas OT tienen requisitos diferentes (capacidad en tiempo real, disponibilidad) que podrian verse afectados por el trafico de TI

**b) Dos enfoques de solucion para intercambio controlado de datos (4 Puntos):**
1. **DMZ (Zona Desmilitarizada)** - Zona intermedia con servidores para intercambio de datos
2. **Firewall Industrial** - Firewall especial que solo permite protocolos y conexiones definidos

### Tarea 2.2 (10 Puntos)

**a) Direcciones de host en 10.10.0.0/16 (2 Puntos):**
```
/16 = 16 bits para red, 16 bits para host
Bits de host: 16 -> 2^16 = 65,536 direcciones
Utilizables: 65,536 - 2 (red + broadcast) = 65,534 direcciones de host
```

**b) Mascara de subred para 15 maquinas CNC (3 Puntos):**
```
15 maquinas + 1 gateway + reserva = aprox. 20-30 direcciones necesarias
Siguiente potencia de dos: 32 (= 2^5)
-> 5 bits de host -> /27 (32 - 5 = 27)

Respuesta: /27 (255.255.255.224)
```
Con /27, estan disponibles 30 direcciones de host utilizables.

**c) Valores de red para 10.10.5.100/27 (5 Puntos):**

```
/27 = Tamaño de subred 32 direcciones
10.10.5.100 -> 100 / 32 = 3.125 -> Subred comienza en 3 x 32 = 96

Direccion de red: 10.10.5.96
Broadcast: 10.10.5.96 + 31 = 10.10.5.127
Mascara de subred: 255.255.255.224
```

| Valor | Respuesta |
|-------|-----------|
| Direccion de red | **10.10.5.96** |
| Direccion de broadcast | **10.10.5.127** |
| Mascara de subred decimal | **255.255.255.224** |

### Tarea 2.3 (8 Puntos)

**a) Cuatro amenazas para instalaciones industriales (4 Puntos):**
1. **Ransomware** - Encriptacion de datos de produccion
2. **Sabotaje** - Manipulacion de controles de maquinas
3. **Espionaje** - Extraccion de secretos de fabricacion
4. **Ataques DDoS** - Sobrecarga de conexiones de red

**b) Cuatro medidas de proteccion tecnicas (4 Puntos):**
1. **Segmentacion de red** - Separacion de TI y OT
2. **Firewall Industrial** - Control del trafico de datos
3. **Sistema de Deteccion de Intrusos (IDS)** - Deteccion de ataques
4. **Gestion de parches** - Actualizaciones regulares del sistema

---

## Tarea 3: Hardware y Tecnologia de Sistemas (18 Puntos)

### Tarea 3.1 (6 Puntos)

**a) Diferencia tecnica HDD/SSD (2 Puntos):**

| HDD | SSD |
|-----|-----|
| Almacenamiento mecanico en platos giratorios | Almacenamiento electronico en celdas de memoria flash |
| El cabezal de lectura/escritura se mueve fisicamente | Sin partes moviles |

**b) Dos ventajas de cada uno (4 Puntos):**

| Ventajas de HDD | Ventajas de SSD |
|-----------------|-----------------|
| Mas barato por GB de almacenamiento | Velocidad de lectura/escritura significativamente mas rapida |
| Altas capacidades disponibles | Tiempos de acceso mas cortos (sin operacion de busqueda) |

### Tarea 3.2 (6 Puntos)

**a) Proposito de un SAI (3 Puntos):**
Un SAI puentea cortes de energia y protege contra fluctuaciones de voltaje.

**Dos situaciones importantes:**
1. **Corte de energia** - Los servidores pueden apagarse de manera controlada o continuar funcionando
2. **Picos de voltaje** - Proteccion de electronica sensible contra sobretension

**b) Calculo del tiempo de puenteo (3 Puntos):**
```
Capacidad de bateria: 1000 Wh
Consumo del servidor: 800 W

Tiempo = Capacidad / Consumo
Tiempo = 1000 Wh / 800 W
Tiempo = 1.25 horas = 75 minutos
```

**Respuesta: El servidor puede teoricamente mantenerse durante 75 minutos (1 hora 15 minutos).**

### Tarea 3.3 (6 Puntos)

**a) Dos protocolos de comunicacion industrial (2 Puntos):**
1. **PROFINET** - Protocolo Ethernet industrial de Siemens
2. **Modbus TCP** - Protocolo industrial simple y ampliamente utilizado

*Otros: EtherNet/IP, EtherCAT, PROFIBUS*

**b) Explicacion y Beneficios de OPC UA (4 Puntos):**

**OPC UA (Open Platform Communications Unified Architecture):**
Un estandar de comunicacion independiente de plataforma para el intercambio seguro y confiable de datos en la industria.

**Beneficios para Industria 4.0:**
1. **Independencia de plataforma** - Funciona entre diferentes fabricantes y sistemas
2. **Seguridad integrada** - Encriptacion y autenticacion incorporadas
3. **Descripcion semantica** - Los datos se proporcionan con significado (no solo valores)

---

## Tarea 4: Software y Programacion (18 Puntos)

### Tarea 4.1 (6 Puntos)

**a) Diferencia JSON/XML con ventajas (4 Puntos):**

| JSON | XML |
|------|-----|
| Notacion de Objetos JavaScript | Lenguaje de Marcado Extensible |
| Sintaxis mas compacta | Sintaxis mas verbosa |
| **Ventaja:** Ligero, menos sobrecarga | **Ventaja:** Validacion de esquema posible (XSD) |

**b) Conversion de XML a JSON (2 Puntos):**

```json
{
  "machine": {
    "id": "CNC-001",
    "status": "active",
    "temperature": 45.2,
    "pieceCount": 1523
  }
}
```

### Tarea 4.2 (6 Puntos)

**a) Elementos del Diagrama de Casos de Uso (3 Puntos):**
1. **Actor** - Persona externa o sistema (figura de palitos)
2. **Caso de Uso** - Caso de aplicacion (elipse)
3. **Limite del sistema** - Rectangulo alrededor de los casos de uso

**b) Boceto del Diagrama de Casos de Uso (3 Puntos):**

```
        +----------------------------------------+
        |           Sistema ERP                  |
        |                                        |
        |    +-------------------------+         |
        |    |   Mostrar pedido        |         |
        |    +-----------+-------------+         |
        |                |                       |
        |    +-----------+-------------+         |
  O     |    | Reportar cantidad de    |         |
 /|\----+----|       piezas            |         |
 / \    |    +-----------+-------------+         |
        |                |                       |
Empleado|    +-----------+--------------+        |
de      |    |  Documentar averia       |        |
Produccion   +--------------------------+        |
        |                                        |
        +----------------------------------------+
```

### Tarea 4.3 (6 Puntos)

**Pruebas de Escritorio:**

**a) `verificarPieza(100.2, 25.0, 100, 25, 0.5)` (2 Puntos):**

```
longitud = 100.2, diametro = 25.0
longitudObjetivo = 100, diametroObjetivo = 25, tolerancia = 0.5

longitudOK = (100.2 >= 99.5) Y (100.2 <= 100.5) = VERDADERO Y VERDADERO = VERDADERO
diametroOK = (25.0 >= 24.5) Y (25.0 <= 25.5) = VERDADERO Y VERDADERO = VERDADERO

SI VERDADERO Y VERDADERO -> Resultado: "OK"
```

**b) `verificarPieza(101.0, 25.3, 100, 25, 0.5)` (2 Puntos):**

```
longitud = 101.0, diametro = 25.3

longitudOK = (101.0 >= 99.5) Y (101.0 <= 100.5) = VERDADERO Y FALSO = FALSO
diametroOK = (25.3 >= 24.5) Y (25.3 <= 25.5) = VERDADERO Y VERDADERO = VERDADERO

SI FALSO Y VERDADERO -> FALSO
SINO SI FALSO O VERDADERO -> VERDADERO -> Resultado: "NOK-P"
```

**c) `verificarPieza(99.3, 24.2, 100, 25, 0.5)` (2 Puntos):**

```
longitud = 99.3, diametro = 24.2

longitudOK = (99.3 >= 99.5) Y (99.3 <= 100.5) = FALSO Y VERDADERO = FALSO
diametroOK = (24.2 >= 24.5) Y (24.2 <= 25.5) = FALSO Y VERDADERO = FALSO

SI FALSO Y FALSO -> FALSO
SINO SI FALSO O FALSO -> FALSO
SINO -> Resultado: "NOK"
```

---

## Tarea 5: Economia y Gestion de Proyectos (18 Puntos)

### Tarea 5.1 (10 Puntos)

**a) Costos totales en 5 años (2 Puntos):**
```
Adquisicion:              120,000 EUR
Costos de licencia:  5 x 15,000 EUR =  75,000 EUR
Costos de mantenimiento: 5 x  8,000 EUR =  40,000 EUR
-----------------------------------------
Costos totales:                  235,000 EUR
```

**b) Ahorros totales en 5 años (1 Punto):**
```
Ahorros: 5 x 45,000 EUR = 225,000 EUR
```

**c) Calculo del ROI (3 Puntos):**
```
Beneficio = Ahorros - Costos
Beneficio = 225,000 EUR - 235,000 EUR = -10,000 EUR

ROI = (Beneficio / Inversion) x 100%
ROI = (-10,000 EUR / 235,000 EUR) x 100%
ROI = -4.26%
```

**Nota:** El ROI es ligeramente negativo. En la practica, se considerarian beneficios adicionales (mejoras cualitativas, competitividad).

**d) Amortizacion (4 Puntos):**
```
Retorno neto anual = Ahorros - costos operativos
Retorno neto anual = 45,000 EUR - 15,000 EUR - 8,000 EUR = 22,000 EUR

Tiempo de amortizacion = Adquisicion / Retorno neto anual
Tiempo de amortizacion = 120,000 EUR / 22,000 EUR = 5.45 años

Respuesta: La amortizacion se alcanza despues de aproximadamente 5.5 años.
```

### Tarea 5.2 (8 Puntos)

**a) ¿Incidente o Problema? (2 Puntos):**
Esto es un **Incidente** (interrupcion), ya que una funcionalidad existente (transmision de datos) no esta funcionando como se espera. Es una interrupcion no planificada del servicio de TI.

**b) Prioridad con justificacion (3 Puntos):**
**P3 (Media)**

- **Impacto:** Bajo/Medio (la produccion continua, solo la transmision de datos afectada)
- **Urgencia:** Baja/Media (no critico, ya que la produccion no se ve impactada)

La interrupcion solo afecta al monitoreo/documentacion, no al proceso de produccion en si.

**c) Tres pasos sistematicos para analisis de errores (3 Puntos):**

1. **Verificar conexion de red:**
   - ¿La maquina CNC es accesible en la red (ping)?
   - Verificar cable/puerto del switch

2. **Verificar lado de la maquina:**
   - ¿El servicio de transmision de datos esta funcionando en la maquina?
   - Verificar archivos de registro del controlador CNC

3. **Verificar lado del MES:**
   - ¿El MES esta recibiendo datos de otras maquinas?
   - Verificar configuracion del firewall
   - Verificar registros del MES en busca de mensajes de error

---

## Puntos Totales

| Tarea | Puntos |
|-------|--------|
| Tarea 1: Industria 4.0 e IA | 20 |
| Tarea 2: Red y Seguridad Informatica | 26 |
| Tarea 3: Hardware y Tecnologia de Sistemas | 18 |
| Tarea 4: Software y Programacion | 18 |
| Tarea 5: Economia y Gestion de Proyectos | 18 |
| **Total** | **100** |
