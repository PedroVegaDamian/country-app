import { useState, useEffect, useRef } from "react";

export const useSearch = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null)
  const firstInput = useRef(true)

  // validation for form
  useEffect(() => {
    if(firstInput.current) {
      firstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('Escribe el nombre de un país')
      return
    }

    setError(null)

  },[search])

  return {search, setSearch, error}
}