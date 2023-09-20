import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({solution}) => {
    const {id, name, icon}=solution;
    let navigate=useNavigate();


    return (
             <div className="shadow-xl rounded-2xl p-3 text-center" onClick={()=>{
                navigate("solutionpage/" +id)
             }} style={{background:'linear-gradient(180deg, rgba(34,92,108,1) 5%, rgba(5,15,18,1) 94%)'}}>
            <i className="pt-16  text-7xl text-IconColor">{icon}</i>
            <div className="card-body items-center cursor-pointer">
            <p className="card-title text-White ease-in duration-200 hover:text-green">{name}</p>
        </div>
    </div>
    );
};



export default Cart;