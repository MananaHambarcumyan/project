function createElement(tag, attributes, content) {
  const element = document.createElement(tag);
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  if (typeof content === "string") {
    element.textContent = content;
  } else if (Array.isArray(content)) {
    content.forEach(child => element.appendChild(child));
  }
  return element;
}


function createHomeLayout() {
  const container = createElement("div", { class: "container-root" }, [
    createElement("header", { class: "header" }, [
      createElement("a", { href: "./index.html" }, "Log In"),
      createElement("a", { href: "./create-post.html" }, "Create Blog") 
    ]),
    createElement("main", { class: "main-section" }, [
      createElement("nav", { class: "sidebar" }, "sidebar"),
      createElement("div", { class: "section" }, [
        createElement("section", { class: "box" }, "section"),
        createElement("section", { class: "box" }, "section"),
        createFooter(),
      ]),
    ]),
  ]);

  document.body.appendChild(container);
}


function createFooter() {
  return createElement("footer", { class: "footer", id: "time-footer" }, new Date().toString());
}

setInterval(() => {
  const section = document.querySelector("div.section");

  if (section) {
    console.log("removed");
    const footer = document.querySelector("footer");
    if (footer) section.removeChild(footer);
  }

  const footer = createFooter();
  section.appendChild(footer);
}, 1000);

document.addEventListener("DOMContentLoaded", createHomeLayout);

  