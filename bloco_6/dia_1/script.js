let states = {
  AC: 'ACRE',
  AL: 'ALAGOAS',
  AP: 'AMAPÁ',
  AM: 'AMAZONAS',
  BA: 'BAHIA',
  CE: 'CEARÁ',
  DF: 'DISTRITO FEDERAL',
  ES: 'ESPÍRITO SANTO',
  GO: 'GOIÁS',
  MA: 'MARANHÃO',
  MT: 'MATO GROSSO',
  MS: 'MATO GROSSO DO SUL',
  MG: 'MINAS GERAIS',
  PR: 'PARANÁ',
  PB: 'PARAÍBA',
  PA: 'PARÁ',
  PE: 'PERNAMBUCO',
  PI: 'PIAUÍ',
  RJ: 'RIO DE JANEIRO',
  RN: 'RIO GRANDE DO NORTE',
  RS: 'RIO GRANDE DO SUL',
  RO: 'RONDÔNIA',
  RR: 'RORAIMA',
  SC: 'SANTA CATARINA',
  SE: 'SERGIPE',
  SP: 'SÃO PAULO',
  TO: 'TOCANTINS'
};

let menuState = document.getElementById('selectEstado');

for (let key in states) {    
let state = document.createElement('option'); 
  menuState.appendChild(state).innerHTML = states[key];
  menuState.appendChild(state).value = key;
};
