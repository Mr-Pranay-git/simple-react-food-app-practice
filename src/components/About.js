import UserClass from './UserClass'
import User from './User'

const About = () => {
  return (
    <div>
      <h1>about us </h1>
      <User name='this component is (functional) '/>
      <UserClass name = {"this component is (Class)"} Location={"pune"}  />
    </div>
  )
}

export default About;
