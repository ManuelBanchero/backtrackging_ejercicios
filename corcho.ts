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
    let val = -1 * jugador
    let poda = false

    while (sig <= 3 && sig <= corchos && !poda) {
        corchos = corchos - sig

        if (jugador === 1) val = Math.max(corcho(corchos, -1 * jugador))
        else val = Math.min(corcho(corchos, -1 * jugador))

        if (corchos * val === 1) poda = true
        else corchos = corchos + sig // Estado de corchos anterior

        sig += 1
    }

    return val
}

console.log(corcho(3))