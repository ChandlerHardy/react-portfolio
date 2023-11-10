import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import CubeSpinner from '../CubeSpinner'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a self-driven, self-taught front-end developer with a passion
            for creating visually appealing and intuitive user experiences.
            Armed with a robust skill set in HTML5, CSS3, and JavaScript, I
            specialize in crafting dynamic and responsive websites. My journey
            began with a focus on React.js, where I've honed my skills in
            building modern, efficient, and scalable user interfaces.
          </p>
          <p>
            I thrive on turning design concepts into seamless, interactive
            realities. Whether it's translating wireframes into code or
            optimizing user interfaces for performance, I'm dedicated to the
            delicate balance of aesthetics and functionality. I believe in the
            power of clean code, thoughtful design, and continuous learning to
            stay at the forefront of the ever-evolving web development
            landscape.
          </p>
          <p>
            In this fast-paced digital era, I am committed to staying ahead of
            the curve. Beyond the pixels and code, I'm on a constant quest to
            refine my skills, exploring emerging technologies and best
            practices. Let's collaborate and bring your digital vision to life –
            where form meets function, and user experience takes center stage.
          </p>
        </div>
        <CubeSpinner />
      </div>
      <Loader type="ball-grid-beat" />
    </>
  )
}

export default About
