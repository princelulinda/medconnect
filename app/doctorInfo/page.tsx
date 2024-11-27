'use client';

import React, { useState } from "react";
import { FormData, FormErrors, validateForm } from "@/utils/validateForm";
import { addHealthProfessionalData } from "@/lib/firebase/FireBaseAuth";
import InputField from "@/components/inputField";
import NavBar from "@/components/navbar";
import auth from "@/lib/firebase/.config";
import { useRouter } from "next/navigation";

export default function RegisterHealthProfessional() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    registrationNumber: "",
    email: "",
    address: "",
    availability: "",
    diplomas: [],
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const userId = auth?.currentUser?.uid
  const navigation = useRouter()
if (!userId){
     navigation.push("/login")
}
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? Array.from(files) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitError(null);

      try {
        await addHealthProfessionalData(userId, {
          ...formData,
          diplomas: formData.diplomas.map((file: File) => file.name),
        });

        setFormData({
          fullName: "",
          registrationNumber: "",
          email: "",
          address: "",
          availability: "",
          diplomas: [],
        });
        alert("Informations enregistrées avec succès !");
      } catch (error) {
        console.error("Erreur :", error);
        setSubmitError("Une erreur est survenue lors de l'enregistrement.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="max-h-screen bg-gray-50 overflow-y-scroll ">
      <NavBar />
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Inscription Professionnel de Santé
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField
            label="Nom complet / Établissement"
            type="text"
            name="fullName"
            value={formData.fullName}
            placeholder="Dr. John Doe"
            onChange={handleChange}
            error={errors?.fullName}
          />

          {/* Registration Number */}
          <InputField
            label="Numéro d'enregistrement"
            type="text"
            name="registrationNumber"
            value={formData.registrationNumber}
            placeholder="RPPS, SIREN"
            onChange={handleChange}
            error={errors.registrationNumber}
          />

          {/* Email */}
          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            placeholder="contact@example.com"
            onChange={handleChange}
            error={errors.email}
          />

          {/* Address */}
          <InputField
            label="Adresse physique"
            type="text"
            name="address"
            value={formData.address}
            placeholder="123 Rue Exemple"
            onChange={handleChange}
            error={errors.address}
          />

          {/* Availability */}
          <InputField
            label="Disponibilité"
            type="text"
            name="availability"
            value={formData.availability}
            placeholder="9h-18h du lundi au vendredi"
            onChange={handleChange}
            error={errors.availability}
          />

          {/* Diplomas Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Diplômes
            </label>
            <div className="mt-2 flex items-center space-x-3">
              <input
                id="diplomas"
                name="diplomas"
                type="file"
                className="sr-only"
                multiple
                onChange={handleChange}
              />
              <label
                htmlFor="diplomas"
                className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow-sm cursor-pointer hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Téléchargez
              </label>
              <p className="text-xs text-gray-500">PNG, JPG, PDF jusqu'à 10MB</p>
            </div>
            {errors.diplomas && (
              <p className="mt-2 text-sm text-red-600">{errors.diplomas}</p>
            )}
          </div>

          {/* Error Message */}
          {submitError && (
            <div className="p-4 bg-red-50 border-l-4 border-red-400 rounded-md">
              <p className="text-sm text-red-600">{submitError}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {isSubmitting ? "Enregistrement..." : "Enregistrer"}
          </button>
        </form>
      </div>
    </div>
  );
}
