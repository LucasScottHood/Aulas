document.querySelector('#adicionar').addEventListener('click', insereTarefa);
document.querySelector('#gravar').addEventListener('click', gravar);
document.querySelector('#recuperar').addEventListener('click', recuperar);
document.querySelector('#limpar').addEventListener('click', limpar);

let toDoList = [];
let tarefasFeitas = [];

function mostra() {
  let html = "";
  for (let i = 0; i < toDoList.length; i++) {
    html += `
      <div class="tarefa-item">
        <input type="checkbox" id="tarefa${i}" onclick="marcarTarefa(${i})">
        <label for="tarefa${i}">
        ${toDoList[i].texto}<span class="data">(${toDoList[i].data}) - Prioridade ${toDoList[i].prioridade}</span>
        <input type="button" value="Excluir" id="tarefa${i}" onclick="excluirTarefa(${i})">
        <label for="tarefa${i}">
        </label>
      </div>`;
  }
  document.querySelector("#lista").innerHTML = html;
}

function insereTarefa() {
  const input = document.querySelector("#tarefa");
  const texto = input.value.trim();

  let data = document.querySelector("#data").value;
  const [ano, mes, dia] = data.split("-");
  data = `${dia}/${mes}/${ano}`
  const prioridade = String(document.querySelector("#prioridade").value);
    toDoList.push({
    texto: texto,
    data: data,
    prioridade: prioridade,
});
  input.value = "";
  mostra();
}

function marcarTarefa(index) {
  const tarefaFeita = toDoList.splice(index, 1);
  tarefasFeitas.push(tarefaFeita);
  mostra();
  mostraFeitas();
}

function mostraFeitas() {
  let html = "<h2>Trabalhos Feitos:</h2>";
  for (let i = 0; i < tarefasFeitas.length; i++) {
    html += `
      <div class="tarefa-item feita">
        <input type="checkbox" checked disabled>
        <label>
          ${tarefasFeitas[i].texto}
          <span class="data">
            (${tarefasFeitas[i].data}) - Prioridade ${tarefasFeitas[i].prioridade}
          </span>
        </label>
        <input type="button" value="Excluir" onclick="excluirFeita(${i})">
      </div>`;
  }
  let listaFeitas = document.querySelector("#listaFeita");
  if (!listaFeitas) 
    {
    listaFeitas = document.createElement("div");
    listaFeitas.id = "listaFeita";
    document.querySelector("main").appendChild(listaFeitas);
  }
  listaFeitas.innerHTML = html;
}

function excluirTarefa(index) {
  toDoList.splice(index, 1);
  mostra();
}

function excluirFeita(index) {
  tarefasFeitas.splice(index, 1);
  mostraFeitas();
}

function gravar() {
  localStorage.setItem("lista", JSON.stringify(toDoList));
  localStorage.setItem("feitas", JSON.stringify(tarefasFeitas));
}

function recuperar() {
  toDoList = JSON.parse(localStorage.getItem("lista")) || [];
  tarefasFeitas = JSON.parse(localStorage.getItem("feitas")) || [];
  mostra();
  mostraFeitas();
}

function limpar() {
  localStorage.removeItem("lista");
  toDoList = [];
  tarefasFeitas = [];
  mostra();
}

window.addEventListener("load", recuperar);
