## "Website" de SorteosTec

Creado con SvelteKit y TailwindCSS.

SvelteKit tiene [routing](https://kit.svelte.dev/docs/routing) para el manejo de las paginas.
Esto esta dentro de `/src/routes`, donde `+layout.svelte` contiene el header y footer y `+page.svelte` el contenido de la pagina root. Para agregar otra página, haz un folder dentro de routes `/src/routes/[paginanueva]/` y dentro haz un `+page.svelte` con el contenido.

Los componentes como el header y footer están en `/src/components`.

Los estilos deben ser creados con TailwindCSS. Si necesitan hacer un estilo con CSS normal, va en `/src/app.css`.

Si quieren importar fonts o iconos (ej. FontAwesome), es en el `<head>` de `/src/app.html`.

Imagenes e iconos (locales) en `/src/assets/`.

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
