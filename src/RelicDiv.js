import React from 'react';

function RelicDiv(props)
{
    let relic = props?.relic;
    return (
        <div>
            <div>Relic: {relic?.tier} {relic?.name}</div>
            <br/>
            Amount of Intact rewards: {relic?.rewards?.Intact?.length}
            <br/>
            Amount of Exceptional rewards: {relic?.rewards?.Exceptional?.length}
            <br/>
            Amount of Flawless rewards: {relic?.rewards?.Flawless?.length}
            <br/>
            Amount of Radiant rewards: {relic?.rewards?.Radiant?.length}
            <br/>
            <br/>
            INTACT
            <RelicRewardList rewardList={relic?.rewards?.Intact} />
            <br/>
            EXCEPTIONAL
            <RelicRewardList rewardList={relic?.rewards?.Exceptional} />
            <br/>
            FLAWLESS
            <RelicRewardList rewardList={relic?.rewards?.Flawless} />
            <br/>
            RADIANT
            <RelicRewardList rewardList={relic?.rewards?.Radiant} />
            
            <br/>
            
        </div>
    )
}
//<h1>ME RELIC: {JSON.stringify(relic, null, 4)}</h1>;
//TEST2: <RelicRewards rewardsRarity={relic?.rewards?.Intact[0]}/>
//<RelicReward2 reward={relic?.rewards?.Intact} />
//<RelicRewardList rewardList={relic?.rewards?.Intact} />

function RelicRewards(props)
{
    console.log("props: " + JSON.stringify(props));
    let rewardsRarity = props?.rewardsRarity;
    let rewardComponents = [];
    for(let i=0; i < 2; i++)
    {
        console.log("rewardsRarity: " + JSON.stringify(rewardsRarity, null, 4));
        rewardComponents[i] = RelicReward(rewardsRarity[i]);
    }

    return rewardComponents.map((MyComponent, index) => {
        return (
             <li key={index}>
                 <MyComponent />
             </li>
        )
   });
}

function RelicReward(props)
{
    let reward = props?.reward;
    return (
            <div>[{reward?.chance}%] {reward?.rarity}: {reward?.itemName}</div>
    )
}

function RelicRewardList(props)
{
    let rewardList = props?.rewardList;
    console.log("rewardList: " + JSON.stringify(rewardList));
    if(rewardList == null)
    {
        return(<div></div>)
    }
    else{
        return (
            <div>
            <RelicReward reward={rewardList[0]} />
            <RelicReward reward={rewardList[1]} />
            <RelicReward reward={rewardList[2]} />
            <RelicReward reward={rewardList[3]} />
            <RelicReward reward={rewardList[4]} />
            <RelicReward reward={rewardList[5]} />
            </div>
        )
    }
}

function RelicReward2(props)
{
    console.log("props: " + JSON.stringify(props));
    let reward = props?.reward[0];
    console.log("reward: " + JSON.stringify(reward));
    //console.log("reward 0: " + JSON.stringify(reward[0]));
    //console.log("reward size: " + reward.length);
    let rewardComponents = [];
    
    /*for(let i=0; i < 6; i++)
    {
        console.log("reward single: " + JSON.stringify(reward[i]));
        rewardComponents.push(RelicReward[i]);
    }
    return (
        <div>{rewardComponents}</div>
    )*/
    return (
            <div>[{reward?.chance}%] {reward?.rarity}: {reward?.itemName}</div>
    )/*
    return (
        <RelicReward reward={reward} />
    )*/
}

export default RelicDiv;