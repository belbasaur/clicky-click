

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
  const block_button = document.querySelector(
    '.block--button'
  );
  const block_img = document.querySelector(
    '.block--img'
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
        block_button.setAttribute("style", "width: 70%");
        block_img.setAttribute("style", "display: block");
        break;
      case 1:
        button.innerHTML = "It's not a burrito";
        image.setAttribute("src", "https://media.giphy.com/media/4FrI84rhWCFSU/giphy.gif");
        break;
      case 2:
        button.innerHTML = "It's not a piece of cake";
        image.setAttribute("src", "https://media.giphy.com/media/l3vRmLrL8MfD9CIkU/giphy.gif");
        break;
      case 3:
        button.innerHTML = "It's a baby!";
        image.setAttribute("src", "https://media.giphy.com/media/4xpB3eE00FfBm/giphy.gif");
        break;
      case 4:
        button.innerHTML = "When is it due?";
        image.setAttribute("src", "https://media.giphy.com/media/xTk9ZzD6NuYrMuDBx6/giphy.gif");
        break;
      case 5:
        button.innerHTML = "Is it a boy or a girl?";
        image.setAttribute("src", "https://media.giphy.com/media/26ufm2tI0ODxTeRr2/giphy.gif");
        break;
      case 6:
        button.innerHTML = "Phoebe or Phoebo?";
        image.setAttribute("src", "https://media.giphy.com/media/UDszxjha8hXHO/giphy.gif");
        break;
      case 7:
        button.innerHTML = "Sir or Madam?";
        image.setAttribute("src", "https://media.giphy.com/media/uvQgpEBytkLte/giphy.gif");
        break;
      case 8:
        button.innerHTML = "Keep going!";
        image.setAttribute("src", "https://media.giphy.com/media/lfCTKCg4sw8rm/giphy.gif");
        break;
      case 9:
        button.innerHTML = "His or her arm?";
        image.setAttribute("src", "images/arm.jpg");
        break;
      case 10:
        button.innerHTML = "His or her toes?";
        image.setAttribute("src", "images/sono.jpg");
        break;
      default:
        result.setAttribute("style", "display: block;");
        marquee.setAttribute("style", "display: block;");
        button.setAttribute("style", "display: none;");
        image.setAttribute("style", "display: none;");
    }

    count++;

  });

}

initClicky();
