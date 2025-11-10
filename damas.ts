function damaOk(s: number[], e: number): boolean {
    for (let i = 0; i < e; i++)
        if (s[i] === s[e] || Math.abs(s[i] - s[e]) === Math.abs(i - e))
            return false

    return true
}

function dama(s: number[], e: number = 0): boolean {
    let ok: boolean = false
    s[e] = 0

    while (s[e] < s.length && !ok) {
        if (damaOk(s, e)) {
            if (e === s.length - 1) {
                ok = true
                console.log(s)
            } else {
                ok = dama(s, e + 1)
            }
        }

        s[e] = s[e] + 1
    }

    return ok
}

dama([0, 0, 0, 0])