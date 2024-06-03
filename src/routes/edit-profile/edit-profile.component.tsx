import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../components/buttons/button.styles';
import Buttons from '../../components/buttons/buttons.styles';
import { FileInput } from '../../components/file-input/file-input.component';
import { selectCurrentUserId, selectUser } from '../../store/user/user.selector';
import { changeAvatarStart, fetchUserDetailsStart, updateProfileStart } from '../../store/user/user.action';
import { User } from '../../store/user/user.types';

import './edit-profile.styles.css';
import Spinner from '../../components/spinner/spinner.component';
import AvatarLarge from '../../components/avatar-large/avatar-large.component';

const EditProfile = () => {

    const navigate = useNavigate();
    const [preview, setPreview] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [saved, setSaved] = useState(true);
    const [user, setUser] = useState<User | null>(null);
    const storedUser = useSelector(selectUser);
    const currentUserId = useSelector(selectCurrentUserId);
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentUserId !== storedUser?.id) {
            dispatch(fetchUserDetailsStart(currentUserId));
        }
        if (storedUser) {
            setUser(storedUser);
            setPreview(storedUser.avatar);
        }
        // eslint-disable-next-line
    }, [storedUser]);

    const handlePreview = (event: ChangeEvent<HTMLInputElement>) => {
        const [file] = event?.target.files ?? [];
        setFile(file);
        setPreview(URL.createObjectURL(file));
        setSaved(false);
    };

    const gotoProfile = () => {
        const confirm = saved
            ? true
            : window.confirm('are you sure you want to discard changes?');
        confirm && navigate('/profile');
    };

    const handleUpdateAvatar = () => {
        if (!file) {
            window.alert('please select a file');
            return;
        }
        dispatch(changeAvatarStart(file));
        setSaved(true);
        window.alert('avatar updated successfully');
    };
    if (!user) {
        return <Spinner />;
    }
    const { displayName, bio, username, email } = user;

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
        setSaved(false);
    };

    const handleSave = () => {
        dispatch(updateProfileStart(user));
        setSaved(true);
        window.alert('profile updated successfully');
    };

    return (
        <div className='form-container'>
            <div className='form'>
                <Buttons>
                    <Button onClick={handleSave}>save</Button>
                    <Button onClick={gotoProfile}>go back</Button>
                </Buttons>
                <label htmlFor='displayName'>display name</label>
                <input
                    type='text'
                    name='displayName'
                    id='displayName'
                    value={displayName}
                    onChange={handleInputChange}
                />
                <label htmlFor='bio'>bio</label>
                <textarea
                    name='bio'
                    id='bio'
                    value={bio}
                    onChange={handleInputChange}
                />
                <label htmlFor='username'>username</label>
                <div className='horizontal'>
                    <input
                        type='text'
                        name='username'
                        id='username'
                        value={username}
                        onChange={handleInputChange}
                    />
                    {/* <Button>check availability</Button> */}
                </div>
                <label htmlFor='email'>email</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    value={email}
                    onChange={handleInputChange}
                />
                <label >avatar</label>
                <div className='horizontal'>
                    <AvatarLarge src={preview} />
                    <div>
                        <FileInput
                            label='upload avatar'
                            accept='image/*'
                            onChange={handlePreview}
                        />
                        <Button onClick={handleUpdateAvatar}>save avatar</Button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EditProfile;