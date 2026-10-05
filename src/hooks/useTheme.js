// ============================================
// ADVANCED THEME HOOK
// ============================================

import { useState, useEffect, useCallback } from 'react';

const THEMES = {
  dark: {
    name: 'Dark',
    icon: 'moon',
    colors: {
      '--bg-primary': '#0a0f1a',
      '--bg-secondary': '#111827',
      '--bg-tertiary': '#1f2937',
      '--bg-card': '#111827',
      '--bg-card-hover': '#1f2937',
      '--text-primary': '#f9fafb',
      '--text-secondary': '#d1d5db',
      '--text-muted': '#9ca3af',
      '--text-inverse': '#0a0f1a',
      '--border-color': '#374151',
      '--border-light': '#4b5563',
      '--accent': '#10b981',
      '--accent-light': '#34d399',
      '--accent-dark': '#059669',
      '--accent-bg': 'rgba(16, 185, 129, 0.1)',
      '--accent-glow': 'rgba(16, 185, 129, 0.4)',
      '--shadow-glow': '0 0 30px rgba(16, 185, 129, 0.3)',
      '--glass-bg': 'rgba(17, 24, 39, 0.7)',
      '--glass-border': 'rgba(255, 255, 255, 0.1)',
      '--glass-shadow': '0 8px 32px rgba(0, 0, 0, 0.3)',
    }
  },
  light: {
    name: 'Light',
    icon: 'sun',
    colors: {
      '--bg-primary': '#fafafa',
      '--bg-secondary': '#ffffff',
      '--bg-tertiary': '#f3f4f6',
      '--bg-card': '#ffffff',
      '--bg-card-hover': '#f9fafb',
      '--text-primary': '#111827',
      '--text-secondary': '#374151',
      '--text-muted': '#6b7280',
      '--text-inverse': '#fafafa',
      '--border-color': '#e5e7eb',
      '--border-light': '#d1d5db',
      '--accent': '#059669',
      '--accent-light': '#10b981',
      '--accent-dark': '#047857',
      '--accent-bg': 'rgba(5, 150, 105, 0.1)',
      '--accent-glow': 'rgba(5, 150, 105, 0.3)',
      '--shadow-glow': '0 0 30px rgba(5, 150, 105, 0.2)',
      '--glass-bg': 'rgba(255, 255, 255, 0.8)',
      '--glass-border': 'rgba(0, 0, 0, 0.08)',
      '--glass-shadow': '0 8px 32px rgba(0, 0, 0, 0.1)',
    }
  },
  ocean: {
    name: 'Ocean',
    icon: 'waves',
    colors: {
      '--bg-primary': '#0c1a2a',
      '--bg-secondary': '#112240',
      '--bg-tertiary': '#1a2d4a',
      '--bg-card': '#112240',
      '--bg-card-hover': '#1a2d4a',
      '--text-primary': '#ccd6f6',
      '--text-secondary': '#8892b0',
      '--text-muted': '#5a6a8a',
      '--text-inverse': '#0c1a2a',
      '--border-color': '#233554',
      '--border-light': '#30456d',
      '--accent': '#64ffda',
      '--accent-light': '#7cffde',
      '--accent-dark': '#4fd1b5',
      '--accent-bg': 'rgba(100, 255, 218, 0.1)',
      '--accent-glow': 'rgba(100, 255, 218, 0.4)',
      '--shadow-glow': '0 0 30px rgba(100, 255, 218, 0.3)',
      '--glass-bg': 'rgba(17, 34, 64, 0.7)',
      '--glass-border': 'rgba(100, 255, 218, 0.15)',
      '--glass-shadow': '0 8px 32px rgba(0, 0, 0, 0.4)',
    }
  },
  sunset: {
    name: 'Sunset',
    icon: 'sunset',
    colors: {
      '--bg-primary': '#1a0f1a',
      '--bg-secondary': '#2d142c',
      '--bg-tertiary': '#3d1a3c',
      '--bg-card': '#2d142c',
      '--bg-card-hover': '#3d1a3c',
      '--text-primary': '#ffecec',
      '--text-secondary': '#d4a5a5',
      '--text-muted': '#9a6b6b',
      '--text-inverse': '#1a0f1a',
      '--border-color': '#4a2348',
      '--border-light': '#5d2d5a',
      '--accent': '#ff6b6b',
      '--accent-light': '#ff8e8e',
      '--accent-dark': '#e85555',
      '--accent-bg': 'rgba(255, 107, 107, 0.1)',
      '--accent-glow': 'rgba(255, 107, 107, 0.4)',
      '--shadow-glow': '0 0 30px rgba(255, 107, 107, 0.3)',
      '--glass-bg': 'rgba(45, 20, 44, 0.7)',
      '--glass-border': 'rgba(255, 107, 107, 0.15)',
      '--glass-shadow': '0 8px 32px rgba(0, 0, 0, 0.4)',
    }
  },
  forest: {
    name: 'Forest',
    icon: 'tree',
    colors: {
      '--bg-primary': '#0d1a0d',
      '--bg-secondary': '#142d14',
      '--bg-tertiary': '#1a3d1a',
      '--bg-card': '#142d14',
      '--bg-card-hover': '#1a3d1a',
      '--text-primary': '#e8f5e9',
      '--text-secondary': '#a5d6a7',
      '--text-muted': '#6ba66d',
      '--text-inverse': '#0d1a0d',
      '--border-color': '#234d23',
      '--border-light': '#2d5d2d',
      '--accent': '#66bb6a',
      '--accent-light': '#81c784',
      '--accent-dark': '#4caf50',
      '--accent-bg': 'rgba(102, 187, 106, 0.1)',
      '--accent-glow': 'rgba(102, 187, 106, 0.4)',
      '--shadow-glow': '0 0 30px rgba(102, 187, 106, 0.3)',
      '--glass-bg': 'rgba(20, 45, 20, 0.7)',
      '--glass-border': 'rgba(102, 187, 106, 0.15)',
      '--glass-shadow': '0 8px 32px rgba(0, 0, 0, 0.4)',
    }
  }
};

