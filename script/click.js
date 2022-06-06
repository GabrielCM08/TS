let x = 0;
function clicker() {
  x += 1;
  let res = window.document.getElementById("clickCount");
  res.innerHTML = `<p>Clicked: <strog>${x}</strong>;`;
}

function reset() {
  x = 0;
  let res = window.document.getElementById("clickCount");
  res.innerHTML = `<p>Clicked: <strog>${x}</strong>;`;
  return x;
}
