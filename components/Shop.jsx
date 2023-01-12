import { useState } from 'react'
import Card from "./components/Card"
function Shop({ coins, setCoins }) {
    const [treat, setTreat] = useState("")
    const [reward, setReward] = useState("")
    const treats = ["Make a snack", "Call a friend", "Walk for 5 minutes", "Take a relaxing shower", "Read 10 pages"]
    const rewards = ["Play video games", "Open social media", "Take a 30 minute nap", "Practice a hobby"]
    return ( 
        <div className="ml-28 mt-5 text-center">
            <Card img={"/treat.png"} header={"Treat"} text={"This is a simple treat that you can do in 5-10 minutes to recharge"} coins={"10"} />
            <button className="bg-ultradark rounded-2xl p-3 py-2 text-lg mb-3" onClick={() => {
                if (coins >= 10) {
                    setCoins(prev => prev-10)
                    const i = Math.floor(Math.random() * treats.length )
                    setTreat(treats[i])
                } else {
                    setTreat("Not enough coins!")
                }
                
            }}>Generate</button>
            <p>{treat}</p>
            <Card img={"/reward.png"} header={"Reward"} text={"This is a special reward for finishing your tasks"} coins={"30"}/>
            <button className="bg-ultradark rounded-2xl p-3 py-2 text-lg mb-3" onClick={() => {
                if (coins >= 30) {
                    setCoins(prev => prev-30)
                    const i = Math.floor(Math.random() * rewards.length )
                    setReward(rewards[i])
                } else {
                    setReward("Not enough coins!")
                }
                
            }}>Generate</button>
            <p>{reward}</p>

        </div> 
    );
}

export default Shop;