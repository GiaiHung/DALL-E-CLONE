import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getRandomPrompt } from '../utils'
import preview from '../assets/preview.png'
import { FormField, Loader } from '../components'

function CreatePost() {
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isGeneratingImg, setIsGeneratingImg] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (form.name && form.prompt && form.photo) {
      try {
        setIsLoading(true)
        const response = await fetch('http://localhost:5000/api/v1/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...form }),
        })
        await response.json()
        navigate('/')
      } catch (error) {
        alert(error)
      } finally {
        setIsLoading(false)
      }
    } else {
      alert(
        'Please fill in the required fields and genarate the image to share the posts'
      )
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSupriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt)
    setForm({ ...form, prompt: randomPrompt })
  }

  const generateImg = async () => {
    if (form.prompt) {
      try {
        setIsGeneratingImg(true)

        const response = await fetch('http://localhost:5000/api/v1/dalle', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: form.prompt }),
        })
        const data = await response.json()
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` })
      } catch (error) {
        alert(error)
      } finally {
        setIsGeneratingImg(false)
      }
    } else {
      alert('Please enter a prompt')
    }
  }

  return (
    <section className="mx-auto max-w-7xl">
      <div>
        <h1 className="text-[32px] font-extrabold text-[#222328]">Create</h1>
        <p className="mt-2 max-w-[450px] text-[20px] text-[#666e75] md:max-w-[950px]">
          Generate an imaginative image through DALL-E AI and share it with the
          community
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="Ex., john doe"
            value={form.name}
            handleChange={handleChange}
          />

          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
            value={form.prompt}
            handleChange={handleChange}
            isSupriseMe
            handleSupriseMe={handleSupriseMe}
          />
        </div>

        <div className="relative mt-4 h-64 w-64 rounded-lg border border-gray-300 p-2">
          {form.photo ? (
            <img
              src={form.photo}
              alt={form.prompt}
              className="h-full w-full object-contain"
            />
          ) : (
            <img
              src={preview}
              alt="preview"
              className="h-full w-full object-contain opacity-40"
            />
          )}
          {isGeneratingImg && (
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-[rgba(0,0,0,0.5)]">
              <Loader />
            </div>
          )}
        </div>

        <div className="mt-5">
          <button
            className={`hover-btn w-full rounded-md bg-transparent px-3 py-2 font-semibold text-gray-500 ${
              form.prompt &&
              form.name &&
              'cursor-pointer !bg-green-600 !text-white hover:!bg-green-700'
            } sm:w-auto`}
            type="button"
            onClick={generateImg}
            disabled={!form.name || !form.prompt}
          >
            {isGeneratingImg ? 'Generating...' : 'Generate'}
          </button>
        </div>

        <div className="mt-5">
          <p className="mt-2 text-[14px] text-[#666e75]">
            ** Once you have created the image you want, you can share it with
            others in the community **
          </p>
          <button
            type="submit"
            className="hover-btn mt-3 w-full rounded-md bg-[#6469ff] px-5 py-2.5 text-center text-[16px] font-medium text-white hover:bg-[#4f55fa] sm:w-auto"
            onClick={handleSubmit}
          >
            {isLoading ? 'Sharing...' : 'Share with the Community'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default CreatePost
