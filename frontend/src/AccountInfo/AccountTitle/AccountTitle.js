import React from 'react';

function AccountTitle() {
  return (
    <div>
    <div class="rounded float-left">
        <img src=" https://i.pinimg.com/originals/d1/6c/09/d16c09dee6130553133b4cf3a5bd9e5a.png"
        alt="Profile Thumbnail" class = "image-thumbnail"
        style={{
             position:'absolute',
             width:'200px',
             height:'200px',
             left:'150px',
             borderStyle:'solid'
            }}>   
        </img>
    </div>
    <h1 style={{
        position:'relative',
        top:'50px',
        borderStyle:'solid',
        margin:'auto',
        width:'40%'
        }}>Profile Name</h1>
    </div>
  );
}

export default AccountTitle;