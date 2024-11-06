let menu = 0;

document.getElementById('menu').addEventListener('click', function() {

    if(menu == 0)
    {
        document.getElementById('menuPantalla').style.left = '0';
        menu = 1
    }
    else
    {
        document.getElementById('menuPantalla').style.left = '-100%';
        menu = 0
    }

    
  });


(function () {
    document.querySelector('.hamburger-menu').addEventListener('click', function() {
      document.querySelector('.bar').classList.toggle('animate');
    });
  })();