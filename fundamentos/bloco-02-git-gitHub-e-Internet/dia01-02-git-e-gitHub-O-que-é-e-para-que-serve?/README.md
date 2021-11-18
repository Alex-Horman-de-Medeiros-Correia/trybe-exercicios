#APRENDENDO A USAR OS COMANDOS


GIT - O Git é um sistema de controle de versão distribuído e amplamente adotado, possibilitando o versamento de repositórios, o histórico das modificações, etc. O Git nasceu e foi tomando espaço dos outros sistemas de controle. Seu criador principal é o mesmo que o do Linux: Linus Torvalds, e ganhou o coração das pessoas que trabalham com open source. (TRECHO RETIRADO DE ARTIGO DA ALURA)

GitHub - O Github tem sim muita relação com o Git. GitHub é uma plataforma para gerenciar seu código e criar um ambiente de colaboração entre devs, utilizando o Git como sistema de controle. Ele vai facilitar o uso do Git, escondendo alguns detalhes mais complicados de setup. É lá que você provavelmente vai ter seu repositório e usar no dia a dia. O sistema web que ele possui permite que você altere arquivos lá mesmo, apesar de não ser muito aconselhado, pois você não terá um editor, um ambiente de desenvolvimento e testes. Para se comunicar com o github e mexer nos arquivos do seu reposítorio, você pode usar a linha de comando, usando o comando do git e suas diretivas de commit, pull e push. (TRECHO RETIRADO DE ARTIGO DA ALURA)


##COMANDOS

git clone urlDoSeuRepositorio - capaz de clonar o repositório remoto em diretório distinto.

git init - O comando git init cria um novo repositório do Git no repositório local. Ele pode ser usado para converter um projeto existente e não versionado em um repositório do Git ou inicializar um novo repositório vazio.

git log - nos mostra o histórico das alterações.

git remote add origin coleAqui-a-url-do-repositorioRemoto - cria o vinculo entre o repositório local com o repositorio remoto.

git status - verifica o status do nosso Git.

git add . - adiciona todos os arquivos de uma vez.

git add nomeDoArquivo.txt - adiciona arquivo especifico.

git commit -m "mensagem referente à mudança feita" - efetiva as alterações.

git rm nomeDoArquivo.txt - remove arquivo.

git log --diff-filter=D --summary - lista todos os arquivos que tenham sido deletados por "git rm nomeDoArquivo.txt", em forma de sumário.

git checkout - Além de mudar de branch, o git checkout pode ser usado para voltar um determinado arquivo para seu estado na staged area. A staged area são os arquivos que estão prontos para serem comitados. Em outras palavras, são os arquivos que executamos o comando git add .

.gitignore - usado através de "cat > .gitignore" ou "cat >> .gitignore" para adcionar arquivos que irão ser ignorados pela stage area e, portanto, não poderão ser comitados.

git push -u origin master - EMPURRA, adiciona as modificações do repositório local no repositorio remoto, na branch master. Só faz a primeira vez! Após a primeira vez, usar git push apenas.

git fetch - puxa o que tiver no repositório remoto para o repositório local.

git pull - assim como o fetch, verifica se existem alterações no repositório remoto, e PUXA para o repositório local. Contudo, ele também faz o git merge, unificando as duas branchs.

pull requests - importante para realizar sugestões e contribuir com alterações em um repositório, fazendo com que as alterações em uma branch secundária possa ser mesclada à branch master, alinhando as informações.

git branch nomeDaBranchAqui - cria uma nova branch
















