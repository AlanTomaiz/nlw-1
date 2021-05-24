const populateStates = async () => {
  const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
    .then(response => response.json());

  response.forEach(state => {
    getSelectState().innerHTML += `<option value="${state.sigla}">${state.nome}</option>`;
  });
}

const populateCities = async () => {
  const UF = getSelectState().value;
  getSelectCity().disabled = true;

  const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`)
    .then(response => response.json());

  getSelectCity().disabled = false;
  getSelectCity().innerHTML = '<option value="">Seleciona uma cidade</option>';

  response.forEach(({ nome }) => {
    getSelectCity().innerHTML += `<option value="${nome}">${nome}</option>`;
  })
}

const handleItemSelect = (item) => {
  item.classList.toggle('selected');
}

const getSelectState = () => {
  return document.querySelector('[name=state]');
}

const getSelectCity = () => {
  return document.querySelector('[name=city]');
}

const getCollectItems = () => {
  return document.querySelectorAll('.wrapper-items li')
}

populateStates();

getSelectState().addEventListener('click', populateCities);

getCollectItems().forEach(item => {
  item.addEventListener('click', () => handleItemSelect(item));
})
