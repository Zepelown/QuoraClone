import React from 'react';
import './Quorabox.css'
import {Avatar} from "@material-ui/core";


function QuoraBox(props) {
  return (
    <div className="quoraBox">
      <div className="quoraBox_info">
        <Avatar/>
        <h5>리엑트 깍는 백수 </h5>
      </div>
      <div className="quoraBox_quora">
        <p>무엇이 궁금하신가요? </p>
      </div>
    </div>
  )
}

export default QuoraBox;