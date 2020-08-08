import React from 'react'
import './Post.css'
function Post() {
    return (
        <div>
            {/* header -> avatar + username */}
            <h3>Username</h3>
            {/* Image */}
            <img className="post__image" src="https://instagram.fjib1-2.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/117041974_302702244497038_500430435947338940_n.jpg?_nc_ht=instagram.fjib1-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=ndlEnHZGeYYAX_Rd9CG&oh=406dc78e256ac1631f12918759d3e76d&oe=5F58339E" alt="Post user"/>
            {/* username + caption */}
            <h4>Useraname: caption</h4>
        </div>
    )
}

export default Post
