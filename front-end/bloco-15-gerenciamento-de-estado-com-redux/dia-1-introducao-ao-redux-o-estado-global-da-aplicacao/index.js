const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const currColor = document.getElementById('value');
const currContainerColor = document.getElementById('container');

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

// 2 - Crie um reducer, implementando um switch retornando apenas o estado inicial como default . Não se esqueça de colocar o reducer como parâmetro para o createStore , feito na etapa anterior.
// 3 - Incremente o switch criado no exercício anterior com as actions NEXT_COLOR e PREVIOUS_COLOR . Essas actions devem alterar o valor index guardado no ESTADO_INICIAL . 

const nextColor = () => ({
  type: 'NEXT_COLOR',
});

const previousColor = () => ({
  type: 'PREVIOUS_COLOR',
})

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state, 
        index: state.index === 5 ? 0 : state.index + 1,
      };
    case 'PREVIOUS_COLOR':
      return {
          ...state, 
          index: state.index === 0 ? 5 : state.index - 1,
      };
    default:
      return state;
  }
};

nextButton.addEventListener('click', () => {
  store.dispatch(
    nextColor()
  );
  console.log(store.getState());
});

previousButton.addEventListener('click', () => {
  store.dispatch(
    previousColor()
  )
  console.log(store.getState());
});

const renderNewColor = () => {
  let getState = store.getState();

  currColor.innerText = getState.colors[getState.index];
  currContainerColor.style.backgroundColor = getState.colors[getState.index];
}

const store = Redux.createStore(reducer);
store.subscribe(renderNewColor);

// store.dispatch(nextColor());
// console.log(store.getState());

// 1 - Crie uma store para a nossa aplicação.
