@echo off
echo ====================================================
echo   BASDIGI2030 PLATFORM SYSTEM REPAIR
echo ====================================================
echo.
echo This script will clear the system cache and restart
echo your development server to fix the "not loading" pages.
echo.
echo Step 1: Stopping existing processes...
taskkill /F /IM node.exe /T >nul 2>&1
echo Step 2: Clearing build cache (.next)...
rd /s /q .next >nul 2>&1
echo Step 3: Starting development server...
echo.
echo ◈ Repair initiated...
npm run dev
