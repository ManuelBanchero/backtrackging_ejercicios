// Función auxiliar para mostrar la solución
function display(numbers: number[], subSet: number[]): void {
    const solution: number[] = []
    let sum = 0

    for (let i = 0; i < subSet.length; i++) {
        if (subSet[i] === 1) {
            solution.push(numbers[i])
            sum += numbers[i]
        }
    }

    console.log(`Subconjunto: [${solution.join(', ')}] -> Suma: ${sum}`)
}

function subSetSum(
    numbers: number[],
    target: number,
    subSet: number[] = new Array(numbers.length).fill(0),
    stage: number = 0,
    sum: number = 0
): void {

    // If i = 0 the number if not include, if it is 1, is include
    for (let i = 0; i <= 1; i++) {
        subSet[stage] = i
        sum += numbers[stage] * i

        // Verify if is a leaf
        if (stage === numbers.length - 1) {
            if (sum === target)
                display(numbers, subSet)
        } else if (sum <= target)
            subSetSum(numbers, target, subSet, stage + 1, sum)
    }
}

// Ejemplo de uso
console.log("=== Problema de Subset Sum ===\n");

// Ejemplo 1: v = [3, 5, 2, 7], m = 10
console.log("Ejemplo 1: v = [3, 5, 2, 7], m = 10")
const numbers = [3, 5, 2, 7]
const target = 10
subSetSum(numbers, target)