const Renderer = function () {
  const renderPosts = function (posts) {
    $("#posts").html("");
    for (let post of posts) {
      $("#posts").append(
        `<div class="post" data-id="${post.id}">${post.text}</div>`
      );
      let index = post.id.charAt(1) - 1;
      for (let comment of posts[index].comments) {
        $(".post").append(
          `<div class="comments">
               <div class="comment" data-id="${comment.id}">${comment.text}</div>
            </div>`
        );
      }
    }
  };

  return {
    renderPosts: renderPosts,
  };
};
