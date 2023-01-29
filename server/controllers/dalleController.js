import { Configuration, OpenAIApi } from 'openai'

const generateImg = async (req, res) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
  const openai = new OpenAIApi(configuration)
  try {
    const { prompt } = req.body
    const results = await openai.createImage({
      prompt,
      n: 1,
      size: '512x512',
      response_format: 'b64_json',
    })
    const image = results.data.data[0].b64_json
    res.status(200).json({ photo: image })
  } catch (error) {
    if (error.response) {
      console.log(error.response.status)
      console.log(error.response.data)
    } else {
      console.log(error.message)
    }
  }
}

export { generateImg }
