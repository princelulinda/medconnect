'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function EmailConfirmationPage() {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)

  const handleRedirect = () => {
    setLoading(true)
    setTimeout(() => {
      router.push('/doctorInfo') 
    }, 2000)
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="lg:flex-1 bg-indigo-600 lg:flex flex-col justify-center items-center p-12 hidden">
        <div className="max-w-md">
          <Image
            src="/email-confirmation-illustration.svg"
            alt="Illustration"
            width={500}
            height={500}
            className="w-full h-auto"
          />
          <h2 className="text-white text-3xl font-bold mt-8 text-center">
            Vérifiez votre email !
          </h2>
          <p className="text-indigo-200 mt-4 text-center">
            Un lien de confirmation a été envoyé à votre adresse email. Veuillez vérifier votre boîte de réception.
          </p>
        </div>
      </div>

      {/* Colonne droite - Message */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-gray-50">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Confirmation d'email
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Merci d'avoir créé un compte avec nous ! Un email de confirmation a été envoyé à votre adresse.
            </p>
            <p className="mt-2 text-center text-sm text-gray-600">
              Si vous ne le voyez pas, vérifiez votre dossier spam ou réessayez.
            </p>
          </div>

          <div className="mt-6">
            <button
              onClick={handleRedirect}
              className="w-full inline-flex justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-indigo-600 text-white font-medium hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {loading ? 'Redirection...' : 'Retour à la connexion'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}