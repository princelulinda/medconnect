'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import { Mail, Lock } from 'lucide-react'
import { loginUser } from '@/lib/firebase/FireBaseAuth'
import InputField from '@/components/inputField'
import PasswordField from '@/components/passwordField'
import SubmitButton from '@/components/submitButton'
import CustomAlert from '@/components/customAlert'
import Divider from '@/components/divider'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface FormData {
  email: string
  password: string
}

interface Errors {
  [key: string]: string | null
}

interface Alert {
  type: 'success' | 'error'
  title: string
  message: string
}

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  })
  
  const [errors, setErrors] = useState<Errors>({})
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [alert, setAlert] = useState<Alert | null>(null)
  const [rememberMe, setRememberMe] = useState<boolean>(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Errors = {}

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email) {
      newErrors.email = "L'email est requis"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide"
    }

    if (!formData.password) {
      newErrors.password = "Le mot de passe est requis"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setLoading(true)
    setAlert(null)

    try {
      const response = await loginUser(formData.email, formData.password)
      
      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true')
      }

      setAlert({
        type: 'success',
        title: 'Connexion réussie !',
        message: 'Vous allez être redirigé...'
      })

      setTimeout(() => {
        router.push('/dashboard')
      }, 1500)
      
    } catch (error: any) {
      setAlert({
        type: 'error',
        title: 'Erreur de connexion',
        message: error.message || "Une erreur est survenue lors de la connexion"
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="lg:flex-1 bg-indigo-600 lg:flex flex-col justify-center items-center p-12 hidden">
        <div className="max-w-md">
          <Image
            src="/images/Doctors-cuate.png"
            alt="Illustration"
            width={500}
            height={500}
            className="w-full h-auto"
          />
          <h2 className="text-white text-3xl font-bold mt-8 text-center">
            Ravi de vous revoir !
          </h2>
          <p className="text-indigo-200 mt-4 text-center">
            Connectez-vous pour accéder à votre espace personnel et profiter de tous nos services.
          </p>
        </div>
      </div>

      {/* Colonne droite - Formulaire */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-gray-50">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Connexion
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Ou{' '}
              <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                créez un nouveau compte
              </a>
            </p>
          </div>

          {alert && (
            <CustomAlert
              type={alert.type}
              title={alert.title}
              message={alert.message}
            />
          )}

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4 rounded-md">
              <InputField
                label="Adresse email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                icon={<Mail className="h-5 w-5 text-gray-400" />}
                placeholder="exemple@email.com"
              />

              <PasswordField
                label="Mot de passe"
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Se souvenir de moi
                  </label>
                </div>

                <div className="text-sm">
                  <a href="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Mot de passe oublié ?
                  </a>
                </div>
              </div>
            </div>

            <div>
              <SubmitButton loading={loading} text="Se connecter" />
            </div>
          </form>

          <Divider text="Ou continuez avec" />

          <div className="grid grid-cols-1 gap-3">
            <button
              type="button"
              className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Image
                src="/google-icon.svg"
                alt="Google"
                width={20}
                height={20}
                className="mr-2"
              />
              Continuer avec Google
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}