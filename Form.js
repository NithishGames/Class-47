class Form{

    constructor(){

        this.button = createButton ("Save")
        this.button.style('width','100px')
        this.button.style('height','50px')
        this.button.style('font-size','20px')
        this.button.style('background-color','Pink')

        this.button1 = createButton ("Clear")
        this.button1.style('width','100px')
        this.button1.style('height','50px')
        this.button1.style('font-size','20px')
        this.button1.style('background-color','Pink')
        
    }display(){

        this.button.position(1000,50)
        this.button1.position(1300,650)

    }
    

}