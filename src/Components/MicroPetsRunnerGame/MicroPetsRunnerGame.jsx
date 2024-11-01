import React from 'react'
import './microPetsRunnerGame.scss'
import { miniModule0, moduleImg1, moduleImg2, sectionImg2,  } from '../../assets/Index'
import PrimaryButton from '../UI/PrimaryButton/PrimaryButton'
const MicroPetsRunnerGame = () => {
    const handleCaseClick = () => {
        console.log("handleCaseClick  is pressed")
    }
  return (
    <div className='microPetsRunnerGameWrapper'>
          <div className='SectionModuleWrapper'>
        <h1>We love transforming product ideas to digital realities.</h1>
    <div className='SectionModuleWrap'>
<div className='contentWrapper'>
    <div className='contentWrapp'>
  <img src={miniModule0} alt='img'/> 
      <h2>Micropets' side-scrolling nft game</h2>
      <p>MicroPets Runner is a classic side-scrolling runner game that allows users to proceed with their game character (MicroPets NFT product) picking up coins (to earn rewards) on their way past monsters and obstacles.</p>
      <PrimaryButton label={"View case study"} onClick={handleCaseClick} />
    </div>
</div>
<div className='imgWrapper'>
    <img src={sectionImg2} alt='module image' className='PetImg'/>
    {/* <img src={moduleImg2} alt='module image' className='secondPetImg'/> */}
    
</div>
    </div>
    </div>
    </div>
  )
}

export default MicroPetsRunnerGame