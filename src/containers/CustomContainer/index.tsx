import styled from 'styled-components'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react'
import type { PropsCustomContainer } from '../../Types/types.theme'

const StyledCard = styled(Card)`
flex-direction: column;
display: flex;
padding: 10px;
width: 100%;
height: auto;
@media (max-width: 750px){
  width: 100%;
}
`

const StyledBodyCard = styled(CardBody)`
justify-content: space-around;
flex-direction: row;
flex-wrap: wrap;
display: flex;
gap: 20px;
`

const StyledDivLeft = styled.div`
flex-direction: column;
justify-content: space-around;
text-align: start;
min-width: 250px;
font-size: 3em;
display: flex;
width: 45%;
gap: 10px;
@media (max-width: 850px){
gap: 30px;
width: 100%;
font-size: 3em;
text-align: center;
}
`

const StyledDivRigth = styled.div`
flex-direction: column;
text-align: justify;
min-width: 250px;
font-size: 1rem;
display: flex;
width: 40%;
gap: 10px;
@media (max-width: 850px){
justify-content: center;
align-items: center;
width: 100%;
}
`

export const CustomContainer = (props: PropsCustomContainer): JSX.Element => {
  return (
    <StyledCard
      className={props.theme.boxTheme}
      shadow='md'
      isBlurred={true}
    >
      <CardHeader>
        <strong style={{ paddingLeft: '35px' }}>Sobre mi</strong>
      </CardHeader>

      <StyledBodyCard>

        <StyledDivLeft>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <strong>{props.title}</strong>
            <strong style={{ fontSize: '1.8rem' }}>{props.subtitle}</strong>
          </div>

          <p style={{ fontSize: '1rem', textAlign: 'justify' }}>
            Hola, soy Andrés. Tengo 24 años y estudié ingeniería en sistemas. Me considero una de las pocas personas que tienen la fortuna de poder dedicarse a hacer algo que aman para ganarse la vida.
          </p>
        </StyledDivLeft>

        <StyledDivRigth>

          <p>
            Desde mi época en la preparatoria, supe que quería orientar mi vida hacia algo relacionado con la tecnología.
          </p>

          <p>
            Cuando llegó el momento de elegir una carrera profesional, la ingeniería en sistemas se presentó ante mí en forma de programación web.
          </p>

          <p>
          Poco a poco, fui adentrándome en estas tecnologías hasta que descubrí una pasión particular por el desarrollo de aplicaciones, desde la perspectiva del producto y la experiencia del usuario.
          </p>

        </StyledDivRigth>

      </StyledBodyCard>

      <CardFooter></CardFooter>

    </StyledCard>
  )
}
