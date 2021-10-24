// Máscaras para os campos de CPF, celular, telefone e CEP
function mascaraInputsNumericos(input, mascaraInput) {
    thisInput = input;
    thisMascara = mascaraInput;
    setTimeout("aplicarMascara()", 1);
}

function aplicarMascara() {
    thisInput.value = thisMascara(thisInput.value);
}

// Máscara para o CPF
function mascaraCpf(cpf) {
    // Permite somente a digitação de números
    cpf = cpf.replace(/\D/g, "");
    // Adiciona um separador de milhar após o 3º dígito
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    // Adiciona um separador de milhar após o 6º dígito
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    // Adiciona um hífen após o 9º dígito
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return cpf;
}

// Máscara para o telefone
function mascaraTelefone(telefone) {
    // Permite somente a digitação de números
    telefone = telefone.replace(/\D/g, "");
    // Adiciona o parêntese esquerdo após digitar o primeiro dígito do DDD
    telefone = telefone.replace(/^(\d)/, "($1");
    // Adiciona o parêntese direito após o segundo dígito do DDD quando o primeiro dígito do telefone é informado
    telefone = telefone.replace(/(.{3})(\d)/, "$1) $2");
    // Adiciona o hífen após o 9º caractér do input para separar os 4 últimos números do telefone
    telefone = telefone.replace(/(.{9})(\d)/, "$1-$2");
    return telefone;
}

// Máscara para o celular
function mascaraCelular(celular) {
    // Permite somente a digitação de números
    celular = celular.replace(/\D/g, "");
    // Adiciona o parêntese esquerdo após digitar o primeiro dígito do DDD
    celular = celular.replace(/^(\d)/, "($1");
    // Adiciona o parêntese direito após o segundo dígito do DDD quando o primeiro dígito do celular é informado
    celular = celular.replace(/(.{3})(\d)/, "$1) $2");
    // Adiciona o hífen após o 10º caractér do input para separar os 4 últimos números do celular
    celular = celular.replace(/(.{10})(\d)/, "$1-$2");
    return celular;
}

// Máscara para o CEP
function mascaraCep(cep) {
    // Permite somente a digitação de números
    cep = cep.replace(/\D/g, "");
    // Adiciona o hífen após a digitação do 6º número do CEP
    cep = cep.replace(/^(\d{5})(\d)/, "$1-$2");
    return cep;
}
