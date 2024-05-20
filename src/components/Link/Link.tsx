import React, { ReactNode } from 'react'

interface Props {
  url: string,
  label: string,
  icon: ReactNode,
  download?: boolean,
}

const Link: React.FC<Props> = ({ url, icon, label, download }) => {

  return (
    <a
      href={url}
      {...(download ? { download: '' } : {})}
      className='relative flex items-center justify-center border rounded border-electric-violet-400 w-full py-2 px-4'
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