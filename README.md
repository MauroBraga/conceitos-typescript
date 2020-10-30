# TypeScript
    - Linguagem baseada em javascript
    - Ela adiciona a tipagem
    - Acessar as funcionalidades mais recentes
    
    - Por que o TypeScript ?
        -> Sem o typescript o editor fica "burro", ele não cai conseguir determinar quais as propriedades do objeto
    
    - Mitos e Verdades
        .  TYpeScript diminui a produtividade. Mais tem benificios a longo prazo.
        . Typescript é não é a mesma coisa q trasnformar JavaScript em  Java ou C#. A tipagem é fraca apenas nas informações que o editor não consegue identificar de maneira automática.
        . Mercado tem adotado o Typescript. Pos tenho um ganho em escalabilidade e manutenção do código
        . O typescript não sibstitui o javascrip pois o tyypescript é baseado no javascript
        

    - Comand: 
        . yarn tsc src/index.ts -> converte o código para javascript
        . yarn tsc --init -> Cria o arquivo tsconfig.json
        . yarn tsc -> ja converte os arquivos tsc para arquivos javascript
        . node src/index.js

        ## Descomentar essa linha no tsconfig para determinar aonde vai ficar os arquivos js gerados    
        . "outDir": "./dist",       