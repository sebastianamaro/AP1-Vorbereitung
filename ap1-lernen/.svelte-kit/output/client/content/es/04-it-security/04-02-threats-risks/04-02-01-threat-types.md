# Tipos de Amenazas

## Objetivos de Aprendizaje

Despues de este capitulo, deberas ser capaz de:
- Conocer varios tipos de amenazas para sistemas TI
- Distinguir entre ataques activos y pasivos
- Describir metodos de ataque tipicos
- Evaluar riesgos para empresas

---

## Contenido Principal

### Vision General: Categorias de Amenazas

```
+------------------------------------------------------------------+
|                       TIPOS DE AMENAZAS                           |
+------------------------------------------------------------------+
|                                                                   |
|  +------------------+  +------------------+  +------------------+ |
|  |    AMENAZAS      |  |     AMENAZAS     |  |   FUERZA         | |
|  |    TECNICAS      |  |     HUMANAS      |  |   MAYOR          | |
|  |                  |  |                  |  |                  | |
|  | * Malware        |  | * Negligencia    |  | * Desastres      | |
|  | * Hacking        |  | * Sabotaje       |  |   naturales      | |
|  | * Ataques DoS    |  | * Ingenieria     |  | * Incendio       | |
|  | * Exploits       |  |   Social         |  | * Corte energia  | |
|  +------------------+  +------------------+  +------------------+ |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Malware

#### Tipos de Malware

| Tipo de Malware | Descripcion | Propagacion |
|-----------------|-------------|-------------|
| **Virus** | Infecta archivos, requiere programa huesped | Al ejecutar archivos infectados |
| **Gusano** | Se propaga independientemente | Via redes, correo electronico |
| **Troyano** | Se disfraza de programa util | Descarga, adjuntos de correo |
| **Ransomware** | Cifra datos, exige rescate | Phishing, descargas drive-by |
| **Spyware** | Espia a los usuarios | Oculto en software |
| **Adware** | Muestra publicidad no deseada | Software gratuito |
| **Rootkit** | Se oculta profundamente en el sistema | Exploits, software infectado |
| **Keylogger** | Registra pulsaciones de teclas | Troyanos, acceso fisico |

#### Medidas de Proteccion Contra Malware

- **Software antivirus** con firmas actuales
- **Actualizaciones regulares** del sistema operativo
- **Precaucion** con adjuntos de correo y descargas
- **Backup** de datos importantes

---

### Ingenieria Social

#### Definicion

La **Ingenieria Social** se refiere a la manipulacion de personas para obtener informacion confidencial o inducirlas a realizar ciertas acciones.

#### Metodos de Ingenieria Social

| Metodo | Descripcion | Ejemplo |
|--------|-------------|---------|
| **Phishing** | Correos/sitios web falsos | Correo falso del banco |
| **Spear Phishing** | Phishing dirigido a individuos | Correo al CEO |
| **Vishing** | Fraude telefonico | Llamada del "soporte TI" |
| **Pretexting** | Pretextos fabricados | "Soy el nuevo colega" |
| **Baiting** | Atraer con ofertas atractivas | USB en el estacionamiento |
| **Tailgating** | Seguir a traves de puertas seguras | Seguir sin tarjeta |
| **Dumpster Diving** | Buscar en la basura | Papeles en la basura |

#### Caracteristicas de Reconocimiento del Phishing

- Urgencia ("Actua inmediatamente!")
- Amenazas ("La cuenta sera bloqueada")
- Gramatica/ortografia incorrecta
- Enlaces sospechosos (verificar URL!)
- Saludo impersonal

---

### Ataques de Red

#### Ataques Pasivos

| Ataque | Descripcion |
|--------|-------------|
| **Sniffing** | Lectura del trafico de red |
| **Analisis de Trafico** | Analisis de patrones de comunicacion |
| **Espionaje** | Escuchar comunicaciones |

#### Ataques Activos

| Ataque | Descripcion | Objetivo de Proteccion Afectado |
|--------|-------------|--------------------------------|
| **DoS/DDoS** | Sobrecargar servicios | Disponibilidad |
| **Man-in-the-Middle** | Interceptar y manipular | Confidencialidad, Integridad |
| **IP Spoofing** | Falsificar direcciones IP | Autenticidad |
| **DNS Spoofing** | Manipular resolucion DNS | Integridad |
| **ARP Spoofing** | Manipular tabla ARP | Confidencialidad |

#### DoS vs. DDoS

```
+-------------------------+     +-------------------------+
|   Ataque DoS            |     |   Ataque DDoS           |
+-------------------------+     +-------------------------+
|                         |     |                         |
|    [Atacante]           |     |  [Bot1] [Bot2] [Bot3]   |
|         |               |     |     |     |     |       |
|         |               |     |     v     v     v       |
|         v               |     |    +-------------+      |
|  +-------------+        |     |    |   Servidor  |      |
|  |   Servidor  |        |     |    |   Objetivo  |      |
|  |   Objetivo  |        |     |    +-------------+      |
|  +-------------+        |     |                         |
|                         |     |  Muchas fuentes         |
|  Un atacante            |     |  distribuidas           |
+-------------------------+     +-------------------------+
```

---

### Ataques de Contrasenas

| Ataque | Descripcion |
|--------|-------------|
| **Fuerza Bruta** | Probar sistematicamente todas las combinaciones |
| **Ataque de Diccionario** | Probar palabras del diccionario |
| **Tabla Arcoiris** | Valores hash precalculados |
| **Credential Stuffing** | Usar credenciales robadas |
| **Password Spraying** | Pocas contrasenas en muchas cuentas |

#### Proteccion Contra Ataques de Contrasenas

- **Contrasenas fuertes** (longitud > 12 caracteres, complejidad)
- **Autenticacion de Dos Factores** (2FA)
- **Bloqueo de cuenta** despues de intentos fallidos
- **Hashes con sal** en lugar de contrasenas en texto plano

---

### Amenazas Internas

| Amenaza | Descripcion |
|---------|-------------|
| **Negligencia** | Errores no intencionales (ej. compartir contrasenas) |
| **Sabotaje** | Danos intencionales por empleados |
| **Robo de Datos** | Llevarse datos al irse |
| **Abuso de Privilegios** | Acceder a datos innecesarios |

#### Medidas de Proteccion

- **Principio de necesidad de conocer** (solo derechos de acceso necesarios)
- **Principio de cuatro ojos** para acciones criticas
- **Registro** de todos los accesos
- **Procesos de baja** al irse

---

### Amenazas Fisicas

| Amenaza | Ejemplo | Medida de Proteccion |
|---------|---------|---------------------|
| **Robo** | Laptop robada | Cifrado, cerraduras |
| **Vandalismo** | Servidor danado | Control de acceso |
| **Incendio** | Sala de servidores arde | Proteccion contra incendios, backup |
| **Agua** | Danos por agua | Medidas de proteccion, backup |
| **Corte de Energia** | Suministro electrico defectuoso | SAI, generador |

---

## Terminos Clave

| Termino | Explicacion |
|---------|-------------|
| **Malware** | Software malicioso (virus, gusanos, troyanos) |
| **Phishing** | Intento de fraude via correo electronico/sitio web |
| **Ingenieria Social** | Manipulacion de personas |
| **DoS/DDoS** | Denegacion de Servicio (Distribuida) |
| **Fuerza Bruta** | Probar todas las posibilidades |
| **Man-in-the-Middle** | Interceptar comunicacion |
| **Amenaza Interna** | Peligro de los propios empleados |

---

## Consejos para el Examen

### Preguntas Frecuentes del Examen

- Cual es la diferencia entre un virus y un gusano?
- Que es el phishing y como se reconoce?
- Explica un ataque Man-in-the-Middle
- Que medidas de proteccion existen contra [amenaza]?

### Importante Recordar

- **Virus** necesita programa huesped, **gusano** se propaga independientemente
- **Ransomware** = cifrado + demanda de rescate
- **Phishing** = correos/sitios web falsos
- **DoS** = un atacante, **DDoS** = muchos (distribuido)

---

## Ejercicios Practicos

### Ejercicio 1
Cual es la diferencia entre un virus y un gusano?

**Solucion:**
- **Virus:** Requiere un programa huesped para propagarse. Infecta otros archivos y se activa cuando estos archivos se ejecutan.
- **Gusano:** Se propaga independientemente sobre redes sin un programa huesped. Usa vulnerabilidades de seguridad para propagacion automatica.

### Ejercicio 2
Que es el phishing y nombra dos caracteristicas de reconocimiento.

**Solucion:**
**Phishing** es una estafa en la que correos o sitios web falsos intentan obtener datos confidenciales (ej. contrasenas, datos de tarjetas de credito).

Caracteristicas de reconocimiento:
1. Urgencia/amenazas ("Actua inmediatamente!")
2. Direccion de remitente o enlaces sospechosos
(o: Errores de ortografia, saludo impersonal, solicitudes inusuales)

### Ejercicio 3
Explica el termino "ransomware".

**Solucion:**
**Ransomware** es software malicioso que cifra datos en la computadora y exige un rescate para el descifrado. Ejemplos conocidos son WannaCry y Locky.

### Ejercicio 4
Que es un ataque DDoS y que objetivo de proteccion se ve afectado?

**Solucion:**
Un **ataque DDoS** (Denegacion de Servicio Distribuida) es un ataque en el que un servidor objetivo se inunda con solicitudes de muchas fuentes diferentes (ej. botnet) para sobrecargarlo.

El objetivo de proteccion afectado es la **Disponibilidad**, ya que el servidor ya no es accesible.

---

## Referencias Cruzadas

- [04-01-01 Triada CIA](../04-01-protection-goals/04-01-01-cia-triad.md) - Objetivos de proteccion afectados
- [04-03-01 Medidas Tecnicas](../04-03-protective-measures/04-03-01-technical-measures.md) - Medidas de proteccion
- [04-03-02 Autenticacion-2FA](../04-03-protective-measures/04-03-02-authentication-2fa.md) - Proteccion contra ataques de contrasenas
- [09-02-01 Analisis de Errores](../../09-support-communication/09-02-error-management/09-02-01-error-analysis.md) - Respuesta a Incidentes
