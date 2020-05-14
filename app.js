let start = new Date().getTime();

let click = 1;
$('html').click(function () {
  click++;
});


function makeJerryShapeAppear() {

  let x = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
 
  let y = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

  if (x <= 480 && y <= 853) { 

    let top = Math.random() * 300;

    let left = Math.random() * 300;

    let width = (Math.random() * 70) + 20;

    document.getElementById('jerryImg').style.width = width + 'px';
    document.getElementById('jerryShape').style.top = top + 'px';
    document.getElementById('jerryShape').style.left = left + 'px';
    document.getElementById('jerryShape').style.display = 'block';

    start = new Date().getTime();

  } else if (x <= 960 && y <= 800) {
    

    let top = Math.random() * 300;

    let left = Math.random() * 800;

    let width = (Math.random() * 90) + 40;

    document.getElementById('jerryImg').style.width = width + 'px';
    document.getElementById('jerryShape').style.top = top + 'px';
    document.getElementById('jerryShape').style.left = left + 'px';
    document.getElementById('jerryShape').style.display = 'block';

    start = new Date().getTime();

  } else {
    let top = Math.random() * 300;

    let left = Math.random() * 1000;

    let width = (Math.random() * 100) + 50;

    document.getElementById('jerryImg').style.width = width + 'px';
    document.getElementById('jerryShape').style.top = top + 'px';
    document.getElementById('jerryShape').style.left = left + 'px';
    document.getElementById('jerryShape').style.display = 'block';

    start = new Date().getTime();

  }
}


function appearAfterDelay() {

  let end = new Date().getTime();
  let t = (end - start) / 1000;
  if (t >= 0.1 && t <= 0.69) {

    document.body.style.backgroundColor = '#00ffff';
    document.getElementById('tomShape').style.textAlign = 'center';
    document.getElementById('tomShape').style.textAlign = 'center';
    document.getElementById('tomShape').style.display = 'block';
    document.getElementById('display').style.display = 'none';

    let end = new Date().getTime();
    let timeTaken = (end - start) / 1000;
    document.getElementById('finishTime').innerHTML = timeTaken.toFixed(2) + "s and used " + click + " clicks";

    document.getElementById('tomButton').onclick = function () {
      document.getElementById('tomShape').style.display = "none";
      location.reload();
    };

  } else {
    setTimeout(makeJerryShapeAppear, Math.random() * 2000);
  }
}

appearAfterDelay();


document.getElementById('jerryShape').onclick = function () {
  document.getElementById('jerryShape').style.display = "none";

  let end = new Date().getTime();
  let timeTaken = (end - start) / 1000;
  document.getElementById('timeTaken').innerHTML = timeTaken.toFixed(2) + "s";
  appearAfterDelay();

};



