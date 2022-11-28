function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

document.addEventListener(
  "scroll",
  debounce(() => {
    const posts = document.querySelectorAll("div.x1lliihq") || [];
    Array.from(posts).forEach((post) => {
      if (post.innerText.includes("Reels and short videos")) {
        post.style.display = "none";
      }
    });
  }, 500)
);
