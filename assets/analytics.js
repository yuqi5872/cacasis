(function () {
  var config = window.SITE_CONFIG || {};
  var measurementId = (config.gaMeasurementId || "").trim();

  if (!measurementId) return;

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }

  window.gtag = window.gtag || gtag;
  gtag("js", new Date());
  gtag("config", measurementId, {
    anonymize_ip: true
  });

  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(measurementId);
  document.head.appendChild(script);
})();
