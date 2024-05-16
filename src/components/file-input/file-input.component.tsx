import { InputHTMLAttributes } from 'react';
import { FileInputContainer, Input, Label } from './file-input.styles';


type FileInputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    accept?: string;
};
export const FileInput = ({ label, accept, ...props }: FileInputProps) => {

    return (
        <FileInputContainer>
            <Label htmlFor='media'>{label}</Label>
            <Input
                id='media'
                type='file'
                accept={accept ?? 'image/*, video/*, audio/*'}
                multiple={false}
                placeholder={label}
                {...props}
            />
        </FileInputContainer>
    );
};