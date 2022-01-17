import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/layout"

const About = () => {
  return (
    <Layout>
      <div className="about_wrapper">
        <div className="about">
          <p>Hello</p>
          <p>
            My name is Olayiwola Olanrewaju you can call me Ola for short. I am
            a frontend web developer using React framework, i have a year
            experience working in an agile team that build platform to aggregate
            a variety of digital services amongst other stuff, before this i
            have worked on various short time contract with engineers from
            different background and ethnicity all over the world. I recently
            relocated to canada on a study visa and currently seeking
            opportunity to join a team working on interesting project. In my
            free time i enjoy gaming or watching sci-fi movies
          </p>
        </div>
        <div className="image">
            <StaticImage src="../images/olanrewaju_xbyfcm.png" alt="Olanrewaju"/>
        </div>
      </div>
    </Layout>
  )
}

export default About
