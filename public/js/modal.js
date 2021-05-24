const getModal = () => {
  return document.getElementById('modal');
}

const showModal = () => {
  getModal().classList.remove('hide');
}

const hideModal = () => {
  getModal().classList.add('hide');
}
