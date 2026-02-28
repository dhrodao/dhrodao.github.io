# Personal Portfolio Website

A modern, minimalist personal portfolio website built with Jekyll and hosted on GitHub Pages.

## Features

- Full-height hero section with personal introduction
- Animated work experience timeline with scroll-triggered fade effects
- Portfolio section for showcasing projects
- Fully responsive design (mobile, tablet, desktop)
- Easy content management through YAML data files

## Local Development

### Prerequisites
- Ruby (2.7 or higher)
- Bundler

### Setup

1. Install Ruby and build tools:
```bash
sudo apt update && sudo apt install -y ruby-full build-essential zlib1g-dev
```

2. Configure gem installation path (add to ~/.bashrc):
```bash
echo 'export GEM_HOME="$HOME/.gems"' >> ~/.bashrc
echo 'export PATH="$HOME/.gems/bin:$PATH"' >> ~/.bashrc
echo 'export PATH="$HOME/.local/share/gem/ruby/3.2.0/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

3. Install Jekyll and Bundler:
```bash
gem install jekyll bundler --user-install
```

4. Install project dependencies:
```bash
bundle config set --local path 'vendor/bundle'
bundle install
```

### Build Commands

**Development server (with auto-rebuild):**
```bash
bundle exec jekyll serve
```
Then open `http://localhost:4000`

**Development server with live reload:**
```bash
bundle exec jekyll serve --livereload
```

**Build only (generates static files to _site/):**
```bash
bundle exec jekyll build
```

**Serve on specific host/port:**
```bash
bundle exec jekyll serve --host 0.0.0.0 --port 4000
```

## Content Management

All content is managed through YAML files in the `_data` directory:

### Update Your Profile
Edit `_data/profile.yml`:
```yaml
name: Your Name
title: Your Job Title
bio: Your bio text here
```

### Update Work Experience
Edit `_data/experience.yml`:
```yaml
- title: Job Title
  company: Company Name
  dates: Start - End
  description: Job description
```

### Update Portfolio Projects
Edit `_data/portfolio.yml`:
```yaml
- title: Project Name
  description: Project description
```

### Update Social Links
Edit `_data/social.yml`:
```yaml
linkedin_url: https://www.linkedin.com/in/your-profile
```

## Deployment to GitHub Pages

1. Create a new repository on GitHub
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings > Pages
   - Source: Deploy from branch
   - Branch: main / (root)
   - Save

4. Your site will be live at `https://yourusername.github.io/your-repo/`

## File Structure

```
personal_web/
├── _config.yml          # Jekyll configuration
├── _data/               # Content data files
│   ├── profile.yml      # Personal info
│   ├── experience.yml   # Work experience
│   ├── portfolio.yml    # Portfolio projects
│   └── social.yml       # Social links
├── _layouts/            # HTML templates
│   └── default.html     # Main layout
├── css/
│   └── style.css        # Styles
├── js/
│   └── main.js          # JavaScript
└── index.html           # Homepage template
```

## Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #D0D2FF;
    --bg-cream: #FAF8F3;
    --text-dark: #2C2C2C;
    --text-light: #5A5A5A;
}
```

### Animations
Modify animation timing in `js/main.js` (line with `* 200` controls delay between items).

## License

MIT License - feel free to use this template for your own portfolio!
