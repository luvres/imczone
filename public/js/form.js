var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  /** Extraindo informacoes do paciente **/
  // var nome = form.nome.value;
  // var peso = form.peso.value;
  // var altura = form.altura.value;
  // var gordura = form.gordura.value;
  var paciente = obtemPacienteDoFormulario(form);


  /** Cria a <tr> e a <td> do paciente **/
  // var pacienteTr = document.createElement("tr");
  //
  // var nomeTd = document.createElement("td");
  // var pesoTd = document.createElement("td");
  // var alturaTd = document.createElement("td");
  // var gorduraTd = document.createElement("td");
  // var imcTd = document.createElement("td");
  //
  // nomeTd.textContent = nome;
  // pesoTd.textContent = peso;
  // alturaTd.textContent = altura;
  // gorduraTd.textContent = gordura;
  // imcTd.textContent = calculaImc(peso, altura);
  //
  // pacienteTr.appendChild(nomeTd);
  // pacienteTr.appendChild(pesoTd);
  // pacienteTr.appendChild(alturaTd);
  // pacienteTr.appendChild(gorduraTd);
  // pacienteTr.appendChild(imcTd);
  var pacienteTr = montaTr(paciente);

  // Adicionando o paciente na tabela
  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);

  form.reset();
});


function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  /*
   var nomeTd = document.createElement("td");
   nomeTd.textContent = paciente.nome;
   nomeTd.classList.add("info-nome");
  */
  // var nomeTd = montaTd(paciente.nome, "info-nome");

  /*
  var pesoTd = document.createElement("td");
  pesoTd.textContent = paciente.peso;
  pesoTd.classList.add("info-peso");
  */
  // var pesoTd = montaTd(paciente.peso, "info-peso");

  /*
  var alturaTd = document.createElement("td");
  alturaTd.textContent = paciente.altura;
  alturaTd.classList.add("info-altura");
  */
  // var alturaTd = montaTd(paciente.altura, "info-altura");

  /*
  var gorduraTd = document.createElement("td");
  gorduraTd.textContent = paciente.gordura;
  gorduraTd.classList.add("info-gordura");
  */
  // var gorduraTd = montaTd(paciente.gordura, "info-gordura");

  /*
  var imcTd = document.createElement("td");
  imcTd.textContent = paciente.imc;
  imcTd.classList.add("info-imc");
  */
  // var imcTd = montaTd(paciente.imc, "info-imc");


  // pacienteTr.appendChild(nomeTd);
  // pacienteTr.appendChild(pesoTd);
  // pacienteTr.appendChild(alturaTd);
  // pacienteTr.appendChild(gorduraTd);
  // pacienteTr.appendChild(imcTd);

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}
