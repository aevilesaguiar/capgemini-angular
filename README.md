# Angular - Curso Start Capgemini - PROWAY

## O que é Angular

Angular é um Framework. Framework é um conjunto de código genérico onde podemos uni-los para assim desenvolver nossos projetos, como um quebra cabeça onde as peças podem se encaixar em vários locais ao mesmo tempo e fazendo sentido elas estarem lá. Angular foi desenvolvido pelo o time de desenvolvimento DO GOOGLE.

Usamos ele para criar componentes baseado em Single Page Application (SPA’s). Os SPAs são aplicações onde as funcionalidades estão em uma página principal e evitamos ficar recarregando toda hora a página ou mesmo ficar redirecionando o usuário.

O conteúdo principal é atualizado de forma assíncrona, porém mantemos toda a estrutura da página estática.

O Angular trabalha com TypeScript (TS) e sendo assim toda a nossa lógica da aplicação deve ser escrita em TS.

## Benefícios de usar o Angular

Muito se fala das vantagens do uso de frameworks, mas vou me atentar aos benefícios do Angular em específico.

- Velocidade e performance: Como o Angular entrega somente o necessário para aquele momento ao usuário, a aplicação em si só irá carregar a parte do código que será utilizada, evitando assim carregar desnecessariamente partes de códigos que não fazem sentido naquele momento.
Suporte: Angular pode ser desenvolvido junto com .Net, PHP, Java Spring e muitos outros. Além de ter um ótimo SEO.
- Produtividade: CLI nos ajudando a gerar e construir nossa base rapidamente para nossos componentes.
- Desenvolvimento Full-Stack: Um framework completo, e como disse acima, podemos trabalhar junto com NodeJS, Express e MongoDB.
- Suporte para teste: Podemos usar Karma e Jasmine para testes unitários nativamente, mas nada impede de usar outros também.

## Arquitetura Angular

Arquitetura do Angular é toda baseada em componentes e módulos. Nós criamos componentes individuais que ao juntar formamos nossa página.

Porém cada componente atende de forma singular uma tarefa, sendo assim, a reutilização é muito grande.

Uma aplicação tem pelo menos um módulo que inicia toda a aplicação necessária para rodar.

Os componentes são um conjunto de elementos e funcionalidades que dão vida aquela aplicação.

Um ToDo list pode conter vários componentes conversando entre si na aplicação:

