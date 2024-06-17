import React, { ReactNode, AnchorHTMLAttributes } from 'react'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement>  {
  label: string,
  icon: ReactNode,
}

const Link: React.FC<Props> = ({ icon, label, ...props}) => {

  return (
    <a
    {...props}
      target='_blank'
      className='relative flex items-center justify-center border rounded border-my-blue-600 w-full py-2 px-4'
    >
      <div className='absolute left-4'>
        {icon}
      </div>
      <p className='font-semibold text-sm text-white'>
        {label}
      </p>
    </a>
  )
}

export default Link