import Image from 'next/image';

const idleAnim = {
  animation: 'floatY 3s ease-in-out infinite',
  willChange: 'transform',
};

export default function Overview() {
  return (
    <section>
      <h2 className="section-heading">Overview</h2>
      <div
        data-aos="fade-up"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
          width: '100%',
        }}
      >
        <p style={{ maxWidth: 700, textAlign: 'center' }}>
          I am a software engineer with a passion for building robust backend systems,
          intuitive frontend interfaces, and automating workflows with CI/CD pipelines.
          My experience spans enterprise microservices, cloud migrations, and full stack
          web development, allowing me to deliver scalable and reliable solutions across
          the software lifecycle.
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2.5rem',
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: '100%',
          }}
        >
          {/* Backend */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            style={{
              background: 'linear-gradient(135deg, #23243a 0%, #915EFF 100%)',
              borderRadius: '1.5rem',
              padding: '2.5rem 1.5rem 2rem 1.5rem',
              boxShadow: '0 4px 24px 0 rgba(36,40,60,0.18)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: 160,
              minHeight: 200,
              transition: 'transform 0.3s',
            }}
          >
            <div style={idleAnim}>
              <Image
                src="/images/computer.png"
                alt="Backend Engineer"
                width={80}
                height={80}
                style={{
                  borderRadius: '50%',
                  background: 'rgba(34,36,58,0.7)',
                  padding: 8,
                  boxShadow: '0 2px 12px #23243a55',
                }}
              />
            </div>
            <div
              style={{
                textAlign: 'center',
                marginTop: 18,
                fontSize: 15,
                color: '#dfd9ff',
                fontWeight: 600,
                letterSpacing: 1,
              }}
            >
              Backend
            </div>
          </div>
          {/* Frontend */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            style={{
              background: 'linear-gradient(135deg, #23243a 0%, #ff50c8 100%)',
              borderRadius: '1.5rem',
              padding: '2.5rem 1.5rem 2rem 1.5rem',
              boxShadow: '0 4px 24px 0 rgba(36,40,60,0.18)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: 160,
              minHeight: 200,
              transition: 'transform 0.3s',
            }}
          >
            <div style={{ ...idleAnim, animationDelay: '0.5s' }}>
              <Image
                src="/images/ui-ux.png"
                alt="Frontend Engineer"
                width={80}
                height={80}
                style={{
                  borderRadius: '50%',
                  background: 'rgba(34,36,58,0.7)',
                  padding: 8,
                  boxShadow: '0 2px 12px #23243a55',
                }}
              />
            </div>
            <div
              style={{
                textAlign: 'center',
                marginTop: 18,
                fontSize: 15,
                color: '#dfd9ff',
                fontWeight: 600,
                letterSpacing: 1,
              }}
            >
              Frontend
            </div>
          </div>
          {/* CI/CD */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            style={{
              background: 'linear-gradient(135deg, #23243a 0%, #50ffd2 100%)',
              borderRadius: '1.5rem',
              padding: '2.5rem 1.5rem 2rem 1.5rem',
              boxShadow: '0 4px 24px 0 rgba(36,40,60,0.18)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: 160,
              minHeight: 200,
              transition: 'transform 0.3s',
            }}
          >
            <div style={{ ...idleAnim, animationDelay: '1s' }}>
              <Image
                src="/images/settings.png"
                alt="CI/CD Pipelines"
                width={80}
                height={80}
                style={{
                  borderRadius: '50%',
                  background: 'rgba(34,36,58,0.7)',
                  padding: 8,
                  boxShadow: '0 2px 12px #23243a55',
                }}
              />
            </div>
            <div
              style={{
                textAlign: 'center',
                marginTop: 18,
                fontSize: 15,
                color: '#dfd9ff',
                fontWeight: 600,
                letterSpacing: 1,
              }}
            >
              CI/CD
            </div>
          </div>
          {/* Cloud */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            style={{
              background: 'linear-gradient(135deg, #23243a 0%, #8ab4f8 100%)',
              borderRadius: '1.5rem',
              padding: '2.5rem 1.5rem 2rem 1.5rem',
              boxShadow: '0 4px 24px 0 rgba(36,40,60,0.18)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: 160,
              minHeight: 200,
              transition: 'transform 0.3s',
            }}
          >
            <div style={{ ...idleAnim, animationDelay: '1.5s' }}>
              <Image
                src="/images/cloud.png"
                alt="Cloud"
                width={80}
                height={80}
                style={{
                  borderRadius: '50%',
                  background: 'rgba(34,36,58,0.7)',
                  padding: 8,
                  boxShadow: '0 2px 12px #23243a55',
                }}
              />
            </div>
            <div
              style={{
                textAlign: 'center',
                marginTop: 18,
                fontSize: 15,
                color: '#dfd9ff',
                fontWeight: 600,
                letterSpacing: 1,
              }}
            >
              Cloud
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes floatY {
          0% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}