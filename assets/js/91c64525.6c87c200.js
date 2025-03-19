"use strict";(self.webpackChunkstatemesh_docs=self.webpackChunkstatemesh_docs||[]).push([[1076],{2739:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"blockchain/staking","title":"Staking, Locking and Rewards","description":"The PoS consensus in StateMesh is the set of processes that determines how incentives are distributed to secure the network.","source":"@site/docs/blockchain/staking.mdx","sourceDirName":"blockchain","slug":"/blockchain/staking","permalink":"/blockchain/staking","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Staking, Locking and Rewards"}}');var a=t(4848),r=t(8453);const s={title:"Staking, Locking and Rewards"},o=void 0,d={},l=[{value:"Staking and Delegation",id:"staking-and-delegation",level:2},{value:"Rewards",id:"rewards",level:2},{value:"Rewards distribution",id:"rewards-distribution",level:2},{value:"Downtime",id:"downtime",level:2},{value:"Locking stake",id:"locking-stake",level:2}];function c(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"The PoS consensus in StateMesh is the set of processes that determines how incentives are distributed to secure the network."}),"\n",(0,a.jsx)(n.p,{children:"Validator nodes are responsible for generating and validating blocks. In return they will receive block rewards and a percentage of transaction fees and subscription fees. Based on their performance and reputation, validator nodes are assigned a score. They are incentivized to act in accordance with the network because they are subject to penalization (slashing) if they behave maliciously."}),"\n",(0,a.jsx)(n.h2,{id:"staking-and-delegation",children:"Staking and Delegation"}),"\n",(0,a.jsx)(n.p,{children:"Users can be able delegate a portion of their tokens to validating nodes."}),"\n",(0,a.jsx)(n.p,{children:"Validators will not be able to spend delegated tokens, which will remain secured in the user\u2019s own wallet. Validators will receive a fixed proportion of the validator fees attributable to delegators. They will therefore compete based on their performance and not on fees. Higher performing node, with more reliable uptimes, will earn higher returns. Delegators are incentivised to choose nodes that have a high validator score, i.e. are reliable and high performing."}),"\n",(0,a.jsx)(n.p,{children:"A validator needs a minimum amount of 100,000 MESH coins or delegation of coins to be able to join the network."}),"\n",(0,a.jsx)(n.h2,{id:"rewards",children:"Rewards"}),"\n",(0,a.jsx)(n.p,{children:"Validator rewards are calculated and distributed at the end of each epoch. A validator's reward is weighted by 2 independent numbers:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"transactions reward weight"}),": share of transaction fees the validator will receive at the end of epoch."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"base reward weight"}),": share of base reward (newly minted coins) the validator will receive at the end of epoch."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Reward weights are calculated at the end of each epoch using the formulas below:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"transactions reward weight = originated fee * uptime"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"base reward weight = stake * (uptime ^ 2)"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"where:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"stake"})," is the sum of delegations to validator (including validator's self-delegation)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"uptime"})," is the total number of nanoseconds the validator was online in the epoch. It's also called the validation score."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"originated fee"}),' is the total fees of transactions that the validator originated in the epoch ("originated" means "included into event"). It\'s also called origination score.']}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"A list of properties which may be concluded from formulas:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"originated fee"})," may be roughly estimated as ",(0,a.jsx)(n.code,{children:"stake share * uptime * network fee per nanosecond"}),".\nIf we substitute estimation into transactions reward weight formula, then we'll get\n",(0,a.jsx)(n.code,{children:"(stake share * uptime * network fee per nanosecond) * uptime"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"uptime"})," influences the reward in a non-linear way. If a validator has 50% uptime in epoch, he'll\nreceive approx. 4 times smaller rewards in that epoch."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"stake"})," influences base reward linearly, and influences transactions reward weight linearly on average."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"rewards-distribution",children:"Rewards distribution"}),"\n",(0,a.jsx)(n.p,{children:"Validator rewards are split in three parts:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"base rewards"}),", calculated as ",(0,a.jsx)(n.code,{children:"epoch duration in second * base reward per second"}),", are inflationary rewards given\nby the protocol to hones validators, proportional to their ",(0,a.jsx)(n.code,{children:"base reward weight"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"transaction rewards"})," are rewards from transaction fees. The protocol burns 30% of transaction fees.\n70% of burnt fees plus 70% of the remaining total transaction fees are distributed to validators according\nto their ",(0,a.jsx)(n.code,{children:"transactions reward weight"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Delegators receive rewards according to their stake and will pay a 15% commission to the validator for their rewards."}),"\n",(0,a.jsx)(n.h2,{id:"downtime",children:"Downtime"}),"\n",(0,a.jsxs)(n.p,{children:["Downtime is calculated as a difference time of ",(0,a.jsx)(n.code,{children:"last block-time of last block where validator had at least 1 event"}),".\nDowntime has 2 numbers: ",(0,a.jsx)(n.code,{children:"number of missed blocks"})," and ",(0,a.jsx)(n.code,{children:"time of missed blocks"}),". If validator missed not more than 50 blocks,\nthen downtime should be interpreted as 0, because it may be possible that validator has a right to emit events slower\nthan other validators.\nUptime in an epoch is calculated differently. It's reset to 0 every epoch, and during processing of i'th block,\nuptime is incremented by ",(0,a.jsx)(n.code,{children:"block[i].time-block[i - min(number of missed blocks, 50)].time"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"According to the formulas above, missing of no more than 50 blocks in a raw doesn't affect uptime."}),"\n",(0,a.jsx)(n.p,{children:"If validator has downtime >= 72 hours (but not less than 1000 blocks), then he's permanently pruned from\nvalidators list. In this case, validator and delegators have to withdraw their stake via the Staking contract using\nthe withdrawal procedure."}),"\n",(0,a.jsx)(n.h2,{id:"locking-stake",children:"Locking stake"}),"\n",(0,a.jsxs)(n.p,{children:["Validators and delegators can choose to lock their stake for a longer duration to get higher rewards.\nThe reward for a ",(0,a.jsx)(n.em,{children:"non-locked stake"})," is set at ",(0,a.jsx)(n.code,{children:"baseRate = 30%"})," from the full reward for a ",(0,a.jsx)(n.em,{children:"locked stake"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The lockup duration proportionally increases the rate of rewards, according to the formula below.\nAssuming ",(0,a.jsx)(n.code,{children:"fullReward"})," is the maximum reward for a ",(0,a.jsx)(n.em,{children:"locked stake"}),", the formula is:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"reward = fullReward * (baseRate + (1 - baseRate) * lockupDuration / Staking.maxLockupDuration())"})}),"\n",(0,a.jsx)(n.p,{children:"A delegator can choose to unlock a locked stake prematurely, before the lockup period expires. In this case, a penalty\nwill be applied using the formula:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"(base rate = 30%) / 2 + lockup rate"})," of rewards received for epochs during the lockup period"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(6540);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);