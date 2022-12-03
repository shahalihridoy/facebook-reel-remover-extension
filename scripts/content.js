// get element by html role and tag
const newsFeed = document.getElementById("ssrb_feed_start");
const postContainer = newsFeed?.nextElementSibling?.childNodes[1];

if (postContainer) {
  // add mutation observer to the post container
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      const posts = mutation.addedNodes || [];
      posts.forEach((post) => {
        if (post.innerText.includes("Reels and short videos")) {
          post.style.display = "none";
        }
      });
    });
  });

  observer.observe(postContainer, {
    childList: true,
  });
}
