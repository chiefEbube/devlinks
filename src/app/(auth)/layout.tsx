import AuthLayout from "../components/AuthLayout";

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-white min-h-screen min-w-[375px] px-8 py-8">
            <AuthLayout/>
            {children}
        </div>
    );
}
