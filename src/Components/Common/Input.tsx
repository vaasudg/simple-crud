import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { EmployeeProps } from '../../utils/types'

interface InputProps<T extends FieldValues> {
  label: string
  type?: string
  name: keyof EmployeeProps
  placeholder?: string
  value?: string
  register: UseFormRegister<T>
  errors: FieldErrors<T>
}

export const Input = <T extends FieldValues>({
  label,
  type,
  register,
  name,
  errors,
  placeholder,
  value,
  ...rest
}: InputProps<T>): any => {
  return (
    <div>
      <label className={`${errors[name] ? 'text-red-800' : 'text-white'}`} htmlFor={name}>
        {label}:
      </label>
      <input
        {...register(name as any)}
        id={name}
        type={type}
        placeholder={placeholder}
        value={value}
        {...rest}
        className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring ${
          errors[name] ? 'border-red-800' : 'border-gray-300'
        }`}
      />
      {errors && errors[name] && (
        <p className='text-[11px] text-red-800 font-bold mt-2'>{(errors[name] as any)?.message}</p>
      )}
    </div>
  )
}
