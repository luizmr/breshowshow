import React from 'react';
import InfoDivStyled from './styles';

const InfoDiv = ({ title, info, spanClass, subtitle }) => {
	return (
		<InfoDivStyled>
			<p>
				{title}
				{subtitle && (
					<>
						<br />
						{subtitle}
					</>
				)}
			</p>
			<div className={`${spanClass}`}>{info}</div>
		</InfoDivStyled>
	);
};

export default InfoDiv;