![image](https://user-images.githubusercontent.com/52088444/169384917-bd2d4e54-3460-412e-820a-5a7195294126.png)

Todas as caixas envoltas de vermelho, podem ser componentes individuais que dão a vida ao serviço que é um ToDo list. E cada componente em si tem seu próprio, HTML, CSS e TypeScript com a lógica individual para eles.

Um componente pode ser composto por outros componentes também, um exemplo é uma tarefa ativa pode ser seu próprio componente assim como uma tarefa concluída.

Nós injetamos o Service para definir o comportamento do componente, isso na lógica do componente. E os Decorators nos ajudam a manipular o DOM.

Os components também usam um processo chamado databinding que compartilha os dados da Logic e da View.

## Angular Modules

Uma aplicação é um conjunto construído por Components, Directives e Services.

Esse grupo com essa organização é chamado de Modules e por padrão ele é chamado de ngModule.

Aplicações tendem a ter vários modules, porém só com o padrão a aplicação já funciona.

Ele nos ajuda a organizar e modularizar a nossa aplicação, sendo assim, podemos reutilizar o módulo completo em outras partes da aplicação em si e com os módulos podemos escolher o que vamos expor para fora dele.

## Angular Imports


## Explicação

Os imports são usados para saber onde o Angular irá procurar a funcionalidade que estamos usando em nosso módulo.

Todas as dependências como libs, módulos integrados ou personalizados, devem ser importados antes de usarmos as funcionalidades, ou seja, devem ser a primeira coisa a ser importada.

## Angular Classes e decorators

O decorator é uma forma de dizer ao Angular como uma classe deve ser tratada. Um exemplo é o @Component, estamos dizendo ao Angular que aquela classe é um componente e assim deve ser tratado, alguns componentes do Angular:

- @NgModule
- @Component
- @Pipe
- @Input
- @Output
- @ContentChild
- @ContentChildren
- @Injectable
- @Directive
- @HostBinding
- @HostListener
- @ViewChild
- @ViewChildren

## Angular e sua construção em blocos

Angular trabalha com uma ideia de blocos e esses blocos podem ser constituídos de:

- Components :Um componente é uma classe TypeScript com o decorator @Component, um componente de view por exemplo contra o GUI (Graphical User Interface), e um component lógico, controla as funções que são endereçadas a ele.
- Templates :São neles que definimos onde o Angular em si irá procurar os arquivos que lidam diretamente na view do usuário que são os arquivos HTML e CSS que interagem com o componente que estamos vendo na tela no momento. O Angular usa {} para interpolação e [] para vincular propriedades.
- Metadata:É aqui onde informamos ao Angular como processar uma classe um exemplo é o @Componente que é um metadata como selector, templateURL e outros.
- Data Binding :A função do Data Binding é fazer a comunicação entre o component view e o lógico.
    - Interpolation: Faz a ligação entre view e lógica;
    - Event Binding: Fica escutando para assim reagirmos as respostas por ações como apertar teclas, movimento do mouse, clicks e toches;
    - Property Binding: Controla as propriedades do HTML;
    - Custom Binding: Permite a comunicação entre componentes pais e filhos, por um decorator especial;
    - Two-way Binding: Permite a combinação Property e Event Binding para lidar com os eventos de dados.
    - Directives: São classes que ajudam a manipular a View.
            Assim como o Component, as diretivas tem seu decorator @Directive que contém os metadados para o Angular saber como manipular o DOM.

            Sabemos que o Angular cria uma view a partir de um template definido em um component, esse template é dinâmico e pode ser transformado pelas diretivas.

            Um exemplo para mostrar o poder que as diretivas dão a nossa aplicação poderia ser um loop for dentro do HTML:

![image](https://user-images.githubusercontent.com/52088444/169387976-38df2299-3beb-439a-ac38-d23f966ba2b9.png)

Desta forma simples, podemos dar uma gama de possibilidades à nossa aplicação.

No Angular temos dois tipos de diretivas:

Estrutural: Que muda a estrutura da View;
Atributos: Que muda o estilo da View.
Um ponto que não posso deixar de falar é o seguinte, no Angular existem muitas diretivas prontas, porém caso seja necessário, podemos criar a nossa própria diretiva customizada.

- Services : Com o Service do Angular, podemos usar ele para prover uma funcionalidade comum para um componente por exemplo:
Temos um sistema de mensagem que é responsável por dar o Ok ou falha para uma determinada função na aplicação, e ela se repete em várias partes, não vamos colocar essa mensagem em todos os componentes um a um, podemos criar um Service que será usado por todos os componentes em si.

- Dependency Injection(Injeção de Dependência) :

É uma dependência que injeta todos os recursos que iremos precisar em um determinado componente, sendo desde modulos, services ou qualquer outro.

Angular trabalha com ele, através do Injector. Ele utiliza os metadados, cria uma instância do Service e faz a injeção das dependências no Componente através de um constructor.

Para fazer isso usamos o decorator @Injectable, sendo assim, caso um injector já exista ele usa o existente e não criará um novo desnecessariamente.

## Bootstrapping

Aqui é onde iremos colocar o que será carregador primeiro ou inicializado em nossa aplicação Angular, é uma técnica.


## O que é e como criar um componente com Angular?

 Um componente é composto de HTML, CSS e TypeScript que juntando tudo pode formar uma parte da aplicação e com uma reutilização incrível.

 Um exemplo de componente é um menu, que pode nos levar a outras partes do site, ou mesmo uma barra de pesquisa que pega dados de outros locais.

 Você consegue imaginar que podemos usar esses dois exemplos em outros locais da aplicação de forma independente, tirando a necessidade de codar a mesma coisa em diferentes partes da aplicação.

 Agora vamos ver a estrutura padrão de um componente:

- HTML: É onde definimos a estrutura de um componente em relação ao browser;
- CSS: Onde colocamos o estilo do componente em si, como cor, fonte, tamanho, alinhamento e etc;
- TypeScript: Aqui é onde colocamos a lógica do componente e seu comportamento;
- Jasmin: É onde podemos testar o componente em si e ver se existem erros ou comportamentos inesperados.

## Componente app-root

Até o momento sabemos que podemos criar componentes e configurar ele conforme necessário.

O “app-root” é o componente padrão do Angular e o mais básico de nossa aplicação e aqui é onde basicamente juntamos os componentes customizados.

Podemos ir implementando, caso queiramos incluir um menu por exemplo:
[<body>
  <menu></menu>
  <search></search>
  <app-root></app-root>
</body>]

Basicamente é assim que lidamos com adição dos componentes, porém não é bem a forma correta as vezes de se fazer assim, mas não vamos nos preocupar muito com isso agora, bora criar um componente.

## Criando um componente (através da cli)

-  ng generate component nomeDoComponente
// ou com os comandos reduzidos
-  ng g c nomeDoComponente

Como podemos reparar, podemos encurtar o comando usando ng g (de generate) e c (de componente), adicionando uma leve rapidez para criar um componente.

Agora vamos criar um componente com o nome “logo”. Vamos abrir nosso terminal e digitar o comando acima:

-  ng g c logo


Foi criado uma nova pasta e novos arquivos com o nome de “logo” dentro da pasta “app” e por padrão todos os componentes serão registrados desta forma.

Se abrirmos o “app.module.ts” podemos ver que o nosso novo componente já foi registrado dentro dele.

## Como deletar um componente

Para fazer a deleção de um componente, devemos tirar todas as referências dele da nossa aplicação.








- Component: é uma pagina do meu site. Exemplo: home, contato e outros. Agrupamento de arquivos, html, css, tp

- criar/gerar component: ng g component nome-do-arquivo (ele vai no node e baixa todas as dependencias)

- Startar a aplicação : ng serve

- modules: é quando você importa componentes no caso, para usar em determinada área. Ou seja você pode 
restrigir o uso de components.

## Diretivas

O que são Diretivas Angular?
Colocando em simples palavras, são instruções no DOM.

- diretivas : basicamente é criar ações, por exemplo  é remover /incluir textos, audio e video...
Temos vários tipos de diretivas:(quando queremos manipular paginas, vamos trabalhar com diretivas)

- ngIf: Uma forma abreviada da diretiva, é geralmente usada, fornecida como um atributo do elemento âncora para o modelo inserido. Angular expande isso para uma versão mais explícita, na qual o elemento âncora está contido em um elemento.*ngIf="condition"<ng-template> . O “ngIf” é uma condicional para adicionar ou remover algo do DOM. É muito parecido com o “If” padrão.

- ngFor

- ngSwitch

- ngClass

# Exemplo02

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## Referencias

- https://angular.io/api/common/NgIf#description

- https://vidafullstack.com.br/angular/o-que-sao-diretivas-angular/


