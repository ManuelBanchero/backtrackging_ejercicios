/* 
    Partición de conjunto: Dado un conjunto de n enteros se desea encontrar, si existe, una
    partición en dos subconjuntos disjuntos, tal que la suma de sus elementos sea la misma.

    Ej: [5, 4, 3, 2, 6], al iterar una de las opcinones es -> [0, 1, 0, 0, 1]
    Entonces, se toma: 
     - Por un lado, los valores del conjunto en donde el subconjunto vale 0
     - Por otro lado, los valores del conjunto en donde el subconjunto vale 1
    
    Nos queda: [5, 3, 2] (para 0) y [4, 6] (para 1)
    La suma de estos subconjuntos es 10 para cada uno, por lo tanto cumple la condición
*/

function isSumIgual(conjunto: number[], particion: number[]): number {
    let primerSubCojunto: number = 0
    let segundoSubConjunto: number = 0

    for (let i = 0; i < conjunto.length; i++) {
        if (particion[i] === 0)
            primerSubCojunto += conjunto[i]
        else
            segundoSubConjunto += conjunto[i]
    }

    return primerSubCojunto === segundoSubConjunto ? primerSubCojunto : -1
}

function mostrarConjunto(conjunto: number[], particion: number[], sum: number): void {
    const primerSubCojunto: number[] = []
    const segundoSubConjunto: number[] = []

    for (let i = 0; i < conjunto.length; i++) {
        if (particion[i] === 0)
            primerSubCojunto.push(conjunto[i])
        else
            segundoSubConjunto.push(conjunto[i])
    }

    console.log(`Los subconjuntos {${primerSubCojunto.join(', ')}} y {${segundoSubConjunto.join(', ')}} suman lo mismo: ${sum}`)
}

function particionConjunto(
    conjunto: number[],
    particion: number[] = new Array(conjunto.length).fill(0),
    e: number = 0
): void {
    const n = conjunto.length - 1
    for (let i = 0; i <= 1; i++) {
        particion[e] = i
        if (e === n) {
            const sumIgual = isSumIgual(conjunto, particion)
            if (sumIgual !== -1)
                mostrarConjunto(conjunto, particion, sumIgual)
        } else {
            particionConjunto(conjunto, particion, e + 1)
        }
    }
}


const conjunto: number[] = [5, 4, 3, 2, 6]
console.log(`\n${'='.repeat(20)} PARTICIÓN DE CONJUNTO CON SUMAS IGUALES ${'='.repeat(20)}\n`)
console.log(`Dado el conjunto: {${conjunto.join(', ')}\n`)
particionConjunto(conjunto)