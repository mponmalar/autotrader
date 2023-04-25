import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import React from 'react';
import { auth } from '../utils/firebase'
import { useSelector } from 'react-redux';

const { Meta } = Card;

const Profile = () => {
    let currentUser = useSelector((state) => state.login.user);

    return (
        <Card
        style={{
          width: 400,
        }}
        cover={
          <img
            alt="profilepic"
            src={currentUser.photoURL}
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
          title={currentUser.displayName}
          description=""
        />
      </Card>
    )


};
export default Profile;