import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faCss3,
//   faGitAlt,
//   faHtml5,
//   faJsSquare,
//   faNode,
//   faReact,
// } from '@fortawesome/free-brands-svg-icons'
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem est
            molestiae, voluptate architecto at accusantium amet voluptatibus
            perferendis suscipit nemo cupiditate ducimus dicta illo quibusdam
            aspernatur? Optio porro itaque quasi!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            molestias facere quos culpa excepturi suscipit! Enim saepe quod quo
            hic corrupti alias eveniet dignissimos, non corporis provident id
            temporibus amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            commodi repellat hic necessitatibus ea aperiam facilis. Fugit
            consequuntur dolorem autem! Nam quas perferendis architecto ab error
            consectetur delectus ratione fuga.
          </p>
        </div>
        <CubeSpinner />
        {/* <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#3C873A" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
            </div>
          </div>
        </div> */}
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
