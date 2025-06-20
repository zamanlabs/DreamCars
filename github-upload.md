# GitHub Upload Instructions

Follow these steps to upload your DreamCars project to GitHub:

## Using GitHub Desktop (Recommended)

1. **Install GitHub Desktop**
   - Download from [desktop.github.com](https://desktop.github.com/)
   - Install and sign in with your GitHub account

2. **Add the Local Repository**
   - Click on "File" > "Add local repository"
   - Browse to `G:\React Projects\TEST-PROJECT`
   - Click "Add repository"

3. **Create Repository on GitHub**
   - If prompted, click "Create a Repository"
   - Repository name: `DreamCars`
   - Description: `Premium car dealership landing page built with React, Tailwind CSS, and Bootstrap`
   - Keep "Keep this code private" unchecked (or check it if you want a private repo)
   - Click "Create repository"

4. **Commit Your Changes**
   - Add a summary: `Initial commit: DreamCars premium car dealership landing page`
   - Add a description (optional)
   - Click "Commit to main"

5. **Push to GitHub**
   - Click "Publish repository"
   - Ensure the GitHub repository name is set to `zamanlabs/DreamCars`
   - Click "Publish repository"

## Alternative: Using Command Line (If Git is installed)

```bash
# Navigate to your project directory
cd "G:\React Projects\TEST-PROJECT"

# Initialize Git repository
git init

# Add all files to Git
git add .

# Commit the changes
git commit -m "Initial commit: DreamCars premium car dealership landing page"

# Add the remote repository
git remote add origin https://github.com/zamanlabs/DreamCars.git

# Push to GitHub
git push -u origin main
```

## Authentication

- If prompted for authentication, enter your GitHub credentials
- You might need to create a Personal Access Token in GitHub:
  1. Go to GitHub.com → Settings → Developer settings → Personal access tokens → Generate new token
  2. Select the "repo" scope
  3. Generate token and use it as your password when prompted

## After Uploading

Once uploaded, your repository will be available at:
https://github.com/zamanlabs/DreamCars 