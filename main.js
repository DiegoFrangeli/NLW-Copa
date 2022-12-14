function createGame(player1, hour, player2) {
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
        </li>
    `
}

let delay = -0.4;

function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card" style"animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
            `
}

document.querySelector('#app').innerHTML = `
    <header>
        <img src="./assets/logo.svg" alt="">
    </header>
    <main id="cards">
    ${createCard("24/11", "quinta",
        createGame('uruguai', '07:00', 'south korea')+
        createGame('switzerland', '10:00', 'cameroon')+
        createGame('portugal', '13:00', 'gana')+
        createGame('brazil', '16:00', 'serbia')
    )}
    ${createCard("28/11", "segunda",
        createGame('cameroon', '07:00', 'serbia')+
        createGame('south korea', '10:00', 'gana')+
        createGame('brazil', '13:00', 'switzerland')+
        createGame('portugal', '16:00', 'uruguai')
    )}
    ${createCard("02/12", "sexta",
        createGame('south korea', '07:00', 'portugal')+
        createGame('gana', '10:00', 'uruguai')+
        createGame('serbia', '13:00', 'switzerland')+
        createGame('brazil', '16:00', 'cameroon')
    )}
</main>
`

document
    .querySelectorAll("input[type='radio']")
    .forEach(function(input) {
        input.onclick = function() {
            const coratual = document.body.classList
            document.body.classList.replace(coratual, input.id)
        }
    })