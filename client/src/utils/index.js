import { surpriseMePrompts } from '../constants'
import FileSaver from 'file-saver'

const getRandomPrompt = (prompt) => {
  const randomNumber = Math.round(Math.random() * surpriseMePrompts.length)
  if (randomNumber === prompt) return getRandomPrompt()
  return surpriseMePrompts[randomNumber]
}

const downloadImg = (_id, file) => {
  FileSaver.saveAs(file, `download-${_id}.jpg`)
}

export { getRandomPrompt, downloadImg }
