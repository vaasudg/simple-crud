import React, { ReactElement } from 'react'

interface ImageProps {
  url: string
  fallback: string
  description: string
  className?: string
}

const Image: React.FC<ImageProps> = ({ url, fallback, description, ...rest }): ReactElement => {
  const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const imgElement = event.currentTarget
    imgElement.onerror = null
    imgElement.src = fallback
  }

  return <img src={url} onError={handleError} alt={description} {...rest} />
}

export default Image