const STORAGE_KEY = 'portfolio-theme';
const MEDIA_QUERY = '(prefers-color-scheme: dark)';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(STORAGE_KEY) || 'dark';
    }
    return 'dark';
  });

  const [resolvedTheme, setResolvedTheme] = useState(theme);
  const [mounted, setMounted] = useState(false);

  // Apply theme to document
  const applyTheme = useCallback((themeName) => {
    const themeData = THEMES[themeName];
    if (!themeData) return;

    const root = document.documentElement;
    Object.entries(themeData.colors).forEach(([prop, value]) => {
      root.style.setProperty(prop, value);
    });
    root.setAttribute('data-theme', themeName);
    root.setAttribute('data-theme-name', themeData.name);
    setResolvedTheme(themeName);
  }, []);

  // Initialize theme
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(STORAGE_KEY);
    const prefersDark = window.matchMedia(MEDIA_QUERY).matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    applyTheme(initial);
  }, [applyTheme]);

  // Listen for system theme changes
  useEffect(() => {
    if (!mounted) return;
    
    const mediaQuery = window.matchMedia(MEDIA_QUERY);
    const handleChange = (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        applyTheme(newTheme);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mounted, applyTheme]);

  // Update theme
  const changeTheme = useCallback((newTheme) => {
    if (!THEMES[newTheme]) return;
    setTheme(newTheme);
    localStorage.setItem(STORAGE_KEY, newTheme);
    applyTheme(newTheme);
  }, [applyTheme]);

  // Toggle between dark/light
  const toggleTheme = useCallback(() => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    changeTheme(newTheme);
  }, [resolvedTheme, changeTheme]);

  // Get available themes
  const availableThemes = Object.entries(THEMES).map(([key, value]) => ({
    id: key,
    name: value.name,
    icon: value.icon
  }));

  return {
    theme: resolvedTheme,
    setTheme: changeTheme,
    toggleTheme,
    availableThemes,
    mounted,
    isDark: resolvedTheme === 'dark' || resolvedTheme === 'ocean' || resolvedTheme === 'sunset' || resolvedTheme === 'forest'
  };
}