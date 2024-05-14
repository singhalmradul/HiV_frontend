import { useNavigate } from 'react-router-dom';
import Button from '../../components/buttons/button.styles';
import Buttons from '../../components/buttons/buttons.styles';

import './edit-profile.styles.css';
import { FileInput } from '../../components/file-input/file-input.component';

const EditProfile = () => {

    const navigate = useNavigate();

    const gotoProfile = () => {
        navigate('/profile');
    };

    return (
        <div className='form-container'>
            <form className='form'>
            <Buttons>
                <Button>save</Button>
                <Button onClick={gotoProfile}>discard</Button>
            </Buttons>
                <label htmlFor="displayName">displayName</label>
                <input type="text" name="displayName" id="displayName" />
                <label htmlFor="bio">bio</label>
                <textarea name="bio" id="bio" />
                <label htmlFor="username">username</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="email">email</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="avatar">avatar</label>
                <FileInput type="file" name="avatar" id="avatar" />
            </form>
        </div>
    );
};

export default EditProfile;