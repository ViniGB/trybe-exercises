const state = document.getElementById('input-state');
const states = {
  items: [{ value: 'AC', text: 'Acre' }, { value: 'AL', text: 'Alagoas' }, { value: 'AP', text: 'Amapá' }, { value: 'AM', text: 'Amazonas' }, { value: 'BA', text: 'Bahia' }, { value: 'CE', text: 'Ceará' }, { value: 'DF', text: 'Distrito Federal' }, { value: 'ES', text: 'Espírito Santo' }, { value: 'GO', text: 'Goiás' }, { value: 'MA', text: 'Maranhão' }, { value: 'MS', text: 'Mato Grosso do Sul' }, { value: 'MT', text: 'Mato Grosso' }, { value: 'MG', text: 'Minas Gerais' }, { value: 'PA', text: 'Pará' }, { value: 'PB', text: 'Paraíba' }, { value: 'PR', text: 'Paraná' }, { value: 'PE', text: 'Pernambuco' }, { value: 'PI', text: 'Piauí' }, { value: 'RJ', text: 'Rio de Janeiro' }, { value: 'RN', text: 'Rio Grande do Norte' }, { value: 'RS', text: 'Rio Grande do Sul' }, { value: 'RO', text: 'Rondônia' }, { value: 'RR', text: 'Roraima' }, { value: 'SC', text: 'Santa Catarina' }, { value: 'SP', text: 'São Paulo' }, { value: 'SE', text: 'Sergipe' }, { value: 'TO', text: 'Tocantins' }]
};

function allStates() {
  for (let i = 0; i < states['items'].length; i += 1) {
    const options = document.createElement('option');
    options.innerText = states.items[i].text;
    options.value = states.items[i].value;
    state.appendChild(options);
  }
}
allStates();
