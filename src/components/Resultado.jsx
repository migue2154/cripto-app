import styled from '@emotion/styled'

const ContenedorResultado = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 25px;
`

const Imagen = styled.img`
    display: block;
    width: 120px;
`

const TextoPrecio = styled.p`
    font-size: 25px;
    span{
        font-weight: 700;
    }
`

const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`

const Resultado = ({resultado}) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado

    return (
        <ContenedorResultado>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} />
            <div>
                <TextoPrecio>Precio actual: <span>{PRICE}</span></TextoPrecio>
                <Texto>Precio mas alto (Hoy): <span>{HIGHDAY}</span></Texto>
                <Texto>Precio mas bajo (Hoy): <span>{LOWDAY}</span></Texto>
                <Texto>Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
            </div>
        </ContenedorResultado>
    
    )
}

export default Resultado