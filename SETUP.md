# Setup Instructions

## PowerShell Execution Policy Issue

If you encounter the PowerShell execution policy error when running npm commands, you have a few options:

### Option 1: Use the helper script (Recommended)
```powershell
.\run-npm.ps1 install
.\run-npm.ps1 run dev
```

### Option 2: Run with execution policy bypass
```powershell
powershell -ExecutionPolicy Bypass -Command "npm install"
powershell -ExecutionPolicy Bypass -Command "npm run dev"
```

### Option 3: Change execution policy (requires admin)
Open PowerShell as Administrator and run:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Option 4: Use Command Prompt (cmd) instead
Open Command Prompt (cmd.exe) instead of PowerShell - npm works normally there.

## Project Setup Complete ✅

All dependencies have been installed:
- ✅ Root dependencies
- ✅ Backend dependencies  
- ✅ Frontend dependencies

## Next Steps

1. **Start the development servers:**
   ```powershell
   # From root directory
   npm run dev
   
   # Or separately:
   npm run dev:backend   # Runs on http://localhost:3001
   npm run dev:frontend  # Runs on http://localhost:3000
   ```

2. **Build for production:**
   ```powershell
   npm run build
   ```

## Project Structure

- `backend/` - Node.js + Express + TypeScript API
- `frontend/` - Next.js + TypeScript frontend
- Both use separate build configurations as requested
