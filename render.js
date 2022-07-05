const Renderer = function () {
  const renderPosts = function (posts) {
    $("#posts").html("");
    for (let post of posts) {
      $("#posts").append(
        `<div class="post" id="${post.id}" data-id="${post.id}">${post.text}</div>`
      );
      let index = post.id.charAt(1) - 1;
      let post_id = "#" + post.id;
      for (let comment of posts[index].comments) {
        $(post_id).append(
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
