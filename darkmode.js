// ==========================================
// DARK MODE FUNCTIONALITY
// ==========================================

/**
 * Initialize dark mode on page load
 */
function initDarkMode() {
  // Check for saved user preference
  const savedTheme = localStorage.getItem('theme');
  
  // Check system preference
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Determine initial theme
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  
  // Apply theme
  document.documentElement.setAttribute('data-theme', initialTheme);
  
  // Update toggle button
  updateToggleButton(initialTheme);
}

/**
 * Toggle between light and dark mode
 */
function toggleDarkMode() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  // Apply new theme
  html.setAttribute('data-theme', newTheme);
  
  // Save preference
  localStorage.setItem('theme', newTheme);
  
  // Update toggle button
  updateToggleButton(newTheme);
}

/**
 * Update the appearance of the theme toggle button
 * @param {string} theme - Current theme ('light' or 'dark')
 */
function updateToggleButton(theme) {
  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    // Update icon
    toggle.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    
    // Update aria-label for accessibility
    toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    
    // Update title attribute for tooltip
    toggle.setAttribute('title', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  }
}

/**
 * Listen for system theme changes and update if user hasn't set a preference
 */
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  // Only update if user hasn't manually set a preference
  if (!localStorage.getItem('theme')) {
    const newTheme = e.matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    updateToggleButton(newTheme);
  }
});

// Initialize dark mode when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDarkMode);
} else {
  // DOM is already ready
  initDarkMode();
}
