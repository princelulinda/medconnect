'use client'
import { useState, FormEvent, ChangeEvent } from 'react'
import { Mail,  User} from 'lucide-react'
import { registerUser } from '@/lib/firebase/FireBaseAuth'
import InputField from '@/components/inputField'
import PasswordField from '@/components/passwordField'
import SubmitButton from '@/components/submitButton'
import CustomAlert from '@/components/customAlert'
import Divider from '@/components/divider'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface FormData {
  username: string
  email: string
  password: string
  confirmPassword: string
}

interface Errors {
  [key: string]: string | null
}

interface Alert {
  type: 'success' | 'error'
  title: string
  message: string
}

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  
  const [errors, setErrors] = useState<Errors>({})
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [alert, setAlert] = useState<Alert | null>(null)
  const navigation =  useRouter()

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

    if (!formData.username.trim()) {
      newErrors.username = "Le nom d'utilisateur est requis"
    } else if (formData.username.length < 3) {
      newErrors.username = "Le nom d'utilisateur doit contenir au moins 3 caractères"
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email) {
      newErrors.email = "L'email est requis"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide"
    }

    if (!formData.password) {
      newErrors.password = "Le mot de passe est requis"
    } else if (formData.password.length < 6) {
      newErrors.password = "Le mot de passe doit contenir au moins 6 caractères"
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "La confirmation du mot de passe est requise"
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas"
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
      await registerUser(formData.email, formData.password, formData.username)
      setAlert({
        type: 'success',
        title: 'Inscription réussie !',
        message: 'Votre compte a été créé avec succès. Vous allez être redirigé...'
      })
      setTimeout(() => {
        navigation.push('/confirmEmail')
      }, 2000)
    } catch (error: any) {
      let errorMessage = 'Une erreur est survenue. Veuillez réessayer plus tard.'
      
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = "Cet email est déjà utilisé. Veuillez vous connecter <Link className='text-blue-500' href='/login'>ici</Link>"
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = "L'email fourni est invalide."
      } else if (error.code === 'auth/weak-password') {
        errorMessage = "Le mot de passe est trop faible. Veuillez choisir un mot de passe plus fort."
      } else if (error.code === 'auth/missing-email') {
        errorMessage = "L'email est requis."
      } else if (error.code === 'auth/missing-password') {
        errorMessage = "Le mot de passe est requis."
      } else if (error.code === 'auth/operation-not-allowed') {
        errorMessage = "L'inscription est désactivée. Veuillez réessayer plus tard."
      }

      setAlert({
        type: 'error',
        title: 'Erreur',
        message: errorMessage
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
            src="/images/Medicine-bro.png"
            alt="Illustration"
            width={500}
            height={500}
            className="w-full h-auto"
          />
          <h2 className="text-white text-3xl font-bold mt-8 text-center">
            Bienvenue sur notre plateforme
          </h2>
          <p className="text-indigo-200 mt-4 text-center">
            Créez votre compte pour accéder à toutes nos fonctionnalités et rejoindre notre communauté.
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-gray-50">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Créer un compte
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Ou{' '}
              <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                connectez-vous à votre compte
              </Link>
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
                label="Nom d'utilisateur"
                name="username"
                value={formData.username}
                onChange={handleChange}
                error={errors.username}
                icon={<User className="h-5 w-5 text-gray-400" />}
              />

              <InputField
                label="Adresse email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                icon={<Mail className="h-5 w-5 text-gray-400" />}
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

              <PasswordField
                label="Confirmer le mot de passe"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
                showPassword={showConfirmPassword}
                setShowPassword={setShowConfirmPassword}
              />
            </div>

            <div>
              <SubmitButton loading={loading} text="S'inscrire" />
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