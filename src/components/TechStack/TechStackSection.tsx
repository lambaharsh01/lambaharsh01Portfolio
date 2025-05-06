

import Marquee from 'react-fast-marquee';
import developmentRaw from '@/data/json/techStacks/development.json';
import devopsRaw from '@/data/json/techStacks/devops.json';
import TechStackCard from '@/components/TechStack/TechStackCard';

const development = [...developmentRaw, ...developmentRaw]
const devops = [...devopsRaw, ...devopsRaw]

const TechStackSection: React.FC = () => {
  return (
    <>
      <section className="text-center py-5 mt-8 mb-4 bg-gray-100">
        <h1 className="text-xl font-extrabold text-gray-900">
          Development & Databases
        </h1>
      </section>

      <Marquee
        pauseOnHover
        gradient={false}
        speed={50}
      >
        {development.map((elem, index) => (
          <TechStackCard
            key={"dev" + index}
            image={elem.image}
            title={elem.title}
            description={elem.description}
            threshold={elem.threshold}
          />
        ))}
      </Marquee>

      <section className="text-center py-5 mt-4 mb-4 bg-gray-100">
        <h1 className="text-xl font-extrabold text-gray-900">
          DevOps & Infrastructure
        </h1>
      </section>

      <Marquee
        pauseOnHover
        gradient={false}
        speed={50}
      >
        {devops.map((elem, index) => (
            <TechStackCard
              key={"devops" + index}
              image={elem.image}
              title={elem.title}
              description={elem.description}
              threshold={elem.threshold}
            />
        ))}
      </Marquee>
    </>
  );
};

export default TechStackSection;
