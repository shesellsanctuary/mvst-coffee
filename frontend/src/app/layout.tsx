import { ToastProvider } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: "unset", backgroundColor: "black" }}>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
