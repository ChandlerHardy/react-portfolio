import './index.scss'
import { useEffect, useState } from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
// import Logo from './Logo'
import Loader from 'react-loaders'
import CubeSpinner from '../CubeSpinner'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['h', 'a', 'n', 'd', 'l', 'e', 'r']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>&apos;m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Frontend Developer / JavaScript</h2>
          <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
        </div>
        {/* <Logo /> */}
        <CubeSpinner />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
