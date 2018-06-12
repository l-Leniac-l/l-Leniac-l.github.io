---
title: "Gitflow e Entrega Contínua"
date: 2018-01-08T13:00:29-02:00
draft: false
url: "/gitflow-e-entrega-continua"
description: "Um pouco sobre processos de entrega contínua e como nos fizemos conhecidos como a startup que entrega no prazo."
tags: ["pt", "gitflow", "ci-cd", "devops"]
comments: true
post: true
---

Tornar-se conhecida e recomendada por nossos clientes como uma startup que entrega software com qualidade e no prazo não 
foi um proceso que aconteceu da noite para o dia.

Nós devs sabemos o quanto é difícil encontrar um método que mantenha nossas entregas com uma frequência considerável e
o padrão esperado pelo cliente. Tanto é que tentamos aplicar todos os tipos de técnicas agile disponíveis, 
como o scrum, kanban, MSF, XP, etc, etc.

No entanto, nenhuma dessas técnicas parece realmente funcionar quando o fluxo de entrega não é eficiente. Claro que 
sei reconhecer a eficácia de métodos como scrum que realmente agilizam o processo de desenvolvimento. Mas concorda comigo que 
agilizar o processo de desenvolvimento é apenas uma parte do pacote?

Responda rapidamente essas perguntas:

Você já atrasou a entrega de um sprint porque o carinha que administra os servidores estava ocupado?
Ou porque sua equipe não tem acesso aos servidores?
Ou porque o commit do fulano estava dando conflito com do beltrano?
Ou porque outra equipe estava na frente na fila de deploy?

Vejo muitas empresas tentando resolver seus problemas contratando um "profissional de DevOps". Calma, que já vou explicar 
o porquê das aspas.

É que na verdade DevOps é mais um processo que um profissional especializado em algo. Esse processo surgiu da necessidade 
de integrar os processos de Dev (desenvolvimento, teste, etc) aos processos de Ops (deploy, configuração de servidor, etc).
E nem sempre a solução para os problemas de entrega é contratar um DevOps master top das galáxias. Com um pouco de organização 
e um alinhamento adequado da equipe, pode-se atingir os mesmos resultados ou até melhores.

Não existe fórmula mágica para entregar software. A receita desse bolo varia de empresa para empresa, de equipe para equipe.

Claro que algumas técnicas podem se tornar úteis com alguns ajustes aqui e ali. Foi adaptando técnicas que automatizamos todo 
o nosso processo de entrega e conseguimos o título de "startup que entrega no prazo".

Gosto de contar as histórias do início, então vamos lá!

## O processo precário e o risco de perder toda a credibilidade

No começo nosso processo funcionava mais ou menos assim:

1. Fulano clona o repositório, faz suas alterações, sobe numa branch (na maioria das vezes era direto na *master*).
2. Ciclano da um pull, faz o que for necesário e sobe novamente.
3. No final, alguém subia uma versão de teste pro cliente por ssh em um servidor (até hoje não sei quem era esse alguém).
4. Correções eram feitas em cima dos testes, e no fim uma versão era colocada nesse mesmo servidor pra "produção".

Não consigo nem preciso citar todas as falhas que aconteciam. Quantas vezes tínhamos que ficar revertendo commits,
resetando branches, falando no ouvido do fulano que não resolveu conflito, etc. Sem contar que quando tínhamos que colocar 
algo em produção éramos obrigados a pedir que niguém fizesse commit na *master* já que todo mundo tinha esse costume.

Era precário, mas funcionava para uma startup no seu início e que precisava mostrar logo protótipos para seus clientes. 
Claro que em algum momento esse processo se tornaria insustentável. Foi o que começou a acontecer no início de 2017.

O sistema que fizemos funcionava muito bem e atendia às necessidades do cliente. Era hora de sair do "beta" e se ter sua 
primeira versão oficial. A equipe envolvida no projeto cresceu, o sistema se tornava cada dia mais utilizado e o 
desenvolvimento cada dia mais perigoso.

Qualquer erro naquele processo precário e manual poderia mandar pelos ares toda credibilidade que conquistamos com nosso 
primeiro produto. Provavelmente perderíamos o cliente e voltaríamos ao ponto zero.

