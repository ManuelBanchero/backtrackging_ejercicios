function imprimir(conjunto: number[], solAct: number[]): void {
    const resultado: number[] = []
    for (let i = 0; i < conjunto.length; i++) {
        if (solAct[i] === 1)
            resultado.push(conjunto[i])
    }
    console.log(resultado)
}

function tablaDeVerdad(
    conjunto: number[],
    solAct: number[] = new Array(conjunto.length).fill(0),
    posAct: number = 0
): void {
    const n = conjunto.length - 1
    for (let i = 0; i <= 1; i++) {
        solAct[posAct] = i
        if (posAct === n) {
            imprimir(conjunto, solAct)
        } else {
            tablaDeVerdad(conjunto, solAct, posAct + 1)
        }
    }
}

tablaDeVerdad([1, 2, 3])