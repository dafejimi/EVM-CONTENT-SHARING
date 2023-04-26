import React ,{ useState, useEffect} from "react"
import logo from './logo.svg';
import frontendAbi from "../constants/abi.json";
import networkMapping from "../constants/networkAddress.json";

import Header from '../Components/Header';
import { useQuery,gql } from "@apollo/client";
import Publish from "../Components/Publish";
import View from "../Components/View";
import { useMoralis , useWeb3Contract} from "react-moralis";

const GET_ITEM_QUERY = gql`
    {
        
    }`

function App() {
  const { runContractFunction } = useWeb3Contract();
  const { isWeb3Enabled, chainId } = useMoralis();
  const { loading, data: postedItems } = useQuery(GET_ITEM_QUERY);

  const [currentComponent, setCurrentComponent] = useState('');

  const chainString = chainId ? parseInt(chainId).toString() : null;
  const marketAddress = chainId ? networkMapping[chainString].Market[0] : null;

  const subscribeToMarket = async () => {
    const options = {
      abi: frontendAbi,
      contractAddress: marketAddress,
      functionName: "basicSubscription",
      params: {},
      }
  
    await runContractFunction({
      params: options,
      onError: (error) => {
        console.log(error)
      }
    })
  }
    
  const getSubscriberStatus = async () => {
    const options = {
    abi: frontendAbi,
    contractAddress: marketAddress,
    functionName: "getSubsriberStatus",
    params: {},
    }

    await runContractFunction({
      params: options,
      onError: (error) => {
        console.log(error)
      }
    })
  }

  const getPublisherStatus = async () => {
    const options = {
    abi: frontendAbi,
    contractAddress: marketAddress,
    functionName: "getPublisherStatus",
    params: {},
    }

    await runContractFunction({
    params: options,
    onError: (error) => {
        console.log(error)
    }
    })
  }

  const getLink = async (owner, author) => {
    const options = {
    abi: frontendAbi,
    contractAddress: marketAddress,
    functionName: "getLink",
    params: {
      seller: owner,
      author: author
    },
    }

    await runContractFunction({
    params: options,
    onError: (error) => {
        console.log(error)
    }
    })
}

  const [isSubscribed, setIsSubscribed] = useState(() => getSubscriberStatus());
  const [isPublisher, setIsPublisher] = useState(() => getPublisherStatus());  

  const switchStatement = () => {
    switch(currentComponent) {
      case 'view':
        <View  isSubscribed={isSubscribed} />
        break;
      case 'publish':
        <Publish  isPublisher={isPublisher}/>            
        break;
    
      default:
          <div 
            onLoad={() => {
              setIsSubscribed(getSubscriberStatus());
              setIsPublisher(getPublisherStatus())
            }}
          >
            {isWeb3Enabled && chainId ? (
                    loading || !postedItems ? (
                        <div>Loading...</div>
                    ) : (
                        isSubscribed || isPublisher ? (postedItems.map((postedItem, index) => {
                            const { owner, author, title, description, filetype, price } = postedItem
                            return marketAddress ? (
                                <div className="item-wrapper">
                                  <div>
                                    <div>{index}</div>
                                    <div>{author}</div>
                                    <div>{title}</div>
                                    <div>{description}</div>
                                    <div>{filetype}</div>
                                    <div>{price}</div>
                                  </div>
                                  <button onClick={getLink(owner, author)}>Get Item</button>
                                </div>
                            ) : (
                                <div>Network error, please switch to a supported network. </div>
                            )
                        })): (
                          <div onClick={subscribeToMarket}> Pay 0.001ETH To Subscribe</div>
                        )
                    )
                ) : (
                    <div>Web3 Currently Not Enabled</div>
                )}
          </div>
        break;
      }
  }

  useEffect(() => {
    document.location.reload();
  }, [currentComponent])
  
  return (
    <div>
      <Header setCurrentComponent={setCurrentComponent} />
      <div>
        {switchStatement()}
      </div>
    </div>
  );
}

export default App;

