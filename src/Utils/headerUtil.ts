export const createHeader = () => {
  const headerContainer = document.getElementById("headerContainer");

  if (!headerContainer) return;

  const imgContainer = document.createElement("div");
  const img = document.createElement("img");

  imgContainer.className = "img-container";
  img.src = "pokemonwho.png";
  img.alt = "Whos that pokemon";

  imgContainer.appendChild(img);
  headerContainer.appendChild(imgContainer);
};

export const createNavbar = () => {
  const headerContainer = document.getElementById("headerContainer");

  if (!headerContainer) return;

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const link = document.createElement("a");

  nav.id = "navContainer";
  nav.className = "nav-container";

  link.innerHTML = `<img src="Pokédex.svg" alt="Pokédex icon.">`;

  ul.appendChild(link);

  headerContainer.appendChild(ul);
};
