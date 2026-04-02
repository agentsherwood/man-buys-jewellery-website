'use client'

import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { submitContactForm } from './actions'

export default function ContactForm() {
  const [serverMessage, setServerMessage] = useState(null)
  const [serverError, setServerError] = useState(null)
  const [isPending, startTransition] = useTransition()
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = handleSubmit((values) => {
    setServerMessage(null)
    setServerError(null)

    startTransition(async () => {
      const formData = new FormData()
      formData.set('name', values.name)
      formData.set('email', values.email)
      formData.set('message', values.message)

      const result = await submitContactForm(formData)

      if (!result.ok) {
        if (result.errors) {
          Object.entries(result.errors).forEach(([field, message]) => {
            setError(field, { type: 'server', message })
          })
        }

        if (result.formError) {
          setServerError(result.formError)
        }

        return
      }

      setServerMessage(result.message)
      reset()
    })
  })

  return (
    <form onSubmit={onSubmit} noValidate>
      <label htmlFor="name">
        Name
        <input id="name" type="text" {...register('name', { required: 'Name is required.' })} />
        {errors.name ? <span className="field-error">{errors.name.message}</span> : null}
      </label>

      <label htmlFor="email">
        Email
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required.',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Enter a valid email address.',
            },
          })}
        />
        {errors.email ? <span className="field-error">{errors.email.message}</span> : null}
      </label>

      <label htmlFor="message">
        Message
        <textarea id="message" {...register('message', { required: 'Message is required.' })} />
        {errors.message ? <span className="field-error">{errors.message.message}</span> : null}
      </label>

      {serverMessage ? <p className="form-feedback success">{serverMessage}</p> : null}
      {serverError ? <p className="form-feedback error">{serverError}</p> : null}

      <button type="submit" className="button button-primary" disabled={isPending || isSubmitting}>
        {isPending || isSubmitting ? 'Sending...' : 'Send message'}
      </button>
    </form>
  )
}
