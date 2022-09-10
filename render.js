const Renderer = function () {
  const renderPosts = function (posts) {
    $("#posts").html("");
    
    for (let post of posts) {
      $("#posts").append(
        `<div class="post" id=${post.id} data-id="${post.id}"> ${post.text}
            <div id="comments" class="comments">
              <input type="text" placeholder="Add your comment ..." class="comment-input">
              <button class="add-comment">Add Comment</button>
           
            </div>
            <button class="delete delete-post">Delete Post</button>
         </div>`
      );
      let postId = post.id;
      let postSelector = "#" + postId;
      for (let comment of post.comments) {
        $("body").find(postSelector).find(".comments").append(`
              <div class="comment" id="${comment.id}" data-id="${comment.id}">
                 <button class="deleteComment">X</button>
              ${comment.text}</div>`);
      }
    }
  };
  return {
    renderPosts: renderPosts,
  };
};
