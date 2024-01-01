const galleryContainer = document.getElementById("gallery");

const galleryArray = ["speaker.jpg", "speaker-closeup.jpg"];

const baseUrl = "./Assets/images/Media/";

const createGallery = () => {
  galleryArray.forEach((img, index) => {
    const galleryFigure = document.createElement("figure");
    const galleryImage = document.createElement("img");
    const galleryImageSovs = baseUrl + img;
    galleryImage.src = galleryImageSovs;

    const galleryHeaderArray = ["Speaker One", "Speaker Two"];

    const galleryFigcap = document.createElement("figcaption");
    const galleryFigHeader = document.createElement("h3");
    galleryFigHeader.textContent = galleryHeaderArray[index];

    galleryFigcap.appendChild(galleryFigHeader);

    const galleryDescText = document.createElement("p");
    galleryDescText.textContent =
      "Eveniet, sunt cupiditate quidem aliquid placeat quaerat aspernatur repellendus totam hic maiores, nam officiis laboriosam voluptate tempora blanditiis vero ad labore quia?";

    galleryFigcap.appendChild(galleryDescText);

    galleryFigure.appendChild(galleryImage);
    galleryFigure.appendChild(galleryFigcap);
    galleryContainer.appendChild(galleryFigure);

    galleryFigure.addEventListener("click", () => {
      const modalFigure = document.createElement("figure");
      modalFigure.classList.add("modal-figure");
      const modalImage = galleryImage.cloneNode("true");

      modalFigure.appendChild(modalImage);

      galleryContainer.appendChild(modalFigure);

      modalFigure.addEventListener("click", () => {
        modalFigure.remove();
      });
    });
  });
};

window.addEventListener("load", createGallery);
