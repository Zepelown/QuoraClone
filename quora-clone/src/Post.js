import React from 'react';
import './Post.css';
import {Avatar, Input} from "@material-ui/core";
import {
    ArrowDownwardOutlined,
    ArrowUpwardOutlined,
    ChatBubbleOutlineOutlined, ExpandMore, Link, MoreHorizOutlined, PeopleAltOutlined,
    RepeatOneOutlined, ShareOutlined
} from "@material-ui/icons";

function Post() {
  return (
    <div className="post">
      <div className="post_info">
        <Avatar/>
        <h5> 유저 아이디 </h5>
        <small> 작성 식나 </small>
      </div>

      <div className="post_body">
        <div className="post_question">
          <p> 질문 내용 입니다 </p>

          <button className="post_btnAnswer">
          답변하기
          </button>
        </div>

        <div className="post_answer">
          <p> 답변입니다 </p>
        </div>


      </div>

      <div className='post_footer'>
        <div className="post_footerAction">
          <ArrowUpwardOutlined/>
          <ArrowDownwardOutlined/>
        </div>
        
        <RepeatOneOutlined />
        <ChatBubbleOutlineOutlined />

        <div className="post_footerRight">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div>

    </div>
  );
}
export default Post;