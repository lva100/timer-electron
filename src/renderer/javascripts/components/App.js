import React from 'react'

import { Entries } from './entries'
import { New } from './new'

export const App = ({ entries }) => {
	return (
		<>
			<New />
			<Entries entries={entries} />
		</>
	)
}
