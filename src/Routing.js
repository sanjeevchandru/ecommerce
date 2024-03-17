import React from 'react';
import {Home} from './redux/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Cart} from './redux/Cart'
import {Favorite} from './redux/Favorite'
import {Detail} from './redux/Detail'
import { useSelector } from 'react-redux';
import { Login } from './redux/Login';
import { AccCreate } from './redux/AccCreate';
export const Routing=()=>{
    const a=useSelector((d)=>d.data)
    return(
        <BrowserRouter>
        {
            a.isAuth?
            <Routes>
                 <Route path='/' element={<Home/>}/>
                 <Route path='/cart' element={<Cart/>}/>
                 <Route path='/fav' element={<Favorite/>}/>
                 <Route path='/det' element={<Detail/>}/>
            </Routes>:
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/accreate'element={<AccCreate/>}/>
            </Routes>
        }
           
        </BrowserRouter>
    )
}