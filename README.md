## "Website" de SorteosTec

Creado con SvelteKit y TailwindCSS.

SvelteKit tiene routing para el manejo de las paginas.
Esta dentro de `/src/routes`, donde `+layout` contiene el header y footer y `+page` el contenido principal.

Los componentes como el header y footer están en `/src/components`.

Los estilos deben ser creados con TailwindCSS. Si necesitan hacer un estilo con CSS normal, va en `/src/app.css`.

Si quieren importar fonts o iconos, van en el `<head>` de `/src/app.html`.

[Docs de SvelteKit](https://kit.svelte.dev/docs/project-structure)

[Docs de TailwindCSS](https://tailwindcss.com/docs/utility-first)

---

_Generado por el install de SvelteKit_

## Developing

Install dependencies with `npm install`, then start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
