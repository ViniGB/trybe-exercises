const main = document.getElementById('main');
const state = document.getElementById('input-state');
const day = document.getElementById('input-startdate');
const month = document.getElementById('input-startmonth');
const year = document.getElementById('input-startyear');
const submitButton = document.getElementById('submit');
const radio = document.getElementById('input-radio');
const radio2 = document.getElementById('input-radio2');
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

const nameText = document.getElementById('input-name');
const email = document.getElementById('input-email');
const cpf = document.getElementById('input-cpf');
const address = document.getElementById('input-address');
const city = document.getElementById('input-city');

let i = 1;
function validaFieldset1() {
  while (i < main.children.length) {
    if (main.children[i].classList.contains('divError')) {
      main.children[i].remove();
      i += 1;
    }
    i = 1;
  }
  // Name
  if (nameText.value.length > 40) {
    const divNameText = document.createElement('p');
    divNameText.innerText = `Erro: Nome ultrapassa 40 caracteres`;
    divNameText.className = 'divError';
    main.appendChild(divNameText);
  }
  nameText.required = 'on';
  
  // E-mail
  if (email.value.length > 50) {
    const divEmail = document.createElement('p');
    divEmail.innerText = `Erro: E-mail ultrapassa 50 caracteres`;
    divEmail.className = 'divError';
    main.appendChild(divEmail);
  }
  email.required = 'on';
  
  // CPF
  if (cpf.value.length > 11) {
    const divCPF = document.createElement('p');
    divCPF.innerText = `Erro: CPF ultrapassa 11 caracteres`;
    divCPF.className = 'divError';
    main.appendChild(divCPF);
  }
  cpf.required = 'on';
  
  // Address
  if (address.value.length > 200) {
    const divAddress = document.createElement('p');
    divAddress.innerText = `Erro: Endereço ultrapassa 200 caracteres`;
    divAddress.className = 'divError';
    main.appendChild(divAddress);
  }
  address.required = 'on';
  
  // City
  if (city.value.length > 28) {
    const divCity = document.createElement('p');
    divCity.innerText = `Erro: Cidade ultrapassa 28 caracteres`;
    divCity.className = 'divError';
    main.appendChild(divCity);
  }
  city.required = 'on';
  
  // State
  if (state.value === 'select') {
      alert ('Escolha um estado');
    }
  state.required = 'on';
    
  // Radio Button
  radio.required = 'on';
  radio2.required = 'on';
}
  
const summary = document.getElementById('input-summary');
const role = document.getElementById('input-role');
const roleDescription = document.getElementById('input-description');

let j = 1;
function validaFieldset2(event) {
  while (j < main.children.length) {
    if (main.children[j].classList.contains('divError')) {
      main.children[j].remove();
      j += 1;
    }
    j = 1;
  }
  // Summary
  if (summary.value.length > 1000) {
    const divSummary = document.createElement('p');
    divSummary.innerText = `Erro: Resumo de currículo ultrapassa 1000 caracteres`;
    divSummary.className = 'divError';
    main.appendChild(divSummary);
  }
  summary.required = 'on';
  
  // Role
  if (role.value.length > 40) {
    const divRole = document.createElement('p');
    divRole.innerText = `Erro: Cargo ultrapassa 40 caracteres`;
    divRole.className = 'divError';
    main.appendChild(divRole);
  }
  role.required = 'on';
  
  // Role Description
  if (roleDescription.value.length > 500) {
    const divRoleDescription = document.createElement('p');
    divRoleDescription.innerText = `Erro: Descrição de cargo ultrapassa 500 caracteres`;
    divRoleDescription.className = 'divError';
    main.appendChild(divRoleDescription);
  }
  roleDescription.required = 'on';
  
  // Start Date
  if (month.value <= 0 || month.value > 12) {
    if (month.value !== '') {
      const divMonth = document.createElement('p');
      divMonth.innerText = `Erro: Mês inválido`;
      divMonth.className = 'divError';
      main.appendChild(divMonth);
    }
  }
  if (year.value < 0) {
    const divYear = document.createElement('p');
    divYear.innerText = `Erro: Ano inválido`;
    divYear.className = 'divError';
    main.appendChild(divYear);
  }
  if (day.value <= 0 || day.value > 31) {
    if (day.value !== '') {
      const divDay = document.createElement('p');
      divDay.innerText = `Erro: Dia inválido`;
      divDay.className = 'divError';
      main.appendChild(divDay);
    }
  }
  
  if (months30Days.includes(parseInt(month.value))) {
    if (day.value > 30) {
      const divDayFeb = document.createElement('p');
      divDayFeb.innerText = `Erro: Data inválida`;
      divDayFeb.className = 'divError';
      main.appendChild(divDayFeb);
    }
  }
  if (parseInt(month.value) === months28Or29Days) {
    if (year.value % 4 === 0) {
      if (day.value > 29) {
        const divDayFeb = document.createElement('p');
        divDayFeb.innerText = `Erro: Data inválida`;
        divDayFeb.className = 'divError';
        main.appendChild(divDayFeb);
      }
    } else {
      if (day.value > 28) {
        const divDayFeb = document.createElement('p');
        divDayFeb.innerText = `Erro: Data inválida`;
        divDayFeb.className = 'divError';
        main.appendChild(divDayFeb);
      }
    }
  }
}
// Function for start date
function startDateResponse(event) {
  event.preventDefault();
  validaFieldset1(event);
  validaFieldset2(event);
}
submitButton.addEventListener('click', startDateResponse);
  