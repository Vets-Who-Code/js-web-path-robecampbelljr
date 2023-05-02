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

    let savedGoals = getGoals();

    if (savedGoals !== null) {
      goals = savedGoals;
    }

    goals.push(getGoal());

    localStorage.setItem('goal', JSON.stringify(goals));
  }
}

let getGoals = () => {
  let goals = null;
  let savedGoals = localStorage.getItem('goal');
  if (savedGoals !== null) {
    goals = JSON.parse(savedGoals);
  }

  return goals;
}

let validateForm = () => {
  const goalRegex = /^[a-zA-Z0-9\s]{5,100}$/;
  const descriptionRegex = /^[a-zA-Z0-9\s.,!?]{5,250}$/;
  const checklistRegex = /^[a-zA-Z0-9\s]{5,100}$/;

  let goal = getGoal();

  console.log((goal))

  if (!goalRegex.test(goal.goa)) {
        regexAlert('goal', 5, 100)
        return false;
  }

  if (!descriptionRegex.test(goal.des)) {
        regexAlert('description', 5, 250)
        return false;
  }

  if (goal.li1 !== "" || goal.li2 !== "" || goal.li3 !== "") {
    if (goal.li1 !== "") {
      if (!checklistRegex.test(goal.li1)) {
        regexAlert('checklist item 1', 5, 100)
        return false;
      }
    }

    if (goal.li2 !== "") {
      if (!checklistRegex.test(goal.li2)) {
        regexAlert('checklist item 2', 5, 100)
        return false;
      }
    }

    if (goal.li3 !== "") {
      if (!checklistRegex.test(goal.li3)) {
        regexAlert('checklist item 3', 5, 100)
        return false;
      }
    }
  } else {
    regexAlert('checklist item', 5, 100)
    return false;
  }


  return true;
}

let regexAlert = (item, min, max) => {
  alert(`Please enter a ${item} between ${min} and ${max} characters (letters and/or numbers only).`);
}

let setTable = () => {

  let table = document.getElementById('goalTable');

  let savedGoals = getGoals();

  if (savedGoals !== null) {
    savedGoals.forEach((goal) => {
      let newRow = table.insertRow();
      let goaCell = newRow.insertCell();
      let desCell = newRow.insertCell();
      let checklistCell = newRow.insertCell();

      goaCell.innerHTML = goal.goa;
      desCell.innerHTML = goal.des;

      let newChecklist = document.createElement('ul');

      if (goal.li1 !== '') {
        let li1 = document.createElement('li');
        li1.innerText = goal.li1;
        newChecklist.appendChild(li1);
      }

      if (goal.li2 !== '') {
        let li2 = document.createElement('li');
        li2.innerText = goal.li2;
        newChecklist.appendChild(li2);
      }

      if (goal.li3 !== '') {
        let li3 = document.createElement('li');
        li3.innerText = goal.li3;
        newChecklist.appendChild(li3);
      }

      checklistCell.appendChild(newChecklist);
    })
  }
}