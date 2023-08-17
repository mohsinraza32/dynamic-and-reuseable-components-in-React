import React from "react";
import ReactDom from "react-dom";
import "./style.css"

import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons'

function Post(props) {

  return <div className="post">

    <div className="postHeader">
      <img className="profilePhoto" src={props.profilePhoto} alt="profile" />

      <div>
        {props.name}<br />
        {moment(props.postDate).fromNow()}
      </div>

    </div>

    <div className="postText">
      {props.postText}
    </div>

    <img className="postImage" src={props.postImage} alt="post" />
     <hr/>
    <div className="postFooter">

    <div><FontAwesomeIcon  className="icon" icon={faThumbsUp} />like</div>
    <div><FontAwesomeIcon className="icon" icon={faComment} />comment</div>
    <div><FontAwesomeIcon className="icon" icon={faShare} />share</div>
    
    </div>
    <hr/>
   

  </div>
}

ReactDom.render(
  <>

    <Post name="Mohsin Raza"
      profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrSQ0T3bpavrKF4CrGxgmqZTTlVLyUiSf9zg&usqp=CAU"
      postDate="16 August 2023"
      postText="The Republic of Azerbaijan’s Religion Law and Administrative Code amendments of 2021 and 2022; how will this further suppress Christianity in the Caucasus? Aliyev’s autocratic regime is determined to limit"
      postImage="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/366366892_1034050327992925_7229559566704140845_n.jpg?stp=dst-jpg_p843x403&_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGWLsZrJRh7LldlU--vFZegWP_TRF_fCPRY_9NEX98I9KqS-Eta2x7SjS3PxVRXV02EhqLECILISaAwIBhBvr8q&_nc_ohc=MGhtE2DRBgUAX8qs1ha&_nc_ht=scontent.fkhi2-3.fna&oh=00_AfBgaprMZ3JDbiAbNIqzx_Eotwp3Twe-P8X__AyZ-urZ9g&oe=64E0DFA9"
    />
    <Post name="Faizan Hussain"
      profilePhoto="https://vanitystudios.co.uk/wp-content/uploads/2020/10/8I8A0034-scaled.jpg"
      postDate="16 August 2023"
      postText="The Republic of Azerbaijan’s Religion Law and Administrative Code amendments of 2021 and 2022; how will this further suppress Christianity in the Caucasus? Aliyev’s autocratic regime is determined to limit"
      postImage="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/367474605_666482992207765_1999153982903885028_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeH6UX0VXMRrUMqBfZKn4UvmoyFUC8IcC8GjIVQLwhwLwZ53_E17zZ3powyTZprbtZ5Z4Hlj8jQhPl-Nt_cJsOsn&_nc_ohc=aa4y6TQgowYAX98wZ5-&_nc_ht=scontent.fkhi2-3.fna&oh=00_AfBSDU40y55um7u64UFgKxJI98Uc2B4QJHnLjS-J7qoPag&oe=64E1B90C"
    />
    <Post name="Zain Baig"
      profilePhoto="https://images.squarespace-cdn.com/content/v1/573610d2cf80a1b5becb9edd/1591370773212-RH57DM30XWFGVJCJZDLH/drama-school-headshot.jpg"
      postDate="16 August 2023"
      postText="The Republic of Azerbaijan’s Religion Law and Administrative Code amendments of 2021 and 2022; how will this further suppress Christianity in the Caucasus? Aliyev’s autocratic regime is determined to limit"
      postImage="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/367454525_666276458895085_136029678419065934_n.jpg?stp=dst-jpg_p843x403&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFsBlpOFUfU4g4RgdEP748zlM17M7ttc_6UzXszu21z_ih0JLoV1Gg1gXh6yLq4-xFcssZPxVs_wTW_McHCUWNN&_nc_ohc=nA-kB8j_dgYAX9VQYXo&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfBfA_1asce2-L2nH0Tgsdekv5nXYh_LI5vWXOeraK6gKg&oe=64E288E1"
    />
    <Post name="Husnain Raza"
      profilePhoto="https://imgv3.fotor.com/images/gallery/male-headshot-made-in-fotor-ai-headshot-generator.jpg"
      postDate="16 August 2023"
      postText="The Republic of Azerbaijan’s Religion Law and Administrative Code amendments of 2021 and 2022; how will this further suppress Christianity in the Caucasus? Aliyev’s autocratic regime is determined to limit"
      postImage="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/367439409_670966785055997_93090010930962024_n.jpg?stp=dst-jpg_p843x403&_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHxlNRwNRWR5HzRbBAFDbdoYln3AQjWU09iWfcBCNZTTwYwlZKyR3LmeauBJqKNCTpggXFT1699-cKjTeZsM96F&_nc_ohc=nZTtSydsPjQAX-bGbwF&_nc_ht=scontent.fkhi2-3.fna&oh=00_AfB4IKL_1QsXJI8Mjfekl7Ppw_Ez87hrhEwX5VQpBDDs-A&oe=64E22FF9"
    />

  </>

  , document.querySelector('#root'));