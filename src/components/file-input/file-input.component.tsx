import { InputHTMLAttributes } from 'react';
import { FileInputContainer, Input, Label } from './file-input.styles';

type FileInputProps = InputHTMLAttributes<HTMLInputElement>
export const FileInput = (props:FileInputProps) => {

    return (
        <FileInputContainer>
            <Label htmlFor='media'>add media</Label>
            <Input
                id='media'
                type='file'
                accept='image/*, video/*, audio/*'
                multiple={false}
                placeholder='add media'
                {...props}
            />
        </FileInputContainer>
    );
};