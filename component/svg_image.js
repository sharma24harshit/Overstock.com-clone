const svg_image = () => {
  return `<div class="flipButton small">
  <svg
    class="arrowIcon"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke="#2F3337"
    fill="#2F3337"
  >
    <title>Chevron Down</title>
    <path
      d="M2 7l10 10L22 7"
      stroke="inherit"
      fill="none"
      stroke-width="2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
  <p class="flipText">Details</p>
</div>`;
};

export {svg_image};
