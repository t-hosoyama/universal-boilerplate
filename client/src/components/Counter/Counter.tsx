import { useMutation } from "@apollo/react-hooks"
import React, { memo, useCallback, useEffect } from "react"
import styled from "styled-components"
import { SetCounterDocument, SetCounterMutation } from "~/@types/Graphql"
import { consoleLog, fetchStart, useCounterContext } from "~/contexts/CounterContext"
import { Header } from "../Header"

// eslint-disable-next-line react/display-name
export const Counter: React.FC = memo(() => {
  const [{ id, count, initialized }, dispatch] = useCounterContext()
  const [mutation, { loading }] = useMutation<SetCounterMutation>(SetCounterDocument)

  useEffect(() => {
    if (loading) {
      dispatch(fetchStart(), consoleLog)
    }
  }, [loading])

  const handleDecrement = useCallback(() => {
    initialized && !loading && mutation({ variables: { id, count: count - 1 } })
  }, [id, count, loading])

  const handleIncrement = useCallback(() => {
    initialized && !loading && mutation({ variables: { id, count: count + 1 } })
  }, [id, count, loading])

  return (
    <>
      <Button onClick={handleDecrement}>-</Button>
      <Count>{initialized ? count : "..."}</Count>
      <Button onClick={handleIncrement}>+</Button>
    </>
  )
})

const Count = styled.span`
  width: 2.5em;
  font-size: 20px;
  font-weight: bold;
  vertical-align: middle;
  text-align: center;
`

const Button = styled.button`
  padding: 5px 10px;
  border: 1px solid #ccc;
  font-size: 10px;
  font-weight: bold;
`
