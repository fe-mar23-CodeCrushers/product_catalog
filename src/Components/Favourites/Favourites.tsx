import React, { useEffect, useState } from "react";
import { PhoneCard } from "../PhoneCard";
import { Phone } from "../../types/phone";
import { getPhones } from "../../api/phones";
import "./Favourites.scss"

const fav:Phone[] = [];

export const ToggleFav = (id : string) => {
    const [phones, setPhones] = useState<Phone[]>([]);

    function adder(id: string) {
        const found = phones.find(phone => phone.id === id);
        if (found !== undefined) {
            fav.push(found)
        }
    }

    function deleter(id:string) {
        const found = phones.find(phone => phone.id === id);
        if (found !== undefined) {
            fav.splice(fav.indexOf(found), 1)
        }
    }

    useEffect(() => {
        getPhones()
          .then(setPhones);
      }, []);

    fav.some(phone => phone.id === id) ? deleter(id)
    : adder(id)
}

export const Favourites = () => {
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