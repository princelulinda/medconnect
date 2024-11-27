import { CheckCircle, AlertCircle } from "lucide-react"

export default function CustomAlert({ type, title, message }:{type:"success" | "error", title:string,message:string}) {
    const styles = {
      success: "bg-green-50 text-green-800 border-green-200",
      error: "bg-red-50 text-red-800 border-red-200"
    }
  
    return (
      <div className={`flex items-start p-4 mb-6 rounded-xl border ${styles[type]}`}>
        <div className="flex-shrink-0">
          {type === 'success' ? (
            <CheckCircle className="h-5 w-5" />
          ) : (
            <AlertCircle className="h-5 w-5" />
          )}
        </div>
        <div className="ml-3 w-full">
          <h3 className="text-sm font-medium">{title}</h3>
          <div className="mt-1 text-sm opacity-90">{message}</div>
        </div>
      </div>
    )
  }
  