import "./globals.css";

export const metadata = {
  title: "Joaquin Mezzano",
  description: "Personal page for projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
