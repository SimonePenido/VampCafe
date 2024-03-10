$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});


// Explicação do código

//Este trecho de código JavaScript usa a biblioteca jQuery para criar um efeito de rolagem suave quando um link é clicado em uma página da web. Vamos quebrar o código para entender melhor o que está acontecendo.

//1. `$(document).ready(function () {...});`: Este é um evento jQuery que é acionado quando o documento HTML foi completamente carregado. Isso garante que o código JavaScript dentro dele só será executado depois que a página estiver totalmente carregada.

//2. `$("a").on("click", function (event) {...});`: Aqui, um manipulador de eventos de clique é anexado a todos os elementos de link (`<a>`) na página. Quando um link é clicado, a função anônima fornecida é executada.

//3. `if (this.hash !== "") {...}`: `this.hash` se refere ao atributo hash do link clicado. O atributo hash retorna o valor do atributo href que segue o símbolo '#'. Se o link clicado tiver um hash, o código dentro do bloco if será executado.

//4. `event.preventDefault();`: Isso impede o comportamento padrão do evento de clique do link. Normalmente, clicar em um link faria a página pular imediatamente para o conteúdo referenciado pelo hash. Com este método, esse comportamento é evitado, permitindo que a animação de rolagem suave ocorra.

//5. `var hash = this.hash;`: Aqui, o valor do hash do link clicado é armazenado em uma variável chamada [`hash`](command:_github.copilot.openSymbolInFile?%5B%22main.js%22%2C%22hash%22%5D "main.js").

//6. `$("html, body").animate({...}, 800, function () {...});`: Este é o método animate() do jQuery, que cria animações personalizadas. Neste caso, está sendo usado para animar a rolagem da página até o conteúdo referenciado pelo hash do link clicado.

//7. `{scrollTop: $(hash).offset().top,},`: Isso define a propriedade que será animada e o valor final da animação. `$(hash).offset().top` obtém a posição vertical do elemento referenciado pelo hash.

//8. `window.location.hash = hash;`: Finalmente, depois que a animação de rolagem suave é concluída, o hash na URL é atualizado para refletir o hash do link clicado. Isso é feito dentro da função de callback que é executada após a conclusão da animação. //