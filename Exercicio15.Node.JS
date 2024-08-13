let peso = 70
let altura = 1.73

imc = peso/Math.pow(altura,2)

if(imc<18.75){
    console.log(`O seu IMC é ${imc} e você está abaixo do peso`)    
}else if(imc>18.75&&imc<24.9){
    console.log(`O seu IMC é ${imc} e você está com o peso normal`)
}else if(imc>25&&29.9){
    console.log(`O seu IMC é ${imc} e você está com sobrePeso`)
}else if(imc>30){
    console.log(`O seu IMC é ${imc} e você está com Obesidade`)
}



