import React from 'react';
import ProfileImage from "./ProfileImage";
import AccountStatistics from './AccountStatistics';

function AccountTitle() {
  return (
    <div>
    <ProfileImage
      imgUrl="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      name="Profile Picture">
    </ProfileImage>
    
    <h1 class="top" id= "ProfileName">Profile Name</h1>
    <AccountStatistics/>
    </div>
  );
}

export default AccountTitle;