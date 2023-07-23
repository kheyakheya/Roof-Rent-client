import { useContext } from 'react';
import avatar from '../../../assets/images/placeolder.jpg';
import { AuthContext } from '../../../Providers/AuthProvider';
const Avatar = () => {
    const {user}= useContext(AuthContext);

    return (
        <img src={user && user.photoURL ? user.photoURL: avatar} alt="user" height={30} width={30} className='rounded-full' />
        
    );
};

export default Avatar;