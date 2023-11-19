"use client"

import React from "react"
import { Form } from "react-final-form"
import { useRouter } from "next/navigation"
import FormInput from "./FormInput"
import Button from "./Button"

const AdminLogin = () => {
  const router = useRouter()
  const onSubmit = () => {}

  return (
    <>
      <div className="absolute top-20 z-10 h-screen w-screen bg-neutral-900/40 backdrop-blur-sm" />
      <div className="absolute left-1/2 top-1/2 z-20 flex h-80 w-72 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-evenly rounded-2xl bg-white-background p-4 sm:h-[460px] sm:w-96">
        <h1 className="text-center ">LOGIN</h1>
        <Form
          id="Login"
          className="w-full"
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col ">
                <FormInput
                  id="password"
                  size="medium"
                  inputPlaceholder="Password"
                />
                <Button submit onClick={router.back}>
                  LOGIN
                </Button>
              </div>
            </form>
          )}
        />
      </div>
    </>
  )
}

export default AdminLogin
