# ProptuSell – Sitio Web de Agencia Inmobiliaria Digital

Landing page estática construida con HTML5, CSS3 y JavaScript vanilla para una agencia inmobiliaria digital. El objetivo es demostrar una arquitectura front-end limpia, accesible y de alto rendimiento sin dependencias externas.

## Tecnologías

- HTML5 semántico (`<main>`, `<nav>`, `<section>`, `<footer>`)
- CSS3 con variables, Grid, Flexbox y animaciones de entrada
- JavaScript vanilla con `IntersectionObserver` y `requestAnimationFrame`
- Google Fonts (Inter) con `preconnect` para carga optimizada
- GitHub Actions para linting automático en cada push

## Características técnicas

- **Accesibilidad (a11y):** `aria-label`, `aria-expanded`, `aria-controls`, `role="menu"`, etiquetas `<label>` asociadas a cada campo, clase `.sr-only` para contenido solo para lectores de pantalla, control de teclado (`Escape` cierra el menú móvil) y `prefers-reduced-motion` para usuarios que requieren menos movimiento
- **SEO:** `<meta name="description">`, Open Graph (`og:title`, `og:description`, `og:type`) y Twitter Card
- **Rendimiento:** scroll throttling con `requestAnimationFrame` y `{ passive: true }`, `transition` restringida a propiedades específicas (sin `all`)
- **Formulario:** campos con `id`, `name` y `autocomplete`; `<label>` asociado a cada input; validación HTML5 nativa
- **CSS escalable:** todas las referencias de color y z-index centralizadas en variables CSS (`--primary-dark`, `--accent-dark`, `--success`, `--z-navbar`, `--z-float`), sin valores mágicos dispersos
- **Responsive:** diseño mobile-first con breakpoints en 640 px y 900 px
- **Botón de WhatsApp flotante** con SVG inline, accesible y con efecto hover

## Estructura

```
proyecto1-proptusell/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── .github/
│   └── workflows/
│       └── ci.yml
├── .eslintrc.json
├── .prettierrc
├── .gitignore
└── README.md
```

## Cómo ejecutar

Abre `index.html` directamente en el navegador. No requiere servidor ni dependencias.

## CI/CD

GitHub Actions ejecuta Super-Linter en cada push a `main` para validar HTML, CSS y JavaScript automáticamente.

## Próximos pasos

- Conectar el formulario a un servicio de email (Formspree, EmailJS o backend propio)
- Desplegar en GitHub Pages o Netlify con dominio personalizado
- Añadir auditoría de rendimiento y accesibilidad con Lighthouse CI
