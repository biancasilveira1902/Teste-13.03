var button = document.getElementById('read-more');

button.addEventListener('click', function(){
     var card = document.querySelector('.card');
     card.classList.toggle('active');

     if (card.classList.contains('active')){
        return button.textContent = 'Leia menos';
     }

     button.textContent = 'Leia mais'
})