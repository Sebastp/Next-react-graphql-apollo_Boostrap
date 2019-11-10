import React from 'react'

interface IProps {
  loading: boolean
  children: string
}

const Button = ({ loading = false, children, ...props }: IProps) => (
  <button {...props}>
    {children}
    {loading && <span>Loading</span>}
  </button>
)

export default Button
