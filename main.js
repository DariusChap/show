// contributors Safea Patrick Mansa-Musa, Doug Wilson, Cynthia Eveans

// Kata 1 
const content = document.querySelector('main')
const sampleArray = [   469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
]

let counter = 1

let headingOne = document.createElement('h1') 
    content.append(headingOne)
    headingOne.append('Kata 1')

    while (counter <= 20) {
        let headingTwo = document.createElement('p')
        content.append(headingTwo)
        headingTwo.append(counter)

        counter += 1
}

// Kata 2

let counter2 = 2

let kata2 = document.createElement('h1') 
    content.append(kata2)
    kata2.append('Kata 2')

    while (counter2 <= 20) {
        if(counter2 % 2 === 0) {
            let kata2heading = document.createElement('p')
        content.append(kata2heading)
        kata2heading.append(counter2)
            
        }

        counter2 += 1
}

// Kata 3

let counter3 = 1

let kata3 = document.createElement('h1') 
    content.append(kata3)
    kata3.append('Kata 3')

    while (counter3 <= 20) {
        if(counter3 % 2 === 1) {
            let kata3heading = document.createElement('p')
        content.append(kata3heading)
        kata3heading.append(counter3)
            
        }

        counter3 += 1
}

// Kata 4

let counter4 = 5

let kata4 = document.createElement('h1') 
    content.append(kata4)
    kata4.append('Kata 4')

    while (counter4 <= 100) {
            let kata4heading = document.createElement('p')
        content.append(kata4heading)
        kata4heading.append(counter4)
            
    

        counter4 += 5
}

// Kata 5

let counter5 = 1

let kata5 = document.createElement('h1') 
    content.append(kata5)
    kata5.append('Kata 5')

    while (counter5 <= 10) {
        let newCounter = counter5*counter5
            let kata5heading = document.createElement('p')
        content.append(kata5heading)
        kata5heading.append(newCounter)
            
        

        counter5 += 1
}

// Kata 6

let counter6 = 20

let kata6 = document.createElement('h1') 
    content.append(kata6)
    kata6.append('Kata 6')

    while (counter6 >= 1) {
        let kata6heading = document.createElement('p')
        content.append(kata6heading)
        kata6heading.append(counter6)

        counter6 -= 1
}

// Kata 7

let counter7 = 20

let kata7 = document.createElement('h1') 
    content.append(kata7)
    kata7.append('Kata 7')

    while (counter7 >= 1) {
        if(counter7 % 2 === 0) {
        let kata7heading = document.createElement('p')
        content.append(kata7heading)
        kata7heading.append(counter7)
        }
        counter7 -= 1
}


// Kata 8

let counter8 = 19

let kata8 = document.createElement('h1') 
    content.append(kata8)
    kata8.append('Kata 8')

    while (counter8 >= 1) {
        if(counter8 % 2 === 1) {
        let kata8heading = document.createElement('p')
        content.append(kata8heading)
        kata8heading.append(counter8)
        }
        counter8 -= 1
}

// Kata 9

let counter9 = 100

let kata9 = document.createElement('h1') 
    content.append(kata9)
    kata9.append('Kata 9')

    while (counter9 >= 5) {
        if(counter9 % 5 === 0) {
            let kata9heading = document.createElement('p')
        content.append(kata9heading)
        kata9heading.append(counter9)
    }
    

        counter9 -= 5
}

// Kata 10

let counter10 = 10

let kata10 = document.createElement('h1') 
    content.append(kata10)
    kata10.append('Kata 10')

    while (counter10 >= 1) {
        let newCounter1 = counter10*counter10
            let kata10heading = document.createElement('p')
        content.append(kata10heading)
        kata10heading.append(newCounter1)
    
        

        counter10 -= 1
}




// Kata 11

let kata11 = document.createElement('h1') 
    content.append(kata11)
    kata11.append('Kata 11')

    for(let index11 = 0; index11 < sampleArray.length; index11++) {
        let kata11heading = document.createElement('p')
        content.append(kata11heading)
        kata11heading.append(sampleArray[index11])

}

// Kata 12

let kata12 = document.createElement('h1') 
    content.append(kata12)
    kata12.append('Kata 12')

    for(let index12 = 0; index12 < sampleArray.length; index12++) {
        if(sampleArray[index12] % 2 === 0) {
        let kata12heading = document.createElement('p')
        content.append(kata12heading)
        kata12heading.append(sampleArray[index12])
        }
}

// Kata 13

