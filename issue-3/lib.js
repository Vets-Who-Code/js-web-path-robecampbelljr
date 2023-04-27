const email = 'robecampbelljr@gmail.com';


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

let getGoal = () => {
  const goal = document.getElementById('goal').value;
  const description = document.getElementById('description').value;
  const li1 = document.getElementById('li1').value;
  const li2 = document.getElementById('li2').value;
  const li3 = document.getElementById('li3').value;

  return {
    goa: goal,
    des: description,
    li1: li1,
    li2: li2,
    li3: li3
  }
}

let saveGoal = () => {


  if (validateForm()) {
    let goals = [];

    let savedGoals = localStorage.getItem('goal');

    if (savedGoals !== null) {
      goals = JSON.parse(savedGoals);
    }

    goals.push(getGoal());

    localStorage.setItem('goal', JSON.stringify(goals));
  }

}

let validateForm = () => {
  const goalRegex = /^[a-zA-Z0-9\s]{5,50}$/;
  const descriptionRegex = /^[a-zA-Z0-9\s.,!?]{5,100}$/;
  const checklistRegex = /^[a-zA-Z0-9\s]{5,50}$/;

  let goal = getGoal();

  console.log((goal))

  if (!goalRegex.test(goal.goa)) {
    alert("Please enter a goal between 5 and 50 characters (letters and/or numbers only).");
    return false;
  }
  if (!descriptionRegex.test(goal.des)) {
    alert("Please enter a description between 5 and 100 characters (letters, numbers, spaces, and punctuation only).");
    return false;
  }

    // if (!checklistRegex.test(goal.li1) || !checklistRegex.test(goal.li2) || !checklistRegex.test(goal.li3))

  if (goal.li1 !== "") {
    if (!checklistRegex.test(goal.li1)) {
      alert("Please enter a checklist item between 5 and 50 characters (letters and/or numbers only).");
      return false;
    }
  }

  if (goal.li2 !== "") {
    if (!checklistRegex.test(goal.li2)) {
      alert("Please enter a checklist item between 5 and 50 characters (letters and/or numbers only).");
      return false;
    }
  }

  if (goal.li3 !== "") {
    if (!checklistRegex.test(goal.li3)) {
      alert("Please enter a checklist item between 5 and 50 characters (letters and/or numbers only).");
      return false;
    }
  }


  return true;

}