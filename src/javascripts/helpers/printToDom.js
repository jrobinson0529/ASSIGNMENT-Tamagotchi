const printToDom = (divId, domString) => {
  const div = document.querySelector(divId);
  div.innerhtml = domString;
};

export default printToDom;
