import React from 'react'
import Helmet from 'react-helmet'

const renderMetaTags = ({
  title,
  description,
  canonical,
  robots,
  openGraphDescription,
  openGraphType,
  openGraphTitle,
  openGraphUrl,
  twitterImage,
  twitterSite,
  twitterCreator
}) => (
  <Helmet>
    {title ? <title>{title}</title> : ''}
    {description ? <meta name='description' content={description} /> : ''}
    {canonical ? <link rel='canonical' href={canonical} /> : ''}
    {robots ? <meta name='robots' content={robots} /> : ''}
    {openGraphType ? <meta property='og:type' content={openGraphType} /> : ''}
    {openGraphTitle ? <meta property='og:title' content={openGraphTitle} /> : ''}
    {openGraphDescription ? <meta property='og:description' content={openGraphDescription} /> : ''}
    {openGraphUrl ? <meta property='og:url' content={openGraphUrl} /> : ''}
    {twitterImage ? <meta property='og:image' content={twitterImage} /> : ''}
    {twitterSite ? <meta name='twitter:site' content={twitterSite} /> : ''}
    {twitterCreator ? <meta name='twitter:creator' content={twitterCreator} /> : ''}
    {twitterImage ? <meta name='twitter:card' content='summary' /> : ''}
  </Helmet>
)

export default renderMetaTags
