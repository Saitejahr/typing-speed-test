import Select from 'react-select'
import { themeOptions } from '../Utils/themeOptions'
import { useTheme } from '../Context/ThemeContext'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'

const Footer = () => {
  const { setTheme, theme } = useTheme()

  const iconStyle = {
    cursor: 'pointer',
    fontSize: '2rem',
  }

  const handleChange = (e) => {
    setTheme(e.value)
    console.log()

    localStorage.setItem('theme', JSON.stringify(e.value))
  }

  const handleGithub = (e) => {
    window.open('https://github.com/Saitejahr', '_blank')
  }

  const handleLinkedin = () => {
    window.open('https://www.linkedin.com/in/sai-teja-hr/', '_blank')
  }

  const handleFacebook = () => {
    window.open('https://www.facebook.com/sai.tej.560272', '_blank')
  }

  return (
    <div className="footer">
      <div className="links">
        <GitHubIcon style={iconStyle} onClick={handleGithub} />
        <LinkedInIcon style={iconStyle} onClick={handleLinkedin} />
        <FacebookIcon style={iconStyle} onClick={handleFacebook} />
      </div>
      <div className="copyright">Copyright &#169; by SAI TEJA H R</div>

      <div className="themeButton">
        <Select
          onChange={handleChange}
          options={themeOptions}
          menuPlacement="top"
          defaultValue={{ label: theme.label, value: theme }}
          styles={{
            control: (styles) => ({
              ...styles,
              backgroundColor: theme.background,
              color: theme.textColor,
            }),
            menu: (styles) => ({
              ...styles,
              backgroundColor: theme.background,
            }),
            option: (styles, { isFocused }) => {
              return {
                ...styles,
                backgroundColor: !isFocused
                  ? theme.background
                  : theme.textColor,
                color: !isFocused ? theme.textColor : theme.background,
                cursor: 'pointer',
              }
            },
          }}
        />
      </div>
    </div>
  )
}

export default Footer
