#DIA 2 - UNIX & BASH - PARTE 2



cat > - com esse comando se pode criar um arquivo e atribuir valores ao mesmo (cat > cores.txt)

cat >> - edita um arquivo e ACRESCENTA valores ao mesmo (cat >> cores.txt)

cat cores.txt cores02.txt > todasCores.txt - junta os valores contidos nos dois arquivos anteriores e os une em um único.

sort < - ordena em ordem alfabética os valores contidos no arquivo, no entanto, não os altera, apenas configura saída no terminal (sort < cores.txt).

sort < cores.txt > coresOrdenadas.txt - os valores de cores.txt serão ordenados e então compilados no novo arquivo coresOrdenadas.txt.

who - lista que são os usuários que possuem acesso ao sistema.

| - o pipe. Usado para passar outputs de um comando para outro. Por exemplo, (who | sort) nesse caso o output do who, isto é, a listagem de usuários, será passada para o comando sort e, desta forma, a lista de usuários será impressa no terminal de forma alfabeticamente ordenada. 

who | wc -l - aqui é mais um exemplo do pipe pode passar output de um comando para outro. O who listará os usuários e, por sua vez, o wc -l contará o número de linhas, o número de usuários listados.

ls -l - acessa informações adcionais a respeito de arquivos e diretórios, sendo permissões, usuários, grupos aos quais os usuários pertencem, o tamanho dos arquivos e diretórios e as datas correspondentes cujas alterações foram feitas pela última vez.

chmod u - para alterar as permissões para o usuário (Isso vale para todos os seguintes chmod: caso se queira retirar uma permissão, usa-se chmod u-. Caso se queira adcionar uma permissão, se utiliza o chmod u+. Caso se queira deixar como está determinada permissão, se usa o chmod u=).

chmod g - para alterar as permissões para o grupo do qual o usuário faz parte

chmod o - para outros usuários fora do grupo

chmod a - altera as permissões para todo mundo

chmod u-rw arquivo1.txt - Aqui se retira a permissão de ler e escrever ou editar do usuário.

chmod u+rw arquivo.txt - Aqui se atribui a permissão de ler e escrever ou editar do usuário.

ps - lista os processos que estão sendo executados naquele axato momento.

PID - não é um comando. É o identificador único dos processos em execução.

sleep 10 & - Aqui o sleep executa um processo por 10 segundos. O & comercial deixa esse processo em BACKGROUND.

ctrl z - suspende o processo em andamento (sleep 100, por exemplo).

bg - coloca um processo suspenso em background.

jobs - mostra todos os processos suspensos ou em andamento.

fg %aqui coloca o número do processo - abre o processo em FOREGROUND.

ctrl c - termina o processo.

kill %aqui se coloca o número do processo - termina o processo.

kill mais o número maior que referencia o processo - termina o processo.

kill -9 mais o número maior que referencia o processo - mata de vez o processo.

find . -name '*.txt' - lista todos os arquivos txt dentro de um diretório.

find . -type d - lista todos os diretórios dentro de um diretório pai.

find . -type f - lista todos os arquivos dentro de um deretório.

history - exibe todos os comandos que você já executou no terminal.

history | tail ou head - exibe as 10 últimas execuções ou as 10 primeiras execuções.

echo '' - se coloca algo dentro das aspas simples e isso é impresso na tela do terminal.

echo 'olá, como vai?' > arquivo1.txt - um arquivo é criado para abrigar os dizeres dentre as aspas simples.








