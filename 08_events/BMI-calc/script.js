const btn = document.querySelector('#sub_btn')

const heightInput = document.querySelector('#height_id')
const weightInput = document.querySelector('#weight_id')

const resultEL = document.querySelector('#BMI_result')
const resultMsgEL = document.querySelector('#final_msg')
const resultBox = document.querySelector('#resultBox')

const bmiNoBox = document.querySelector('#bmiNoBox')

// the sllider saga
const heightSlider = document.querySelector('#height-slider')
const weightSlider = document.querySelector('#weight-slider')





btn.addEventListener('click', function(e) {

bmiNoBox.classList.remove('border-red-800','border-green-900')

resultBox.classList.remove('border-red-800', 'border-blue-500', 'border-orange-500')

    // e.preventDefault()
    console.log("clicked");
    const heightValue = parseInt(heightInput.value)

    const weightValue = parseInt(weightInput.value)

    const result = document.querySelector('#BMI_result')

    const resultMsg = document.querySelector('#final_msg')

    if(heightValue === " " || heightValue <= 0 || isNaN(heightValue)) {
        resultMsg.innerHTML = 'Please enter valid height nigga 🤬🖕';
    } else if(weightValue === " " || weightValue <= 0 || isNaN(weightValue)) {
        resultMsg.innerHTML = "Sahi weight daal na nigger 🤬🖕"
    } else {
        const bmi = (weightValue / ((heightValue * heightValue) / 10000)).toFixed(2)
        result.innerHTML = `${bmi}`
        


        if(bmi <= 18) {
            resultMsgEL.innerHTML = "kuch toh khaa le bhai..udd jayega"

            bmiNoBox.classList.add('border-red-800')

            resultBox.classList.add("border-red-800")
        } else if(bmi >18 && bmi <= 25) {
            resultMsgEL.innerHTML = "You are so fine and so is your BMI <3"

            bmiNoBox.classList.add('border-green-900')

            resultBox.classList.add('border-blue-500')
        } else {
            resultMsgEL.innerHTML = "Gian/Jacko 🐘 hain aap...hit the gym nigg.."
            
            bmiNoBox.classList.add('border-red-800')

            resultBox.classList.add('border-orange-500')
        }
    }
})

    // slider pr eventlistner
    heightSlider.addEventListener('input', function(e) {
        heightInput.value = heightSlider.value
    })

    // for input no 
    heightInput.addEventListener('input', function(e){
        heightSlider.value = heightInput.value
    })

    
    weightSlider.addEventListener('input', function(e) {
        weightInput.value = weightSlider.value
    })

    // for input no 
    weightInput.addEventListener('input', function(e){
        weightSlider.value = weightInput.value
    })