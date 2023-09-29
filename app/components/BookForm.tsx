"use client"
import { FC } from "react"
import { Form } from "react-final-form"
import { FormApi } from "final-form"
import { useRouter } from "next/navigation"
import { addNewBook, editBook } from "api/bookApi"
import FormInput from "components/FormInput"
import Button from "components/Button"
import type { BookType } from "types/bookType"

type BookFormProps = {
  form?: FormApi<FormData>
  formValues?: BookType
}

const BookForm: FC<BookFormProps> = ({ formValues }) => {
  const { push } = useRouter()

  const onSubmit = (values: BookType) => {
    formValues ? editBook(formValues.id, values) : addNewBook(values)
    push("/admin")
  }

  if (formValues) {
    return (
      <Form
        id="editBook"
        className="w-screen"
        onSubmit={onSubmit}
        initialValues={formValues ?? null}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <main className="bg-white-background flex flex-wrap h-screen w-screen pt-10">
              <section className="w-[320px] mx-auto">
                <img
                  className="h-[499px] w-[323px]"
                  src={formValues.imageLink}
                  alt={formValues.title}
                ></img>
              </section>
              <section className="w-3/5 flex flex-col gap-1 mx-auto">
                <FormInput inputName="Title" id="title" />
                <FormInput inputName="Author" id="author" />
                <FormInput inputName="Description" id="description" />
                <div className="flex gap-10 mt-10">
                  <div>
                    <FormInput
                      inputName="Year"
                      size="small"
                      inputType="number"
                      id="year"
                    />
                  </div>
                  <div>
                    <FormInput
                      inputName="Pages"
                      size="small"
                      inputType="number"
                      id="pages"
                    />
                  </div>
                </div>
                <FormInput inputName="Image Link" id="imageLink" />
                <Button submit variant="secondary">
                  Save changes
                </Button>
              </section>
            </main>
          </form>
        )}
      />
    )
  }
  return (
    <>
      <div className="fixed h-screen w-screen grid place-items-center bg-white-background">
        <h1>New book</h1>
        <Form
          id="newBook"
          className="w-[504px]"
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
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

              <Button submit>Create new book</Button>
            </form>
          )}
        />
      </div>
    </>
  )
}

export default BookForm
