import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './style/style.scss'

const Item = function (props) {
    return (
        <div   className='type-product' >
            <a href="#">
                <div className='thumb'>
                    {props.img === 'a' ? <img src='beauty.jpg' /> : <></>}
                    {props.img === 'b' ? <img src='beauty.jpg' title='2' /> : <></>}
                    {props.img === 'c' ? <img src='beauty.jpg' title='3' /> : <></>}
                    {props.img === 'd' ? <img src='beauty.jpg' title='4' /> : <></>}
                    {props.img === 'e' ? <img src='beauty.jpg' title='5' /> : <></>}
                    {props.img === 'f' ? <img src='beauty.jpg' title='6' /> : <></>}
                </div>
                <p className="capitalize">{props.title}</p>
            </a>
        </div>
    )
}

const Ltem = function (props) {
    return (
        <div className='productItem'>
            <a href="#">
                <div className='wrapper-img mgbt20'>
                    {props.img === 'a1' ? <img src='#' /> : <></>}
                    {props.img === 'a2' ? <img src='#' title='2' /> : <></>}
                    {props.img === 'a3' ? <img src='#' title='3' /> : <></>}
                    {props.img === 'a4' ? <img src='#' title='4' /> : <></>}
                    {props.img === 'a5' ? <img src='#' title='5' /> : <></>}
        
                </div>
            </a>
            <div className='price-tag'> {props.price} </div>
            <div className='mgbt20'><a href="#"><span className='product-name'> {props.name}</span></a></div>
            <div className='wrapper-addtocard'>
                <button className='addtocard btn capitalize'>Add to card</button>
            </div>
        </div>
    )
}

class Food extends React.Component {
    bestseller = [
        { img: 'a1', price: '12k', name: 'candy' },
        { img: 'a2', price: '13k', name: 'candy1' },
        { img: 'a3', price: '14k', name: 'candy2' },
        { img: 'a4', price: '15k', name: 'candy3' },
        { img: 'a5', price: '16k', name: 'candy4' },
    ]
    items = [
        { title: 'noodle', img: 'a' },
        { title: 'snack', img: 'b' },
        { title: 'chocolate', img: 'c' },
        { title: 'cookies', img: 'd' },
        { title: 'sauces', img: 'e' },
        { title: 'bread', img: 'f' },
    ]
    render() {
        return (<div >
            <div className='slide' style={{ background: '#ffbf51' }} >
                <img className='nav-img' src='https://www.niamall.com/static/images/niamall/langding/food/hotpot.jpeg' alt='Stance'></img>
            </div>

            <div className="product-type">
                {
                    this.items.map((item, index) => <Item key={index} title={item.title} img={item.img} />)
                }
            </div>

            <h3 className='capitalize h3center'>best sellers</h3>
            <div class='wrapper-best-seller'>
                <div className='best-sellers'>
                    {
                        this.bestseller.map((item, index) => <Ltem key={index} img={item.img} price={item.price} name={item.name} />)
                    }
                </div>
            </div>
        </div>
        );
    }

}

export default Food