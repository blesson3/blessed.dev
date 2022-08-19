import React from 'react';
import ProfilePicture from './images/profile-picture.png';
import GitHubLogo from './images/GitHub-Mark-Light-120px-plus.png';
import LinkedInLogo from './images/In-White-128.png';
import TwitterLogo from './images/twitter-social-icon-square-white.svg';
import EmailLogo from './images/email.png';

const LinkLogoStyle: React.CSSProperties = {
  width: '30px',
  margin: 'auto',
};

type SocialLinkConfig = {
  href: string;
  logo: string;
  alt: string;
}

const SocialLinkConfigs: SocialLinkConfig[] = [
  {
    href: 'https://github.com/blesson3',
    logo: GitHubLogo,
    alt: 'github link',
  },
  {
    href: 'https://linkedin.com/in/matt-blessed',
    logo: LinkedInLogo,
    alt: 'linkedin link',
  },
  {
    href: 'https://twitter.com/theblessedon3',
    logo: TwitterLogo,
    alt: 'twitter link',
  },
  {
    href: 'mailto:matt@blessed.dev',
    logo: EmailLogo,
    alt: 'email link',
  },
];

function SocialLink({ config }: { config: SocialLinkConfig })
{
  return (
    <a href={config.href} style={{ display: 'flex' }}>
      <img style={LinkLogoStyle} src={config.logo} alt={config.alt} />
    </a>
  );
}

function LinkRow()
{
  return (
    <div style={{
      height: '10%',
      width: '20%',
      minWidth: '250px',
      marginTop: '50px',
      display: 'flex',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      {SocialLinkConfigs.map((config) => <SocialLink key={config.href} config={config} />)}
    </div>
  );
}

function App()
{
  // stupid simple redirect to the txt version file
  const pathName = window.location.pathname.slice(1).toLowerCase();
  if (pathName.endsWith('version'))
  {
    window.location.pathname = '/version.txt';
    return (<></>);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        backgroundColor: '#282c34',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(20px + 2vmin)',
        color: 'white',
      }}>
        <img
          src={ProfilePicture}
          className="App-logo"
          alt="logo"
          style={{
            pointerEvents: 'none',
            height: '30vmin',
            borderRadius: '50%',
          }}
        />
        <p style={{ marginBottom: '5px' }}>
          {'I\'m Matt Blessed'}
        </p>
        <p style={{ fontSize: 'calc(10px + 1vmin)', color: '#C7C7C7', marginTop: '10px' }}>
          {'A software engineer from Michigan, USA.'}
        </p>
        <LinkRow />
        {/* hide resume button until I get that together */}
        {/* <a
          href="#resume"
          style={{
            position: 'fixed',
            bottom: '5%',
            color: '#C7C7C7',
            fontSize: 'calc(10px + 1vmin)',
          }}>
          resume
        </a> */}
      </div>
    </div>
  );
}

export default App;
