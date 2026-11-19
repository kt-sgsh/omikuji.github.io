const fortunes = ["大吉 🎉", "中吉 😊", "小吉 🌸", "吉 🍀", "末吉 🌱"];

document.querySelector("#draw").addEventListener("click", 
() => {
  const index = Math.floor(Math.random() * fortunes.length);
  document.querySelector("#result").textContent = fortunes[index];
});
