document.querySelector('#adicionar').addEventListener('click', insereTarefa);
document.querySelector('#gravar').addEventListener('click', gravar);
document.querySelector('#recuperar').addEventListener('click', recuperar);
document.querySelector('#limpar').addEventListener('click', limpar);

let toDoList = [];

function mostra() {
  let html = "";
  for (let i = 0; i < toDoList.length; i++) {
    html += `
      <div class="tarefa-item">
        <input type="checkbox" id="tarefa${i}" onclick="${toDoList[i].feito = true}">
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
  const feito = "checked";
    toDoList.push({
    texto: texto,
    data: data,
    prioridade: prioridade,
    feito: feito,
});
  input.value = "";
  mostra();
}

function excluirTarefa(index) {
  toDoList.splice(index, 1);
  mostra();
}

function gravar() {
  localStorage.setItem("lista", JSON.stringify(toDoList));
}

function recuperar() {
    toDoList=[];
    lista=localStorage.getItem("lista");
    if(lista){
      toDoList=JSON.parse(lista);
    }
    mostra();
}

function limpar() {
  localStorage.removeItem("lista");
  toDoList = [];
  mostra();
}

window.addEventListener("load", recuperar);