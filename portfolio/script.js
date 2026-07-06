(function () {
  "use strict";

  const grid = document.getElementById("projectGrid");
  const gridCount = document.getElementById("gridCount");
  const emptyState = document.getElementById("emptyState");
  const filterBtns = document.querySelectorAll(".filter-btn");

  const overlay = document.getElementById("modalOverlay");
  const modalClose = document.getElementById("modalClose");
  const modalCategory = document.getElementById("modalCategory");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const specSheet = document.getElementById("specSheet");
  const mediaStage = document.getElementById("mediaStage");
  const mediaDots = document.getElementById("mediaDots");
  const mediaPrev = document.getElementById("mediaPrev");
  const mediaNext = document.getElementById("mediaNext");

  let activeFilter = "all";
  let currentProject = null;
  let currentMediaIndex = 0;

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- CARD RENDERING ---------- */

  function cardThumb(project) {
    const first = project.media && project.media[0];
    if (!first) return "";
    if (first.type === "video") {
      return `
        <video muted loop playsinline preload="metadata">
          <source src="${first.src}" />
        </video>
        <span class="card-video-badge">VIDEO</span>`;
    }
    return `<img src="${first.src}" alt="${project.title}" loading="lazy" />`;
  }

  function renderGrid() {
    const filtered = PROJECTS.filter(
      (p) => activeFilter === "all" || p.category === activeFilter
    );

    grid.innerHTML = filtered
      .map(
        (p, i) => `
      <article class="project-card" data-id="${p.id}" tabindex="0">
        <div class="card-media">${cardThumb(p)}</div>
        <div class="card-body">
          <span class="card-category">${p.category.toUpperCase()}</span>
          <h3 class="card-title">${p.title}</h3>
          <p class="card-summary">${p.summary}</p>
        </div>
      </article>`
      )
      .join("");

    gridCount.textContent = `${filtered.length} PROJECT${
      filtered.length === 1 ? "" : "S"
    }`;
    emptyState.hidden = filtered.length !== 0;

    // Autoplay muted video thumbnails on hover, pause on leave (kept subtle)
    grid.querySelectorAll(".project-card").forEach((card) => {
      const video = card.querySelector("video");
      if (video) {
        card.addEventListener("mouseenter", () => video.play().catch(() => {}));
        card.addEventListener("mouseleave", () => {
          video.pause();
          video.currentTime = 0;
        });
      }
      card.addEventListener("click", () => openModal(card.dataset.id));
      card.addEventListener("keypress", (e) => {
        if (e.key === "Enter") openModal(card.dataset.id);
      });
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      activeFilter = btn.dataset.filter;
      renderGrid();
    });
  });

  /* ---------- MODAL ---------- */

  function openModal(id) {
    const project = PROJECTS.find((p) => p.id === id);
    if (!project) return;
    currentProject = project;
    currentMediaIndex = 0;

    modalCategory.textContent = project.category.toUpperCase();
    modalTitle.textContent = project.title;
    modalDesc.textContent = project.description || project.summary;

    specSheet.innerHTML = Object.entries(project.specs || {})
      .map(
        ([key, val]) =>
          `<div><dt>${key.toUpperCase()}</dt><dd>${val}</dd></div>`
      )
      .join("");

    renderMedia();
    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
    modalClose.focus();
  }

  function closeModal() {
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
    mediaStage.innerHTML = "";
    currentProject = null;
  }

  function renderMedia() {
    if (!currentProject) return;
    const items = currentProject.media || [];
    const item = items[currentMediaIndex];
    if (!item) {
      mediaStage.innerHTML = "";
      return;
    }

    mediaStage.innerHTML =
      item.type === "video"
        ? `<video src="${item.src}" ${
            item.poster ? `poster="${item.poster}"` : ""
          } controls autoplay muted playsinline></video>`
        : `<img src="${item.src}" alt="${currentProject.title}" />`;

    const showNav = items.length > 1;
    mediaPrev.style.display = showNav ? "flex" : "none";
    mediaNext.style.display = showNav ? "flex" : "none";

    mediaDots.innerHTML = showNav
      ? items
          .map(
            (_, i) =>
              `<span class="media-dot ${
                i === currentMediaIndex ? "is-active" : ""
              }"></span>`
          )
          .join("")
      : "";
  }

  function stepMedia(delta) {
    if (!currentProject) return;
    const total = currentProject.media.length;
    currentMediaIndex = (currentMediaIndex + delta + total) % total;
    renderMedia();
  }

  mediaPrev.addEventListener("click", () => stepMedia(-1));
  mediaNext.addEventListener("click", () => stepMedia(1));
  modalClose.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (!overlay.classList.contains("is-open")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") stepMedia(-1);
    if (e.key === "ArrowRight") stepMedia(1);
  });

  renderGrid();
})();
