const state = document.getElementById('input-state');
const day = document.getElementById('input-startdate');
const month = document.getElementById('input-startmonth');
const year = document.getElementById('input-startyear');
const submitButton = document.getElementById('submit');
const states = {
  items: [{ value: 'AC', text: 'Acre' }, { value: 'AL', text: 'Alagoas' }, { value: 'AP', text: 'Amapá' }, { value: 'AM', text: 'Amazonas' }, { value: 'BA', text: 'Bahia' }, { value: 'CE', text: 'Ceará' }, { value: 'DF', text: 'Distrito Federal' }, { value: 'ES', text: 'Espírito Santo' }, { value: 'GO', text: 'Goiás' }, { value: 'MA', text: 'Maranhão' }, { value: 'MS', text: 'Mato Grosso do Sul' }, { value: 'MT', text: 'Mato Grosso' }, { value: 'MG', text: 'Minas Gerais' }, { value: 'PA', text: 'Pará' }, { value: 'PB', text: 'Paraíba' }, { value: 'PR', text: 'Paraná' }, { value: 'PE', text: 'Pernambuco' }, { value: 'PI', text: 'Piauí' }, { value: 'RJ', text: 'Rio de Janeiro' }, { value: 'RN', text: 'Rio Grande do Norte' }, { value: 'RS', text: 'Rio Grande do Sul' }, { value: 'RO', text: 'Rondônia' }, { value: 'RR', text: 'Roraima' }, { value: 'SC', text: 'Santa Catarina' }, { value: 'SP', text: 'São Paulo' }, { value: 'SE', text: 'Sergipe' }, { value: 'TO', text: 'Tocantins' }]
};
const months31Days = [01, 03, 05, 07, 08, 10, 12];
const months30Days = [04, 06, 09, 11];
const months28Or29Days = 02;

function allStates() {
  for (let i = 0; i < states['items'].length; i += 1) {
    const options = document.createElement('option');
    options.innerText = states.items[i].text;
    options.value = states.items[i].value;
    state.appendChild(options);
  }
}
allStates();

function validaFieldset2(event) {
  if (month.value <= 0 || month.value > 12) {
    alert('Mês inválido');
    event.preventDefault();
  }
  if (year.value < 0) {
    alert('Ano inválido');
    event.preventDefault();
  }
  if (day.value <= 0 || day.value > 31) {
    alert('Dia inválido');
    event.preventDefault();
  }

  if (months30Days.includes(parseInt(month.value))) {
    if (day.value > 30) {
      alert('Data inválida');
      event.preventDefault();
    }
  }
  if (parseInt(month.value) === months28Or29Days) {
    if (year.value % 4 === 0) {
      if (day.value > 29) {
        alert('Data inválida');
        event.preventDefault();
      }
    } else {
      if (day.value > 28) {
        alert('Data inválida');
        event.preventDefault();
      }
    }
  }
}
// Function for start date
function startDateResponse(event) {
  validaFieldset2(event);
}
submitButton.addEventListener('click', startDateResponse);
