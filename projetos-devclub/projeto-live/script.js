const monstros = [
    {
    id: 1,
    nome: 'Osvaldo',
    altura: 2,
    habilidades: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore id delectus voluptates rem ipsa? Ipsam perferendis officiis dignissimos omnis dolor, alias pariatur! Maiores tempora nesciunt cum, consequatur nisi iure aliquid.',
    foto: 'https://robohash.org/osvaldo',
},
    {
        id: 2,
        nome: 'Craig',
        altura: 2,
        habilidades: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Fugit corrupti voluptate quia harum debitis officiis enim aliquam inventore Quo debitis commodi adipisci velit provident Aliquam culpa quidem architecto voluptatem cupiditate',
        foto: 'https://robohash.org/craig',

    },
    {
        id: 3,
        nome: 'Megamente',
        altura: 5,
        habilidades: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Fugit corrupti voluptate quia harum debitis officiis enim aliquam inventore Quo debitis commodi adipisci velit provident Aliquam culpa quidem architecto voluptatem cupiditate',
        foto: 'https://robohash.org/megamente',

    },
    {
        id: 4,
        nome: 'Devinho',
        altura: 8,
        habilidades: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Fugit corrupti voluptate quia harum debitis officiis enim aliquam inventore Quo debitis commodi adipisci velit provident Aliquam culpa quidem architecto voluptatem cupiditate',
        foto: 'https://robohash.org/devinho',

    },
]

const Secao = document.querySelector('.monstros')
const botao = document.querySelector('.btn')

botao.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark')
})

const todosOsMonstros = monstros.map(monstro => {
    return `<div>
      <p> Nome: ${monstro.nome}</p>
      <p>Altura: ${monstro.altura}</p>
      <p class="habilidades">Habilidades: ${monstro.habilidades}</p>
      <img src="${monstro.foto}">
 </div>`
})

Secao.innerHTML = todosOsMonstros