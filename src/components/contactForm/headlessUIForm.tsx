import {  Field, Fieldset, Input, Label, Legend, Textarea } from '@headlessui/react'

import clsx from 'clsx'

export default function ExampleForm() {
  return (
    <div className="w-full max-w-lg px-4">
      <Fieldset className="space-y-6 rounded-xl bg-white/5 p-6 sm:p-10" >
        <form action="">
        <Legend className="text-base/7 font-semibold text-white">Contact me</Legend>
        <Field>

            {/* name */}
          <Label className="text-sm/6 font-medium text-white">Name</Label>
          <Input
            className={clsx(
              'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            )}
          />


        </Field>


        <Field>

            {/* email */}
          <Label className="text-sm/6 font-medium text-white">Email</Label>
          <Input
            className={clsx(
              'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            )}
          />


        </Field>
        <Field>

{/* message */}
          <Label className="text-sm/6 font-medium text-white">Message</Label>
          <Textarea
            className={clsx(
              'mt-3 block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            )}
            rows={3}
          />


        </Field>

        <div>
          {/* <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button> */}
        </div>

      </form>
      </Fieldset>
    </div>
  )
}