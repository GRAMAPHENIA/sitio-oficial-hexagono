import { useToast } from "@/components/ui/use-toast";
import { ToastProvider, ToastViewport } from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      <div className="fixed bottom-4 right-4 space-y-2">
        {toasts.map((toast, index) => (
          <div
            key={index}
            className={`p-4 rounded-md shadow-md ${
              toast.status === "success"
                ? "bg-green-500 text-white"
                : toast.status === "error"
                ? "bg-red-500 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            <h4 className="font-bold">{toast.title}</h4>
            <p>{toast.description}</p>
          </div>
        ))}
        <ToastViewport />
      </div>
    </ToastProvider>
  );
}
