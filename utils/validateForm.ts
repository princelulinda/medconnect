export interface FormData {
    fullName: string;
    registrationNumber: string;
    email: string;
    address: string;
    availability: string;
    diplomas: File[];
  }
  
  export interface FormErrors {
    fullName?: string;
    registrationNumber?: string;
    email?: string;
    address?: string;
    availability?: string;
    diplomas?: string;
  }
  
  export function validateForm(data: FormData): FormErrors {
    const errors: FormErrors = {};
  
    if (!data.fullName.trim()) errors.fullName = "Le nom complet est requis";
    if (!data.registrationNumber.trim()) errors.registrationNumber = "Le numéro d'enregistrement est requis";
    if (!data.email.trim()) errors.email = "L'email est requis";
    if (!data.address.trim()) errors.address = "L'adresse est requise";
    if (!data.availability.trim()) errors.availability = "La disponibilité est requise";
    if (data.diplomas.length === 0) errors.diplomas = "Au moins un diplôme est requis";
  
    return errors;
  }
  
  