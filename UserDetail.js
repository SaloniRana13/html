/**
 * 
 * import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserDetailOld() {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`http://localhost:5000/users/${id}`)
      .then(res => res.json())
      .then(data => {
        setUser(data)
        setLoading(false)
      })
  }, [id])

  if (loading) return <p>Loading...</p>
  return <p>{user?.name}</p>
}

 */



import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

export default function UserDetail() {
  const { id } = useParams() // read user ID from URL

  const { data, isLoading, error } = useQuery({
    queryKey: ['user', id], // each user has unique cache
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/users')
      if (!res.ok) throw new Error('Network Error!')
      const users = await res.json()
      return users.find(u => u.id === Number(id))
    },
    staleTime: 1000 * 10, // fresh for 10 seconds
  })

  if (isLoading) return <p>Loading user {id}...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>No user found!</p>

  return (
    <div style={{ padding: 20 }}>
      <h2>User Detail</h2>
      <p><strong>ID:</strong> {data.id}</p>
      <p><strong>Name:</strong> {data.name}</p>
    </div>
  )
}
