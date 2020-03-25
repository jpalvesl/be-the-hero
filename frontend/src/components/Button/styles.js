import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const Button = styled.button`
	width: 100%;
	height: 60px;
	background-color: ${theme.primary.fill};
	color: ${theme.secundary.text};
	border: 0;
	border-radius: 8px;
	font-weight: bold;
	margin-top: 16px;
	display: inline-block;
	text-align: center;
	text-decoration: none;
	font-size: 18px;
	line-height: 60px;
	transition: filter 0.2s;

	&:hover {
		filter: brightness(80%);
	}
`;