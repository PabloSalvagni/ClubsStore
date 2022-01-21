import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = () => {

    const { cart, getQuantity, removeProduct, clearCart, getTotalPrice } = useContext(CartContext)

    console.log('cart: ', cart)

    return (
        <article className='container p-5'>
            <h1 className='text-left cart__titulo'>Carrito de Compras</h1>

            {( getQuantity() !== 0)
                    
                    ?<div className='row'>
                        <div className='col col-md-8 p-4'>
                            <h4>PRODUCTOS ({ getQuantity() })</h4>
                            <div className='p-2'>
                                {cart.map ( e => {
                                    console.log(e.id)
                                    return  <div key={e.product.id} className='row item__container'>
                                                <div className='col-md-5 p-0'>
                                                    <img className="mx-auto d-block w-100 item__container--img" src={e.product.thumbnail} alt={e.product.title} />
                                                </div>
                                                <div className='col-md-6 item__container--info'>
                                                    <p className='item__container--info--titulo'>{ e.product.title }</p>
                                                    <p className='item__container--info--txt'>
                                                        {e.product.categoryType} • {e.product.category} <br />
                                                        Valor: ${e.product.price}<br />
                                                        Cantidad: { e.quantity }<br />
                                                    </p> 
                                                    <p className='item__container--info--txt'>
                                                        <b> SUBTOTAL: ${ e.product.price * e.quantity } </b>
                                                    </p>
                                                </div>
                                                <div className='col-md-1 text-center item__container--btns'>
                                                    <div className='item_click' onClick={ () => { removeProduct( e.product.id ) } }>
                                                        <i class="fas fa-times-circle fas-2x"></i>
                                                    </div>
                                                </div>
                                            </div>
                                })}
                             </div>
                            
                        </div>
                        <div className='col col-md-4 p-4'>
                            <h4>Resumen del Pedido</h4>
                            <hr />
                            <h4 className='item__container--info--txt' >Cantidad de productos: { getQuantity() }</h4>
                            <h4 className='item__container--info--txt' >Subtotal: <b>$ { getTotalPrice() } </b></h4>
                            <h4 className='item__container--info--txt' >Costo de Envio: Gratis </h4>
                            <hr />
                            <h2>TOTAL: ${ getTotalPrice() }</h2>
                            <hr />
                            <div className='text-center'>
                                <button type='button' className='btn btn-primary item_click m-1'  onClick={ () =>{ }} >Confirmar Compra</button>
                                <button type='button' className='btn btn-primary item_click m-1'  onClick={ () =>{ clearCart() }} >Vaciar Carrito</button>
                            </div>
                        </div>
                    </div>

                :<div>
                    <h3>No tiendas productos cargados en el carrito.</h3>
                    <Link to={'/'}>
                        <button type='button' className='btn btn-primary m-2'>Ir a Comprar</button>
                    </Link>
                </div>

            }
        </article>
    )
}

export default Cart