window.onload = function() {
    console.log("hello world")
    let tagEles = document.getElementsByClassName("post");
    console.log(tagEles)
    for(const post of tagEles){
        let post_header = post.querySelector(".post_header")
        console.log(post_header)
        //console.log(document.post_header.getElementsByTagName("P"))
    }

}