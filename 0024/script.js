
let n = Number(prompt("Введите высоту ёлки:"));
let spruce = "";
let branches1 = "/";
let branches2 = "\\";

for(i = 1; i <= n; i++) {
    spruce = "";
  for (j = i; j < n; j++) {
    spruce += " ";
  }
  spruce += "/";
  for(k = 0; k < (i*2)-2; k++) {
    spruce += " ";
  }
  console.log(spruce + branches2);
}