import {
  FormControl,
  FormHelperText,
  FormLabel,
  forwardRef,
  Input,
  Textarea,
} from '@chakra-ui/react';
import {
  FieldError,
  UseFormRegister,
} from 'react-hook-form';
// eslint-disable-next-line @typescript-eslint/ban-types
export type InputFieldProps = {
  type?: 'text' | 'email' | 'password' | 'textarea';
  label?: string;
  error?: FieldError;
} & Partial<
  ReturnType<UseFormRegister<Record<string, unknown>>>
>;

export const InputField = forwardRef(
  (props: InputFieldProps, ref) => {
    const {
      type = 'text',
      label,
      error,
      ...inputProps
    } = props;

    const bg = error ? 'LavenderBlush' : 'white';

    return (
      <FormControl>
        {label && <FormLabel>{label}</FormLabel>}
        {type === 'textarea' ? (
          <Textarea
            bg={bg}
            rows={8}
            {...inputProps}
            ref={ref}
          />
        ) : (
          <Input
            bg={bg}
            type={type}
            {...inputProps}
            ref={ref}
          />
        )}
        {error && (
          <FormHelperText color="red">
            {error.message}
          </FormHelperText>
        )}
      </FormControl>
    );
  }
);
