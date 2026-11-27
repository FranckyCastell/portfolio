export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.hostname.endsWith(".workers.dev")) {
      return Response.redirect(
        `https://francastell.com${url.pathname}${url.search}`,
        301,
      );
    }

    // Landing de AIOps servida en su propio subdominio.
    if (url.hostname === "aiops.francastell.com") {
      if (url.pathname === "/") {
        return env.ASSETS.fetch(new URL("/aiops", url));
      }
      return env.ASSETS.fetch(request);
    }

    // Evita contenido duplicado: la landing vive solo en el subdominio.
    if (
      url.hostname === "francastell.com" &&
      (url.pathname === "/aiops" || url.pathname === "/aiops/")
    ) {
      return Response.redirect("https://aiops.francastell.com/", 301);
    }

    return env.ASSETS.fetch(request);
  },
};
