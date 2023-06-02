import styles from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'sucess'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  sucess: 'green',
}

export const ButtonContainer = styles.button<ButtonContainerProps>`
 width: 40.5rem;
 height: 4rem;
 border: 0;
 color: ${(props) => props.theme.white};
 border-radius: 8px;
 padding: 1rem, 2.5rem;
 margin: 1rem;
 font-weight: 700;
 font-size: 1rem;
 line-height: 1.8rem;

 background-color: ${(props) => props.theme['green-500']}
   
 `

// /* ${props=> {
//   return
//   background-color: ${buttonVariants[props.variant]}
//
//  }}*/
