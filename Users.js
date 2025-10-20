

/**
 * import React, { useEffect, useState } from 'react'

function UsersOld() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h2>All Users (Old Way)</h2>
      {data.map(u => <p key={u.id}>{u.name}</p>)}
    </div>
  )
}

 */







import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

export default function Users() {
  // useQuery = handles fetching, caching, refetching automatically
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['users'], // cache key (unique label)
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/users')
      if (!res.ok) throw new Error('Network Error!')
      return res.json()
    },
    staleTime: 1000 * 100, // data is "fresh" for 5 seconds
  })

  // built-in loading and error state
  if (isLoading) return <p>Loading users...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div style={{ padding: 20 }}>
      <h2>All Users</h2>

      {/* Manual refetch button */}
      <button onClick={refetch}>Refetch Users</button>

      <ul>
        {data.map(user => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>

      <p style={{ fontStyle: 'italic' }}>
        Data cached for 5s — navigate back within 5s to see instant loading.
      </p>
    </div>
  )
}

/**
 * 🧠 Explanation Line-by-Line:
Line	What It Does
useQuery({...})	Hook that fetches + caches data automatically
queryKey: ['users']	Unique cache key (used to store/reuse data)
queryFn	Function that defines how to fetch the data
isLoading	True until data loads
error	Holds any fetch errors
data	Final fetched data
refetch()	Manual refresh trigger
staleTime: 5000	Data is considered “fresh” for 5 seconds (no refetch during that time)
 */

/**
 * 💡 What each part does
Line	Meaning
useQuery	Fetch + cache manager
queryKey: ['users']	Unique name for cache storage
queryFn	Defines what to fetch
staleTime: 5000	Fresh data for 5s (no refetch in that time)
isLoading	Automatically true when fetching
error	Automatically set when something fails
data	Holds fetched users
refetch()	Manually refetches API
 */