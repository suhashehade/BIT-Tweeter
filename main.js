const tweeter = Tweeter(); //model
const renderer = Renderer(); // view

const render = function () {
  renderer.renderPosts(tweeter.getPosts());
};

$("#addPost").on("click", function () {
  let postInputElement = $("#post-input");
  let postText = postInputElement.val();
  if (postText != "") {
    $("#post-input").val("");
    tweeter.addPost(postText);
    render();
  }
});

$("body").on("click", ".delete-post", function () {
  const postElement = $(this).closest(".post");
  const postId = postElement.data().id;
  tweeter.removeComment();
  tweeter.removePost(postId);
  render();
});

$("body").on("click", ".add-comment", function () {
  let commentInputElement = $(this).siblings("input");
  let postId = $(this).closest(".post").data().id;
  let commentText = commentInputElement.val();
  if (commentText == "") {
    return;
  }
  tweeter.addComment(postId, commentText);
  render();
});

$("body").on("click", ".deleteComment", function () {
  let comment = $(this).closest(".comment");
  let post = comment.closest(".post");
  let postId = post.data().id;
  let commentId = comment.data().id;
  tweeter.removeComment(postId, commentId);
  render();
});

render();
