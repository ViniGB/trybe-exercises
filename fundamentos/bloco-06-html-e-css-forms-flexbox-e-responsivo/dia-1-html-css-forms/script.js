const main = document.getElementById('main');
const state = document.getElementById('input-state'); state.required = true;
const submitButton = document.getElementById('submit');
const radio = document.getElementById('input-radio'); radio.required = true;
const radio2 = document.getElementById('input-radio2'); radio2.required = true;
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

const nameText = document.getElementById('input-name'); nameText.required = true;
const email = document.getElementById('input-email'); email.required = true;
const cpf = document.getElementById('input-cpf'); cpf.required = true;
const address = document.getElementById('input-address'); address.required = true;
const city = document.getElementById('input-city'); city.required = true;

const divAll = document.createElement('div');
divAll.className = 'divError';

function validaFieldset1() {
  // Name
  const divNameText = document.createElement('p');
  if (nameText.value.length > 40) {
    divNameText.innerText = `Erro: Nome ultrapassa 40 caracteres`;
    divNameText.className = 'divError';
    main.appendChild(divNameText);
  } else {
    divNameText.innerText = `Nome: ${nameText.value}`;
    divNameText.className = 'divError3';
    divAll.appendChild(divNameText);
  }
  
  // E-mail
  const divEmail = document.createElement('p');
  if (email.value.length > 50) {
    divEmail.innerText = `Erro: E-mail ultrapassa 50 caracteres`;
    divEmail.className = 'divError';
    main.appendChild(divEmail);
  } else {
    divEmail.innerText = `E-mail: ${email.value}`;
    divEmail.className = 'divError3';
    divAll.appendChild(divEmail);
  }
  
  // CPF
  const divCPF = document.createElement('p');
  if (cpf.value.length > 11) {
    divCPF.innerText = `Erro: CPF ultrapassa 11 caracteres`;
    divCPF.className = 'divError';
    main.appendChild(divCPF);
  } else {
    divCPF.innerText = `CPF: ${cpf.value}`;
    divCPF.className = 'divError3';
    divAll.appendChild(divCPF);
  }
  
  // Address
  const divAddress = document.createElement('p');
  if (address.value.length > 200) {
    divAddress.innerText = `Erro: Endereço ultrapassa 200 caracteres`;
    divAddress.className = 'divError';
    main.appendChild(divAddress);
  } else {
    divAddress.innerText = `Endereço: ${address.value}`;
    divAddress.className = 'divError3';
    divAll.appendChild(divAddress);
  }
  
  // City
  const divCity = document.createElement('p');
  if (city.value.length > 28) {
    divCity.innerText = `Erro: Cidade ultrapassa 28 caracteres`;
    divCity.className = 'divError';
    main.appendChild(divCity);
  } else {
    divCity.innerText = `Cidade: ${city.value}`;
    divCity.className = 'divError3';
    divAll.appendChild(divCity);
  }
  
  // State
  const divState = document.createElement('p');
  if (state.value === 'select') {
    divState.innerText = `Erro: Selecione um estado`;
    divState.className = 'divError';
    main.appendChild(divState);
  } else {
    divState.innerText = `Estado: ${state.value}`;
    divState.className = 'divError3';
    divAll.appendChild(divState);
  }
  
  // Radio Button
  const divRadio = document.createElement('p');
  if (radio.checked === true) {
    divRadio.innerText = `Tipo: ${radio.value}`;
    divRadio.className = 'divError3';
    divAll.appendChild(divRadio);
  }
  if (radio2.checked === true) {
    divRadio.innerText = `Tipo: ${radio2.value}`;
    divRadio.className = 'divError3';
    divAll.appendChild(divRadio);
  }
}
      
const summary = document.getElementById('input-summary'); summary.required = true;
const role = document.getElementById('input-role'); role.required = true;
const roleDescription = document.getElementById('input-description'); roleDescription.required = true;
const day = document.getElementById('input-startdate'); day.required = true;
const month = document.getElementById('input-startmonth'); month.required = true;
const year = document.getElementById('input-startyear'); year.required = true;

