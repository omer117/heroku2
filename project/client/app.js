
const app = document.querySelector('#root')
const options = [
  {
    value: '',
    text: 'Select'
  },
  {
    value: 'ip',
    text: 'Get IP'
  },
  {
    value: 'device',
    text: 'Get Device'
  },
  {
    value: 'os',
    text: 'Get Operating System'
  },
  {
    value: 'browser',
    text: 'Get Browser'
  }
];

function parseUA(type) {
  return fetch(`/ua/${type}`)
    .then(response => response.json())
    .then(json => json.message);
}

function resultComponent(text = '') {
  const div = document.createElement('div');
  const h3 = document.createElement('h3');
  const nextNode = document.createTextNode(text);

  h3.appendChild(nextNode);
  div.className = 'result'
  div.appendChild(h3);

  return div;
}

function selectComponent(options = [],) {
  const selectElement = document.createElement('select');

  options.forEach((option) => {
    const optionElement = document.createElement('option');
    optionElement.text = option.text;
    optionElement.value = option.value;
    if (!option.value) {
      optionElement.selected = true;
      optionElement.disabled = true;
    }
    selectElement.add(optionElement, null);
  })

  selectElement.addEventListener('change', async (e) => {
    const message = await parseUA(e.target.value);
    const oldResult = document.querySelector('.result');
    const newResult = resultComponent(message);
    
    if (oldResult) {
      oldResult.parentElement.replaceChild(newResult, oldResult);
    } else {
      document.querySelector('#root').append(newResult);
    }
  })

  return selectElement;
}

const select = selectComponent(options);
app.append(select);
