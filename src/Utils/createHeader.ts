export const createHeader = () => {
  const headerContainer = document.getElementById("headerContainer");

  if (!headerContainer) return;

  const imgContainer = document.createElement("div");
  const img = document.createElement("img");

  imgContainer.className = "img-container";
  img.src = "/src/assets/PokemonWho.png";
  img.alt = "Whos that pokemon";

  imgContainer.appendChild(img);
  headerContainer.appendChild(imgContainer);
};
