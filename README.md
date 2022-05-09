# Dockerized Rails + NextJs Application - Ricardo Ribeiro

## Installation

Build the images

```bash
docker-compose build

```

### Backend

Rename the `env.sample` file to `.env`

```bash
  cp backend/.env.sample backend/.env
```

Bundle the Backend

```bash
  docker-compose run --rm backend bundle exec rails new . --api --database=postgresql
```

### Frontend

Rename the `env.sample` file to `.env`

```bash
  cp backend/.env.sample backend/.env
```

Install dependencies

```bash
  docker-compose run --rm frontend yarn install
```
