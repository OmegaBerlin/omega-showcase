const translator = $('body').translate({ lang: "en", t: dict() });

$('.change-language').on('click', function(event) {
  const translateToLanguage = event.currentTarget.dataset.language || "en";
  translator.lang(translateToLanguage);
});

$('.pricing-range').on('change', function(event) {
  const nbPackagesPerDay = Number(event.currentTarget.value);
  $('.packages-per-day').text(nbPackagesPerDay);
  $('.price-per-day').text(getPricing(nbPackagesPerDay));
});

function getPricing(nbPackagesPerDay) {
  return Math.round(nbPackagesPerDay * 0.05);
}
