const time = 5000;
const step = 1;

function outNum_1(num, elem) {
  let k = document.querySelector("#out-1");
  b = 0;
  let c = Math.round(time / (num / step));
  let interval = setInterval(() => {
    b = b + step;
    if (b == num) {
      clearInterval(interval);
    }
    k.innerHTML = b;
  }, c);
}

function outNum_2(num, elem) {
    let e = document.querySelector("#out-2");
    n = 0;
    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
      n = n + step;
      if (n == num) {
        clearInterval(interval);
      }
      e.innerHTML = n;
    }, t);
  }


  function outNum_3(num, elem) {
    let ee = document.querySelector("#out-3");
    nn = 0;
    let tt = Math.round(time / (num / step));
    let interval = setInterval(() => {
      nn = nn + step;
      if (nn == num) {
        clearInterval(interval);
      }
      ee.innerHTML = nn;
    }, tt);
  }



function outNum_4(num, elem) {
let kk = document.querySelector("#out-4");
bb = 0;
let cc = Math.round(time / (num / step));
let interval = setInterval(() => {
    bb = bb + step;
    if (bb == num) {
    clearInterval(interval);
    }
    kk.innerHTML = bb;
}, cc);
}


outNum_1(4, "#out-1");
outNum_2(712, "#out-2");
outNum_3(5, "#out-3");
outNum_4(1, "#out-4");
