/*
    Considere 5 objetos con pesos (w_1,w_2,...w_5) = (10,3,5,7,2), y una mochila
    de tamaño n=10. Use una estrategia de backtracking para encontrar todas las combinaciones de 
    objetos que caben exactamente en la mochila. Calcule la complejidad de este método.
*/

function imprimirObjetos(objetos: number[], objetosEnMochila: number[], peso: number): void {
    const conjunto: number[] = []
    for (let i = 0; i < objetos.length; i++) {
        if (objetosEnMochila[i] === 1) {
            conjunto.push(objetos[i])
        }
    }

    console.log(`El conjunto { ${conjunto.join(', ')} } tiene un peso de ${peso}`)
}

function mochila(
    objetos: number[],
    pesoMochila: number,
    objetosEnMochila: number[] = new Array(objetos.length).fill(0),
    pesoActual: number = 0,
    estado: number = 0
): void {
    const n = objetos.length - 1

    for (let i = 0; i <= 1; i++) {
        objetosEnMochila[estado] = i
        pesoActual += objetos[estado] * i

        if (pesoActual > pesoMochila) return

        if (n === estado) {
            pesoActual !== 0 && imprimirObjetos(objetos, objetosEnMochila, pesoActual)
        } else {
            mochila(objetos, pesoMochila, objetosEnMochila, pesoActual, estado + 1)
        }
    }
}

mochila([10, 3, 5, 7, 2], 10)