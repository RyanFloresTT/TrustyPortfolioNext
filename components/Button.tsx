import Link from 'next/link'
import React from 'react'

interface IProps {
  children: React.ReactNode
  color?: 'primary' | 'secondary'
  href: string
  fullWidth?: boolean
  target?: '_blank'
}

export default function Button({ children, color = 'primary', href, target, fullWidth }: IProps) {
  const baseClasses =
    'inline-flex items-center justify-center px-4 py-2 rounded-md text-white font-semibold'
  const colorClasses =
    color === 'primary' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'
  const widthClass = fullWidth ? 'w-full' : ''

  return (
    <Link href={href} target={target} className={`${baseClasses} ${colorClasses} ${widthClass}`}>
      {React.Children.map(children, (child, index) =>
        index === 0 ? <span className="mr-2">{child}</span> : child
      )}
    </Link>
  )
}
