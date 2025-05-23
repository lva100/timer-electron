import React from 'react'

import { Actions } from './actions'
import { Title } from './title'

export const New = () => {
	return (
		<div className='new-entry'>
			<Title />
			<Actions />
		</div>
	)
}
