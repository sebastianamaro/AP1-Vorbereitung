# Técnicas de firewall

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Distinguir los tipos de firewall
- Explicar el concepto de DMZ
- Ubicar los conjuntos de reglas básicos (whitelist/blacklist)

---

## Contenido Principal

Un **firewall** controla el tráfico de datos entre redes basándose en **reglas** y protege así la red interna.

### Tipos de firewall

| Tipo | Forma de trabajo | Capa |
|-----|--------------|---------|
| **Filtro de paquetes (stateless)** | comprueba paquetes individuales por IP/puerto/protocolo | 3/4 |
| **Stateful Inspection** | sigue los estados de conexión (sesiones) | 3/4 |
| **Application-Layer / Proxy** | comprueba el contenido a nivel de aplicación (p. ej. HTTP) | 7 |
| **Next-Generation Firewall (NGFW)** | combina stateful + application + IDS/IPS | 3–7 |

### DMZ (Zona desmilitarizada)

Una **DMZ** es una **zona de amortiguación** entre Internet y la red interna para servidores accesibles públicamente (web, correo). Si la DMZ se ve comprometida, la red interna permanece protegida.

```
Internet ──[ Firewall ]── DMZ (Webserver) ──[ Firewall ]── internes Netz
```

### Conjunto de reglas

- **Whitelist (default deny):** todo prohibido, solo se deja pasar lo permitido → **más seguro** (recomendado)
- **Blacklist (default allow):** todo permitido, solo se bloquea lo conocido

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Filtro de paquetes** | Comprobación de paquetes individuales basada en reglas |
| **Stateful Inspection** | Tener en cuenta los estados de conexión |
| **DMZ** | Zona de amortiguación para servidores públicos |
| **Default Deny** | Postura básica "prohibir todo, habilitar lo permitido" |

---

## Consejos para el Examen

- Distingue **filtro de paquetes (stateless) frente a stateful frente a firewall de aplicación**.
- Saber explicar la **DMZ** y la ganancia de seguridad que aporta.
- La **whitelist (default deny)** se considera más segura que la blacklist.

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** Explica los distintos tipos de firewall y diseña un diseño de red sencillo con una DMZ para un servidor web accesible públicamente.

---

## Referencias

- [04-05 Analizar vulnerabilidades](../04-it-security/04-05-schwachstellen-analysieren.md)
- [07-10 Protección de aplicaciones web](./07-10-webanwendungen-absichern.md)
