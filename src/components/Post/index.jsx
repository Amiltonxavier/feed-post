import { format, formatDistanceToNow } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import React, { useState } from 'react';
import styled from "./index.module.css"
import { Comment } from "../Comment/index"
import { Avatar } from '../avatar';

export function Post({author, content, publishedAt}) {

    const [comments, setComment] = useState([]);
    const [newCommentText, setNewCommentText] = useState('')

    function handleChange(){
        event.preventDefault();
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }


    function handleSubmit(){
        event.preventDefault();
        if(newCommentText.length === 0) return;
        setComment([...comments, newCommentText]);
        setNewCommentText('');
    }


    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: pt
    });

    const publishedRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: pt,
        addSuffix: true
    })


    function DeleteComment(commentToDelete){
        const commentWithoutDeleteOne = comments.filter((comment) => {
            return comment !== commentToDelete
        });

        setComment(commentWithoutDeleteOne)
    }

    function handleNewCommentInvalid(){
        event.target.setCustomValidity('Esse campo é Obrigatório');
        
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styled.post}>
            <header>
                <div className={styled.author}>
                    <Avatar src={author.avataUrl} />
                    <div className={styled.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                {publishedRelativeToNow}
                </time>
            </header>

            <div className={styled.content}>
                    {
                     content.map((line, index) => {
                        if(line.type === "paragraph"){
                            return <p key={line.id}>{line.content}</p>
                        }else if(line.type === "link"){
                            return <p key={line.id}><a href="#">{line.content}</a></p>
                        }
                     })
                    }
            </div>

            <form onSubmit={handleSubmit} className={styled.commentForm}>
                <strong>Deixe o seu feedback</strong>
                <textarea
                    onChange={handleChange}
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type='submit' >Publicar</button>
                </footer>

            </form>

            <div className={styled.commentList}>
                {
                    comments.map((comment)=> {
                        return(
                            <Comment key={comment} content={comment} onDeleteComment={DeleteComment} />
                        )
                    })
                }
          
            </div>
        </article>
    )
}
