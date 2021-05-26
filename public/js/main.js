const items = [];

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

  const data = item.dataset.type;
  const index = items.findIndex(string => string === data);

  if (index >= 0) {
    items.splice(index, 1);
    return;
  }

  items.push(data);
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

const handleCreatePoint = async (button) => {
  const formData = { items: items.join(', ') };
  const form = document.querySelectorAll('#create-form input, #create-form select');

  form.forEach(elem => {
    formData[elem.getAttribute('name')] = elem.value;
  });

  button.disabled = true;
  button.innerHTML = 'Aguarde...';

  const request = {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  const response = await fetch('/create/', request)
    .then(response => response.json());

  button.disabled = false;
  button.innerHTML = 'Cadastrar ponto de coleta';
}

populateStates();

getSelectState().addEventListener('click', populateCities);

getCollectItems().forEach(item => {
  item.addEventListener('click', () => handleItemSelect(item));
})