function validaFieldset2(event) {
  // Summary
  const divSummary = document.createElement('p');
  if (summary.value.length > 1000) {
    divSummary.innerText = `Erro: Resumo de currículo ultrapassa 1000 caracteres`;
    divSummary.className = 'divError';
    main.appendChild(divSummary);
  } else {
    divSummary.innerText = `Resumo do Currículo: ${summary.value}`;
    divSummary.className = 'divError3';
    divAll.appendChild(divSummary);
  }
  
  // Role
  const divRole = document.createElement('p');
  if (role.value.length > 40) {
    divRole.innerText = `Erro: Cargo ultrapassa 40 caracteres`;
    divRole.className = 'divError';
    main.appendChild(divRole);
  } else {
    divRole.innerText = `Cargo: ${role.value}`;
    divRole.className = 'divError3';
    divAll.appendChild(divRole);
  }
  
  // Role Description
  const divRoleDescription = document.createElement('p');
  if (roleDescription.value.length > 500) {
    divRoleDescription.innerText = `Erro: Descrição de cargo ultrapassa 500 caracteres`;
    divRoleDescription.className = 'divError';
    main.appendChild(divRoleDescription);
  } else {
    divRoleDescription.innerText = `Descrição do cargo: ${roleDescription.value}`;
    divRoleDescription.className = 'divError3';
    divAll.appendChild(divRoleDescription);
  }
  
  // Start Date
  if (month.value <= 0 || month.value > 12) {
    const divMonth = document.createElement('p');
    if (month.value !== '') {
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
  if (day.value !== '' && month.value !== '' && year.value !== '') {
    const divStartDate = document.createElement('p');
    divStartDate.innerText = `Data de início: ${day.value}/${month.value}/${year.value}`;
    divStartDate.className = 'divError3';
    divAll.appendChild(divStartDate);
  }
  
  if (months30Days.includes(parseInt(month.value))) {
    if (day.value > 30 && day.value <= 31) {
      const divDayFeb = document.createElement('p');
      divDayFeb.innerText = `Erro: Data inválida`;
      divDayFeb.className = 'divError';
      main.appendChild(divDayFeb);
    }
  }
  if (parseInt(month.value) === months28Or29Days) {
    if (year.value % 4 === 0) {
      if (day.value > 29 && day.value <= 31) {
        const divDayFeb = document.createElement('p');
        divDayFeb.innerText = `Erro: Data inválida`;
        divDayFeb.className = 'divError';
        main.appendChild(divDayFeb);
      }
    } else {
      if (day.value > 28 && day.value <= 31) {
        const divDayFeb = document.createElement('p');
        divDayFeb.innerText = `Erro: Data inválida`;
        divDayFeb.className = 'divError';
        main.appendChild(divDayFeb);
      }
    }
  }
}

// Function for start date
let i = 1;
let k = 0;
function startDateResponse(event) {
  // checks validity of form being filled or not. If filled, it'll preventDefault. Taken from https://stackoverflow.com/questions/27348036/prevent-form-submit-but-retain-form-validation
  let form = document.getElementById('form');
  let checkForm = form.checkValidity();
  form.reportValidity();
  if (checkForm) {
    event.preventDefault();
  }

  // condition to delete previous Error divs, in order to add new
  while (i < main.children.length) {
  // for (let i = 1; i < main.children.length; i += 1) {
    if (main.children[i].classList.contains('divError')) {
      main.children[i].remove();
      i += 1;
    }
    i = 1;
  }

  // condition to delete previous div paragraphs, in order to add new
  while (k < divAll.children.length) {
    if (divAll.children[k].classList.contains('divError3')) {
      divAll.children[k].innerHTML = '';
      k += 1;
    }
  }
  k = 0;

  validaFieldset1();
  validaFieldset2(event);
  
  if (main.children.length === 1 && checkForm) {
    main.appendChild(divAll);
  }
}
submitButton.addEventListener('click', startDateResponse);

// Function to clear form data and created divs
const clearButton = document.getElementById('clear-button');

j = 1
function clearAll() {
  while (j < main.children.length) {
    if (main.children[j].classList.contains('divError')) {
      main.children[j].remove();
      j += 1;
    }
  }
  j = 1;
}
clearButton.addEventListener('click', clearAll);
  