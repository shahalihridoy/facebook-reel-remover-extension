// get element by html role and tag
const newsFeed = document.getElementById("ssrb_feed_start");
const postContainer = newsFeed?.nextElementSibling?.childNodes[1];

// add mutation observer to the post container
if (postContainer) {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      const posts = mutation.addedNodes || [];
      posts.forEach((post) => {
        if (post) {
          const italics = post.getElementsByTagName("i");
          const hasReels = Array.from(italics).some((italic) =>
            italic?.nextElementSibling?.innerText?.includes(
              "Reels and short videos"
            )
          );
          if (hasReels) {
            console.log("Removing post with reels");
            post.style.display = "none";
          }
        }
      });
    });
  });

  observer.observe(postContainer, {
    childList: true,
  });
}
