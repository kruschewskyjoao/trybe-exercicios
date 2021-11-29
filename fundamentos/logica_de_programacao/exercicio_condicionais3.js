let age = 30
let sex = 'F'
let weight = 80
let height = 175

if(sex === 'M') {
    let homens = (height * 6.25) + (weight * 9.99) - (age * 4.92) + 5
    console.log(`A taxa metabólica basal é: ${homens} Kcal`)
} else if (sex === "F") {
    let mulheres = (height * 6.25) + (weight * 9.99) - (age * 4.92) - 161
    console.log(`A taxa metabólica basal é: ${mulheres} Kcal`)
}
