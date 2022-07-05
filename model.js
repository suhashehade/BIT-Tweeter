
const Tweeter = function(){
    let posts = 
        [
            {
                text: "First post!",
                id: "p1",
                comments: [
                    { id: "c1", text: "First comment on first post!" },
                    { id: "c2", text: "Second comment on first post!!" },
                    { id: "c3", text: "Third comment on first post!!!" }
                ]
            },
            {
                text: "Aw man, I wanted to be first",
                id: "p2",
                comments: [
                    { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                    { id: "c5", text: "Yeah, believe in yourself!" },
                    { id: "c6", text: "Haha second place what a joke." }
                ]
            }
        ]
    

    let postIdCounter = 2;
    let commentIdCounter = 6;

    const addPost = function(text){
        postIdCounter ++;
        let post = {
            text: text,
            id: "p" + postIdCounter,
            comments: []
        }
        posts.push(post);
        
    }

    const getPosts = function(){
        return posts;
    }

    const removePost = function(postId){
        for(let index in posts){
            if(posts[index].id === postId){
                posts.splice(index, 1);
            }
        }
    }

    const addComment = function(postId, text){
        commentIdCounter ++;
       let comment = {
          id: "c" + commentIdCounter,
          text: text
       }
       for(let post of posts){
         if(post.id === postId){
            post.comments.push(comment)
         }
       }
      
    }

    const removeComment = function(postId, commentId){
        for(let post of posts){
            if(post.id === postId){
               for(let index in post.comments){
                if(post.comments[index].id === commentId){
                    post.comments.splice(index, 1);
                }
               }
            }
        }
    }

    return {
        addPost: addPost,
        getPosts: getPosts,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}


// const tweeter = Tweeter()

// tweeter.addPost("This is my own post!")
// tweeter.getPosts()
// //This should be added to the posts array:
// //{text: "This is my own post!", id: "p3", comments: []}

// tweeter.removePost("p1")
// tweeter.getPosts()
// //There should only be two posts in the post's array:
// //{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
// //{text: "This is my own post!", id: "p3", comments: []}

// //============================
// //============================
// //Stop here
// //Make sure everything works. Then keep going
// //============================
// //============================

// tweeter.addComment("p3", "Damn straight it is!")
// tweeter.addComment("p2", "Second the best!")
// tweeter.getPosts()
// //This should be added to the third post's comments array:
// //{id: "c7", text: "Damn straight it is!"}

// //This should be added to the second post's comments array:
// //{id: "c8", text: "Second the best!"}

// tweeter.removeComment("p2", "c6")
// tweeter.getPosts()
// //This comment should be removed:
// //{id: "c6", text: "Haha second place what a joke."}

