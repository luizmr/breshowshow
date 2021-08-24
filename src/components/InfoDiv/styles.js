import styled from 'styled-components';

const InfoDivStyled = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 1fr;
	p {
		font-size: 0.9rem;
		color: #828382;
		font-weight: 600;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.id__chip {
		color: #ffffff;
		background-color: #004374;
		border-radius: 20px;
		padding: 3px 15px;
		font-size: 0.7rem;
		max-width: 50px;
	}

	.info__string {
		display: flex;
		justify-content: center;
		align-items: center;
		text-transform: uppercase;
		font-size: 0.9rem;
		color: #004374;
		font-weight: 600;
	}

	.info__whatsapp {
		display: flex;
		justify-content: center;
		align-items: center;
		.MuiIconButton-root {
			padding: 5px !important;
			svg {
				margin-top: 2px;
				color: #25d366;
			}
		}
	}
`;

export default InfoDivStyled;
