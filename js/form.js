class Form{
    constructor(){
    this.title = createElement("h2")
    this.input = createInput("Enter Name")
    this.button = createButton("Start")
    this.greeting = createElement("h3")

  }
  
    hide(){
    this.input.hide()
    this.button.hide()
    this.greeting.hide()
   }

    display(){
      
      this.title.html("Racing Cars")
      this.title.position(130,50)
      
      this.input.position(130,100)
      this.button.position(250,200)

      this.button.mousePressed(()=>{
          this.input.hide()
          this.button.hide()
          player.name = this.input.value()

          playerCount+= 1
          player.index = playerCount
          player.update()
          player.updateCount(playerCount)

          this.greeting.html("Hello " + player.name)
          this.greeting.position(130,100)

      })
  }
}