/** Built the navigation bar using JavaScript **/
let sectionsElements = Array.from(document.getElementsByTagName("section"));

sectionsElements.forEach((section) => {
  let sectionId = section.getAttribute("id");
  let sectionName = section.getAttribute("data-nav");
  let navBar = document.getElementById("navbar__list");

  // Create a new list item
  let listItem = document.createElement("li");

  // Create a new anchor element
  let anchor = document.createElement("a");
  anchor.setAttribute("href", `#${sectionId}`);
  anchor.classList.add("menu__link");
  anchor.innerText = sectionName;

  // Append the anchor to the list item
  listItem.appendChild(anchor);

  // Append the list item to the navigation bar
  navBar.appendChild(listItem);
});

/** Added smooth scrolling **/

let links = document.querySelectorAll("a[href^='#']");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

/** Added an active state **/
window.addEventListener("scroll", () => {
  sectionsElements.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const link = document.querySelector(`a[href="#${section.id}"]`);

    if (rect.top <= 150 && rect.bottom >= 150) {
      section.classList.add("active");
      link.classList.add("active");
    } else {
      section.classList.remove("active");
      link.classList.remove("active");
    }
  });
});
/** Added a comment form **/
const commentForm = document.getElementById("comment-form");
const submitBtn = document.getElementById("submit-btn");

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form input values directly
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const comment = document.getElementById("comment-value").value;

  // Create new comment element
  const commentElement = document.createElement("div");
  commentElement.classList.add("comment");

  // Add comment content
  commentElement.innerHTML = `
    <p class="content">${comment}</p>
    <h3 class="name">${name}</h3>
    <p class="email">${email}</p>
  `;

  // Add the new comment to the comments section
  document.querySelector(".comments").appendChild(commentElement);

  // Reset the form
  commentForm.reset();
});
