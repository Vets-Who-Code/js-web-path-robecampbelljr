let setFirstSection = () => {
  const header = document.querySelector('header');
  const body = document.querySelector('.first');
  const headerHeight = header.offsetHeight;
  body.style.marginTop = `${headerHeight}px`;
}

let setTheme = (themeName) => {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

let setThemePic = (themeName) => {
  let toggleImg = document.getElementById('toggle-img');

  if (themeName === 'dark') {
    toggleImg.src = './pics/sun.png';
    toggleImg.alt = 'Light Mode';
  } else if (themeName === 'light') {
    toggleImg.src = './pics/dark.png';
    toggleImg.alt = 'Dark Mode';
  }
}

let setCheckBox = () => {
  let currentTheme = document.documentElement.className;
  let box = document.getElementById('theme-toggle');

  if (currentTheme === 'dark') {
    box.checked = null;
  } else {
    box.checked = true;
  }

}

let toggleTheme = () => {
  if (localStorage.getItem('theme') === 'dark') {
    setTheme('light');
    setThemePic('light');
  } else {
    setTheme('dark');
    setThemePic('dark');
  }
}