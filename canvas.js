(function() {
  var context = document.getElementById('myCanvas').getContext('2d');
  var x = 250;
  var y = 100;
 stickFiqure();
  function stickFiqure() {
  context.clearRect(0,0, 1000, 1000);

  var img = document.createElement("img");
    img.src = "assets/ship.png";
    img.addEventListener("load", function() {
        context.drawImage(img, x, y);
    });

  document.addEventListener('keydown', function me(e){
    if (e.code === 'ArrowRight') {
      x += 20;
      document.removeEventListener('keydown', me);
      stickFiqure();
    }
    if (e.code === 'ArrowLeft') {
      x -= 20;
      document.removeEventListener('keydown', me);
      return stickFiqure();
    }
    if (e.code === 'ArrowUp') {
      y -= 20;
      document.removeEventListener('keydown', me);
      return stickFiqure();
    }
    if (e.code === 'ArrowDown') {
      y += 20;
      document.removeEventListener('keydown', me);
      return stickFiqure();
    }

  });



}
})()
