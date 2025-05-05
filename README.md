Project Manajemen Keuangan Pribadi

# Cara clone repository

    - git remote set-url origin https://github.com/denyfebriawan/manajemen-keuangan-pribadi.git
    - git pull origin main

# Install Tailwind

    - npm install tailwindcss @tailwindcss/cli
    - buat file input.css
        copy @import @import "tailwindcss";
    - npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
        Sesuaikan path folder input.css nya
        