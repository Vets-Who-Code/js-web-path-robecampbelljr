function setFirstSection() {
  const header = document.querySelector('header');
  const body = document.querySelector('.first');
  const headerHeight = header.offsetHeight;
  body.style.marginTop = `${headerHeight}px`;
}

function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

function setThemePic(themeName) {
  let toggleImg = document.getElementById('toggle-img');

  if (themeName === 'dark') {
    toggleImg.src = './pics/sun.png';
    toggleImg.alt = 'Light Mode';
  } else if (themeName === 'light') {
    toggleImg.src = './pics/dark.png';
    toggleImg.alt = 'Dark Mode';
  }
}

function toggleTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    setTheme('light');
    setThemePic('light');
  } else {
    setTheme('dark');
    setThemePic('dark');
  }
}