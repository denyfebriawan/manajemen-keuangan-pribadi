Project Manajemen Keuangan Pribadi
https://github.com/denyfebriawan/manajemen-keuangan-pribadi.git

# Cara clone repository

    git remote set-url origin https://github.com/denyfebriawan/manajemen-keuangan-pribadi.git
    git pull origin main

# Install Tailwind

    npm install tailwindcss @tailwindcss/cli

        buat file src/input.css
            copy @import "tailwindcss";

    npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch

# install flowbite

    npm install flowbite

    paste di src/input.css
        @import "flowbite/src/themes/default";
        @plugin "flowbite/plugin";
        @source "../node_modules/flowbite";

    paste di html <head>
        <!-- Script flowbite -->
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>

# cara update - sebelum mulai ngoding

    - git fetch
    - git pull

# cara publish - setelah ngoding

    git add .
    git commit -m "[desc]"
    git push

# Color Custome

    @import "tailwindcss";
    @import "flowbite/src/themes/default";
    @plugin "flowbite/plugin";
    @source "../node_modules/flowbite/src/flowbite.css";

    @theme {
      --font-display: "Poppins", sans-serif;

      --color-primary-dark: #2f3c33;
      --color-primary-soft: #394c3e;
      --color-primary: #285539;
      --color-accent: #88cf0f;
      --color-base: #f2f2e8;
      --color-light: #fdfdfd;
      --color-dark: #181818;

      --color-netral: #6c757d;
      --color-netral-light: #9ca3af;

      --color-info: #6366f1;
      --color-danger: #ef4444;
      --color-danger-dark: #991b1b;
    }
