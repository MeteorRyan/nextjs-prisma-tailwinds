# Caveat Emptor

## Tooling

All of this was developed inside of WSL 2 on Windows

- [NVM](https://github.com/nvm-sh/nvm)
- [PNPM](https://pnpm.io)
    - You can use `npm` or `yarn` if you want
- Docker/Docker Compose
    - For the database and cache
    - If you host it elsewhere, you don't need this

## Development

### Starting Backing Services

```sh
docker-compose -f docker-compose.services.yaml up
```

### Restarting Backing Services

If you want to _totally_ remove all data stored in the backing services
and restart them to get a clean, fresh state

```sh
docker-compose -f docker-compose.services.yaml down
docker-compose -f docker-compose.services.yaml up

```

### Creating Database Tables

This requires that you have started your docker instances

```sh
# Set up environment variables
# URL structure: postgres://<username for db>:<password for db>@<host for db>:<port for db>:<database name>
export POSTGRES_PRISMA_URL="postgres://username:password@0.0.0.0:9999/caveat_emptor"
npx prisma db push
``` 

### Creating Data in Tables

You can use `prisma studio` to manually create records

```sh
npx prisma studio
```

## Starting App

```sh
# remember, if you want you can use npm or yarn
# instead of pnpm
pnpm run dev
```