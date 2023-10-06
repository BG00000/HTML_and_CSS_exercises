const button = document.querySelector('button')

function setTheme() {
    const html = document.querySelector('html');
    const newTheme = html.className === 'dark' ? 'light' : 'dark';
    html.className = newTheme;
  }
  
document.querySelector('button').addEventListener('click', setTheme)
