import React from "react";
import axios from 'axios';
import './style/style.scss'

export default class TableUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: '',
            da: []
        };
    }
    componentDidMount() {
        axios
            .get('https://www.niamall.com/api/landing-pages/fetch/food')
            .then(({ data }) => {
                this.setState({
                    test: data.BestSellers.title,
                    da: data.BestSellers.products
                });
            })
            .catch((err) => { })
    }

    render() {
        const child = this.state.da.map((item, index) => {
            return <div className='productInfo' key={index}>
                <div className='productItem'>
                    <a href="#">
                        <div className='wrapper-img mgbt20'> 
                           <img className='imgpr' src={item.thumbnail}></img>
                        </div>
                    </a>
                    <div className='price-tag'> {item.price} </div>
                    <div className='mgbt20'><a href="#"><span className='product-name'> {item.name}</span></a></div>
                    <div className='wrapper-addtocard'>
                        <button className='addtocard btn capitalize'>Add to card</button>
                    </div>
                </div>
            </div>

        });
        return <div>
            <div className='contentTitle'>{this.state.test}</div>
           <div className='bestproduct'> {child} </div>
        </div>;
    }
}