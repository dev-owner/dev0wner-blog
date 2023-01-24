import React from "react"
import { Helmet } from "react-helmet"
import { siteUrl } from "../../../blog-config"

const SEO = ({ title, description, url }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={`${siteUrl}/og-image.png`} />
      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}
      <meta name="google-site-verification" content="8igxFYKhZpi1GSVsxyH9_4OqWrGG-QkNrTYUJ-Zs-UU" />
      <meta
        name="naver-site-verification"
        content="c8ad085623ce80efef1d7f4ec91c62354442c9c2"
      />
      <meta name="naver-site-verification" content="0c3f41db9a1cd632a5f18d0d39f750d2c73c8ef6" />
    </Helmet>
  )
}

export default SEO
