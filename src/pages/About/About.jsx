import Container from '../../components/common/Container/Container';
import SkillSwapLogo from '../../assets/logos/skill-swap-logo.png';

const About = () => {
  return (
    <section className="min-h-screen bg-linear-to-br from-blue-50 via-white to-cyan-50 py-16">
      <Container className="max-w-4xl text-center px-3 lg:px-6">
        <img
          src={SkillSwapLogo}
          alt="SkillSwap Logo"
          className="w-32 mx-auto mb-6"
        />
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          About SkillSwap
        </h1>
        <p className="text-gray-700 mb-6">
          SkillSwap is a platform dedicated to connecting learners and mentors
          from all around the world. Our mission is to empower individuals to
          grow their skills, share knowledge, and explore new learning
          opportunities in a collaborative environment.
        </p>
        <p className="text-gray-700 mb-6">
          Whether you are looking to learn a new skill, improve existing ones,
          or showcase your expertise, SkillSwap provides a community-driven
          experience designed to make learning engaging, interactive, and
          rewarding.
        </p>
        <p className="text-gray-700 font-semibold">
          Join us today and start your journey of growth and knowledge sharing!
        </p>
      </Container>
    </section>
  );
};

export default About;
