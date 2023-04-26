import React, { useState } from 'react'
import { useWeb3Contract, useMoralis } from "react-moralis";
import frontendAbi from "../constants/abi.json";
import networkMapping from "../constants/networkAddress.json";

const publishParams = {
    seller: '',
    author: '',
    title: '',
    description: '',
    fileType: '',
    ipfsLink: '',
    price: ''
}

const Publish = ({ isPublisher }) => {
    const { runContractFunction } = useWeb3Contract()
    const { isWeb3Enabled, chainId } = useMoralis();

    const chainString = chainId ? parseInt(chainId).toString() : null;
    const marketAddress = chainId ? networkMapping[chainString].Market[0] : null;

    const [ params, setParams ] = useState(publishParams)

    const postLink = async (params) => {
        const options = {
        abi: frontendAbi,
        contractAddress: marketAddress,
        functionName: "postLink",
        params: params,
        }

        await runContractFunction({
            params: options,
            onError: (error) => {
                console.log(error)
            }
        })
    }

    const publisherSubscription = async () => {
        const options = {
            abi: frontendAbi,
            contractAddress: marketAddress,
            functionName: "publisherSubscription",
            params: {},
            }
    
            await runContractFunction({
                params: options,
                onError: (error) => {
                    console.log(error)
                }
            })
    }

    const handleChange = (e) => {
        setParams({...publishParams, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        postLink(params)
    }

    return (
        <div className='publish-wrapper'>
            {isWeb3Enabled && chainId ?
                (isPublisher ? (
                    <form onSubmit={handleSubmit}>
                        <label>
                            Author
                            <input 
                                name='author'
                                type='text'
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Title
                            <input 
                                name='title'
                                type='text'
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Description
                            <input 
                                name='description'
                                type='text'
                                placeholder='3gp, avi, docx, jpg, mp4, mp3, png, pdf'
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            File Type
                            <input 
                                name='fileType'
                                type='text'
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            IPFS Link
                            <input 
                                name='ipfsLink'
                                type='text'
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Price
                            <input 
                                name='price'
                                type='text'
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <input type='submit'/>
                    </form>) : (
                        <div onClick={publisherSubscription}>Publisher Access Unavailable, Pay 0.01ETH to Publish</div>
                    )
        ) : (
            <div>
                Web 3 Provider Currently Not Enabled
            </div>
        )
        }  
        </div>
    )
}

export default Publish