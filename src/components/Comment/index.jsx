import React, { useState } from 'react'
import styled from "./index.module.css"
import { CONSTANTS } from "../../constants"
import { Trash, ThumbsUp } from "@phosphor-icons/react";
import { Avatar } from '../avatar';

export function Comment({content, onDeleteComment}) {

    function handleDelete(){
        onDeleteComment(content)
    }

    const [likeCount, setLikeCount] = useState(0);

    function handleLikeCount(){
        setLikeCount((state) => {
            return state + 1
        })
    }


    return (
        <div className={styled.comment}>
            <Avatar src={CONSTANTS.Img.avatar} hasBorder={false} />
            <div className={styled.commentBox}>
                <div className={styled.commentContent}>
                    <header>
                        <div className={styled.authorAndTime}>
                            <strong>Amilton Xavier</strong>
                            <time title='11 de Maio às 08:15' dateTime='2022-05-11 08:13:06'>
                                Cerca de 1h atrás
                            </time>
                        </div>
                        <button type='button' onClick={handleDelete} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeCount} type='button' >
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
