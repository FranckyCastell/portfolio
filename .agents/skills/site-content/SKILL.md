---
name: site-content
description: Reglas de contenido, voz y claims para francastell.com y aiops.francastell.com. Úsala antes de escribir o editar copy, proyectos, experiencia o metadatos.
---

# Contenido del sitio

## Superficies y idioma

| Superficie | Idioma | Audiencia | Objetivo |
| :--- | :--- | :--- | :--- |
| `francastell.com` | Inglés | Hiring managers, recruiters, equipos técnicos | Conseguir entrevistas |
| `aiops.francastell.com` | Español | CTOs, heads of platform, SRE leads | Abrir una conversación comercial |

No mezcles registros: el portfolio es una carta de presentación; la landing es una oferta de servicio.

## Reglas de claims

1. **Nada de métricas sin respaldo.** Si no hay una medición propia o una fuente pública, no se escribe. Ejemplo prohibido: "reduce el diagnóstico de 6 días a minutos".
2. **No nombrar clientes.** Ni UPC, ni Generalitat, ni CCMA, ni MSF, ni ningún otro. Se habla de sectores: administración pública, media, retail, seguros, investigación, ONG.
3. **Autoría honesta.** Lo construido por Francesc va en primera persona ("I designed", "I built"). El trabajo del equipo se describe como entorno ("the platform I work on", "work across a 100+ repository estate"). Nunca atribuirse herramientas de compañeros.
4. **Certificaciones.** Solo se afirman las que están `active` en `src/data/certifications.ts`. Las `in-progress` se describen como "currently studying".
5. **Sin superlativos.** Nada de "best", "world-class", "cutting-edge". Hechos concretos.
6. **Sin "LLMOps"** para describir operaciones. Es AIOps. LLMOps es el ciclo de vida de modelos y confunde al comprador técnico.

## Voz

- Primera persona, frases cortas, verbos activos.
- Concreto antes que adjetivo: "roles ReadOnly y allowlist" en vez de "seguridad de nivel empresarial".
- En la landing, hablar del problema del cliente antes que de la tecnología.
- En el portfolio, hablar de decisiones y resultados, no de herramientas sueltas.

## Metadatos

- Título ≤ 60 caracteres, con el rol delante.
- Descripción ≈ 155 caracteres, con el problema o la propuesta.
- La landing lleva `noindex, nofollow` hasta que la Fase 0 esté resuelta. No quitar sin decisión explícita.

## Changelog

Todo cambio de contenido relevante se anota en `CHANGELOG.md` con la fecha y el motivo.
