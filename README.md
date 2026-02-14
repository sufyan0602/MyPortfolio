# Sufyan Alikhan - Personal Portfolio

A beautifully crafted, minimalist portfolio website showcasing my projects, skills, and journey in computer science and software development.

## ✨ Features

- **Refined Minimal Design**: Elegant typography with Cormorant Garamond and Work Sans
- **Dark Mode Toggle**: Seamless light/dark theme switching with user preference saving
- **Smooth Animations**: CSS-based transitions and fade-in effects
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Modern Layout**: Clean navigation and intuitive user experience
- **Project Showcase**: Dedicated page highlighting my development work

## 🎨 Design Philosophy

This portfolio embraces a **refined minimal** aesthetic with:
- Sophisticated serif and sans-serif font pairing
- Muted, elegant color palette (navy, cream, and gold accents)
- Generous white space and clean layouts
- Subtle hover effects and smooth transitions
- Focus on content and readability
- **Dark mode support** with carefully chosen colors that maintain elegance

## 🌓 Dark Mode

The portfolio includes a fully functional dark mode toggle that:
- Automatically detects system preference on first visit
- Saves user preference in localStorage
- Smoothly transitions between themes
- Maintains design elegance in both modes
- Updates dynamically when system preference changes (if user hasn't set a preference)

**Toggle Button**: Located in the navigation bar, click the moon (🌙) or sun (☀️) icon to switch themes.

## 📁 File Structure

```
portfolio/
├── index.html          # Home page with hero section
├── aboutme.html        # About page with background and skills
├── projects.html       # Projects showcase with GitHub links
├── style.css           # Complete styling with dark mode support
├── darkmode.js         # Dark mode toggle functionality
└── README.md           # This file
```

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Open** any HTML file in a web browser
3. **Customize** the content to match your portfolio
4. **Toggle** between light and dark mode using the button in the navbar

## 🎨 Customization

### Colors
Edit CSS variables in `style.css`:

**Light Mode**:
```css
:root {
  --color-primary: #2c3e50;
  --color-accent: #c7a17a;
  --color-background: #fafaf8;
  /* ... other variables */
}
```

**Dark Mode**:
```css
[data-theme="dark"] {
  --color-primary: #e8e8e8;
  --color-accent: #d4b896;
  --color-background: #0f0f0f;
  /* ... other variables */
}
```

### Fonts
The site uses Google Fonts. To change fonts, update the imports in each HTML file and the CSS variables.

### Content
- Edit text directly in the HTML files
- Add more projects by duplicating `.project-card` divs in `projects.html`
- Modify sections as needed for your own story

### Dark Mode Toggle
The toggle button is automatically included in the navigation. To customize its appearance, edit `.theme-toggle` in `style.css`.

## 📱 Responsive Breakpoints

- Desktop: 968px and above
- Tablet: 768px - 968px
- Mobile: 480px - 768px
- Small Mobile: below 480px

## 🌐 Browser Support

Tested and optimized for:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## 🛠️ Technical Implementation

### Dark Mode Features:
- **CSS Custom Properties**: All colors use CSS variables for easy theme switching
- **JavaScript**: Handles toggle logic, localStorage, and system preference detection
- **Smooth Transitions**: 0.3s ease transitions for theme changes
- **Accessibility**: Proper ARIA labels and semantic HTML

### Key Files:
- `style.css`: Contains all styles including dark mode color overrides
- `darkmode.js`: JavaScript for theme toggle and preference management

## 📝 License

Feel free to use this template for your own portfolio. If you do, a link back would be appreciated but is not required.

---

*Crafted with care by Sufyan Alikhan*
