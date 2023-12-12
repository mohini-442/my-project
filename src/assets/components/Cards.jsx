import React from 'react'
import cardimg1 from '../images/cardimg1.png'
import cardimg2 from '../images/cardimg2.png'
import cardimg3 from '../images/cardimg3.png'
import cardimg4 from '../images/cardimg4.png'
import cardimg5 from '../images/cardimg5.png'
import cardimg6 from '../images/cardimg6.png'
import { Card } from 'react-bootstrap'

const Buddycard = [
    {
        image: cardimg1,
        heading: 'ART COLLECTION',
        para: 'Complete the art collection in full with +70 unique traits, and publish our rarity chart on our webpage.'
    },
    {
        image: cardimg2,
        heading: 'SPECIAL BULLIES',
        para: ' 20 Buddybullies {out of 10k } will have a very special and ersonalized resembling of famous people who are into NFTs {those will be available after the minting }.'
    },
    {
        image: cardimg3,
        heading: 'BREEDING',
        para: 'Our BuddyBullies will not come alone, as we will announce the breeding function after the minting and you will be able to get a PuppyBully { for free}.'
    },
    {
        image: cardimg4,
        heading: 'DIGITALMARKETS',
        para: 'Communicate with all the digital markets available in the Solana NFT world  for getting our collection successfully listed.'
    },
    {
        image: cardimg5,
        heading: 'MERCH',
        para: 'The team is working on the future merch thet will be available for the community members directly on our webpage.'
    },
    {
        image: cardimg6,
        heading: 'CHARITY',
        para: 'We will be giving 30% of the royalties to charity permanently and we will keep spending on marketing, promotions and partnership.50% of the riyalties will go back to the community as rewards.'
    }

]
const Cards = () => {
    const list = Buddycard.map((Buddycard) => (
        <div className='col-lg-4 col-md-6 mt-5 col-12'>
            <div className='buddy-card'>
                <img className='pb-5' src={Buddycard.image} alt="img-1" />
                <p className="text-white fw-semibold fs-2lg ff-poppins">{Buddycard.heading}</p>
                <p className="text-white fw-normal lh-150 op-7 fs-xs ff-poppins">{Buddycard.para}</p>
            </div>
        </div>
    ))
    return (
        <div>
            <div className="row pt-5">
                {list}
            </div>
        </div>
    )
}

export default Cards
