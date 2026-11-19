const fortunes = ["大吉 🎉", "中吉 😊", "小吉 🌸", "吉 🍀", "末吉 🌱"];
const result = document.querySelector("#result");
const share = document.querySelector("#share");

document.querySelector("#draw").addEventListener("click", () => {
  const index = Math.floor(Math.random() * fortunes.length);
  const fortune = fortunes[index];
  result.textContent = fortune;
  const message = `今日のおみくじは「${fortune}」でした！🔮\n#おみくじ`;
  share.href = `https://x.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(location.href)}`;
  share.classList.remove("disabled");
  share.removeAttribute("aria-disabled");
  share.removeAttribute("tabindex");
  result.classList.remove("pop");
  void result.offsetWidth; // 毎回アニメーションを再生する
  result.classList.add("pop");
});
