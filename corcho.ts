/* 
    Dos amigos resuelven jugar al siguiente juego con los once corchos de las botellas de vino que acaban de tomarse. 
    Los corchos están sobre la mesa y cada jugador debe retirar por turno uno, dos o tres corchos.

    - Ningún jugador puede “pasar”.
    - Pierde el jugador que retira el último corcho.
    - El juego se representa por un árbol (en nuestro ejemplo, un grafo) cuyos vértices están etiquetados con el número actual de corchos que quedan.
*/

function corcho(corchos: number, jugador: number = 1): number {
    if (corchos === 0) return jugador

    let sig = 1
    let val = jugador * -1
    let poda = false

    while (sig <= 3 && sig <= corchos && !poda) {
        corchos -= sig
        if (jugador === 1)
            val = Math.max(val, corcho(corchos, jugador * -1))
        else
            val = Math.min(val, corcho(corchos, jugador * -1))

        if (jugador * val === 1) poda = true
        else corchos += sig

        sig++
    }

    return val
}

console.log(corcho(3))