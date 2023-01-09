# Nextjs Docker Environment

Pythin script to create a nextjs docker environment

```bash
python setup.py
```

## Structure

```bash
.
├── .env
├── frontend
│   ├── Dockerfile.development
│   ├── Dockerfile.production
│   ├── next.config.js
│   ├── package.json
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   └── styles
│   ├── tsconfig.json
│   └── yarn.lock

```

Automatically installs npm install and then runs docker compose up

