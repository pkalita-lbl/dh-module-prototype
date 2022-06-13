class DataDoodad {
  constructor(root, name) {
      this.root = root
      this.setName(name)
  }

  setName(name) {
      this.name = name
      this.render()
  }

  render() {
      this.root.innerHTML = `<div>Hello <b>${this.name}</b>??</div>`
  }
}

export default DataDoodad
