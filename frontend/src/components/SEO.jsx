import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Addagudi Sathvik | Full-Stack Developer · Hyderabad",
  description = "Hi, I'm Addagudi Sathvik, a Full-Stack Developer and B.E. Information Technology student at CBIT Hyderabad. I build fast, modern, scalable web applications using React, Node.js, MongoDB, Python, and the MERN stack. Explore my projects, technical skills, and experience.",
  url = "https://portfolio-brown-nine-70.vercel.app",
  image = "https://portfolio-brown-nine-70.vercel.app/og-image.png",
  keywords = "Addagudi Sathvik, Sathvik developer, full stack developer Hyderabad, React developer, MERN stack, CBIT developer, Node.js developer, portfolio, web development India",
}) => {
  return (
    <Helmet>
      {/* ── Primary ── */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Addagudi Sathvik" />
      <link rel="canonical" href={url} />

      {/* ── Open Graph (LinkedIn / WhatsApp / Facebook previews) ── */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Addagudi Sathvik Portfolio" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* ── Extra SEO signals ── */}
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#0a0a0a" />
      <meta name="geo.region" content="IN-TG" />
      <meta name="geo.placename" content="Hyderabad" />

      {/* ── Google Structured Data (Rich Results) ── */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Addagudi Sathvik",
          url: url,
          jobTitle: "Full-Stack Developer",
          description: description,
          image: image,
          email: "addagudisathvik@gmail.com",
          telephone: "+919848016444",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            addressCountry: "IN",
          },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Chaitanya Bharathi Institute of Technology",
            address: "Hyderabad, Telangana, India",
          },
          knowsAbout: [
            "React.js",
            "Node.js",
            "MongoDB",
            "Python",
            "Machine Learning",
            "Full Stack Development",
            "JavaScript",
            "MERN Stack",
          ],
          sameAs: [
            "https://github.com/Addagudi-Sathvik",
            "https://www.linkedin.com/in/addagudi-sathvik",
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEO;