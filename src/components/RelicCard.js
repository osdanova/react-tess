function RelicCard({relic})
{
    return (
        <div>
            <div>Relic: {relic?.tier} {relic?.name}</div>
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
        </div>
    )
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
    //console.log("rewardList: " + JSON.stringify(rewardList));
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

export default RelicCard;