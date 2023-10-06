const button = document.querySelector('button')

function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
  }
  
document.querySelector('button').addEventListener('click', setTheme)
