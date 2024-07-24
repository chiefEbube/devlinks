import AuthLayout from "../components/AuthLayout";
import "@/styles/globals.css";


export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="sm:grid place-items-center bg-[#fbfafb]">
                <div className="bg-white sm:bg-[#fbfafb] px-4 sm:px-8 py-8">
                    <AuthLayout />
                    {children}
                </div>
            </body>
        </html>
    );
}

