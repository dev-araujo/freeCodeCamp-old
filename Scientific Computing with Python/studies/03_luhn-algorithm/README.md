# Algoritimo de Luhn


O algoritmo de Luhn é um método simples e eficaz para verificar a **validade de números de identificação**, como números de cartões de crédito, códigos de barras e ISBNs.

## Passo 1: Extrair o dígito verificador

1. Comece por identificar o dígito verificador. Este é geralmente o último dígito do número, mas pode estar em outra posição.
2. Remova o dígito verificador do número original. Este número sem o dígito verificador é chamado de "payload".


## Passo 2: Multiplicar e somar dígitos alternados

1. Comece com o dígito mais à direita do payload.
2. Multiplique este dígito por 2.
3. Se o resultado da multiplicação for maior que 9, subtraia 9.
4. Anote o resultado da multiplicação ou subtração.
5. Repita os passos 2 a 4 para cada dígito ímpar do payload, da direita para a esquerda.
6. Agora, para cada dígito par do payload, da direita para a esquerda, simplesmente anote o valor do dígito.

## Passo 3: Somar todos os dígitos

1. Some todos os dígitos anotados nos passos 2 e 6.

## Passo 4: Validar o número

1. Se a soma dos dígitos for divisível por 10, o número é válido.
2. Se a soma dos dígitos não for divisível por 10, o número é inválido.


> *Texto criado com auxílio da IA [Gemini](https://gemini.google.com/)* 


