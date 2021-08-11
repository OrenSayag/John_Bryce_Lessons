import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Cart from './components/Cart'
import Options from './components/Options'
import Pay from './components/Pay'
import List from './components/List'

export default function App() {

    // two beveragesArr, dishesArr, ordersArr
    const [menu, setMenu] = useState([
        {type: "dishes" ,id: 2,name:"Salad", price: 34, img:"salad.jpg"},
        {type: "dishes" ,id: 4,name:"Pasta", price: 72, img:"pasta.jpg"},
        {type: "dishes" ,id: 3,name:"Pizza", price: 14, img:"pizza.jpg"},
        {type: "dishes" ,id: 5,name:"Pad Thai", price: 93, img:"pad-thai.jpg"},
        {type: "beverages" ,id: 23,name:"Beer", price: 12, img:"beer.jpg"},
        {type: "beverages" ,id: 43,name:"Wine", price: 48, img:"wine.jpg"},
        {type: "beverages" ,id: 33,name:"Whiskey", price: 78, img:"whiskey.jpg"},
        {type: "beverages" ,id: 53,name:"Water", price: 12, img:"water.jpg"},
    ])
    const [ordersArr, setOrdersArr] = useState([
        {id: 12,name:"Salad", price: 34, units: 2, img:"salad.jpg"},
    ])

    const addToCart = (id) => {
        const item = menu.find(x=>x.id===id);
        setOrdersArr([...ordersArr, {id: Math.random(), name:item.name, price:item.price, img: item.img, units:1}]);
    }

    const removeFromCart = (id) => {
        setOrdersArr(ordersArr.filter(item=>item.id!==id));
    }

    const clearCart = () => {
        setOrdersArr([]);
    }


    return (
        <Router>
            <div className="app">
                <div className="cart">
                    <Cart orders={ordersArr} del={removeFromCart}/>
                </div>
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={Options}/>
                        <Route path="/pay" component={(p)=><Pay {...p} clear={clearCart}/>} total={ordersArr.reduce((a, item)=>a+(item.price)*(item.units), 0)}/>
                        <Route path="/menu/:type" component={(p)=><List {...p} menu={menu} add={addToCart} />} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
