

function initClicky() {

  const button = document.querySelector(
    '.clicky'
  );
  const image = document.querySelector(
    '.image'
  );
  const result = document.querySelector(
    '.result'
  );
  let count = 0,
    x = 0,
    y = 0;

  button.addEventListener('click', evt => {
    x = Math.floor(Math.random() * 100);
    y = Math.floor(Math.random() * 100);
    
    button.setAttribute("style", "left: "+x+"%; top: "+y+"%; transform: translate(-"+x+"%, -"+y+"%);");
    image.setAttribute("style", "display: block;");

    switch (count) {
      case 0:
        button.innerHTML = "What's in my belly?";
        // image.setAttribute("src", "images/ice-cream.gif");
        break;
      case 1:
        button.innerHTML = "It's not a food baby. What could it be?";
        image.setAttribute("src", "images/shock.gif");
        break;
      case 2:
        button.innerHTML = "It's a baby! Click to reveal gender";
        image.setAttribute("src", "images/hooray.gif");
        break;
      case 3:
        button.innerHTML = "Phoebe or Phoebo?";
        image.setAttribute("src", "images/phoebo.gif");
        break;
      case 4:
        button.innerHTML = "Sir or Madam?";
        image.setAttribute("src", "images/handstand.gif");
        break;
      case 5:
        button.innerHTML = "Click here to find out!";
        break;
      case 6:
        button.innerHTML = "Her or his due date?";
        image.setAttribute("src", "images/christmas.gif");
        break;
      case 7:
        button.innerHTML = "His or her arm?";
        image.setAttribute("src", "images/arm.jpg");
        break;
      case 8:
        button.innerHTML = "Click here";
        break;
      case 9:
        button.innerHTML = "Click here";
        break;
      default:
        result.setAttribute("style", "display: block;");
        button.setAttribute("style", "display: none;");
        image.setAttribute("style", "display: none;");
    }

    count++;

  });

}

initClicky();
