@echo off
REM ============================================================
REM Moon Reading Landing Page - Git Sync Batch Script
REM This script automatically commits and pushes changes to GitHub
REM ============================================================

cls
echo.
echo ╔═══════════════════════════════════════════════════════════╗
echo ║    🌙 Moon Reading - Git Sync to GitHub                 ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git is not installed or not in PATH
    echo    Please install Git from https://git-scm.com/
    pause
    exit /b 1
)

REM Show current git status
echo 📊 Current Status:
echo.
git status
echo.

REM Ask user for commit message
set /p message="📝 Enter commit message (or press Enter for 'Update changes'): "
if "%message%"=="" (
    set message=Update changes
)

echo.
echo 🔄 Syncing to GitHub...
echo.

REM Stage all changes
git add .
if errorlevel 1 (
    echo ❌ Failed to stage changes
    pause
    exit /b 1
)
echo ✅ Changes staged

REM Commit changes
git commit -m "%message%"
if errorlevel 1 (
    echo ⚠️  No changes to commit or error occurred
    echo.
    pause
    exit /b 0
)
echo ✅ Changes committed: "%message%"

REM Push to GitHub
git push origin main
if errorlevel 1 (
    echo ❌ Failed to push to GitHub
    echo    Check your internet connection and GitHub credentials
    pause
    exit /b 1
)
echo ✅ Changes pushed to GitHub!

echo.
echo ╔═══════════════════════════════════════════════════════════╗
echo ║           ✅ Sync Complete!                             ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.
echo 📍 Repository: https://github.com/iBlackFoxprod/moon-reading
echo 📝 Branch: main
echo.
pause
