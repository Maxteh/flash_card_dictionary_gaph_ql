import React from 'react'

import { useQuery } from 'react-query'

const FlashCards = () => {
  const query = useQuery('flashCards', getFlashCards)

  return (
    <div>
      <ul>
        {query.data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export { FlashCards }
