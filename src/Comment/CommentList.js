import React, { Component } from 'react'
import Comment from "./Comment"
export default class CommentList extends Component {
    render() {
        // map返回的是一个数组
        // console.log(this.props.data)
        let CommentArr = this.props.data.map((item, index) => {
            // let author = item.author
            // let date = item.date
            // let content = item.content
            let { author, content, date } =  item 
            return <Comment key={index} author={author} date={date}>{content}</Comment>
        })
        // console.log(CommentArr)
        return (
            <div className="list">
                {CommentArr}
            </div>
        )
    }
}
