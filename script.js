

function initClicky() {

  const button = document.querySelector(
    '.clicky'
  );
  const images = document.querySelectorAll(
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
  const blocks = document.querySelector(
    '.blocks'
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
        button.innerHTML = "What's in my belly?";
        block_img.setAttribute("style", "display: block");
        let mql = window.matchMedia('(max-width: 480px)');
        if(!mql.matches) {
          block_button.setAttribute("style", "width: 70%");
        }
        break;

      case 1:
        button.innerHTML = "It's not a burrito";
        hideOldShowNew(1);
        break;
      case 2:
        button.innerHTML = "It's not a piece of cake";
        hideOldShowNew(2);
        break;
      case 3:
        button.innerHTML = "It's a baby!";
        hideOldShowNew(3);
        break;
      case 4:
        button.innerHTML = "When is it due?";
        hideOldShowNew(4);
        break;
      case 5:
        button.innerHTML = "Is it a boy or a girl?";
        hideOldShowNew(5);
        break;
      case 6:
        button.innerHTML = "Brother or Sister?";
        hideOldShowNew(6);
        break;
      case 7:
        button.innerHTML = "He or She?";
        hideOldShowNew(7);
        break;
      case 8:
        button.innerHTML = "Pink or Blue?";
        hideOldShowNew(8);
        break;
      case 9:
        button.innerHTML = "It's a...";
        images[8].classList.add('hide');
        break;
      default:
        result.classList.add('show');
        button.classList.add('hide');
        blocks.classList.add('hide');
    }

    count++;


  });

  function hideOldShowNew(caseVar) {
    images[caseVar-1].classList.add('hide');
    images[caseVar].classList.remove('hide');
    images[caseVar].classList.add('show');
  }

}

initClicky();
