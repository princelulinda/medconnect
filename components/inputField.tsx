import { AlertCircle} from "lucide-react";
import { ReactNode } from "react";

interface InputProps{
  label:string;
  name:string;
  type:string;
  value:string;
  onChange:(e: React.ChangeEvent<HTMLInputElement>)=>void;
  error:string | undefined; 
  icon:ReactNode;
  
}
export default function InputField({ label, name, type = "text", value, onChange, error, icon, ...props }:InputProps) {
    return (
      <div>
       
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
        <div className="relative rounded-xl shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            {...props}
            className={`w-full px-4 py-4 pl-12 rounded-xl bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 ${
              error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
            } rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 sm:text-sm transition-all duration-200 ease-in-out`}
          />
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-600 flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" />
            {error}
          </p>
        )}
      </div>
    )
  }