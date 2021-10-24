
# Desafio Individual – Formulário de cadastro Pessoal

### Autor:
- **Vinicius Carbonario Hetzel
- **Idade**: 30 anos
- **Tipo de deficiência:** Deficiente visual
- **CID:** H54.0

### Objetivo:
- **Desenvolver uma página de cadastro pessoal em um *site* pequeno e acessível, com campos de formulários, fazendo uso de funções em javascript. 

### Ferramenta:
- **Visual Studio Code no Windows.

### Linguagens: 
- **HTML
- **JavaScript
- **CSS

## Descrição do site

### HTML
No ínício, começa com `<!DOCTYPE HTML>`, uma declaração para avisar aos navegadores que é um documento HTML, dentro, temos `<html>` que representa a raiz de um documento HTML e contém um atributo "lang" para declarar o idioma da página da web a fim de ajudar os mecanismos de busca e os navegadores. 

Dentro desse elemento, tem um elemento `<head>` designado para informar os metadados e buscar os recursos. Está entre `<html>` e `<body>`. 

#### Metadados
- O `<link>` é um elemento que conecta os recursos externos aos documentos atuais para renderizar as coisas. Em seguida, os atributos:
  - O atributo "`rel`" é um relacionamento de tipo de arquivo;
  - O atributo "`type`" é um tipo de arquivo;

- `<meta charset="UTF-8">`: É um elemento de metadado para a codificação e a renderização de caracteres para o documento HTML
- `<meta http-equiv="X-UA-Compatible" content="IE=edge">`: É um elemento de metadado de fornecimento de HTTP para o conteúdo do navegador

- `<title>Cadastro Pessoal</title>`: O <title> é um elemento que renderiza o título para a aba do navegador

#### Corpo
O elemento `<body>` renderiza todo o corpo de um documento.

No corpo, vocês encontram os elementos <div>, que são divisões ou uma seções num documento HTML. O atributo "`class`" é um nome de classe para um elemento para pegar os seletores de um arquivo CSS.

Além disso, numa divisão, temos:

- `<h1>` é um cabeçalho de primeiro grau.
- `<h2>` é um cabeçalho de segundo grau.
- `<h3>` é um cabeçalho de terceiro grau.
- `<p>` é uma definição de parágrafos.


#### Formulário
O `<form>` é um elemento de criação de formulário usado para que o usuário possa preencher os campos. Nele, tem um atributo "`onsubmit`" é um evento de submissão em JavaScript que executa a função. Dentro do formulário, definimos as classes para estilizar com o arquivo CSS, Criamos os campos para serem preenchidos pelo o usuário, com algumas regras.


##### Rótulos

- O `<label>` é um elemento que rotula a informação.
  - O atributo "`for`" é um método que pega o identificador do campo de entrada.

##### Campos de entrada

- O `<input>` é um elemento de campo de entrada para o usuário escrever o valor e preenchê-lo.
  - O atributo "`id`" é uma vinculação do campo ao rótulo.
  - O atributo "`required`" significa que o campo não pode ser vazio.
  - O atributo "`maxlength`" define o limite de caracteres.
  - O atributo "`placeholder`" é um valor da dica ou do exemplo.

#### Fim

O comando `<input type="reset" value="Limpar formulário" id="reset"/>` limpa os campos do formulário.
O comando `<input type="submit" value="Enviar dados" id="submit"/>` envia os dados do usuário.

O comando `<script type="text/javascript" src="js/nome-do-arquivo.js"></script>` é elemento para anexar o arquivo externo em JavaScript e define o tipo de documento

### JavaScript
Função para validar o formulário e dar um retorno para o usuário ao enviar os dados.
Função para validar o CEP, e preencher os dados do endereço, através da API pública do via CEP.
Função para acrescentar máscaras nos campos de cpf, fixo e cel.

## Referências

### JavaScript
- [Validação de CEP pelo ViaCEP]https://viacep.com.br/exemplo/javascript/

### CSS
Feito pequenas alterações com CSS, tendo em vista que   sou cego total.
