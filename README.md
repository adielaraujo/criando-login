###Criar o projeito
ng new login-intranet

#Instalar o primeng
#--save é para salvar no arquivo package.json
npm install primeng --save

#intalar o primeicons
npm install primeicons --save

# NO arquivo angular.json colocar o seguinte código e, "styles":[...]
#
# "node_modules/primeicons/primeicons.css",
#  "node_modules/primeng/resources/themes/nova-light/theme.css",
#  "node_modules/primeng/resources/primeng.min.css",
#  //...

#INSTALAR O BOOTSTRAP
npm install --save bootstrap@4.3.1



#Instalar extensoes no vc code
#TSLint 1.1.0 da microsoft
#EditorConfig for VS Code 0.13.0
#HTML Snippets 0.2.1 da Mohamed Abusaid
#Auto Import  1.5.3 da steoates

#Adicionando  um modulo 
#Adicionar o modulo segurança
ng g m seguranca

#Adicionar o modulo login-form
#--spec=false para não criar classe de teste
ng g c seguranca/login-form --spec=false

#Criando o serviço de segurança
ng g s seguranca/auth --spec=false

#Adicionar o modulo core
ng g m core

### parei para estudar o core model
