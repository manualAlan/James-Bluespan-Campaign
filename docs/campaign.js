(() => {
  const buttons = document.querySelectorAll("[data-share-campaign]");
  const status = document.querySelector("[data-share-status]");
  const campaignUrl = "https://manualalan.github.io/James-Bluespan-Campaign/";
  buttons.forEach((button) => {
    button.hidden = false;
    button.addEventListener("click", async () => {
      if (!status) return;
      status.replaceChildren();
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(campaignUrl);
          status.textContent = "Campaign link copied. Share it with your community.";
        } else {
          status.textContent = `Share this link: ${campaignUrl}`;
        }
      } catch {
        status.textContent = `Share this link: ${campaignUrl}`;
      }
    });
  });
  document.querySelectorAll(".campaign-mobile-nav a").forEach((link) => {
    link.addEventListener("click", () => link.closest("details").removeAttribute("open"));
  });
})();
