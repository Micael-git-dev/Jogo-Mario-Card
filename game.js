    // Configuração do jogo

    /*
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 600;
        canvas.height = 400;

        let player = {
            x:50,
            y:180,
            width:50,
            height:5,
            speed:5,
            image: new Image()
        };

        let obstacles = [];
        let keys = {};

        // Carregar imagem do nosso jogador (bitmap)
        player.image.src = 'player.png';

        // Criar obstaculos (vetores)
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
                for (let i = 0; i <6; i++) {
                    color += letters[Math.floor(Math.random( )* 16)];
                }
                return color;
        }

        // Atualizar posição dos obstaculos
        function updateObstacles() {
            for (let i = 0; i< obstacles.length; i++) {
                obstacles[i].x -= obstacles[i].speed;
                    if (obstacles[i].x + obstacles[i].width < 0) {
                        obstacles.splice(i, 1);
                        i++;
                    }
            }
        }

        // Detecção de colisão
        function detectCollision(Player, obstacle) {
            return (
                player.x< obstacle.x + obstacle.width &&
                player.x + player.width > obstacle.x &&
                player.y < obstacle.y + obstacle.height &&
                player.x + player.height > obstacle.y
            );
        }

        // Movimentos do jogador
        function movePlayer() {
            if (keys['ArrowUP'] && player.y > 0) {
                player.y -= player.speed;
            }
            if (keys['ArrowDown'] && player.y + player.height < canvas.height) {
                player.y += player.speed;
            }
        }

        // Atualizar jogo
        function updateGame() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(player.Image, player.x, player.y, player.width, player.height);

            // Desenhar obstaculos (vetores)
            for (let i = 0; i < obstacles.length; i++) {
                ctx.fillStyle = obstacles[i].color;
                ctx.fillRect (obstacles[i].x, obstacles[i].y, obstacles[i].width, obstacles[i].height);

                if (detectCollision(player, obstacles[i])) {
                    alert('GAME OVER');
                    document.location.reload();
                    break;
                }
            }

            movePlayer();
            updateObstacles();

        }

        window.addEventListener('keydown', (e) => {
            keys[e.key] = true;
        });

        window.addEventListener('keyup', (e) => {
            keys[e.key] = false;
        });

        setInterval(() => {
            updateGame();
        }, 1000 / 60);

        setInterval(() => {
            creatObstacle();
        }, 2000);
        */
       // Configurações do jogo
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

let player = {
    x: 50,
    y: 180,
    width: 50,
    height: 50,
    speed: 5,
    image: new Image()
};

let obstacles = [];
let keys = {};

// Carregar imagem do jogador (bitmap)
player.image.src = 'player.png';  // Adicione uma imagem de um personagem neste caminho

// Criação de obstáculos (vetores)
function createObstacle() {
    let obstacle = {
        x: canvas.width,
        y: Math.random() * (canvas.height - 50),
        width: 50,
        height: 50,
        color: getRandomColor(),
        speed: 3
    };
    obstacles.push(obstacle);
}

// Função para gerar uma cor aleatória
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Atualizar posição dos obstáculos
function updateObstacles() {
    for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].x -= obstacles[i].speed;

        // Remover obstáculos fora da tela
        if (obstacles[i].x + obstacles[i].width < 0) {
            obstacles.splice(i, 1);
            i--;
        }
    }
}

// Detecção de colisão
function detectCollision(player, obstacle) {
    return (
        player.x < obstacle.x + obstacle.width &&
        player.x + player.width > obstacle.x &&
        player.y < obstacle.y + obstacle.height &&
        player.y + player.height > obstacle.y
    );
}

// Movimentação do jogador
function movePlayer() {
    if (keys['ArrowUp'] && player.y > 0) {
        player.y -= player.speed;
    }
    if (keys['ArrowDown'] && player.y + player.height < canvas.height) {
        player.y += player.speed;
    }
}

// Atualizar jogo
function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenhar jogador (bitmap)
    ctx.drawImage(player.image, player.x, player.y, player.width, player.height);

    // Desenhar obstáculos (vetores)
    for (let i = 0; i < obstacles.length; i++) {
        ctx.fillStyle = obstacles[i].color;
        ctx.fillRect(obstacles[i].x, obstacles[i].y, obstacles[i].width, obstacles[i].height);

        // Verificar colisão
        if (detectCollision(player, obstacles[i])) {
            alert('Game Over');
            document.location.reload();
            break;
        }
    }

    // Movimentar jogador
    movePlayer();

    // Atualizar obstáculos do jogador
    updateObstacles();
}

// Controlar teclas
window.addEventListener('keydown', (e) => {
    keys[e.key] = true;
});

window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

// Loop do jogo
setInterval(() => {
    updateGame();
}, 1000 / 60); // 60 frames por segundo

// Gerar novos obstáculos
setInterval(() => {
    createObstacle();
}, 2000);