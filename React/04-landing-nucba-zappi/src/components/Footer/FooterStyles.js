import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 7rem 0 2rem 0;
	p span {
		font-weight: 800;
	}
`

export const LinksContainer = styled.div`
  display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	margin-bottom: 2rem;

	@media (max-width: 768px) {
		flex-direction: column;
		a {
			padding: 0.5rem 0;
		}
	}
`