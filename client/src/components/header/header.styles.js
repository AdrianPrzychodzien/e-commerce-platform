import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionsContainerStyles = css`
padding: 10px 15px;
cursor: pointer;
`

export const HeaderContainer = styled.div`
display: flex;
width: 100%;
height: 90px;
justify-content: space-between;
margin-bottom: 25px;
`
HeaderContainer.displayName = 'HeaderContainer'

export const LogoContainer = styled(Link)`
height: 100%;
width: 70px;
padding: 25px;
`

export const OptionsContainer = styled.div`
display: flex;
width: 50%;
height: 100%;
align-items: center;
justify-content: flex-end;
`

export const OptionLink = styled(Link)`
${OptionsContainerStyles}
`

export const OptionDiv = styled.div`
${OptionsContainerStyles}`