import React from 'react';
import RenderItem from './RenderItem';

import LogoBisnis from '../../../public/images/logo-bisnis-development.svg';
import LogoContentWriter from '../../../public/images/logo-content-writer.svg';
import LogoProductAdvertisment from '../../../public/images/logo-product-advertisment.svg';
import LogoCustomerRelationship from '../../../public/images/logo-customer-relationship.svg';
import LogoGameDevelopment from '../../../public/images/logo-game-development.svg';
import LogoTravelGuidance from '../../../public/images/logo-travel-guidance.svg';

function ListCategories() {
    const data = [
        {   
            icon: <LogoBisnis></LogoBisnis>,
            title: 'Business Development',
            total: 12493
        },
        {   
            icon: <LogoContentWriter></LogoContentWriter>,
            title: 'Content Writter',
            total: 893
        },
        {   
            icon: <LogoProductAdvertisment></LogoProductAdvertisment>,
            title: 'Product Advertisment',
            total: 478
        },
        {   
            icon: <LogoCustomerRelationship></LogoCustomerRelationship>,
            title: 'Customer Relationship',
            total: 553
        },
        {   
            icon: <LogoGameDevelopment></LogoGameDevelopment>,
            title: 'Game Development',
            total: 7309
        },
        {   
            icon: <LogoTravelGuidance></LogoTravelGuidance>,
            title: 'Travel Guidance',
            total: 73
        },
    ]

    return (
        <div>
            <div>
                <p className="text-gray-400 text-sm ml-6 md:ml-0 lg:ml-0">Category</p>
                <h2 className="text-2xl ml-6 md:ml-0 lg:ml-0" style={{color: '#132B50'}}>Explore & <span style={{color: "#36C2CF"}}>Learn</span></h2>
            </div>
            <div className="flex flex-wrap items-center mt-6">
                {
                    data.map((item, index) => {
                        return (
                            <RenderItem key={index} item={item}></RenderItem>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListCategories;