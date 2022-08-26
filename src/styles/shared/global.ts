import { createGlobalStyle, ThemeProps } from 'styled-components'

export interface GlobalProps {
  theme: ThemeProps<unknown>
}

export default createGlobalStyle<GlobalProps>`
    #root{
        margin: 0;
        padding: 0;
    }

    body{
		font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
		color: #000000;
		margin: 0;
		padding: 0;
        box-sizing: border-box;
    }

    img{
        max-width: 100%;
    }

    .Icon{
        width: 35px;
    }
`
