(function () {
  var config = window.SITE_CONFIG || {};

  function normalizePath(pathname) {
    if (!pathname) return "home";
    return pathname.replace(/^\/+|\/+$/g, "").replace(/[^a-zA-Z0-9_-]+/g, "-") || "home";
  }

  function normalizeLabel(text) {
    if (!text) return "";
    return text
      .trim()
      .replace(/\s+/g, "_")
      .replace(/[^\u4e00-\u9fa5a-zA-Z0-9_-]+/g, "")
      .replace(/_+/g, "_")
      .replace(/^_+|_+$/g, "")
      .slice(0, 40);
  }

  function isButtonStyle(link) {
    return /\bbtn\b|\bbtn-/.test(link.className || "");
  }

  function getLinkLabel(link) {
    return normalizeLabel(
      link.getAttribute("data-cta") ||
      link.getAttribute("aria-label") ||
      link.textContent ||
      ""
    );
  }

  function isSameOrigin(url) {
    return url.origin === window.location.origin;
  }

  function isInternalHref(href) {
    if (!href || href.charAt(0) === "#") return false;
    if (/^(mailto:|tel:|javascript:)/i.test(href)) return false;

    try {
      var url = new URL(href, window.location.origin);
      return isSameOrigin(url);
    } catch (error) {
      return false;
    }
  }

  function mergeTrackingParams(url, params) {
    Object.keys(params).forEach(function (key) {
      if (params[key]) {
        url.searchParams.set(key, params[key]);
      }
    });
    return url.toString();
  }

  function buildPromoUrl(contentName) {
    var landingUrl = (config.promoLandingUrl || "").trim();
    if (!landingUrl) return "#";

    var url = new URL(landingUrl);
    if (config.promoProxyCode) {
      url.searchParams.set("proxy", config.promoProxyCode);
    }

    return mergeTrackingParams(url, {
      utm_source: config.utmSource || config.siteDomain || window.location.hostname,
      utm_medium: "floating_ad",
      utm_campaign: config.utmCampaign || "ys89_registration_bonus",
      utm_content: contentName || "promo_default"
    });
  }

  function applyLinkTracking() {
    var currentPage = normalizePath(window.location.pathname);

    document.querySelectorAll("a[href]").forEach(function (link) {
      var href = link.getAttribute("href");
      if (!href) return;

      if (link.hasAttribute("data-no-utm")) return;

      var linkLabel = getLinkLabel(link);
      var contentValue = linkLabel
        ? currentPage + "_" + linkLabel
        : currentPage + "_link";

      if (isInternalHref(href)) {
        var internalUrl = new URL(href, window.location.origin);
        mergeTrackingParams(internalUrl, {
          utm_source: config.utmSource || config.siteDomain || window.location.hostname,
          utm_medium: isButtonStyle(link) ? "internal_cta" : "internal_link",
          utm_campaign: config.internalCampaign || "site_navigation",
          utm_content: contentValue + "_to_" + normalizePath(internalUrl.pathname)
        });
        link.href = internalUrl.toString();
        return;
      }

      try {
        var externalUrl = new URL(href);
        if (externalUrl.hostname === "ys89.bet") {
          mergeTrackingParams(externalUrl, {
            utm_source: config.utmSource || config.siteDomain || window.location.hostname,
            utm_medium: isButtonStyle(link) ? "external_cta" : "external_link",
            utm_campaign: config.utmCampaign || "ys89_registration_bonus",
            utm_content: contentValue + "_outbound"
          });
          link.href = externalUrl.toString();
        }
      } catch (error) {
        return;
      }
    });
  }

  function renderFloatingAds() {
    if (!config.promoDesktopImage && !config.promoMobileImage) return;

    var promoUrlDesktop = buildPromoUrl("desktop_right");
    var promoUrlMobile = buildPromoUrl("mobile_bottom");
    var wrapper = document.createElement("div");
    wrapper.className = "float-ad-shell";
    wrapper.innerHTML =
      '<aside class="float-ad float-ad-desktop" aria-label="YS夜色註冊優惠">' +
      '  <button class="float-ad-close" type="button" aria-label="關閉優惠">×</button>' +
      '  <a class="float-ad-link" data-cta="desktop_floating_368" href="' + promoUrlDesktop + '" target="_blank" rel="noopener sponsored">' +
      '    <img src="' + (config.promoDesktopImage || "") + '" alt="' + (config.promoAlt || "") + '">' +
      "  </a>" +
      "</aside>" +
      '<aside class="float-ad float-ad-mobile" aria-label="YS夜色註冊優惠">' +
      '  <button class="float-ad-close" type="button" aria-label="關閉優惠">×</button>' +
      '  <a class="float-ad-link" data-cta="mobile_floating_368" href="' + promoUrlMobile + '" target="_blank" rel="noopener sponsored">' +
      '    <img src="' + (config.promoMobileImage || "") + '" alt="' + (config.promoAlt || "") + '">' +
      "  </a>" +
      "</aside>";

    document.body.appendChild(wrapper);

    wrapper.querySelectorAll(".float-ad-close").forEach(function (button) {
      button.addEventListener("click", function () {
        var card = button.closest(".float-ad");
        if (card) card.hidden = true;
      });
    });
  }

  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (nav) nav.classList.remove("open");
    });
  });

  document.querySelectorAll(".faq-q").forEach(function (button) {
    button.addEventListener("click", function () {
      var item = button.closest(".faq-item");
      if (item) item.classList.toggle("open");
    });
  });

  renderFloatingAds();
  applyLinkTracking();

  var zoomableImages = document.querySelectorAll(".visual-hero img, .image-slot-media img");
  if (zoomableImages.length) {
    var lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.setAttribute("aria-hidden", "true");
    lightbox.innerHTML =
      '<div class="lightbox-dialog" role="dialog" aria-modal="true" aria-label="圖片放大預覽">' +
      '<button class="lightbox-close" type="button" aria-label="關閉圖片">×</button>' +
      '<figure class="lightbox-figure">' +
      '<img src="" alt="">' +
      '<figcaption></figcaption>' +
      "</figure>" +
      "</div>";
    document.body.appendChild(lightbox);

    var lightboxImg = lightbox.querySelector("img");
    var lightboxCaption = lightbox.querySelector("figcaption");
    var lightboxClose = lightbox.querySelector(".lightbox-close");

    function closeLightbox() {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.classList.remove("lightbox-open");
    }

    zoomableImages.forEach(function (img) {
      img.addEventListener("click", function () {
        var figure = img.closest("figure");
        var caption = figure ? figure.querySelector("figcaption") : null;
        lightboxImg.src = img.currentSrc || img.src;
        lightboxImg.alt = img.alt || "";
        lightboxCaption.textContent = caption ? caption.textContent.trim() : img.alt || "";
        lightbox.classList.add("open");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.classList.add("lightbox-open");
      });
    });

    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) closeLightbox();
    });

    if (lightboxClose) {
      lightboxClose.addEventListener("click", closeLightbox);
    }

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && lightbox.classList.contains("open")) {
        closeLightbox();
      }
    });
  }
})();
