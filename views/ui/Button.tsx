import React from 'react'

interface IProps {
  loading: boolean
  children: string
}

const Button: IProps = ({ loading = false, children, ...props }) => (
  <button {...props}>
    {children}
    {loading && <i className="fa fa-spinner fa-spin" />}
  </button>
)

export default Button
