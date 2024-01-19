const LanguageSwitcher = () => {
  const handleLanguageChange = (lang) => {
    const currentPath = window.location.pathname
    const newPath = currentPath.replace(/^\/[a-z]{2}/, `/${lang}`)
    window.location.href = newPath
  }

  return (
    <div>
      <button className="px-4" onClick={() => handleLanguageChange('fr')}>Fr</button>
      <button  className="px-4" onClick={() => handleLanguageChange('es')}>Es</button>
      <button  className="px-4" onClick={() => handleLanguageChange('en')}>En</button>
    </div>
  )
}

export default LanguageSwitcher