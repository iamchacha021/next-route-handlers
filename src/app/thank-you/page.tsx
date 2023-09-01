import Link from "next/link";

export default function ThankYou() {
    return (
        <main>
            <h1 className="text-3xl grid place-content-center min-h-screen">
                Thank you for your feedback!
                <Link href='/'>Back to Home</Link>
            </h1>
        </main>
    )
}