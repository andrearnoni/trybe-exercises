import React from 'react';
import './App.css';

const tarefas = ["Acordar", "Tomar café", "Ir para a academia", "Escovar os dentes", "Ir trabalhar"];

const App = () => ( <ul>{ tarefas.map(tarefa => <li>{ tarefa }</li>) }</ul> );

export default App;