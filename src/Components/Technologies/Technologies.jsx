import React from "react";
import "./technologies.scss";
import { Tabs } from "antd";
import {
  FaAngular,
  FaApple,
  FaDigitalOcean,
  FaHtml5,
  FaJava,
  FaJenkins,
  FaMagento,
  FaNode,
  FaReact,
  FaShopify,
  FaWordpress,
} from "react-icons/fa";
import { DiAndroid, DiMongodb, DiMsqlServer, DiPhp } from "react-icons/di";
import {
  SiAmazondynamodb,
  SiAppium,
  SiAwsorganizations,
  SiFlutter,
  SiGradle,
  SiIonic,
  SiKotlin,
  SiMysql,
  SiNextdotjs,
  SiSelenium,
  SiSwift,
  SiTypescript,
} from "react-icons/si";
import { IoLogoFirebase, IoLogoVue } from "react-icons/io5";
import { TbBrandAzure } from "react-icons/tb";
import { LiaLinode } from "react-icons/lia";
const Technologies = () => {
  const { TabPane } = Tabs;
  function callback(key) {
    console.log(key);
  }
  const mobileTechnologies = [
    { icon: <FaApple />, text: "Ios" },
    { icon: <DiAndroid />, text: "Anriod" },
    // { icon: <SiNextdotjs />, text: "Next Js" },
    { icon: <FaReact />, text: "React Native" },
    { icon: <SiFlutter />, text: "Flutter" },
    // { icon: <SiIonic />, text: "Ionic" },
    { icon: <SiSwift />, text: "Swift" },
    { icon: <SiKotlin />, text: "Kotlin" },
  ];
  const frontendTechnologies = [
    { icon: <FaAngular />, text: "Angular js" },
    { icon: <FaReact />, text: "React js" },
    { icon: <SiTypescript />, text: "Typescript" },
    { icon: <IoLogoVue />, text: "Vue" },
    { icon: <FaHtml5 />, text: "Html5" },
  ];
  const databaseTechnologies = [
    { icon: <DiMongodb />, text: "Mongodb " },
    { icon: <SiMysql />, text: "My sql" },
    { icon: <DiMsqlServer />, text: "Ms sql" },
    { icon: <IoLogoFirebase />, text: "Firebase" },

    { icon: <SiAmazondynamodb />, text: "dynamodb" },
  ];
  const backendTech = [
    { icon: <DiPhp />, text: "Php" },
    { icon: <FaJava />, text: "Java" },
    { icon: <FaNode />, text: "Node js" },
  ];
  const CMSTech = [
    { icon: <FaWordpress />, text: "WordPress" },
    { icon: <FaShopify />, text: "Shopify" },
    { icon: <FaMagento />, text: "Magento" },
  ];
  const devopsTech = [
    { icon: <SiAwsorganizations />, text: "Aws" },
    { icon: <SiGradle />, text: "Gradle" },
    { icon: <FaJenkins />, text: "Jenkins" },
    { icon: <SiAppium />, text: "Appium" },
    { icon: <SiSelenium />, text: "Selenium" },
    // {icon:<TbBrandAzure />,text:"Azure"},
    // {icon:<FaDigitalOcean />,text:"DigitalOcean"},
    // {icon:<LiaLinode />,text:"Linode"},
  ];

  return (
    <>
      <div className="technologiesWrapper">
        <h1>Technologies we work with</h1>
        <div className="technologiesWrap">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Mobile" key="1">
              <div className="iconWrapper">
                {mobileTechnologies?.map((tech, index) => (
                  <div key={index} className="iconWrap">
                    <span>{tech?.icon}</span>
                    <h2>{tech?.text}</h2>
                  </div>
                ))}
              </div>
            </TabPane>
            <TabPane tab="Frontend" key="2">
              <div className="iconWrapper">
                {frontendTechnologies?.map((tech, index) => (
                  <div key={index} className="iconWrap">
                    <span>{tech?.icon}</span>
                    <h2>{tech?.text}</h2>
                  </div>
                ))}
              </div>
            </TabPane>
            <TabPane tab="Database" key="3">
              <div className="iconWrapper">
                {databaseTechnologies?.map((tech, index) => (
                  <div key={index} className="iconWrap">
                    <span>{tech?.icon}</span>
                    <h2>{tech?.text}</h2>
                  </div>
                ))}
              </div>
            </TabPane>
            <TabPane tab="Backend" key="4">
              <div className="iconWrapper">
                {backendTech?.map((tech, index) => (
                  <div key={index} className="iconWrap">
                    <span>{tech?.icon}</span>
                    <h2>{tech?.text}</h2>
                  </div>
                ))}
              </div>
            </TabPane>
            <TabPane tab="CMS" key="5">
              <div className="iconWrapper">
                {CMSTech?.map((tech, index) => (
                  <div key={index} className="iconWrap">
                    <span>{tech?.icon}</span>
                    <h2>{tech?.text}</h2>
                  </div>
                ))}
              </div>
            </TabPane>
            <TabPane tab="Infra and devops" key="6">
              <div className="iconWrapper">
                {devopsTech?.map((tech, index) => (
                  <div key={index} className="iconWrap">
                    <span>{tech?.icon}</span>
                    <h2>{tech?.text}</h2>
                  </div>
                ))}
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
  
    </>
  );
};

export default Technologies;
