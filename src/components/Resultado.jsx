import styled from "@emotion/styled"

const Contendor = styled.div`
    color:#fff;
    font-family:'Lato',sans-serif;
    display:flex;
    align-items:center;
    gap:1rem;
    margin-top:30px;
    
    `
const Texto= styled.p`
 font-size:18px;
 span{
    font-weight:700;
 }
`
const Precio= styled.p`
 font-size:22px;
 span{
    font-weight:700;
 }
`
const Imagen= styled.img`
    display:block;
    width:120px;
`

export const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY,LOWDAY,IMAGEURL,LASTUPDATE,CHANGE24HOUR}=resultado
  return (
    <Contendor>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen Cripto" />
        <div>
            <Precio>El Precio es de: <span>{PRICE}</span></Precio>
            <Texto>El Precio mas alto del dia es: <span>{HIGHDAY}</span></Texto>
            <Texto>El Precio mas bajo del dia es: <span>{LOWDAY}</span></Texto>
            <Texto>Variacion ultimas 24 horas: <span>{CHANGE24HOUR}</span></Texto>
            <Texto>Ultima Actualizacion: <span>{LASTUPDATE}</span></Texto>
        </div>
     </Contendor>
  )
}
