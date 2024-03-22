import React from 'react'
import styled from "./index.module.css"
import { PencilLine } from "@phosphor-icons/react";
import { CONSTANTS } from '../../constants';
import { Avatar } from '../avatar';

export function Sidebar() {
  return (
    <aside className={styled.sidebar}>
        <img className={styled.cover} src={CONSTANTS.Img.cover} alt="cover" />
    
    <div className={styled.profile}>
        <Avatar src={CONSTANTS.Img.avatar} />
        <strong>Amilton Xavier</strong>
        <span>Web Developer</span>
        <footer>
            <button type='button'><PencilLine size={20} /> Editar Profile</button>
        </footer>
    </div>
    </aside>
  )
}
