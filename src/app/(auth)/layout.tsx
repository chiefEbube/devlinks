import AuthLayout from "../components/AuthLayout";
import "@/styles/globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="sm:grid place-items-center bg-[#fbfafb]">
                <div className="bg-white sm:bg-[#fbfafb] px-8 py-8">
                    <AuthLayout />
                    {children}
                </div>
                <ToastContainer position="top-right" />
            </body>
        </html>
    );
}

