# Commit Message Best Practices

## General Rules

### 1. Use Imperative Mood
✅ **Good:** "Add GSAP animations to kitchens page"
❌ **Bad:** "Added GSAP animations" or "Adding GSAP animations"

### 2. Keep It Short (50 chars for subject, 72 for body)
✅ **Good:** "Add character-by-character text animation"
❌ **Bad:** "Add a really cool character-by-character text animation that makes text appear one letter at a time when scrolling"

### 3. Capitalize First Letter
✅ **Good:** "Fix navigation routing issue"
❌ **Bad:** "fix navigation routing issue"

### 4. No Period at End
✅ **Good:** "Update kitchen gallery styles"
❌ **Bad:** "Update kitchen gallery styles."

## Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks, dependency updates
- `build`: Build system or external dependencies
- `ci`: CI/CD changes

### Scope (Optional)

The scope should be the name of the package/component affected:
- `frontend`, `backend`
- `kitchens`, `navigation`, `footer`
- `api`, `types`

## Examples

### Simple Commits

```bash
git commit -m "feat: Add GSAP animations to kitchens-animated page"
git commit -m "fix: Resolve navigation routing issue for kitchens-animated"
git commit -m "style: Update kitchen gallery CSS spacing"
git commit -m "refactor: Extract GSAP animations into separate component"
```

### Detailed Commits

```bash
git commit -m "feat(frontend): Add character-by-character text animation

- Implement GSAP ScrollTrigger for text reveal
- Add falling letters animation before footer
- Add zoom-in text animation effect
- Update styles for new animation sections"
```

### Bug Fixes

```bash
git commit -m "fix(navigation): Resolve kitchens-animated page routing

The page was not loading when clicking the navigation link.
Fixed by simplifying Link component and ensuring proper scroll behavior."
```

### Feature Additions

```bash
git commit -m "feat(contact): Integrate react-hook-form with Zod validation

- Replace manual form validation with react-hook-form
- Add Zod schema for type-safe validation
- Update error messages to Bulgarian
- Improve form UX with better error handling"
```

### Refactoring

```bash
git commit -m "refactor: Convert all content to Bulgarian

- Update all page titles and static text to Bulgarian
- Keep code variables and functions in English
- Update metadata and SEO content
- Comment out techno-related code for future reference"
```

### Style Changes

```bash
git commit -m "style(kitchens): Improve responsive design for mobile

- Adjust grid layout for smaller screens
- Update font sizes for better readability
- Fix image aspect ratios on mobile devices"
```

### Documentation

```bash
git commit -m "docs: Add bundlers and build configuration guide

- Document Webpack usage in Next.js
- Explain dev vs prod builds
- Add Turbopack setup instructions
- Include bundle analysis guide"
```

### Dependencies

```bash
git commit -m "chore: Add GSAP and form validation libraries

- Install gsap@^3.14.2 for animations
- Install react-hook-form and zod for form validation
- Update package.json dependencies"
```

## Best Practices

### 1. One Logical Change Per Commit
✅ **Good:** Separate commits for different features
```bash
git commit -m "feat: Add GSAP animations"
git commit -m "feat: Add form validation"
```

❌ **Bad:** Multiple unrelated changes in one commit
```bash
git commit -m "Add animations and fix form and update styles"
```

### 2. Be Specific
✅ **Good:** "Fix image loading issue on kitchens page"
❌ **Bad:** "Fix bug"

### 3. Explain Why, Not What
The code shows **what** changed. The commit message should explain **why**.

✅ **Good:** "Fix navigation to prevent duplicate route triggers"
❌ **Bad:** "Remove handleLinkClick function"

### 4. Use Body for Complex Changes
```bash
git commit -m "feat: Add GSAP scroll animations

- Character-by-character text reveal
- Images sliding in from different directions
- Falling letters animation
- Zoom-in text effect

All animations trigger on scroll using ScrollTrigger plugin."
```

## Common Patterns for This Project

### Kitchen App Specific

```bash
# Features
git commit -m "feat(kitchens): Add Swiper slider for kitchen gallery"
git commit -m "feat(animations): Implement GSAP scroll-triggered animations"
git commit -m "feat(contact): Add form validation with react-hook-form"

# Bug Fixes
git commit -m "fix(navigation): Fix kitchens-animated page routing"
git commit -m "fix(styles): Resolve CSS Modules pure selector error"

# Content Updates
git commit -m "refactor: Convert all UI text to Bulgarian"
git commit -m "docs: Update README for kitchen app focus"

# Styling
git commit -m "style(kitchens): Improve mobile responsive design"
git commit -m "style(animations): Add spacing for GSAP sections"

# Dependencies
git commit -m "chore: Add GSAP and form validation dependencies"
git commit -m "chore: Update Next.js to latest version"
```

## Quick Reference

### Most Common Commands

```bash
# Simple feature
git commit -m "feat: Add new feature name"

# Bug fix
git commit -m "fix: Fix issue description"

# With scope
git commit -m "feat(frontend): Add component name"

# With body
git commit -m "feat: Short description

Longer explanation of what and why this change was made."
```

## Tips

1. **Write commit messages in present tense** - "Add feature" not "Added feature"
2. **Be consistent** - Use the same format across the project
3. **Review before committing** - Use `git status` and `git diff` to see what you're committing
4. **Use branches** - Commit to feature branches, not directly to main
5. **Keep commits atomic** - One logical change per commit

## Example Workflow

```bash
# Check what changed
git status
git diff

# Stage changes
git add .

# Commit with good message
git commit -m "feat(kitchens-animated): Add GSAP scroll animations

- Character-by-character text reveal
- Images from top, left, and right
- Falling letters animation
- Zoom-in text effect"

# Push to branch
git push origin feature/gsap-animations
```
