/* 
    Dada una colección de n números enteros positivos, se desea encontrar, si existe, una partición de la colección
    en dos sub-colecciones disjuntas tales que la suma de ambas es igual y que cualquier elemento de la colección
    original se encuentra en una u otra de las sub-colecciones.
*/

function imprimirConjuntos(conjunto: number[], solAct: number[]): void {
    const conjunto1: number[] = []
    const conjunto2: number[] = []
    let sum: number = 0

    for (let i = 0; i < conjunto.length; i++) {
        if (solAct[i] === 0) {
            conjunto1.push(conjunto[i])
            sum += conjunto[i]
        }
        else if (solAct[i] === 1)
            conjunto2.push(conjunto[i])
    }

    console.log(`El subconjunto {${conjunto1.join(', ')}} y {${conjunto2.join(', ')}}, suman cada uno: ${sum}`)
}

function sumSubConjuntos(conjunto: number[], solAct: number[]): boolean {
    let sumConjunto1 = 0
    let sumConjunto2 = 0

    for (let i = 0; i < conjunto.length; i++) {
        if (solAct[i] === 0)
            sumConjunto1 += conjunto[i]
        else if (solAct[i] === 1)
            sumConjunto2 += conjunto[i]
    }

    return sumConjunto1 === sumConjunto2
}

function particionEnPartesIguales(
    conjunto: number[],
    solAct: number[] = new Array(conjunto.length).fill(0),
    etapa: number = 0
): void {
    const n = conjunto.length - 1
    for (let i = 0; i <= 1; i++) {
        solAct[etapa] = i

        if (etapa === n) {
            if (sumSubConjuntos(conjunto, solAct))
                imprimirConjuntos(conjunto, solAct)
        } else {
            particionEnPartesIguales(conjunto, solAct, etapa + 1)
        }
    }
}

particionEnPartesIguales([2, 5, 8, 3, 2])