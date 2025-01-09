import TeamMember from "@/components/landing/TeamMember";
import { TeamMemberDetails } from "@/constants";
import Navigation from "@/components/nav/Navigation";
import Footer from "@/components/landing/Footer";

const TeamPage = () => {
  return (
    <div className="gradient-bg dotted-grid-mask min-h-screen grid grid-rows-[auto_1fr_auto] relative overflow-x-hidden">
      <Navigation />
      <main className="flex flex-col items-center justify-center py-16">
        <h1 className="text-white text-4xl font-bold mb-8 font-play">Meet Our Team</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TeamMemberDetails.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
        <p className="text-white mt-8 text-sm md:text-lg md:text-center mx-8 text-justify font-play">Our team is composed of dedicated professionals who are passionate about delivering the best experience for our users. Each member brings unique skills and expertise, working collaboratively to drive innovation and success. We are committed to excellence and strive to exceed expectations in everything we do.</p>
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;