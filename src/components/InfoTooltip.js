// import iconSuccess from '../../images/reg-success.svg';
// import iconFailure from '../../images/reg-fail.svg';

import React from 'react';

function InfoTooltip({
	message,
	isClosed,
	isOpened,
	closePopupsOnOutsideClick
}) {
	return (
		<div
			className={`popup` + (message ? 'popup_opened' : '')}
			onClick={closePopupsOnOutsideClick}
		>
			<div className='popup__container section_size_narrow'>
				<button
					type='button'
					aria-label='Закрыть попап'
					className='popup__close'
					onClick={isClosed}
				></button>
				<p
					className={
						'popup__information-message' +
						(message
							? message.isSuccess
								? ' popup__information-message_success'
								: ' popup__information-message_fail'
							: '')
					}
				>
					{message ? message.text : ' '}
				</p>
			</div>
		</div>
	);
}

export default InfoTooltip;
