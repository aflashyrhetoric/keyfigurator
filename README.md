# Keyfigurator

This is the back-end for Archetype's Configurator.

## Installation

This back-end uses Laravel, via Sail.

1. (Optionally, if you don't have Docker installed) Start Docker Desktop after installing it from the website.
2. Run `./vendor/bin/sail up` to spin up Laravel Sail. 
   - Keyfigurator does not use all of the associated images (such as Meilisearch), but they were left on and enabled for simplicity.
3. Ensure that you have an `.env` file with values. `cp .env.example .env` to get defaults.
4. `php artisan key:generate` to generate the Laravel app key.
5. `npm install` to install front-end dependencies.
6. `npm run dev` to spin up Vite server. You must spin this up once to create the Vite manifest.

## Issues spinning up Laravel?

Check `fix.md`.

## Notes on use

To run `artisan` commands that interact with the database (such as `php artisan migrate`), you'll need to shell into the container.

1. `./vendor/bin/sail shell`
2. `php artisan db:migrate`, etc