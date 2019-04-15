/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        <small>Welcome to the Modyo Support Center</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content: 'Talk about learning how to use this',
            title: 'Learn How',
          },
          {
            content: 'Talk about learning how to use this',
            title: 'Learn How',
          },
          {
            content: 'Talk about learning how to use this',
            title: 'Learn How',
          },
          {
            content: 'Talk about learning how to use this',
            title: 'Learn How',
          },
          {
            content: 'Talk about learning how to use this',
            title: 'Learn How',
          },
          {
            content: 'Talk about learning how to use this',
            title: 'Learn How',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Modyo helps large companies and financial institutions accelerate digital transformation.',
            image: `${baseUrl}img/49a9f9815617854e67a6f78c4b5fc557c4cf0d0d.png`,
            imageAlign: 'top',
            title: 'Welcome to Modyo',
          },
          {
            content: 'Understand what is where in the platform to get oriented quickly.',
            image: `${baseUrl}img/80ce04ff3a1de9ede1d4c2446012329d4d5a074e.png`,
            imageAlign: 'top',
            title: 'The Modyo Interface',
          },
          {
            content: 'What are some of the key concepts to quickly understand?',
            image: `${baseUrl}img/28a97f8e9161d0747749c1f2701fd909b9b0be61.png`,
            imageAlign: 'top',
            title: 'Key Concepts',
          },
        ]}
      </Block>
    );

    

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <LearnHow />
        </div>
      </div>
    );
  }
}

module.exports = Index;
