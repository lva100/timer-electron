import classnames from 'classnames'
import PlayImg from 'play.svg'
import React from 'react'
import StopImg from 'stop.svg'
import { durationToTime } from '../../helpers/time'

export const Actions = ({
	disabled,
	duration,
	running,
	onStartTimer,
	onStopTimer,
}) => {
	const onClick = () => {
		if (disabled) return
		running ? onStopTimer() : onStartTimer()
	}
	return (
		<div className='actions'>
			<div className='time'>{durationToTime(duration)}</div>
			<div className={classnames('trigger', { disabled })} onClick={onClick}>
				{running ? (
					<StopImg width='24' height='24' />
				) : (
					<PlayImg width='24' height='24' />
				)}
			</div>
		</div>
	)
}
