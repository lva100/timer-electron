import React, { useEffect, useState } from 'react'

import { Actions } from './actions'
import { Title } from './title'

export const New = ({ title: defaultTitle, time: defaultTime }) => {
	const [title, setTitle] = useState(defaultTitle)
	const [time, setTime] = useState(defaultTime)
	const [running, setRunning] = useState(false)

	useEffect(() => {
		window.MessagesAPI.subscribeForTimer((_, data) => {
			setTime(data.time)
			setTitle(data.title)
			setRunning(true)
		})
	}, [])

	const handleStartTimer = () => {
		setRunning(true)
		window.MessagesAPI.startTimer(title)
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
