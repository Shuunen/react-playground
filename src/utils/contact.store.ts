import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface FormState {
  firstName: string
  lastName: string
  message: string
  setFormData: (data: Partial<FormState>) => void
  resetForm: () => void
}

export const useFormStore = create<FormState>()(
  persist(
    set => ({
      firstName: '',
      lastName: '',
      message: '',
      resetForm: () => {
        set({
          firstName: '',
          lastName: '',
          message: '',
        })
      },
      setFormData: data => {
        set(state => ({
          ...state,
          ...data,
        }))
      },
    }),
    {
      name: 'contact-storage',
    },
  ),
)
