const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const themeLabel = themeToggle.querySelector('.theme-label');
const storedTheme = localStorage.getItem('theme');

if (storedTheme === 'dark') {
  body.classList.add('dark');
  themeLabel.textContent = '☀️ Light';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');

  themeLabel.textContent = isDark ? '☀️ Light' : '🌙 Dark';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
