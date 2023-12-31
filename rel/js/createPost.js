window.onload = () => {
  fetch("rel/json/posts.json")
  //fetch("https://api.npoint.io/baa876efb5a9693f0be9")
    .then((response) => response.json())
    .then((data) => {
      const postContainer = document.getElementById("vertical_content");
      for (const post of data) {
        console.log(post);
        const postElement = document.createElement("div");
        postElement.className = "post";

        const headerElement = document.createElement("header");
        headerElement.className = "post_header";

        const profile_img = document.createElement("img");
        profile_img.className = "profile_img";
        profile_img.src = "rel/image/me.png";
        headerElement.appendChild(profile_img);

        const postDate = document.createElement("p");
        postDate.textContent = post.time;
        headerElement.appendChild(postDate);

        const post_content = document.createElement("div");
        post_content.className = "post_content";

        if (post.imageName !== "") {
          const post_img = document.createElement("img");
          post_img.alt = "post_image";
          post_img.src = "rel/image/post_images/" + post.imageName;
          post_content.appendChild(post_img);
        }

        const postContentText = document.createElement("p");
        postContentText.textContent = post.postContent;
        post_content.appendChild(postContentText);

        const like_img = document.createElement("img");
        like_img.className = "profile_img";
        like_img.src = "rel/image/like-button.png";
        post_content.appendChild(like_img);

        postElement.appendChild(headerElement);
        postElement.appendChild(post_content);

        postContainer.appendChild(postElement);
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
};
