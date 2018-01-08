---
title: "Gitflow e Entrega Continua"
date: 2018-01-08T13:00:29-02:00
draft: false
url: "/gitflow-e-entrega-continua"
description: "Um pouco sobre processos de entrega contínua e como fazemos isso na @1STi"
tags: ["gitflow", "ci-cd", "devops"]
comments: true
post: true
---

Um dos maiores desafios nos últimos anos tem sido entregar software com velocidade e qualidade.

Nós devs sabemos o quanto é difícil encontrar um método que mantenha nossas entregas em uma frequência considerável e
mantendo o padrão esperado pelo cliente. Tanto é que tentamos aplicar todos os tipos de técnicas agile disponíveis, 
como o scrum, kanban, MSF, XP, etc, etc.

No entanto, nenhuma dessas técnicas parece realmente eficiente quando o fluxo de entrega não é realmente eficiente. Claro que 
sei reconhecer a eficácia de métodos como scrum que realmente agilizam processos de trabalho. Mas concorda comigo que agilizar 
o processo de desenvolvimento é apenas uma parte do pacote?

Responda rapidamente essas perguntas:

Você já atrasou a entrega de um sprint porque o carinha que administra os servidores estava ocupado?
Ou porque sua equipe não tem acesso aos servidores?
Ou porque o commit do fulano estava dando conflito com do beltrano?
Ou porque a outra equipe estava na frente na fila de deploy?

Vejo muitas empresas tentando resolver seus problemas contratando um "profissional de DevOps". Calma, que já vou explicar 
o porquê das aspas.

É que na verdade DevOps é mais um processo que um profissional especializado em algo. Esse processo surgiu da necessidade 
de integrar os processos de Dev (desenvolvimento, teste, etc) aos processos de Ops (deploy, configuração de servidor, etc).
Nem sempre a solução para os problemas de entrega é contratar um DevOps master top das galáxias. Com um pouco de organização 
e um alinhamento adequado nos processos da equipe, pode-se conseguir os mesmos resultados ou até melhores.

Não existe fórmula mágica para entregar software. A receita desse bolo varia de empresa para empresa, de equipe para equipe.

Claro que algumas técnicas podem se tornar úteis com alguns ajustes aqui e ali. Exatamente como fizemos na [@1sti](http://www.1sti.com.br).

Gosto de contar as histórias do início, então vamos lá!

No começo nosso processo funcionava mais ou menos assim (posso me esquecer de algo, pois faz um tempinho que migramos):

1. Fulano clona o repositório, faz suas alterações, sobe numa branch (isso quando não ia direto pra master).
2. Ciclano da um pull, faz o que for necesário e sobe novamente.
3. No final, alguém subia uma versão de teste pro cliente por ssh em um servidor (até hoje não sei quem era esse alguém).
4. Correções eram feitas em cima dos testes, e no fim uma versão era colocada nesse mesmo servidor pra "produção".

Não consigo nem preciso citar todas as falhas que aconteciam nesse processo. Quantas vezes tínhamos que ficar revertendo commits,
resetando branches, falando no ouvido do fulano que não resolveu conflito, etc. Sem contar que quando tínhamos que colocar algo em 
produção éramos obrigados a pedir todo mundo não commitar nada na master já que todo mundo tinha esse costume.

