# 🛠️ Setup Guide - Pokemon Explorer

Complete installation and setup guide for the Pokemon Explorer project.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.17 or later ([Download](https://nodejs.org/))
- **npm** 9.0 or later (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))
- **Code Editor** (VS Code recommended)

### Verify Installation

```bash
node --version    # Should be v18.17.0 or higher
npm --version     # Should be 9.0.0 or higher
git --version     # Any recent version is fine
```

## 🚀 Installation Steps

### Option 1: Clone Existing Repository

```bash
# Clone the repository
git clone https://github.com/username/pokemon-explorer.git

# Navigate to project directory
cd pokemon-explorer

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Option 2: Start from Scratch

```bash
# Create Next.js project
npx create-next-app@latest pokemon-explorer

# Options to select:
# ✅ Would you like to use TypeScript? Yes
# ✅ Would you like to use ESLint? Yes
# ✅ Would you like to use Tailwind CSS? Yes
# ✅ Would you like to use `src/` directory? Yes
# ✅ Would you like to use App Router? Yes
# ❌ Would you like to customize the default import alias? No

# Navigate to project
cd pokemon-explorer

# Install additional dependencies
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react

# Setup shadcn/ui
npx shadcn-ui@latest init

# Select options:
# Style: Default
# Base color: Slate
# CSS variables: Yes

# Install shadcn components
npx shadcn-ui@latest add button card input badge skeleton tabs avatar

# Run development server
npm run dev
```

## 📁 Create Folder Structure

After installation, create the following folder structure:

```bash
# Create core folders
mkdir -p src/core/entities
mkdir -p src/core/interfaces
mkdir -p src/core/usecases

# Create infrastructure folders
mkdir -p src/infrastructure/repositories
mkdir -p src/infrastructure/http
mkdir -p src/infrastructure/cache

# Create presentation folders
mkdir -p src/presentation/components
mkdir -p src/presentation/hooks
mkdir -p src/presentation/viewmodels

# Create shared folders
mkdir -p src/shared/di
mkdir -p src/shared/utils
mkdir -p src/shared/constants
mkdir -p src/shared/types

# Create docs folder
mkdir -p docs
```

## 🔧 Configuration Files

### 1. TypeScript Configuration (tsconfig.json)

Ensure your `tsconfig.json` has these settings:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### 2. Tailwind Configuration (tailwind.config.ts)

```typescript
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
```

### 3. ESLint Configuration (.eslintrc.json)

```json
{
  "extends": "next/core-web-vitals"
}
```

### 4. Environment Variables (.env.local)

Create `.env.local` file:

```bash
# API Configuration
NEXT_PUBLIC_API_URL=https://pokeapi.co/api/v2

# Optional: Analytics
# NEXT_PUBLIC_GA_ID=your-ga-id

# Optional: Feature Flags
# NEXT_PUBLIC_ENABLE_SEARCH=true
# NEXT_PUBLIC_ENABLE_FAVORITES=true
```

**Important:** Add `.env.local` to `.gitignore`!

### 5. Git Ignore (.gitignore)

Ensure your `.gitignore` includes:

```
# Dependencies
/node_modules
/.pnp
.pnp.js

# Testing
/coverage

# Next.js
/.next/
/out/

# Production
/build
/dist

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env
.env*.local

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts

# IDE
.idea
.vscode
*.swp
*.swo
*~
```

## 📦 Project Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit",
    "format": "prettier --write \"src/**/*.{js,jsx,ts,tsx,json,css,md}\"",
    "clean": "rm -rf .next out node_modules"
  }
}
```

## 🏗️ Build for Production

```bash
# Create optimized production build
npm run build

# The build output will be in .next folder

# Run production server locally
npm start

# Production server will run on http://localhost:3000
```

## 🧪 Running Tests (Coming Soon)

```bash
# Install testing dependencies
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event

# Run unit tests
npm test

# Run tests in watch mode
npm test:watch

# Run E2E tests
npm test:e2e

# Generate coverage report
npm test:coverage
```

## 💻 IDE Setup (VS Code)

### Recommended Extensions

Install these VS Code extensions for better developer experience:

1. **ESLint** (dbaeumer.vscode-eslint)
2. **Prettier - Code formatter** (esbenp.prettier-vscode)
3. **Tailwind CSS IntelliSense** (bradlc.vscode-tailwindcss)
4. **TypeScript Vue Plugin (Volar)** (Vue.volar)
5. **Path Intellisense** (christian-kohler.path-intellisense)
6. **Auto Rename Tag** (formulahendry.auto-rename-tag)
7. **GitLens** (eamodio.gitlens)

### VS Code Settings

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ],
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "editor.quickSuggestions": {
    "strings": true
  }
}
```

### VS Code Extensions Config

Create `.vscode/extensions.json`:

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "Vue.volar",
    "christian-kohler.path-intellisense",
    "formulahendry.auto-rename-tag",
    "eamodio.gitlens"
  ]
}
```

