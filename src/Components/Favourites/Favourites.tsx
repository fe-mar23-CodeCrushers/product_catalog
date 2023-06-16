/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { PhoneCard } from "../PhoneCard";
import { Phone } from "../../types/phone";
import { getPhones } from "../../api/phones";
import "./Favourites.scss"

//In card we need to add onclick function on fav button that execute ToogleFav function with id of desired phone to add/delete
//Also in header in fav button we need to add that onclick its redirect to <Favourites /> 

localStorage.setItem('fav', JSON.stringify([]));

export function ToggleFav(id : string) {
    // const fav:Phone[] = [];
    const [fav, setFav] = useState<Phone[]>([]);
    const [phones, setPhones] = useState<Phone[]>([]);

    function adder(id: string) {
        const found = phones.find(phone => phone.id === id);
        if (found !== undefined) {
            setFav([...fav,found])
        }
    }

    function deleter(id:string) {
        const found = phones.find(phone => phone.id === id);
        if (found !== undefined) {
            setFav(fav.filter(element => element !== found));
        }
    }

    useEffect(() => {
        getPhones()
          .then(setPhones);
      }, []);

    fav.some(phone => phone.id === id) ? deleter(id)
    : adder(id)
    localStorage.setItem('fav',JSON.stringify(fav));
}

export const Favourites = () => {
    const [fav, setFav] = useState<Phone[]>([])

    if (localStorage.getItem('fav') !== null) {
        setFav(JSON.parse(localStorage.getItem('fav')!))
    }


    useEffect(() => {
        if (localStorage.getItem('fav') !== null) {
            setFav(JSON.parse(localStorage.getItem('fav')!))
        }
    }, JSON.parse(localStorage.getItem('fav')!))
    return (
        <section className="container">
            {fav.length === 0 && <span className="container__info">There are no favourites</span>}
            {fav.map(phone => (
                <PhoneCard 
                key={phone.id}
                phone={phone}
                />
            ))}
        </section>
    )
}