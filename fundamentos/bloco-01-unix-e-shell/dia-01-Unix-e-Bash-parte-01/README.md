#DIA 01 - UNIX E BASH - PARTE 01

Para além do Unix e Shell em suas conceituações básicas, aprendemos, em grande parte, a respeito dos diversos comandos proporcionados pelo Terminal do Linux. 



ls - comando que acessa os diretórios e arquivos do meu root, ou diretório raiz.

ls -a - mostra além dos diretórios e arquivos usuais, os arquivos ocultos.

cd - muda de diretório (change directory)

mkdir - cria diretório (make directory)

cd .. - muda do diretório atual para o diretório pai/ retrocede.

pwd - mostra o caminho completo até o meu diretório atual, desde o root / diretório raiz.

cp - copia um arquivo (cp arquivo1.txt arquivo2.txt)

cat - abre e lista o conteúdo de um arquivo (cat arquivo1.txt)

mv - move um arquivo de um diretório para outro (mv arquivo2.txt /home/alex/Música) ou renomeia um arquivo (mv arquivo1.txt arquivo2.txt)

rm - remove um arquivo

rmdir - remove um diretório

rm -rf - remove um diretório com arquivos dentro, um diretório cheio (-rf - R significa remover, F significa forçar a ação)

less - lista página por página de um arquivo muito grande, ocupando cada página o tamanho da janela do terminal (less arquivo1.txt). BARRA DE ESPAÇO passa as páginas. Q sai da exibição. Para procurar por linhas com certas caracteristicas, digitar ao final da exibição / seguida da palavra-chave (/toy).

head - mostra as 10 primeiras linhas de um arquivo (head arquivo1.txt)

head -5 - mostras as 5 primeiras linhas do arquivo, podendo ser colocado qualquer outro número (head -3 arquivo1.txt)

tail - exibe as 10 ultimas linhas de um arquivo

tail -5 - exibe as 5 últimas linhas de um arquivo, podendo ser colocado qualquer outro número no lugar do 5.

grep - puxa aquilo que se quer de dentro de um arquivo ( coloca-se uma palavra-chave após o grep =  grep Toy arquivo1.txt) e assim as linhas que possuírem a palavra-chave serão exibidas (tomar cuidado com o case sensitive, isto é, se a palavra-chave na linha conter letra maiúscula, deverá no comando ser apresentado palavra-chave com letra maiúscula também).

grep -i - puxa aquilo que se quer de dentro de um arquivo, ignorando o case sensitive. 

grep -i '' - puxa aquilo que se quer de dentro de um arquivo ao se utilizar, dentro de aspas simples, de uma frase ou mescla de palavras (grep -i 'o poderoso' arquivo1.txt   =    O Poderoso Chefão).

grep -iv '' - puxa tudo aquilo no arquivo que não corresponda ao que está entre aspas simples (grep -iv 'o poderoso' arquivo1.txt    =     serão exibidas todas as linhas que NÃO possuem 'o poderoso' em sua composição).

grep -in '' - puxa a exata localização da linha cuja composição tem a ver com o que está entre aspas simples (grep -in 'o poderoso' arquivo1.txt   =   4:O Poderoso Chefão).

grep -ic '' - puxa o número de vezes, cópias que determinada linha é encontrada no arquivo, desde que essas linhas tenham em sua composição o que está entre aspas simples (grep -ic 'o poderoso' arquivo1.txt   =    3).

wc - nos traz a contagem do conteúdo de um arquivo (wc arquivo1.txt   =    29    92    545 arquivo1.txt)

wc -l - nos traz o número de linhas contidas no arquivo 

wc -w - nos traz o número de palavras contidas no arquivo

wc -c - nos traz o número de caracteres contidos no arquivo

ls * - lista todos os diretórios e arquivos correspondentes, isto é, nos mostra os arquivos dentro dos diretórios também.

ls ?rybe - o ? completa a letra faltante caso não nos recordemos dela. Assim, o diretório é aberto e listado seus arquivos (ls ?ownloads   =    todos os arquivos e diretórios dentro do diretório pai são expostos).

man - abre o manual a respeito de um comando, dizendo o que ele faz e suas respectivas variações ( man ls   =    abre a explicação do comando ls e lista suas variações).

whatis - uma versão resumida do que determinado comando faz (whatis ls   =    list directory contents).

apropos - nos mostra os variados comandos a respeito da ação que buscamos (apropos copy   =    lista todos os tipos de comandos que tem a ver com copy/copiar).










