@echo off
echo Setting up temporary Git and pushing to GitHub...

:: Create a directory for the temporary Git
mkdir temp_git
cd temp_git

:: Download portable Git
echo Downloading portable Git...
powershell -Command "Invoke-WebRequest -Uri https://github.com/git-for-windows/git/releases/download/v2.43.0.windows.1/PortableGit-2.43.0-64-bit.7z.exe -OutFile git.exe"

:: Extract portable Git
echo Extracting Git...
git.exe -o. -y
set PATH=%PATH%;%cd%\bin

:: Go back to the project directory
cd ..

:: Initialize Git repository
echo Initializing Git repository...
git init

:: Configure Git
echo Configuring Git...
git config --global user.name "DreamCars"
git config --global user.email "your-email@example.com"

:: Add all files
echo Adding files to Git...
git add .

:: Commit changes
echo Committing changes...
git commit -m "Initial commit: DreamCars premium car dealership landing page"

:: Add remote repository
echo Adding remote repository...
git remote add origin https://github.com/zamanlabs/DreamCars.git

:: Push to GitHub
echo Pushing to GitHub...
echo Please enter your GitHub username and password/token when prompted
git push -u origin main

echo Done!
pause 