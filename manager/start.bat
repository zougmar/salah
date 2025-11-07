@echo off
echo Starting ElectricPro Application...
echo.
echo Starting Backend Server...
cd backend
start cmd /k "npm run dev"
timeout /t 3 >nul
echo.
echo Starting Frontend...
cd ../client
start cmd /k "npm start"
echo.
echo Both servers are starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
pause
