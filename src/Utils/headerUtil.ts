export const createHeader = () => {
  const headerContainer = document.getElementById("headerContainer");

  if (!headerContainer) return;

  const imgContainer = document.createElement("div");
  const img = document.createElement("img");

  imgContainer.className = "img-container";
  img.src = "../assets/pokemonwho.png";
  img.alt = "Whos that pokemon";

  imgContainer.appendChild(img);
  headerContainer.appendChild(imgContainer);
};

// export const createNavbar = () => {
//   const headerContainer = document.getElementById("headerContainer");

//   if (!headerContainer) return;

//   const nav = document.createElement("nav");
//   const ul = document.createElement("ul");
//   const li = document.createElement("li");

//   nav.id = "navContainer";
//   nav.className = "nav-container";

//   li.innerHTML = "POKÉDEX";

//   ul.appendChild(li);
// };
