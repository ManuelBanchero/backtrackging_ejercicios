/*
    Dado n números, mostrar todos los subconjuntos posibles que puede tener el mismo
    Ejemplo, para n = 3 -> 2^3 posibilidades:
    [0, 0, 0]
    [0, 0, 1]
    [0, 1, 0]
    [0, 1, 1]
    [1, 0, 0]
    [1, 0, 1]
    [1, 1, 0]
    [1, 1, 1]
*/

function tablaDeVerdad(
    n: number,
    solAct: number[] = new Array(n).fill(0),
    posAct: number = 0
): void {
    for (let i = 0; i <= 1; i++) {
        solAct[posAct] = i
        if (posAct === n - 1) {
            console.log(solAct)
        } else {
            tablaDeVerdad(n, solAct, posAct + 1)
        }
    }
}

tablaDeVerdad(3)

// Complejidad: O(2^n)