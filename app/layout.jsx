import "../styles.css";

export const metadata = {
  title: "Laysin Hong — Web Developer",
  description:
    "Portfolio of Laysin Hong, a web developer and Information Technology Engineering graduate based in Phnom Penh, Cambodia.",
  keywords: ["Laysin Hong", "Web Developer", "Next.js", "React", "Laravel", "Phnom Penh"],
  authors: [{ name: "Laysin Hong" }],
  openGraph: {
    title: "Laysin Hong — Web Developer",
    description: "Web developer building production digital platforms in Phnom Penh, Cambodia.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f2efe8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
