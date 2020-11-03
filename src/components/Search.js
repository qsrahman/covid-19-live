import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin: 10px;

  input {
    padding: 14px 20px;
    width: 80%;
    background-color: #eee;
    border: none;
    border-radius: 20px;
    font-size: 2rem;
  }

  input:focus {
    outline: none;
  }
`
const Search = ({ handleChange }) => {
  return (
    <Form>
      <input
        type="text"
        placeholder="Enter country name..."
        onChange={e => handleChange(e)}
      />
    </Form>
  )
}

export default Search
