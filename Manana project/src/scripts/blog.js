import { Storage } from './storage.js';
import { truncateText } from './storage.js';  
import { ValidationError } from './storage.js';

document.addEventListener("DOMContentLoaded", displayPosts);

function displayPosts() {
    const postsContainer = document.querySelector(".posts-container");
    const posts = Storage.getItem("posts");

    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        const titleElement = document.createElement("h2");
        titleElement.innerHTML = post.title;

        const storyPreview = document.createElement("p");
        storyPreview.innerText = truncateText(post.story, 100);

        const imageElement = document.createElement("img");
        imageElement.src = post.imageLink;
        imageElement.alt = post.title;

        postElement.appendChild(titleElement);
        postElement.appendChild(storyPreview);
        postElement.appendChild(imageElement);

        postsContainer.appendChild(postElement);
    });
}

export function createAndRedirect() {
    const title = document.getElementById("title").value.trim();
    const story = document.getElementById("story").value.trim();
    const imageLink = document.getElementById("imageLink").value.trim();

    if (!title || !story || !imageLink) {
        throw new ValidationError("Please fill out all fields.");
    }

    const post = { title, story, imageLink };
    const posts = Storage.getItem('posts');
    posts.push(post);

    Storage.setItem('posts', posts);

    window.location.href = "home.html";
}
















































// document.addEventListener("DOMContentLoaded", displayPosts);

// function displayPosts() {
//     const postsContainer = document.querySelector(".posts-container");
//     const posts = JSON.parse(localStorage.getItem('posts')) || []; 
//     console.log(localStorage.getItem('posts'));


//     postsContainer.innerHTML = ''; 

//     posts.forEach(post => {
//         const postElement = document.createElement("div");
//         postElement.classList.add("post");

//         const titleElement = document.createElement("h2");
//         titleElement.innerText = post.title;

//         const storyPreview = document.createElement("p");
//         storyPreview.innerText = post.story.length > 100 
//             ? post.story.substring(0, 100) + '...' 
//             : post.story;

//         const imageElement = document.createElement("img");
//         imageElement.src = post.imageLink;
//         imageElement.alt = post.title;

//         postElement.appendChild(titleElement);
//         postElement.appendChild(storyPreview);
//         postElement.appendChild(imageElement);

//         postsContainer.appendChild(postElement);

//         console.log(localStorage.getItem('posts'));

//     });
// }

//   function createAndRedirect() {
//     const title = document.getElementById("title").value;
//     const story = document.getElementById("story").value;
//     const imageLink = document.getElementById("imageLink").value;

//     if (!title || !story || !imageLink) {
//         alert("Please fill out all fields.");
//         return;
//     }

//     const post = { title, story, imageLink };

//     let posts = JSON.parse(localStorage.getItem('posts')) || [];
//     posts.push(post); 

//     localStorage.setItem('posts', JSON.stringify(posts));

//     localStorage.clear();

//     window.location.href = "home.html";
// }




  











































