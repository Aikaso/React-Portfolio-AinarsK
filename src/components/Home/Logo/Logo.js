import './logo.scss'
import LogoS from '../../../assets/images/logo-s.png'
import { useEffect, useRef } from 'react'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'

function Logo() {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })
    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 0,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        ref={solidLogoRef}
        className="solid-logo"
        src={LogoS}
        alt="JavaScript, Developer"
      />
      <svg
        className="svg-container"
        width="905pt"
        height="781pt"
        version="1.0"
        viewBox="0 0 905 781"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={outlineLogoRef}
          className="st0"
          d="M15.24,681.8c9.23-12.76,15.22-27.26,21.95-41.33c83.21-173.89,166.36-347.8,249.51-521.72
	c5.39-11.27,10.6-22.64,12.49-35.12c2.73-17.98-3.21-30.36-19.9-37.55c-7.74-3.34-9.82-7.43-9.17-15.12
	c0.35-4.21,1.42-5.09,5.43-5.08c44.15,0.14,88.3,0.09,132.45,0.09c34.82,0,69.64,0.07,104.46-0.09c3.98-0.02,5.08,0.85,5.45,5.07
	c0.7,7.81-0.93,12.82-9.55,14.52c-3.9,0.77-7.67,3.14-10.55,6.33c-2,0.06-3.99,0.16-5.99,0.16c-56.65,0.01-113.3,0.07-169.95-0.1
	c-4.96-0.01-6.64,0.91-6.71,6.34c-0.09,6.65,1.22,10.29,8.12,13.24c18.53,7.92,24.83,22.11,20.31,41.88
	c-2.54,11.11-7.07,21.46-11.95,31.67C245.83,324.47,160,503.94,74.16,683.41c-4.82,10.07-10.02,19.93-16.8,28.86
	c-3.23,4.25-6.66,8.32-11.63,10.69c-10.16-0.06-20.33-0.11-30.49-0.17C15.24,709.13,15.24,695.46,15.24,681.8z"
        />
        <path
          ref={outlineLogoRef}
          className="st0"
          d="M45.73,722.96c4.98-2.37,8.41-6.44,11.63-10.69c6.78-8.92,11.98-18.79,16.8-28.86
	C160,503.94,245.83,324.47,331.65,144.99c4.89-10.22,9.42-20.56,11.95-31.67c4.51-19.77-1.79-33.96-20.31-41.88
	c-6.9-2.95-8.21-6.6-8.12-13.24c0.07-5.43,1.75-6.35,6.71-6.34c56.65,0.17,113.3,0.11,169.95,0.1c2,0,3.99-0.1,5.99-0.16
	c19.98,0.05,39.97,0.22,59.95,0.07c3.89-0.03,4.65,1.05,5.06,4.89c0.84,8-1.61,11.9-9.67,14.94c-17.93,6.77-23.46,19.01-19.32,37.82
	c1.55,7.03,4.1,13.68,7.27,20.1c89.7,181.61,179.41,363.22,269.15,544.81c5.53,11.19,11.78,21.96,18.98,32.2
	c9.36,13.31,22.03,21.54,37.75,25.02c3.73,0.82,4.7,2.29,4.64,5.92c-0.19,11.22-0.04,11.22-11.03,11.22
	c-80.11,0-160.23-0.05-240.34,0.12c-4.56,0.01-5.77-1.26-5.28-5.5c0.38-3.29-0.88-7.21,0.53-9.81c1.49-2.75,5.99-1.86,9.05-3.01
	c5.13-1.92,10.34-3.65,14.34-7.65c5.28-3.58,7.8-8.88,9.13-14.87c2.39-10.73-1.24-20.5-5.66-29.8
	c-16.47-34.63-33.3-69.09-49.94-103.64c-0.88-1.83-1.79-2.86-4.04-2.82c-9.81,0.17-19.62,0.17-29.42,0.22
	c-1.83-0.05-3.66-0.16-5.49-0.16c-91.44-0.01-182.87,0.02-274.31-0.11c-4.06-0.01-6.09,1.21-7.8,4.87
	c-14.76,31.43-29.75,62.76-44.6,94.15c-3.99,8.42-7.47,17.02-8.82,26.37c-1.6,11.04,2.42,19.52,11.23,25.97
	c5.58,4.08,11.89,6.72,18.49,8.45c3.15,0.83,4.23,2.06,4.21,5.36c-0.07,11.86,0.06,11.86-11.9,11.86
	c-71.28,0-142.57-0.04-213.85,0.09c-4.21,0.01-5.74-0.72-5.56-5.34c0.38-10.16,0.11-10.12,9.98-13.33
	C35.92,728.46,41.26,726.6,45.73,722.96z M331.37,449.78c-4.05,8.5-8.09,17-12.33,25.91c76.25,0,151.77,0,227.98,0
	c-37.66-82.77-75.16-165.21-113.12-248.64c-5.91,13.17-11.28,25.12-16.64,37.08c-0.76,1.47-1.57,2.91-2.26,4.41
	c-11.17,24.09-22.36,48.16-33.48,72.27C364.77,377.13,348.08,413.46,331.37,449.78z"
        />
        <path
          ref={outlineLogoRef}
          className="st0"
          d="M558.98,572.03c9.81-0.06,19.62-0.05,29.42-0.22c2.25-0.04,3.16,0.99,4.04,2.82
	c16.64,34.55,33.47,69.01,49.94,103.64c4.43,9.31,8.05,19.07,5.66,29.8c-1.33,5.99-3.86,11.28-9.13,14.87
	c-21.32-0.05-42.63-0.19-63.95-0.06c-3.78,0.02-5.44-0.76-4.97-4.85c0.4-3.45-0.89-7.52,0.53-10.31c1.54-3.02,6.24-2.13,9.48-3.22
	c13.18-4.42,22.57-12.04,23.62-26.99c0.42-5.93-1.05-11.58-3.05-17.06c-6.23-17.07-15.2-32.88-22.87-49.29
	C571.59,598.05,565.23,585.06,558.98,572.03z"
        />
        <path
          ref={outlineLogoRef}
          className="st0"
          d="M331.37,449.78c16.71-36.32,33.41-72.65,50.15-108.96c11.12-24.11,22.31-48.19,33.48-72.27
	c0.69-1.5,1.5-2.94,2.26-4.41c5.79,12.51,11.63,24.99,17.35,37.54c21.79,47.81,43.54,95.64,65.28,143.48
	c1.02,2.24,3.31,4.79-2.11,4.78C442.3,449.79,386.83,449.81,331.37,449.78z"
        />
        <path
          ref={outlineLogoRef}
          className="st0"
          d="M331.37,449.78c55.47,0.03,110.94,0.01,166.41,0.15c5.42,0.01,3.13-2.54,2.11-4.78
	c-21.74-47.84-43.49-95.67-65.28-143.48c-5.72-12.54-11.56-25.03-17.35-37.54c5.37-11.96,10.73-23.92,16.64-37.08
	c37.96,83.43,75.46,165.86,113.12,248.64c-76.2,0-151.73,0-227.98,0C323.27,466.78,327.32,458.28,331.37,449.78z"
        />
      </svg>
    </div>
  )
}

export default Logo
