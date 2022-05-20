import React, { useState } from 'react'

const Icon: React.FC<IconProps & React.ImgHTMLAttributes<HTMLImageElement>> = ({
	name,
	...props
}) => {
	return <img {...props} src={`/icons/${name}.svg`} alt={`icon_${name}`} />
}

export default Icon
