const OffSiteOpen = 'offsite-container-open'
const siteContainerOpen = 'site-container-open'
const offSite = document.querySelector('.offsite-container')
const siteContainer = document.querySelector('.site-container')
const openButton = siteContainer.querySelector('.button')

openButton.addEventListener('click', () => {
  offSite.classList.toggle(OffSiteOpen);
  siteContainer.classList.toggle(siteContainerOpen)
})