/* eslint-disable react/prop-types */
import './ItemListContainer..css'
export default function ItemListContainer({texto}) {
    return (
        <>
            <div className='contenedorPromp'>
                <p>{texto}</p>
            </div>
        </>
    )
}