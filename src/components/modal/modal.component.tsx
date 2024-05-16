import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { CloseButton, Embed, ModalBody, ModalContainer, ModalContent, ModalFooter, ModalHeader, TextArea } from './modal.styles';
import { useDispatch, useSelector } from 'react-redux';
import { setDisplayModal } from '../../store/modal/modal.action';
import { selectDisplayModal } from '../../store/modal/modal.selector';
import Button from '../buttons/button.styles';
import { FileInput } from '../file-input/file-input.component';
import { createPostStart } from '../../store/posts/posts.action';

const Modal = () => {

    const display = useSelector(selectDisplayModal);

    const [preview, setPreview] = useState<string | null>(null);
    const [text, setText] = useState<string>('');
    const [file, setFile] = useState<File | null>(null);

    const handlePreview = (event: ChangeEvent<HTMLInputElement>) => {
        const [file] = event?.target.files ?? [];
        setFile(file);
        setPreview(URL.createObjectURL(file));
    };


    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch(setDisplayModal(false));
    };
    const modalRef = useRef(null);

    const handleClick = (event: MouseEvent) => {
        if (event.target === modalRef.current) {
            closeModal();
        }
    };

    // Attach the click event handler to the window
    useEffect(() => {
        window.addEventListener('click', handleClick);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('click', handleClick);
        };
        // eslint-disable-next-line
    }, []);

    const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        dispatch(createPostStart({ text, file }));
        closeModal();
        setText('');
        setPreview(null);
        setFile(null);
    };

    const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    return (
        <ModalContainer ref={modalRef} display={display} encType='multipart/form-data' >

            <ModalContent>
                <ModalHeader>
                    <CloseButton onClick={closeModal}>&times;</CloseButton>
                    <h2>create post</h2>
                </ModalHeader>
                <ModalBody>
                    <TextArea placeholder="what's on your mind?" onChange={handleTextChange} value={text} />
                    <FileInput onChange={handlePreview}  label='add media'/>
                    {preview && <Embed src={preview} />}
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handleSubmit}>post</Button>
                </ModalFooter>

            </ModalContent>

        </ModalContainer>
    );
};

export default Modal;