let kata13 = document.createElement('h1') 
    content.append(kata13)
    kata13.append('Kata 13')

    for(let index13 = 0; index13 < sampleArray.length; index13++) {
        if(sampleArray[index13] % 2 === 1) {
        let kata13heading = document.createElement('p')
        content.append(kata13heading)
        kata13heading.append(sampleArray[index13])
        }
}

// Kata 14

let kata14 = document.createElement('h1') 
    content.append(kata14)
    kata14.append('Kata 14')

    for(let index14 = 0; index14 < sampleArray.length; index14++) {
        let kata14heading = document.createElement('p')
        content.append(kata14heading)
        kata14heading.append(sampleArray[index14] * sampleArray[index14])
        
}

// Kata 15

let counter15 = 1
let sum = 0

let kata15 = document.createElement('h1') 
    content.append(kata15)
    kata15.append('Kata 15')

    while (counter15 <= 20) {
        sum += counter15
    counter15 += 1
}
let kata15heading = document.createElement('p')
content.append(kata15heading)
kata15heading.append(sum)

// Kata 16

let index16 = 0
let sum16 = 0

let kata16 = document.createElement('h1') 
    content.append(kata16)
    kata16.append('Kata 16')

    while (index16 < sampleArray.length) {
        sum16 += sampleArray[index16]
    index16 += 1
}
let kata16heading = document.createElement('p')
content.append(kata16heading)
kata16heading.append(sum16)

// Kata 17

let kata17 = document.createElement('h1') 
    content.append(kata17)
    kata17.append('Kata 17')

    let smallest = 1000000

    for(let index17 = 0; index17 < sampleArray.length; index17++) { 
        if(sampleArray[index17] < smallest) {
        smallest = sampleArray[index17]
    }
        
}
let kata17heading = document.createElement('p')
        content.append(kata17heading)
        kata17heading.append(smallest) 

// Kata 17 b
let kata17b = document.createElement('h1') 
    content.append(kata17b)
    kata17b.append('Kata 17 b')

let answer = Math.min(...sampleArray)
let kata17bheading = document.createElement('p')
        content.append(kata17bheading)
        kata17bheading.append(answer) 

// Kata 18

let kata18 = document.createElement('h1') 
    content.append(kata18)
    kata18.append('Kata 18')

let answer2 = Math.max(...sampleArray)
let kata18heading = document.createElement('p')
        content.append(kata18heading)
        kata18heading.append(answer2) 

// Kata 19

let kata19 = document.createElement('h1') 
    content.append(kata19)
    kata19.append('Kata 19')

    for(let index19 = 0; index19 < 20; index19++) {
        let kata19heading = document.createElement('div')
        content.append(kata19heading)
        

}

// Kata 20

let kata20 = document.createElement('h1') 
    content.append(kata20)
    kata20.append('Kata 20')
    let startOut = 100 + 5
    let solve = startOut


    for(let index20 = 0; index20 < 20; index20++) {

        let newSolve = solve.toString() + 'px'
        let kata20heading = document.createElement('div')
        kata20heading.style.width = newSolve
        content.append(kata20heading)
        

        solve += 5

}

// Kata 21

let kata21 = document.createElement('h1') 
    content.append(kata21)
    kata21.append('Kata 21')
    


    for(let index21 = 0; index21 < sampleArray.length; index21++) {
        let arrayNum = sampleArray[index21]

        let arraySolve = arrayNum.toString() + 'px'
        let kata21heading = document.createElement('div')
        kata21heading.style.width = arraySolve
        content.append(kata21heading)

}

// Kata 22

let kata22 = document.createElement('h1') 
    content.append(kata22)
    kata22.append('Kata 22')
    


    for(let index22 = 0; index22 < sampleArray.length; index22++) {
        let arrayNum = sampleArray[index22]

        let arraySolve = arrayNum.toString() + 'px'
        let kata22heading = document.createElement('div')
        kata22heading.style.width = arraySolve
        if(index22 % 2 === 0) {
            kata22heading.style.backgroundColor = 'red'

        }
        content.append(kata22heading)

}

// Kata 23

let kata23 = document.createElement('h1') 
    content.append(kata23)
    kata23.append('Kata 23')
    


    for(let index23 = 0; index23 < sampleArray.length; index23++) {
        let arrayNum = sampleArray[index23]

        let arraySolve = arrayNum.toString() + 'px'
        let kata23heading = document.createElement('div')
        kata23heading.style.width = arraySolve
        if(sampleArray[index23] % 2 === 0) {
            kata23heading.style.backgroundColor = 'red'

        }
        content.append(kata23heading)

}




























        












      
        
