const posts = [
    {
      id: 1,
      title: "The Adventures of Alice in Wonderland",
      story:
        "Alice was beginning to get very tired of sitting by her sister on the bank and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations.",
      authorName: "Lewis Carroll",
      img: "https://ik.imagekit.io/panmac/tr:f-auto,w-740,pr-true//bcd02f72-b50c-0179-8b4b-5e44f5340bd4/84f9dc39-0868-4cec-aeaa-2356387f37ce/Alice%E2%80%99s%20Adventures%20in%20Wonderland%20-%20Header.png",
    },
    {
      id: 2,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      story:
        "One ring to rule them all, one ring to find them, one ring to bring them all and in the darkness bind them, in the Land of Mordor where the Shadows lie.",
      authorName: "J.R.R. Tolkien",
      img: "https://img.hulu.com/user/v3/artwork/3c4e0a9f-c6f2-44f4-a703-a18c6be2a937?base_image_bucket_name=image_manager&base_image=243fcf14-8e45-4441-96a8-be510660958a&size=600x338&format=webp",
    },
    {
      id: 3,
      title: "Pride and Prejudice",
      story:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife.",
      authorName: "Jane Austen",
      img: "https://wellsvillesun.com/wp-content/uploads/2024/01/pride-and-prejudice-book-summary.jpg.webp",
    },
  ]
  
  const bloggers = [
    {
      id: 1,
      firstName: "Alice",
      lastName: "Johnson",
      avatar: "https://www.w3schools.com/howto/img_avatar2.png"
    },
    {
      id: 2,
      firstName: "Bob",
      lastName: "Smith",
      avatar: "https://www.w3schools.com/w3images/avatar2.png"
    },
    {
      id: 3,
      firstName: "Monica",
      lastName: "Brown",
      avatar: "https://www.w3schools.com/w3images/avatar6.png"
    }
  ];


document.addEventListener("DOMContentLoaded", () => {
    const workspaceContainer = document.getElementById("workspace-container");

    const mainSection = document.createElement("div");
    mainSection.id = "main-section";

    posts.forEach(post => {
        const postCard = document.createElement("div");
        postCard.classList.add("post");

        const postImage = document.createElement("img");
        postImage.src = post.img;
        postImage.alt = post.title;
        postImage.classList.add("post-image");

        const postTitle = document.createElement("h2");
        postTitle.textContent = post.title;

        const postStory = document.createElement("p");
        postStory.textContent = post.story;

        const postAuthor = document.createElement("p");
        postAuthor.classList.add("post-author");
        postAuthor.textContent = `Author: ${post.authorName}`;

        postCard.appendChild(postImage);
        postCard.appendChild(postTitle);
        postCard.appendChild(postStory);
        postCard.appendChild(postAuthor);
        mainSection.appendChild(postCard);
    });

    const sidebar = document.createElement("aside");
    sidebar.id = "sidebar";

    const sidebarTitle = document.createElement("h3");
    sidebarTitle.textContent = "Bloggers";
    sidebar.appendChild(sidebarTitle);

    const bloggersList = document.createElement("ul");
    bloggersList.id = "bloggers-list";

    bloggers.forEach(blogger => {
        const bloggerItem = document.createElement("li");
        bloggerItem.classList.add("blogger");

        const bloggerAvatar = document.createElement("img");
        bloggerAvatar.src = blogger.avatar;
        bloggerAvatar.alt = `${blogger.firstName} ${blogger.lastName}`;
        bloggerAvatar.classList.add("blogger-avatar");

        const bloggerName = document.createElement("p");
        bloggerName.textContent = `${blogger.firstName} ${blogger.lastName}`;

        bloggerItem.appendChild(bloggerAvatar);
        bloggerItem.appendChild(bloggerName);
        bloggersList.appendChild(bloggerItem);
    });

    sidebar.appendChild(bloggersList);
    workspaceContainer.appendChild(mainSection);
    workspaceContainer.appendChild(sidebar);
});

