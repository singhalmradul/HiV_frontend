    import { render, fireEvent } from '@testing-library/react';
import Post from './post.component';

describe('Post Component', () => {
    const mockPost = {
        id: 'testId',
        user: {
            id: 'testId',
            username: 'testUser',
            profilePicture: 'testPic.jpg'
        },
        text: 'testText',
        image: 'testImage.jpg',
        likes: 5,
        comments: 3
    };

    it('renders without crashing', () => {
        render(<Post {...mockPost} />);
    });

    it('displays the correct username', () => {
        const { getByText } = render(<Post {...mockPost} />);
        expect(getByText('testUser')).toBeInTheDocument();
    });

    it('displays the correct text', () => {
        const { getByText } = render(<Post {...mockPost} />);
        expect(getByText('testText')).toBeInTheDocument();
    });

    it('displays the correct likes count', () => {
        const { getByText } = render(<Post {...mockPost} />);
        expect(getByText('5')).toBeInTheDocument();
    });

    it('displays the correct comments count', () => {
        const { getByText } = render(<Post {...mockPost} />);
        expect(getByText('3')).toBeInTheDocument();
    });

    it('toggles like state when like button is clicked', () => {
        const { getByTestId } = render(<Post {...mockPost} />);
        const likeButton = getByTestId('like-button');
        fireEvent.click(likeButton);
        expect(likeButton.getAttribute('isLiked')).toBe('true');
    });
});