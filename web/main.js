import './style.css'

import { DataDoodad } from '#lib'

const root = document.getElementById('app')
const doodad = new DataDoodad(root, 'Somebody')

document.getElementById('reset').addEventListener('click', () => {
  doodad.setName('Nobody')
})
