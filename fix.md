# If you're facing an issue with Laravel on Sail

This happens on Linux sometimes, but may happen on macOS/WSL too.

1. SSH into the container with `sail shell` (or use the Docker container terminal directly from its dashboard)
2. Run `chown -R sail:sail storage`. If it didn't work, then try restarting the container.
3. Problem solved.

## Why does this happen?
This is because the user sail has the same UID of 1000 as your actual Linux user, which owns the directory storage in your host machine.
