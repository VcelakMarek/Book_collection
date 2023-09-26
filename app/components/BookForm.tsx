"use client"
import { FC, useId } from "react"
import { Form } from "react-final-form"
import { FormApi } from "final-form"
import { POST, PUT } from "scripts/fetch"
import FormInput from "components/FormInput"
import Button from "components/Button"
import type { BookTypes } from "types/bookTypes"

type FormDataTypes = {
  [key: string]: BookTypes[]
}

type BookFormProps = {
  form?: FormApi<FormDataTypes>
  formValues?: BookTypes
}

const BookForm: FC<BookFormProps> = ({ formValues }) => {
  const onSubmit = (
    values: FormDataTypes,
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    formValues
      ? PUT(`v1/books/${formValues.id}`, values)
      : POST("v1/books", values)
  }

  return (
    <div>
      <div className="absolute z-10 h-screen w-screen bg-white-background">
        <div className="fixed h-screen w-screen grid place-items-center">
          <h1>{formValues ? "Edit book" : "New book"}</h1>

          <Form
            id="newInvoice"
            className="w-[504px]"
            onSubmit={onSubmit}
            initialValues={formValues ? { ...formValues } : null}
            render={({ handleSubmit, values, form }) => (
              <form onSubmit={handleSubmit}>
                <FormInput inputName="Title" id="title" />
                <FormInput inputName="Author" id="author" />
                <FormInput inputName="Image Link" id="imageLink" />

                <div className="flex justify-between">
                  <FormInput
                    inputName="Pages"
                    size="small"
                    inputType="number"
                    id="pages"
                  />
                  <FormInput
                    inputName="Year"
                    size="small"
                    inputType="number"
                    id="year"
                  />
                </div>
                <FormInput inputName="Description" id="description" />

                <Button submit>
                  {formValues ? "Edit book" : "Create new book"}
                </Button>
              </form>
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default BookForm
