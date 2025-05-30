import React from 'react'

import { Entries } from './entries'
import { New } from './new'

export const App = ({ entries, title, time }) => {
	return (
		<>
			<New title={title} time={time} />
			<Entries entries={entries} />
		</>
	)
}
