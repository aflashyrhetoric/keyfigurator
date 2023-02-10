# Keyfigurator

This is the back-end for Archetype's Configurator.

## Installation

This back-end uses Laravel, via Sail.

1. Start Docker Desktop after installing it from the website.
2. Run `./vendor/bin/sail up` to spin up Laravel Sail. It does not use all of the associated images (such as Meilisearch), but they were left on and enabled for simplicity.

## Issues spinning up Laravel?

Check `fix.md`.

## Notes on use

To run `artisan` commands that interact with the database (such as `php artisan migrate`), you'll need to shell into the container.

1. `./vendor/bin/sail shell`
2. 