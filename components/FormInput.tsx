import { Field } from "react-final-form"

type Props = {
  size?: "small" | "large"
  inputName: string
  id: string
  inputType?: "text" | "number"
}

const inputSize: { [key: string]: string } = {
  small: "w-[120px] sm:w-[240px]",
  large: "w-[250px] sm:w-[504px]",
}

const FormInput = ({
  size = "large",
  inputName,
  id,
  inputType = "text",
}: Props) => {
  return (
    <label htmlFor={id}>
      <Field name={id}>
        {({ input }) => (
          <div>
            <div className="flex justify-between">
              <h2>{inputName}</h2>
            </div>
            <input
              {...input}
              type={inputType}
              className={`${inputSize[size]} `}
              onChange={(e) => {
                input.onChange(e) //final-form's onChange
              }}
            />
          </div>
        )}
      </Field>
    </label>
  )
}

export default FormInput
