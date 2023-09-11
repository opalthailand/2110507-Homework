'use client'
import React from 'react';

export default function InteractiveCard( { children, contentName } : { children: React.ReactNode, contentName: string }) {

    function onCardSelected() {
        alert("You select " + contentName)
    }

    function onCardMouseAction(event: React.SyntheticEvent) {
        if (event.type == "mouseover") {
            event.currentTarget.classList.remove('shadow-lg');
            event.currentTarget.classList.add('shadow-2xl');
            event.currentTarget.classList.remove("bg-white");
            event.currentTarget.classList.add("bg-neutral-200");
        } else {
            event.currentTarget.classList.remove('shadow-2xl')
            event.currentTarget.classList.add('shadow-lg')
            event.currentTarget.classList.remove("bg-neutral-200");
            event.currentTarget.classList.add("bg-white");
        }
    }
    return (
        <div className='w-[300px] h-[300px] shadow-lg m-[0px] transform duration-[200ms] bg-white shadow-white' onClick={onCardSelected} 
        onMouseOver={ (e) => onCardMouseAction(e)}
        onMouseOut={ (e) => onCardMouseAction(e)}>
            { children }
        </div>
    ); 
}