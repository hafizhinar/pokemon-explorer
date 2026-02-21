# 🎮 Pokemon Explorer

A modern, production-ready Pokemon application built with **Next.js 14**, **TypeScript**, and **Clean Architecture** principles. This project demonstrates enterprise-level software engineering practices including SOLID principles, Design Patterns, and comprehensive separation of concerns.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🎨 **Modern UI/UX** - Beautiful design with Tailwind CSS + shadcn/ui
- 🏗️ **Clean Architecture** - Clear separation of concerns (Domain, Use Cases, Infrastructure, Presentation)
- 💎 **SOLID Principles** - All five SOLID principles implemented
- 🎯 **Design Patterns** - Repository, Use Case, Factory, Adapter, Dependency Injection, MVVM
- 🔥 **TypeScript** - Fully typed for better DX and fewer bugs
- ⚡ **Performance** - Optimized with Next.js App Router and Image Optimization
- 📱 **Responsive** - Mobile-first design that works on all devices
- 🧪 **Testable** - Architecture designed for easy unit and integration testing

## 🚀 Live Demo

[Coming Soon]

## 📸 Screenshots

[Coming Soon]

## 🏛️ Architecture

This project follows **Clean Architecture** principles with clear layer separation:

```
┌─────────────────────────────────────────┐
│   PRESENTATION LAYER (UI)               │
│   Components, Pages, Hooks, ViewModels  │
├─────────────────────────────────────────┤
│   USE CASES (Business Logic)            │
│   GetPokemonList, GetPokemonDetail      │
├─────────────────────────────────────────┤
│   DOMAIN (Entities + Interfaces)        │
│   Pokemon, PokemonDetail, IRepository   │
├─────────────────────────────────────────┤
│   INFRASTRUCTURE (Data Access)          │
│   API, Database, Cache, HTTP Client     │
└─────────────────────────────────────────┘
```

### 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   └── pokemon/[id]/page.tsx
├── core/                         # 🎯 Domain Layer
│   ├── entities/                 # Business Objects
│   │   ├── Pokemon.ts
│   │   └── PokemonDetail.ts
│   ├── interfaces/               # Contracts
│   │   ├── IPokemonRepository.ts
│   │   └── IPokemonUseCase.ts
│   └── usecases/                 # Business Rules
│       ├── GetPokemonList.ts
│       └── GetPokemonDetail.ts
├── infrastructure/               # 🌐 Data Layer
│   ├── repositories/
│   │   └── PokemonRepository.ts
│   └── http/
│       └── HttpClient.ts
├── presentation/                 # 🎨 UI Layer
│   ├── components/
│   │   ├── PokemonCard.tsx
│   │   ├── PokemonDetailView.tsx
│   │   └── ui/                   # shadcn components
│   ├── hooks/
│   │   ├── usePokemonList.ts
│   │   └── usePokemonDetail.ts
│   └── viewmodels/
│       ├── PokemonListViewModel.ts
│       └── PokemonDetailViewModel.ts
└── shared/                       # 🔧 Utilities
    ├── di/
    │   └── container.ts          # Dependency Injection
    └── utils/
        └── pokemonHelpers.ts
```

## 🎓 Learning Objectives

This project is built as a learning resource to demonstrate:

- ✅ **Clean Architecture** implementation in React/Next.js
- ✅ **SOLID Principles** (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion)
- ✅ **Design Patterns** (Repository, Use Case, Factory, Adapter, Singleton, MVVM)
- ✅ **OOP Principles** (Encapsulation, Inheritance, Polymorphism)
- ✅ **DRY & KISS** principles
- ✅ **Dependency Injection** for loose coupling
- ✅ **TypeScript** advanced features
- ✅ **Modern React** patterns (Custom Hooks, Composition)

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **API:** [PokeAPI](https://pokeapi.co/)
- **Code Quality:** ESLint
- **Package Manager:** npm

## 📦 Installation

See [SETUP.md](./SETUP.md) for detailed installation instructions.

Quick Start:

```bash
# Clone repository
git clone https://github.com/username/pokemon-explorer.git
cd pokemon-explorer

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📊 Project Status

### 🟢 Completed Features

- [x] Project setup with Next.js + TypeScript
- [x] Clean Architecture structure
- [x] Domain Layer (Entities + Interfaces)
- [x] Use Cases implementation
- [x] Infrastructure Layer (Repository + HTTP Client)
- [x] Dependency Injection Container
- [x] ViewModels (MVVM Pattern)
- [x] Custom React Hooks
- [x] UI Components (Card, Detail View, Pagination)
- [x] Pokemon List Page with Pagination
- [x] Pokemon Detail Page

### 🟡 In Progress

- [ ] Loading & Error States
- [ ] Search Functionality
- [ ] Filter by Type
- [ ] Favorite System (Local Storage)
- [ ] Animations & Transitions

### 🔴 Planned Features

- [ ] Unit Tests (Jest + React Testing Library)
- [ ] E2E Tests (Playwright)
- [ ] Performance Optimization
- [ ] SEO Optimization
- [ ] PWA Support
- [ ] Dark Mode
- [ ] Internationalization (i18n)
- [ ] Deploy to Vercel

## 📝 Documentation

- [SETUP.md](./SETUP.md) - Installation and setup guide
- [PROGRESS.md](./PROGRESS.md) - Learning progress tracker
- [GIT_GUIDE.md](./GIT_GUIDE.md) - Git workflow and commit conventions
- [ARCHITECTURE.md](./docs/ARCHITECTURE.md) - Detailed architecture explanation (Coming Soon)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m '✨ feat: Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

See [GIT_GUIDE.md](./GIT_GUIDE.md) for detailed Git workflow and commit conventions.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Hafizhin**
- Backend Engineer specializing in Go & Payment Systems
- Learning: Rust, System Architecture, Design Patterns
- GitHub: [@hafizhin](https://github.com/hafizhin)

## 🙏 Acknowledgments

- [PokeAPI](https://pokeapi.co/) for the amazing Pokemon data
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- Clean Architecture concepts by Robert C. Martin (Uncle Bob)
- SOLID Principles by Robert C. Martin

## 📚 Resources

- [Clean Architecture Book](https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164)
- [Design Patterns: Elements of Reusable Object-Oriented Software](https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

Made with ❤️ and ☕ by Hafizhin