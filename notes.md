as tailwind v4 is launched, v3 install has become tricky.
so here is the guide to do it.

after creating project using vite, go to tailwind docs and then from the install guide, instead of this command:

```bash
npm install -D tailwindcss postcss autoprefixer
```

use this command:

```bash
npm install -D tailwindcss@3.4.17 postcss autoprefixer
```

then follow the usual steps from the install guide.
