# 🌿 Git Workflow Guide

Complete guide for Git workflow, commit conventions, and best practices for the Pokemon Explorer project.

## 📋 Table of Contents

1. [Initial Setup](#-initial-setup)
2. [Daily Workflow](#-daily-workflow)
3. [Commit Conventions](#-commit-conventions-with-emojis)
4. [Branching Strategy](#-branching-strategy)
5. [Push & Pull](#-push--pull)
6. [Common Scenarios](#-common-scenarios)
7. [Troubleshooting](#-troubleshooting)
8. [Quick Reference](#-quick-reference)

---

## 🚀 Initial Setup

### Scenario 1: You Already Have a Project Folder

```bash
# 1. Navigate to your project
cd pokemon-explorer

# 2. Initialize git (if not already initialized)
git init

# 3. Create .gitignore file
cat > .gitignore << 'EOF'
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
EOF

# 4. Add all files to staging
git add .

# 5. Make initial commit
git commit -m "🎉 Initial commit: Pokemon Explorer with Clean Architecture"

# 6. Create main branch (if you're on master)
git branch -M main

# 7. Add remote repository (create repo on GitHub first!)
git remote add origin https://github.com/YOUR_USERNAME/pokemon-explorer.git

# 8. Push to GitHub
git push -u origin main
```

**Expected Output:**
```
🚀 Pushing to https://github.com/YOUR_USERNAME/pokemon-explorer.git
Enumerating objects: 45, done.
Counting objects: 100% (45/45), done.
Delta compression using up to 8 threads
Compressing objects: 100% (38/38), done.
Writing objects: 100% (45/45), 15.23 KiB | 5.08 MiB/s, done.
Total 45 (delta 3), reused 0 (delta 0), pack-reused 0
✅ Successfully pushed to main
```

---

### Scenario 2: Clone Empty Repository from GitHub

```bash
# 1. Create repository on GitHub first (via web interface)
# Don't initialize with README, .gitignore, or license

# 2. Clone the empty repository
git clone https://github.com/YOUR_USERNAME/pokemon-explorer.git
cd pokemon-explorer

# 3. Setup Next.js project
npx create-next-app@latest . --typescript --tailwind --app --src-dir

# 4. Install dependencies
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react

# 5. Setup shadcn/ui
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card input badge skeleton tabs avatar

# 6. Create .gitignore (same as Scenario 1)

# 7. Stage all files
git add .

# 8. Initial commit
git commit -m "🎉 Initial commit: Setup Next.js with TypeScript and Tailwind"

# 9. Push to GitHub
git push origin main
```

---

## 📅 Daily Workflow

### Morning: Start Your Day

```bash
# 1. Make sure you're on main branch
git checkout main

# 2. Pull latest changes from remote
git pull origin main
# Output: 🌅 Starting new day...
#         ✅ Already up to date.

# 3. Create a new feature branch
git checkout -b feature/pokemon-search
# Output: 🌿 Switched to a new branch 'feature/pokemon-search'

# 4. Start coding!
# (code, code, code...)
```

---

### During the Day: Save Progress

```bash
# 1. Check what files changed
git status
# Output: 📊 On branch feature/pokemon-search
#         Changes not staged for commit:
#           modified:   src/presentation/components/SearchBar.tsx
#           modified:   src/presentation/hooks/useSearch.ts

# 2. See detailed changes
git diff
# Shows line-by-line changes

# 3. Add specific files
git add src/presentation/components/SearchBar.tsx
git add src/presentation/hooks/useSearch.ts

# Or add all changed files
git add .

# 4. Commit with descriptive message
git commit -m "✨ feat(search): Add Pokemon search with debounce"
# Output: ✅ [feature/pokemon-search abc1234] ✨ feat(search): Add Pokemon search
#          2 files changed, 85 insertions(+), 3 deletions(-)

# 5. Push to remote (creates backup + enables collaboration)
git push -u origin feature/pokemon-search
# Output: 🚀 Pushing to remote...
#         ✅ Successfully pushed feature/pokemon-search
```

---

### End of Day: Save Your Work

```bash
# If feature is not complete, save work-in-progress
git add .
git commit -m "🚧 WIP: Working on Pokemon search (end of day save)"
git push origin feature/pokemon-search
# Output: 💾 Work saved for today!
#         ✅ Push successful. Good night! 🌙
```

---

### Next Morning: Continue Work

```bash
# 1. Switch to your feature branch
git checkout feature/pokemon-search
# Output: ☀️ Good morning! Continuing work on feature/pokemon-search

# 2. Pull any changes (in case you worked from another computer)
git pull origin feature/pokemon-search
# Output: ✅ Already up to date.

# 3. Continue coding!
```

---

### Feature Complete: Merge to Main

```bash
# 1. Make sure all changes are committed
git status
# Should show: "nothing to commit, working tree clean"

# 2. Switch to main branch
git checkout main

# 3. Pull latest changes
git pull origin main

# 4. Merge your feature branch
git merge feature/pokemon-search
# Output: 🔀 Merging feature/pokemon-search into main
#         ✅ Merge successful!

# 5. Push to remote
git push origin main
# Output: 🚀 Pushing to main...
#         ✅ Successfully pushed!

# 6. Delete feature branch (optional, but recommended)
git branch -d feature/pokemon-search
# Output: 🗑️  Deleted branch feature/pokemon-search

# Also delete remote branch
git push origin --delete feature/pokemon-search
# Output: 🗑️  Deleted remote branch feature/pokemon-search
```

---

## 🏷️ Commit Conventions with Emojis

### Format

```
<emoji> <type>(<scope>): <subject>

Example:
✨ feat(search): Add Pokemon search functionality
```

### Commit Types & Emojis

| Emoji | Type | When to Use | Example |
|-------|------|-------------|---------|
| 🎉 | `init` | Initial commit | `🎉 Initial commit: Pokemon Explorer` |
| ✨ | `feat` | New feature | `✨ feat(ui): Add Pokemon card component` |
| 🐛 | `fix` | Bug fix | `🐛 fix(pagination): Fix page navigation bug` |
| 📝 | `docs` | Documentation | `📝 docs: Update README with setup instructions` |
| 💄 | `style` | UI/Styling changes | `💄 style(card): Improve hover effects` |
| ♻️ | `refactor` | Code refactoring | `♻️ refactor: Simplify Pokemon entity creation` |
| ✅ | `test` | Adding tests | `✅ test(entity): Add Pokemon entity tests` |
| 🔧 | `chore` | Maintenance | `🔧 chore: Update dependencies` |
| 🚀 | `perf` | Performance | `🚀 perf: Add caching to API calls` |
| 🔒 | `security` | Security fix | `🔒 security: Sanitize user input` |
| 🌐 | `i18n` | Internationalization | `🌐 i18n: Add Indonesian translations` |
| 📦 | `build` | Build system | `📦 build: Configure production build` |
| 🔀 | `merge` | Merge branches | `🔀 merge: Merge feature/search into main` |
| 🗑️ | `remove` | Remove code/files | `🗑️ remove: Delete unused components` |
| 🚧 | `wip` | Work in progress | `🚧 WIP: Implementing search feature` |
| 💚 | `ci` | CI/CD | `💚 ci: Add GitHub Actions workflow` |
| ⬆️ | `upgrade` | Upgrade dependency | `⬆️ upgrade: Update Next.js to 14.1.0` |
| ⬇️ | `downgrade` | Downgrade dependency | `⬇️ downgrade: Rollback React to 18.2.0` |
| 🎨 | `arch` | Architecture | `🎨 arch: Implement Clean Architecture` |

### Detailed Examples

#### ✨ New Features

```bash
git commit -m "✨ feat(domain): Add Pokemon and PokemonDetail entities"
git commit -m "✨ feat(usecase): Implement GetPokemonList use case"
git commit -m "✨ feat(ui): Add PokemonCard component with hover animation"
git commit -m "✨ feat(search): Implement Pokemon search with debounce"
git commit -m "✨ feat(filter): Add type filter dropdown"
git commit -m "✨ feat(favorites): Add favorite Pokemon system"
```

#### 🐛 Bug Fixes

```bash
git commit -m "🐛 fix(pagination): Fix pagination not working on first page"
git commit -m "🐛 fix(types): Correct TypeScript types in PokemonRepository"
git commit -m "🐛 fix(api): Handle API timeout errors gracefully"
git commit -m "🐛 fix(ui): Fix card image not loading on Safari"
git commit -m "🐛 fix(routing): Fix 404 on Pokemon detail page refresh"
```

#### 📝 Documentation

```bash
git commit -m "📝 docs: Add comprehensive README"
git commit -m "📝 docs: Update SETUP.md with macOS instructions"
git commit -m "📝 docs: Add inline comments to DI Container"
git commit -m "📝 docs: Create PROGRESS.md for learning tracking"
git commit -m "📝 docs: Update API documentation"
```

#### 💄 Styling & UI

```bash
git commit -m "💄 style(card): Improve Pokemon card hover effects"
git commit -m "💄 style: Format all files with Prettier"
git commit -m "💄 style(detail): Enhance Pokemon detail page layout"
git commit -m "💄 style(responsive): Improve mobile responsiveness"
```

#### ♻️ Refactoring

```bash
git commit -m "♻️ refactor(hooks): Extract pagination logic to custom hook"
git commit -m "♻️ refactor(repository): Simplify entity creation"
git commit -m "♻️ refactor(utils): Move type colors to shared constants"
git commit -m "♻️ refactor: Reorganize folder structure"
```

#### ✅ Tests

```bash
git commit -m "✅ test(entity): Add unit tests for Pokemon entity"
git commit -m "✅ test(usecase): Add tests for GetPokemonList use case"
git commit -m "✅ test(integration): Add API integration tests"
git commit -m "✅ test(e2e): Add end-to-end tests for search flow"
```

#### 🔧 Chores & Configuration

```bash
git commit -m "🔧 chore: Update TypeScript config for strict mode"
git commit -m "🔧 chore(deps): Update all dependencies to latest"
git commit -m "🔧 chore: Add ESLint rules for code quality"
git commit -m "🔧 chore: Configure Husky pre-commit hooks"
```

#### 🚀 Performance

```bash
git commit -m "🚀 perf(api): Add request caching to reduce API calls"
git commit -m "🚀 perf(images): Optimize Pokemon images with Next/Image"
git commit -m "🚀 perf: Implement code splitting for better load times"
git commit -m "🚀 perf(list): Add virtualization for long Pokemon lists"
```

#### 🎨 Architecture

```bash
git commit -m "🎨 arch: Implement Clean Architecture structure"
git commit -m "🎨 arch(di): Add Dependency Injection container"
git commit -m "🎨 arch(mvvm): Implement MVVM pattern for ViewModels"
git commit -m "🎨 arch(repository): Add Repository pattern implementation"
```

---

## 🌳 Branching Strategy

### Branch Naming Convention

```bash
# Feature branches
feature/pokemon-search
feature/type-filter
feature/favorites-system

# Bug fix branches
bugfix/pagination-error
bugfix/image-loading

# Hotfix branches (urgent production fixes)
hotfix/api-timeout
hotfix/security-patch

# Enhancement branches
enhancement/improve-performance
enhancement/add-animations

# Documentation branches
docs/update-readme
docs/add-api-docs
```

### Creating Branches

```bash
# Create and switch to new branch
git checkout -b feature/pokemon-search
# Output: 🌿 Created and switched to branch 'feature/pokemon-search'

# Or create without switching
git branch feature/pokemon-search

# Switch to existing branch
git checkout feature/pokemon-search
# Output: 🔄 Switched to branch 'feature/pokemon-search'

# See all branches
git branch -a
# Output:   main
#         * feature/pokemon-search
#           feature/type-filter
#           remotes/origin/main
```

### Deleting Branches

```bash
# Delete local branch (safe - won't delete if not merged)
git branch -d feature/pokemon-search
# Output: 🗑️  Deleted branch feature/pokemon-search

# Force delete (use with caution!)
git branch -D feature/pokemon-search
# Output: ⚠️  Force deleted branch feature/pokemon-search

# Delete remote branch
git push origin --delete feature/pokemon-search
# Output: 🗑️  Deleted remote branch feature/pokemon-search
```

---

## 🚀 Push & Pull

### Pushing Changes

```bash
# Push to remote (current branch)
git push origin feature/pokemon-search
# Output: 🚀 Pushing to remote...
#         ✅ Successfully pushed!

# Push and set upstream (first time)
git push -u origin feature/pokemon-search
# Output: 🚀 Pushing and setting upstream...
#         ✅ Upstream set! Future pushes won't need -u flag

# Push all branches
git push --all
# Output: 🚀 Pushing all branches...

# Push with tags
git push --tags
# Output: 🏷️  Pushing tags...
#         ✅ Tags pushed successfully

# Force push (DANGEROUS - use only if you know what you're doing!)
git push --force
# Output: ⚠️  FORCE PUSHING!
#         🔴 This will overwrite remote history!
#         ✅ Force push complete
```

### Pulling Changes

```bash
# Pull from remote (current branch)
git pull origin main
# Output: ⬇️  Pulling from main...
#         ✅ Successfully pulled!

# Pull with rebase (cleaner history)
git pull --rebase origin main
# Output: ⬇️  Pulling and rebasing...
#         ✅ Rebase successful!

# Fetch without merging (safer)
git fetch origin
# Output: 📥 Fetching from origin...
#         ✅ Fetch complete

# See what changed
git log origin/main..main
```

---

## 🎯 Common Scenarios

### Scenario 1: Update Your Branch with Latest Main

```bash
# You're on feature branch, main has new commits
git checkout main
git pull origin main
git checkout feature/pokemon-search
git merge main
# Or use rebase for cleaner history
git rebase main
# Output: 🔄 Rebasing feature/pokemon-search onto main...
#         ✅ Rebase successful!
```

### Scenario 2: Undo Last Commit (Not Pushed)

```bash
# Keep changes in working directory
git reset --soft HEAD~1
# Output: ↩️  Undoing last commit...
#         ✅ Commit undone, changes kept

# Discard changes completely (DANGEROUS!)
git reset --hard HEAD~1
# Output: ⚠️  DISCARDING CHANGES!
#         🔴 Last commit and changes removed!
```

### Scenario 3: Undo Specific File

```bash
# Discard changes in specific file
git restore src/components/PokemonCard.tsx
# Output: ♻️  Restoring src/components/PokemonCard.tsx
#         ✅ File restored to last commit state

# Or using checkout (old way)
git checkout -- src/components/PokemonCard.tsx
```

### Scenario 4: Stash Work-in-Progress

```bash
# Save current changes temporarily
git stash
# Output: 💾 Stashing changes...
#         ✅ Changes stashed

# See stashed changes
git stash list
# Output: stash@{0}: WIP on feature/search: abc1234 Add search

# Apply stashed changes
git stash pop
# Output: 📤 Applying stashed changes...
#         ✅ Stash applied and removed

# Apply without removing from stash
git stash apply
```

### Scenario 5: Fix Wrong Branch

```bash
# Oh no! Made changes on main instead of feature branch

# 1. Stash your changes
git stash
# Output: 💾 Stashing changes...

# 2. Create/switch to correct branch
git checkout -b feature/pokemon-search

# 3. Apply stashed changes
git stash pop
# Output: 📤 Applied changes to correct branch!

# 4. Commit
git add .
git commit -m "✨ feat(search): Add search functionality"
```

### Scenario 6: Resolve Merge Conflicts

```bash
# During merge, conflicts occur
git merge main
# Output: ⚠️  CONFLICT in src/components/PokemonCard.tsx
#         🔴 Automatic merge failed; fix conflicts and commit

# 1. Open conflicted files and fix conflicts
# Look for:
# <<<<<<< HEAD
# your changes
# =======
# their changes
# >>>>>>> main

# 2. After fixing, add resolved files
git add src/components/PokemonCard.tsx

# 3. Complete the merge
git commit -m "🔀 merge: Resolve conflicts from main"
# Output: ✅ Merge conflicts resolved!
```

### Scenario 7: Cherry-Pick Specific Commit

```bash
# Copy specific commit from another branch
git cherry-pick abc1234
# Output: 🍒 Cherry-picking commit abc1234...
#         ✅ Commit applied!
```

### Scenario 8: View History

```bash
# See commit history
git log --oneline
# Output: 📜 Commit History:
#         abc1234 ✨ feat(search): Add search
#         def5678 🐛 fix(ui): Fix card layout
#         ghi9012 📝 docs: Update README

# Pretty formatted log
git log --graph --oneline --all --decorate
# Shows visual branch structure

# See changes in specific file
git log -p src/components/PokemonCard.tsx
```

### Scenario 9: Compare Branches

```bash
# See differences between branches
git diff main feature/pokemon-search
# Output: 👁️  Showing differences...

# See list of different commits
git log main..feature/pokemon-search
# Output: 📊 Commits in feature/pokemon-search not in main:
```

### Scenario 10: Create Tag/Release

```bash
# Create lightweight tag
git tag v1.0.0

# Create annotated tag (recommended)
git tag -a v1.0.0 -m "🎉 Release version 1.0.0"
# Output: 🏷️  Created tag v1.0.0

# Push tags to remote
git push --tags
# Output: 🚀 Pushing tags...
#         ✅ Tags pushed successfully

# List all tags
git tag
# Output: v0.1.0
#         v0.2.0
#         v1.0.0
```

---

## 🐛 Troubleshooting

### Problem: "fatal: not a git repository"

```bash
# Solution: Initialize git
git init
# Output: ✅ Initialized empty Git repository
```

### Problem: "error: failed to push"

```bash
# Reason: Remote has changes you don't have locally

# Solution: Pull first, then push
git pull origin main
git push origin main
# Output: ⬇️  Pulling changes...
#         ✅ Pull successful!
#         🚀 Pushing...
#         ✅ Push successful!
```

### Problem: "Your branch is behind 'origin/main'"

```bash
# Solution: Pull to update
git pull origin main
# Output: ⬇️  Updating local branch...
#         ✅ Successfully pulled 5 commits
```

### Problem: "Please commit your changes or stash them"

```bash
# Solution: Either commit or stash

# Option 1: Commit changes
git add .
git commit -m "🚧 WIP: Save current work"

# Option 2: Stash changes
git stash
# Output: 💾 Changes stashed
```

### Problem: Accidentally committed to wrong branch

```bash
# Solution: Move commit to new branch
git branch feature/correct-branch  # Create branch with current commit
git reset --hard HEAD~1            # Remove commit from current branch
git checkout feature/correct-branch
# Output: ✅ Commit moved to correct branch!
```

### Problem: Want to undo pushed commit

```bash
# Solution: Revert (creates new commit that undoes changes)
git revert abc1234
git push origin main
# Output: ↩️  Creating revert commit...
#         ✅ Changes reverted!

# DON'T use reset --hard on pushed commits!
# This will cause issues for other team members
```

---

## 📋 Quick Reference

### Daily Commands

```bash
git status              # 📊 Check status
git add .               # ✅ Stage all files
git commit -m "msg"     # 💾 Commit changes
git push                # 🚀 Push to remote
git pull                # ⬇️  Pull from remote
```

### Branching

```bash
git checkout -b feat    # 🌿 Create new branch
git checkout main       # 🔄 Switch branch
git merge feat          # 🔀 Merge branch
git branch -d feat      # 🗑️  Delete branch
```

### Undo Commands

```bash
git restore file.ts     # ♻️  Discard file changes
git reset --soft HEAD~1 # ↩️  Undo last commit (keep changes)
git reset --hard HEAD~1 # 🔴 Undo last commit (delete changes)
git stash               # 💾 Save changes temporarily
git stash pop           # 📤 Restore stashed changes
```

### Information

```bash
git log --oneline       # 📜 View history
git diff                # 👁️  View changes
git branch -a           # 🌳 List all branches
git remote -v           # 🌐 View remotes
git tag                 # 🏷️  List tags
```

---

## 🎨 Emoji Guide

Quick reference for commit emojis:

```
🎉 :tada:               Initial commit
✨ :sparkles:           New feature
🐛 :bug:                Bug fix
📝 :memo:               Documentation
💄 :lipstick:           UI/Styling
♻️ :recycle:            Refactoring
✅ :white_check_mark:   Tests
🔧 :wrench:             Configuration
🚀 :rocket:             Performance
🔒 :lock:               Security
🌐 :globe:              i18n
📦 :package:            Build/Dependencies
🔀 :twisted_arrows:     Merge
🗑️ :wastebasket:        Remove
🚧 :construction:       WIP
💚 :green_heart:        CI/CD
⬆️ :arrow_up:           Upgrade
⬇️ :arrow_down:         Downgrade
🎨 :art:                Architecture
🔥 :fire:               Remove code
💡 :bulb:               Add comments
🚨 :rotating_light:     Fix warnings
```

---

## 🎯 Best Practices

### ✅ DO

- ✅ Commit often with descriptive messages
- ✅ Pull before you push
- ✅ Use feature branches
- ✅ Write clear commit messages
- ✅ Keep commits focused (one feature/fix per commit)
- ✅ Use emojis for visual clarity
- ✅ Delete merged branches
- ✅ Review changes before committing

### ❌ DON'T

- ❌ Commit directly to main (use feature branches)
- ❌ Force push to shared branches
- ❌ Commit large binary files
- ❌ Commit `.env` files or secrets
- ❌ Use vague messages like "fix" or "update"
- ❌ Commit broken code
- ❌ Mix multiple unrelated changes in one commit

---

## 🎓 Learning Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Oh Shit, Git!?!](https://ohshitgit.com/) - For when things go wrong
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Learn Git Branching](https://learngitbranching.js.org/) - Interactive tutorial

---

**Happy Gitting! 🎉**

Remember: Commit early, commit often, and always use descriptive messages!
