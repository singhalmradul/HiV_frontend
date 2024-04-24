import { useDispatch } from 'react-redux';
import { Button, ButtonText, CommentBoxContainer, CommentTextArea } from './comment-box.styles';
import { postCommentStart } from '../../store/comments/comments.action';
import { ChangeEvent, useState } from 'react';

type CommentBoxProps = {
    postId: string;
};
const CommentBox = ({ postId }: CommentBoxProps) => {

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (!text.trim().length) return;
        dispatch(postCommentStart({ postId, text }));
        setText('');
    };
    const handleOnChange = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) => {
        setText(value);
    };

    return (
        <CommentBoxContainer>
            <CommentTextArea placeholder="add a comment" onChange={handleOnChange} value={text} />
            <Button onClick={handleSubmit}>
                <ButtonText>comment</ButtonText>
            </Button>
        </CommentBoxContainer>
    );
};

export default CommentBox;