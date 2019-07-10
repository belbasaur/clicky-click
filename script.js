

function initClicky() {

  const button = document.querySelector(
    '.clicky'
  );
  const image = document.querySelector(
    '.image'
  );
  let count = 0,
    x = 0,
    y = 0;

  button.addEventListener('click', evt => {
    x = Math.floor(Math.random() * 100);
    y = Math.floor(Math.random() * 100);
    
    button.setAttribute("style", "left: "+x+"%; top: "+y+"%; transform: translate(-"+x+"%, -"+y+"%);");

    switch (count) {
      case 0:
        button.innerHTML = "He or she?";
        break;
      case 1:
        button.innerHTML = "Phoebe or Phoebo?";
        image.setAttribute("src", "images/phoebo.png");
        break;
      case 2:
        button.innerHTML = "His or her arm?";
        break;
      case 3:
        button.innerHTML = "Her or his due date?";
        break;
      case 4:
        button.innerHTML = "Sir or Madam?";
        break;
      case 5:
        button.innerHTML = "His or her aem?";
        break;
      case 6:
        button.innerHTML = "His or her aem?";
        break;
      case 7:
        button.innerHTML = "His or her aem?";
        break;
      case 8:
        button.innerHTML = "His or her aem?";
        break;
      case 9:
        button.innerHTML = "His or her aem?";
        break;
      default:
        console.log('Pandas');
    }

    count++;

  });

}

initClicky();
