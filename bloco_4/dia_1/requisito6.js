let pecaXadrez = "cavalo";

    switch (pecaXadrez.toLowerCase()) {
        case "rainha":
            console.log("Rainha -> Move todo o tabuleiro na vertical, horizontal e diagonal");
            break;
        case "rei":
            console.log("Rei -> Move somente uma casa na vertical, horizontal e diagonal");
            break;
        case "cavalo":
            console.log("Cavalo -> Movimento em L");
            break;
        case "peao":
            console.log("Peao -> Move uma casa para frente");
            break;
        case "torre":
            console.log("Torre -> Move todo o tabuleiro na vertical e horizontal")
            break;
        default:
            console.log("Erro");
    }