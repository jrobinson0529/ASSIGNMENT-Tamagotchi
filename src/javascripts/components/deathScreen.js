const deathScreen = () => {
  document.querySelector('body').innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/JSFE9fNjM88?controls=0&amp;start=39&autoplay=1&end=45" frameborder="0" allow="accelerometer; loop; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  setTimeout(() => {
    window.location.reload();
  }, 7500);
};

export default deathScreen;
