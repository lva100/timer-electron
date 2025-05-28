import React, { useEffect, useState } from 'react'

import { Actions } from './actions'
import { Title } from './title'

export const New = () => {
	const [title, setTitle] = useState('')
	const [time, setTime] = useState(0)
	const [running, setRunning] = useState(false)

	useEffect(() => {
		window.MessagesAPI.subscribeForTimer((_, data) => {
			setTime(data.time)
			setRunning(true)
		})
	}, [])

	const handleStartTimer = () => {
		setRunning(true)
		window.MessagesAPI.startTimer()
	}
	const handleStopTimer = () => {
		setRunning(false)
		setTime(0)
		setTitle('')
		window.MessagesAPI.stopTimer()
	}

	return (
		<div className='new-entry'>
			<Title title={title} onChange={val => setTitle(val)} />
			<Actions
				disabled={title === ''}
				duration={time}
				running={running}
				onStartTimer={handleStartTimer}
				onStopTimer={handleStopTimer}
			/>
		</div>
	)
}
