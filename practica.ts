function damaOk(s: number[], e: number): boolean {
    for (let i = 0; i < e; i++)
        if (s[i] === s[e] || Math.abs(s[i] - s[e]) === Math.abs(i - e))
            return false

    return true
}

function dama(
    n: number,
    tablero: number[] = new Array(n).fill(0),
    e: number = 0
): boolean {
    let ok = false
    tablero[e] = 0

    while (tablero[e] < n && !ok) {
        if (damaOk(tablero, e)) {
            if (e === n - 1) {
                ok = true
                console.log(tablero)
            } else {
                ok = dama(n, tablero, e + 1)
            }
        }

        tablero[e] = tablero[e] + 1
    }

    return ok
}

dama(4)