import React, { useEffect, useState } from 'react'

import { DateTime } from 'luxon'
import { nanoid } from 'nanoid'

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
		window.MessagesAPI.saveEntry({
			id: nanoid(),
			duration: time,
			title: title,
			project: 'none',
			createdAt: DateTime.local().toISO(),
		})
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