## 🐛 Troubleshooting

### Issue: Port 3000 Already in Use

```bash
# Find process using port 3000
# macOS/Linux:
lsof -i :3000

# Windows:
netstat -ano | findstr :3000

# Kill the process or use different port
PORT=3001 npm run dev
```

### Issue: Module Not Found

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# If still not working, clear cache
npm cache clean --force
npm install
```

### Issue: TypeScript Errors

```bash
# Clear Next.js cache
rm -rf .next

# Restart TypeScript server in VS Code
# Cmd/Ctrl + Shift + P -> "TypeScript: Restart TS Server"

# Check TypeScript version
npx tsc --version

# Update TypeScript if needed
npm install -D typescript@latest
```

### Issue: Tailwind Styles Not Working

```bash
# Verify Tailwind is in package.json dependencies
npm list tailwindcss

# Check tailwind.config.ts paths
# Make sure src/** is included in content array

# Verify app/globals.css has @tailwind directives:
# @tailwind base;
# @tailwind components;
# @tailwind utilities;

# Clear .next folder and restart
rm -rf .next
npm run dev
```

### Issue: shadcn/ui Components Not Found

```bash
# Verify components.json exists
cat components.json

# Re-initialize shadcn/ui
npx shadcn-ui@latest init

# Re-add components
npx shadcn-ui@latest add button card
```

### Issue: Image Optimization Error

```bash
# Add to next.config.js
module.exports = {
  images: {
    domains: ['raw.githubusercontent.com'],
  },
}

# Or for Next.js 14+
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
}
```

## 📱 Mobile Development Setup

### Test on Physical Device

1. Find your local IP address:

```bash
# macOS/Linux
ifconfig | grep "inet " | grep -v 127.0.0.1

# Windows
ipconfig | findstr IPv4
```

2. Start dev server:

```bash
npm run dev
```

3. On your mobile device, open browser and navigate to:
```
http://YOUR_IP_ADDRESS:3000
```

Example: `http://192.168.1.100:3000`

### Cross-Browser Testing

Test your app on different browsers:
- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari (macOS/iOS)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
# Preview deployment
vercel

# Production deployment
vercel --prod
```

4. Or use Vercel GitHub integration (easier):
    - Push code to GitHub
    - Import repository on vercel.com
    - Vercel auto-deploys on every push

### Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy to Netlify
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=.next
```

### Deploy with Docker

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t pokemon-explorer .
docker run -p 3000:3000 pokemon-explorer
```

## 🔐 Security Best Practices

1. **Environment Variables**
    - Never commit `.env.local` to Git
    - Use different keys for development and production
    - Store secrets in Vercel/Netlify environment variables

2. **Dependencies**
   ```bash
   # Check for vulnerabilities
   npm audit
   
   # Fix vulnerabilities
   npm audit fix
   
   # Update dependencies
   npm update
   ```

3. **HTTPS**
    - Always use HTTPS in production
    - Vercel/Netlify provide SSL certificates automatically

4. **Content Security Policy**
    - Add CSP headers in `next.config.js` for production

## 🎯 Performance Optimization

### 1. Enable Next.js Optimizations

```javascript
// next.config.js
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}
```

### 2. Bundle Analysis

```bash
# Install bundle analyzer
npm install --save-dev @next/bundle-analyzer

# Add to next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // your config
})

# Analyze bundle
ANALYZE=true npm run build
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [PokeAPI Documentation](https://pokeapi.co/docs/v2)
- [React Documentation](https://react.dev/)

## 🤝 Getting Help

If you encounter issues:

1. Check [Troubleshooting](#-troubleshooting) section above
2. Search [GitHub Issues](https://github.com/username/pokemon-explorer/issues)
3. Create a new issue with:
    - Error message (full stack trace)
    - Steps to reproduce
    - Your environment:
        - OS (Windows/macOS/Linux)
        - Node.js version
        - npm version
        - Browser version

## ✅ Setup Checklist

Before you start coding, verify:

- [ ] Node.js 18+ installed (`node --version`)
- [ ] npm 9+ installed (`npm --version`)
- [ ] Git installed and configured
- [ ] Repository cloned or project created
- [ ] Dependencies installed (`npm install`)
- [ ] Dev server running (`npm run dev`)
- [ ] Browser shows Next.js welcome page at http://localhost:3000
- [ ] VS Code extensions installed
- [ ] `.gitignore` configured
- [ ] `.env.local` created (if needed)
- [ ] No errors in terminal or browser console

## 🎉 You're Ready!

If all checklist items are complete, you're ready to start building!

Proceed to:
- [README.md](./README.md) - Project overview
- [PROGRESS.md](./PROGRESS.md) - Track your learning
- [GIT_GUIDE.md](./GIT_GUIDE.md) - Git workflow guide

---

Happy coding! 🚀