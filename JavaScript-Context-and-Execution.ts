this.x = 'global'

const arrow = () => {
    this.x = 1
    console.log(this.x)
}


function decl(){
    this.x = 2
    console.log(this.x)
}

const obj = {
    x:3,
    objFunc(){
        console.log(this.x)
    }
}

 const method = obj.objFunc()  // Тут когда будем вызывать method() тут как раз контест и будет потерян

arrow()
decl()
obj.objFunc()
method()