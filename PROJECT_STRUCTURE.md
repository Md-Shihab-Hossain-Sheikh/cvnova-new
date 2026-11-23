
# CVNova Project Structure

```text
cvnova-new/
├── public/
│   ├── images/
│   └── icons/
│
├── tests/
│   ├── unit/
│   │   └── smoke.test.mjs
│   └── e2e/
│       └── home.spec.ts
│
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   └── marketing/
│   │
│   └── lib/
│       ├── utils.ts
│       └── constants.ts
│
├── .env.example
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── playwright.config.ts
├── postcss.config.mjs
├── README.md
├── PROJECT_PROGRESS.md
└── tsconfig.json
```

## Folder Responsibilities

### public/
Static files such as logos, icons and preview images.

### tests/
Unit and browser-based tests.

### src/app/
Next.js App Router pages, layouts and global styles.

### src/components/ui/
Reusable buttons, inputs, cards, badges and loading components.

### src/components/layout/
Navbar, footer and shared layout components.

### src/components/marketing/
Public homepage sections.

### src/lib/
Shared utilities and application constants.

## Future Directories

The following directories will be added in their relevant phases:

- src/features/
- src/services/
- src/types/
- src/hooks/
- src/templates/
- src/server/
- supabase/migrations/

Do not create unused placeholder source files.
