import React from "react";
import { CommunityStyle } from "./styles";
import redirect from "../../../assets/logos/redirect.png";

interface IProps {
  title: string;
  img: string;
  desc: string;
  link: string;
}

const Community: React.FC<IProps> = ({ title, img, desc, link }) => {
  return (
    <CommunityStyle>
      <div className='image'>
        <a href={link} target='_blank' rel='noreferrer'>
          <img src={img} alt='social-media-logo' />
        </a>
      </div>

      <div className='description'>
        <div className='title'>
          <a href={link} target='_blank' rel='noreferrer'>
            <h3>{title}</h3>
          </a>
          <a
            className='redirect-arrow'
            href={link}
            target='_blank'
            rel='noreferrer'>
            <img className='redirect' src={redirect} alt='diagonal-arrow' />
          </a>
        </div>
        <p>{desc}</p>
      </div>
    </CommunityStyle>
  );
};
export default Community;
