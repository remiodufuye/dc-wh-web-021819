class Hobby {

  static all = []

  constructor(hobby){
    this.id = hobby.id
    this.name = hobby.name
    this.category = hobby.category
    Hobby.all.push(this)
  }

  render(){
    let li = document.createElement("li")
    li.innerText = `${this.id} - ${this.name} (${this.category})`
    return li
  }
}
