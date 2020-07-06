import React, { Component } from 'react'
import CommentList from "./CommentList"
import CommentForm from "./CommentForm"
import "./Comment.css"
export default class CommentBox extends Component {
    render() {
        let commentlist = [
            { "author": "张三", "date": "2009-9-9", "content": "今天心情好" },
            { "author": "李四", "date": "2005-9-9", "content": "今天心情一般" },
            { "author": "王五", "date": "2001-9-9", "content": "今天心情不好" }]
        return (
            <div className="box">
                <CommentList data={commentlist} />
                <CommentForm />
            </div>
        )
    }
}
