---
name: aiops-landing
description: Estructura, copy y animación de aiops.francastell.com. Úsala al editar la landing, el canvas o la oferta de servicio.
---

# Landing de AIOps

## Propósito

Es una página de servicio, no un CV. Su único trabajo es que un CTO o un head of platform diga "esto me sirve" y escriba a `hola@francastell.com`.

- Idioma: español.
- `noindex, nofollow` hasta que la Fase 0 esté resuelta. No quitar sin decisión explícita.
- Precio: **según alcance**. No fijar una cifra en la página.

## Estructura

1. **Hero** — titular, subtítulo y dos CTAs.
2. **Simulación** — canvas con el diagnóstico de un incidente.
3. **Casos de uso** — seis, para que la empresa se reconozca. No limitar a guardias.
4. **Memoria y aprendizaje** — semántica, episódica y bucle de mejora, con diagrama circular.
5. **Cómo funciona** — conectar, limitar, medir.
6. **CTA** — email y precio abierto.

## Copy

- Hablar del problema del cliente antes que de la tecnología.
- Casos válidos: incidentes, ruido de alertas, postmortems, onboarding, coste, auditoría.
- Sin nombres de clientes. Sin métricas sin respaldo.
- "Solo lectura", "tus fuentes", "coste acotado" son los tres compromisos.

## Animación del canvas

`src/pages/aiops.astro` contiene el script. Fases y tiempos:

| Estado | Tiempo | Qué pasa |
| :--- | :--- | :--- |
| 0 | 0 ms | 30 partículas de alerta, ruido |
| 1 | 900 ms | se dibujan los haces hacia las fuentes |
| 2 | 2300 ms | las partículas se absorben, los pulsos viajan |
| 3 | 3900 ms | onda expansiva, causa y resultado |

- Se dispara con `IntersectionObserver` al 35% de visibilidad, una sola vez.
- Botón **Repetir** reinicia.
- `prefers-reduced-motion`: salta al estado 3 y dibuja un frame estático.
- `visibilitychange`: pausa el `requestAnimationFrame`.
- Colores fijos en el canvas (`ACCENT #f0a32a`, `RED #e5484d`) para no depender de `oklch` en 2D.

## Verificación

```bash
npm run build
```

Para revisar la animación en tiempo real (no virtual time), usar Chrome DevTools Protocol:

```bash
google-chrome --headless=new --remote-debugging-port=9333 http://localhost:8899/aiops/
```

Capturar a los ~6 s y comprobar que las partículas han desaparecido y los haces llegan a las etiquetas.