Não há como esquecer aquele domingo de madrugada que o servidor ficou indisponível e temíamos amargamente que na manhã da 
segunda o cliente não conseguisse acessar o sistema. Por sorte isso não aconteceu.

Sabíamos que era hora de mudar nosso processo e parte da nossa infraestrutura. Estava claro que deploy manual não era uma 
opção viável e que commits vindo de lá e de cá o tempo todo sem coordenação estavam ferrando qualquer tipo de versão estável.

Foi então que começamos a adotar e adaptar algumas técnicas.

## Gitflow e a organização do desenvolvimento

O primeiro problema que precisávamos resolver era a instabilidade no código que era alterado o tempo todo na *master*. 
Era estranho olhar nosso repositório e ver quase 10 branches de release que eram as nossas "versões". Tinham versões de 3 
meses antes que não tinham motivo algum para estarem lá. Era uma loucura!

Resolvemos adotar a metodologia descrita [nesse artigo](http://nvie.com/posts/a-successful-git-branching-model/). Claro que 
como não existe fórmula mágica, tivemos que fazer várias adaptações para que tudo se encaixasse e funcionasse com a gente.

### 1. Repositórios oficiais

Temos duas branches nos repositórios oficiais, uma *development* e uma *master*, que correspondem ao código 
das versões de desenvolvimento/homologação e produção respectivamente. Nenhum commit pode ser feito diretamente no repositório 
oficial, a única forma de atualizar o código é por meio de pull requests.

Nossos repositórios oficiais ficam com a seguinte estrutura:
![Main Branches](/img/main-branches.png)

### 2. Forks descentralizados

Cada dev tem seu próprio fork do repositório oficial e é no seu fork que ele vai criar as branches de *feature* e *hotfix*.
As branches podem ser compartilhadas entre os forks para que devs tenham acesso ao código um do outro através de um pull, 
sendo assim descentralizadas. Basta que um dev adicione o outro como remote.

Imagine que 3 devs estão trabalhando na feature X. O fluxo pode ser feito da seguinte forma:

1. Dev 1 cria uma branch chamada *feature-x* no seu fork, e começa a trabalhar nela, faz seus commits e da um push.
2. Dev 2 da um pull na branch *feature-x* do Dev 1, faz o que tem de fazer, faz os commits e da um push.
3. Dev 1 da um pull na branch *feature-x* do Dev 2 para corrigir um bug.
4. Dev 3 da um pull na branch *feature-x* do Dev 1.
5. Assim por diante

Quando essa feature estiver pronta para ser testada, basta abrir um pull request para a branch *development* do repositório 
oficial.

Como as tarefas são dividas entre os devs, nem sempre eles compartilham branches. Na maioria das vezes cada uma trabalha na sua.
Claro que esse processo não é perfeito, mas funciona pro nosso dia-a-dia e raramente temos algum problema de versão.

Quando os devs não compartilham branches mas precisam da última versão um do outro, basta que um mande um pull request para 
a *development* e o outro dê um pull dela.

### 3. Hotfixes à partir da master

Uma forma de facilitar correções de bugs que já estão em produção é criar uma branch de *hotfix* à partir da *master*. Na maioria
das vezes consegue-se fazer o merge dessa branch tanto em *master* quanto em *dev*.

Imagine que precisamos corrigir algo, podemos fazer assim:

{{< highlight bash >}}
git checkout master
git pull origin master #atualizando com o repositório oficial
git checkout -b hotfix-bugx
{{< / highlight >}}

Após as correções basta subir para o nosso fork:

{{< highlight bash >}}
git commit
git push me hotfix-bugx #fazendo push para uma branch no meu fork
{{< / highlight >}}

Agora basta abrir um pull request para a *master* do repositório oficial! Podemos fazer também um pull request para a branch 
*development* ou dar um pull da *master* na *development*.

### 4. Enviando versão para produção

Uma vez que a versão de *dev* esteja testada e estável, tudo que precisamos fazer para criar uma nova versão em produção é 
fazer um pull request de *dev* pra *master*. Dessa forma a branch *master* sempre tem a última versão do código que está em 
produção.

Mais uma vez: não existe fórmula secreta! Esse é o método que funciona com a gente e pode não ser o ideal para o seu caso. 
O ideal é adaptar tudo que já existe ao dia-a-dia da sua equipe.

Assim resolvemos um dos principais problemas, que era a organização e versionamento do código.
Agora precisávamos resolver algo tão importante quanto: acabar com deploy manual.

## Kubernetes, containers e deploy automatizado

Lembra que tinha alguém encarregado de pegar o código e colocar em produção? Precisávamos acabar com a necessidade dessa pessoa.
Precisávamos também ter segurança da disponibilidade do nosso produto, já que em um domingo de madrugada o servidor resolveu cair 
e quase nos matou do coração.

Como já tínhamos em mente desde o início trabalhar com uma arquitetura de microserviços (você pode encontrar mais sobre microserviços 
[aqui](https://martinfowler.com/articles/microservices.html)). Resolvemos adotar de vez o Kubernetes para fazer o deploy das 
nossas aplicações (mais sobre kubernetes [aqui](https://kubernetes.io/)).

Utilizamos o Kubernetes diretamente no Google Cloud Platform. Assim temos um serviço disponível 24x7 sem nos preocuparmos com 
configuração de servidor, etc. Tudo que precisamos fazer é criar o cluster, automatizar o deploy e resolver algum probleminha 
vez ou outra.

Já que o gitflow mantinha estáveis as versões de desenvolvimento/homologação e de produção, foi simples automatizar o 
processo. Utilizamos o [Wercker](https://www.wercker.com/) - que mais tarde naquele mesmo ano foi comprado pela Oracle - para
tal.

Tudo que precisamos fazer foi configurar o Wercker para que qualquer commit na branch *master* disparasse uma pipeline que 
geraria um novo container, faria o deploy do mesmo para o Google Container Registry e então faria um update no Kubernetes, 
atualizando assim a versão de produção. Repetimos o processo para *development* e pronto! Easy peasy lemon squeezy!

Agora para fazer o deploy de uma nova versão basta fazer o merge do pull request. O resto é com o Wercker e o Kubernetes. 
O processo de deploy leva entre 3 e 5 minutos!

Outra vantagem incrível é que quando um dev novo chega, só precisamos explicar como funciona nossa adaptação do gitflow. Em 
pouco tempo já se está habituado e produzindo.

Atualmente temos microserviços rodando em Python e Node.js, estamos planejando expandir e ter novos serviços em Golang. 
Graças ao poder do Kubernetes ficamos independentes de linguagem e tecnologia. A gente pode fazer o que quiser. 

## Consequências da automatização e da organização: Entrega contínua

Com o deploy automatizado e o código organizado, chegamos ao tão sonhado objetivo. Passamos a entregar todos os nossos sprints no 
prazo, e ainda com feedback quase automático do cliente.

Praticamente todos os dias algo novo é colocado em dev e pode ser testado pelo cliente, que logo consegue identificar os erros e acertos.
Acabamos com o nosso gargalo de entrega e a cada 15 dias uma nova versão está em produção com novas features. Além de podermos 
corrigir bugs a qualquer momento sem que o usuário perceba qualquer instabilidade no sistema durante a atualização.

Nosso processo está longe de ser perfeito, mas funciona! Como diz o ditado: melhor feito que perfeito.

Ainda temos coisas para melhorar. Precisamos refinar um pouco o método, talvez adotar novas ferramentas, mas o importante é 
que entregamos com qualidade e no prazo.

Nos tornamos conhecidos por isso e é incrível ouvir dos clientes que nosso diferencial é a capacidade de entrega.

## Conclusão

A ideia deste artigo foi mostrar como tudo mudou depois que adotamos o gitflow e o kubernetes e como com um pouco de 
adaptação podemos tornar nossos processos melhores.

Pretendo escrever futuramente algo mais profundo e técnico sobre Kubernetes e Wercker. Então fica ligado no que virá por ai!

Um grande abraço e obrigado por ter lido até aqui. Até o próximo post!
