const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Проверяем сохранённую тему при загрузке
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    toggleBtn.textContent = ' Светлая тема';
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');

    const isDark = body.classList.contains('dark');
    toggleBtn.textContent = isDark ? ' Светлая тема' : ' Тёмная тема';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});