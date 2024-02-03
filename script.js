let saldo_atual = 1000;

while (true) {
  const menu = Number(
    prompt(
      "Escolha uma opção\n1 - Ver saldo\n2 - Saque\n3 - Deposito\n 4 - Sair"
    )
  );

  if (menu === 1) {
    console.log(`Seu saldo atual é: ${saldo_atual}`);
  } else if (menu === 2) {
    const valor_saque = Number(prompt("Quanto você quer sacar: "));
    if (valor_saque > 0 && valor_saque <= saldo_atual) {
      saldo_atual = saldo_atual - valor_saque;
      console.log(`Saque realizado com sucesso, valor atual: ${saldo_atual}`);
    } else {
      console.log("Valor inválido");
    }
  } else if (menu === 3) {
    const valor_deposito = Number(prompt("Quanto você quer depositar: "));
    if (valor_deposito > 0) {
      saldo_atual = saldo_atual + valor_deposito;
      console.log(`Deposito realizado com sucesso, valor atual ${saldo_atual}`);
    } else {
      console.log("Valor inválido");
    }
  } else if (menu === 4) {
    console.log("Até logo");
  } else {
    console.log("Opção Inválida");
    break;
  }
}

