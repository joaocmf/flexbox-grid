let adicionar = document.getElementById('adicionar');

adicionar.addEventListener('click', function(){
    let divCard = document.createElement('div');
    divCard.classList.add('cards')

    document.getElementById('card').appendChild(divCard);

});


document.getElementById('sub').addEventListener('click', function(){
    let divsCard = document.querySelectorAll('.cards');
    if(divsCard.length > 0){
        divsCard[0].remove();
    }
    
});


