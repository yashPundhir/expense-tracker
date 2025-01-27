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

- [Shadcn install guide](https://medium.com/@mohammadkaifm/how-to-set-up-vite-react-project-without-typescript-to-use-shadcn-ecc6c1dffce3)
- [Shadcn install another guide](https://kizito917.hashnode.dev/how-to-setup-shadcnui-in-a-react-application-without-typescript) => `better`
