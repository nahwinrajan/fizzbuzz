window.onload = () => {
  let str = "";
  let result = "";
  for(let i=1; i <= 100; i++) {
    str = "";
    str += (i % 3 == 0) ? "fizz" : "";
    str += (i % 5 == 0) ? "buzz" : "";
    str += ( str === "" ) ? i : "";

    str += " ";
    result += str;
  }

  document.write('<p>' + result + '</p>');
}
