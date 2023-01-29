import React from 'react'
import { downloadImg } from '../utils'
import download from '../assets/download.png'

function Card({ _id, name, photo, prompt }) {
  return (
    <div className="card group relative rounded-md text-white">
      <img
        src={photo}
        alt={prompt}
        className="h-auto w-full rounded-md object-cover"
      />
      <div className="absolute bottom-0 right-0 left-0 hidden max-h-[94.5%] flex-col rounded-md bg-[rgba(0,0,0,0.8)] p-4 group-hover:flex">
        <p className="prompt overflow-y-auto text-sm">{prompt}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-sm font-semibold ">
              {name[0]}
            </div>
            <span className="text-md font-thin">{name}</span>
          </div>
          <button onClick={() => downloadImg(_id, photo)}>
            <img
              src={download}
              alt=""
              className="h-8 w-8 cursor-pointer object-contain invert"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
