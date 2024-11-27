import { Loader2 } from "lucide-react";

interface SubmitButtonProps {
  loading?: boolean;
  text?: string;
  loadingText?: string;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  type?: 'submit' | 'button';
  onClick?: () => void;
}

export default function SubmitButton({
  loading = false,
  text = "Soumettre",
  loadingText = "Chargement...",
  variant = 'primary',
  size = 'md',
  fullWidth = true,
  type = 'submit',
  onClick,
}: SubmitButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-offset-0";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-200",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-200",
    danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-200",
  };
  
  const sizes = {
    sm: "text-sm px-3 py-2 gap-1.5",
    md: "text-sm px-4 py-2.5 gap-2",
    lg: "text-base px-6 py-3 gap-2",
  };

  return (
    <button
      type={type}
      disabled={loading}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${loading ? 'relative !text-transparent hover:!text-transparent' : ''}
      `}
    >
      {text}
      
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center text-current">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span className="ml-2">{loadingText}</span>
        </div>
      )}
    </button>
  );
}