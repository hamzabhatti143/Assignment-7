import React from 'react'
interface Ibooks{
 id: number, 
 name: string,
 type: string,
 available: boolean
}
const serverside = async () => {
  const response = await fetch("https://simple-books-api.glitch.me/books/")

  const parseResponse: Ibooks[] = await response.json();

  console.log("Books List >>>" + parseResponse);

  return (
    <>
        <h1 className="text-6xl text-blue-900 text-center px-30 py-10">Server Side</h1>

    <div className='w-full justify-around items-center flex flex-wrap gap-2'>
      {parseResponse.map((booklist, index) =>
      <div key={index} className='w-1/4 flex justify-around items-center flex-col p-4 border-2'>
        <p>Book Id: {booklist.id}</p>
        <p>Book Name: {booklist.name}</p>
        <p>Book Type: {booklist.type}</p>
        <p>Book Availability: {booklist.available}</p>
      </div>
      )}
      </div>
    </>
  )
}

export default serverside
