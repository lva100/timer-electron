import PlayImg from 'play.svg'
import React from 'react'
import StopImg from 'stop.svg'

export const Actions = () => {
	return (
		<div className='actions'>
			<div className='time'>00:00:00</div>
			<div className='trigger'>
				<PlayImg width='24' height='24' />
				<StopImg width='24' height='24' />
			</div>
		</div>
	)
}
