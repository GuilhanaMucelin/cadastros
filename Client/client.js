const clientForm = document.getElementById('client-form')

clientForm.addEventListener('submit', (e) => {
    e.preventDefault(); // não recarrega a página quando o evente acontece
    let clientName = document.getElementById('client-name').value;
    let clientEmail = document.getElementById('client-email').value;
    let clientPhone = document.getElementById('client-phone').value;
    let clientCpf = document.getElementById('client-cpf').value;
    let clientAddress = document.getElementById('client-address').value;

    let clientData = {
        clientName,
        clientEmail,
        clientPhone,
        clientCpf,
        clientAddress,
    }

    let convertclientData = JSON.stringify(clientData);

    localStorage.setItem(`client${clientCpf}`, convertclientData)

})






    // {} Objeto = características
    // [] array
    // () Função ou parametro
    // (PARÂMETRO) É o item que a função ou metodo recebe
    
    // Função não esta dentro de um objeto, toda função que esta dentro de um objeto é metodo
    //JSON.stringify =  passa um objeto dentro do parâmetro e ele converte para string

    

   


