import { surpriseMePrompts } from '../constants'

const getRandomPrompt = (prompt) => {
  const randomNumber = Math.round(Math.random() * surpriseMePrompts.length)
  if (randomNumber === prompt) return getRandomPrompt()
  return surpriseMePrompts[randomNumber]
}

export { getRandomPrompt }
