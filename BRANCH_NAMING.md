# Branch Naming Conventions

This document outlines the branch naming conventions for the Techno App project.

## Branch Types

### Main Branches
- `main` - Production-ready code (protected)
- `develop` - Development branch (default for feature work)

### Feature Branches
For new features and enhancements:
```
feature/description-of-feature
feature/search-events
feature/artist-profile
feature/map-integration
feature/user-authentication
```

**Examples:**
- `feature/event-search`
- `feature/artist-details-page`
- `feature/venue-map-view`

### Bugfix Branches
For fixing bugs:
```
bugfix/description-of-bug
bugfix/fix-search-query
bugfix/resolve-api-timeout
```

**Examples:**
- `bugfix/fix-event-date-format`
- `bugfix/resolve-cors-error`
- `bugfix/fix-artist-image-loading`

### Hotfix Branches
For urgent production fixes:
```
hotfix/description-of-fix
hotfix/security-patch
hotfix/critical-api-fix
```

**Examples:**
- `hotfix/fix-security-vulnerability`
- `hotfix/critical-database-connection`

### Release Branches
For preparing releases:
```
release/version-number
release/v1.0.0
release/v1.1.0
```

**Examples:**
- `release/v1.0.0`
- `release/v1.2.0-beta`

## Naming Rules

### ✅ DO:
- Use lowercase letters
- Use hyphens (`-`) to separate words
- Be descriptive but concise
- Include the type prefix (`feature/`, `bugfix/`, etc.)
- Reference issue/ticket numbers if applicable: `feature/TECH-123-add-search`

### ❌ DON'T:
- Use spaces (use hyphens instead)
- Use uppercase letters (except for version numbers in releases)
- Use special characters except hyphens
- Create overly long branch names
- Use branch names like `fix`, `update`, `changes` (too vague)

## Examples by Context

### Frontend Features
```
feature/frontend-event-search
feature/frontend-artist-card-component
feature/frontend-dark-theme
```

### Backend Features
```
feature/backend-events-api
feature/backend-artist-search-endpoint
feature/backend-database-integration
```

### Full-Stack Features
```
feature/event-booking-flow
feature/user-favorites-system
```

### Bugfixes
```
bugfix/fix-api-response-parsing
bugfix/resolve-memory-leak
bugfix/fix-mobile-responsive-issue
```

## Workflow Example

1. **Start a new feature:**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/event-search
   ```

2. **Work on bugfix:**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b bugfix/fix-search-query
   ```

3. **Urgent production fix:**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b hotfix/critical-api-fix
   ```

## Integration with Issue Tracking

If you're using issue tracking (Jira, GitHub Issues, etc.), include the issue number:

```
feature/TECH-42-add-event-filters
bugfix/TECH-15-fix-date-parsing
hotfix/TECH-99-security-patch
```

## Quick Reference

| Type | Format | Example |
|------|--------|---------|
| Feature | `feature/description` | `feature/artist-profile` |
| Bugfix | `bugfix/description` | `bugfix/fix-api-error` |
| Hotfix | `hotfix/description` | `hotfix/critical-fix` |
| Release | `release/version` | `release/v1.0.0` |

## Best Practices

1. **Keep branches focused** - One feature/bug per branch
2. **Delete merged branches** - Clean up after merging
3. **Update frequently** - Rebase/merge from `develop` regularly
4. **Use descriptive names** - Future you will thank you
5. **Follow the convention** - Consistency helps the whole team
