import React, { useState } from 'react'
import {  useMoralis } from "react-moralis";
import { useQuery,gql } from "@apollo/client";
import Viewer from "./Viewer";

const GET_ITEM_QUERY = gql`
    {
        
    }`

const viewParams = {
    ipfsLink: '',
    fileType: ''
}
const View = ({ isSubscribed }) => {
    const { loading, error, data: boughtItems } = useQuery(GET_ITEM_QUERY)
    const { isWeb3Enabled } = useMoralis()
    const [params, setParams] = useState(viewParams)
    const [type, setType] = useState('')
    const [source, setSource] = useState('')
    const [title, setTitle] = useState('')

    const handleChange = (e) => {
        setParams({...viewParams, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        setType(params.fileType);
        setSource(params.ipfsLink);
        setTitle(boughtItems['title'])
        params['fileType'] = '';
        params['ipfsLink'] = '';
    }
    
    return (
        <div>
            <div>
                {isWeb3Enabled && isSubscribed ? 
                    (!type && !source ? ((
                        boughtItems.map((boughtItem, index) => {
                            const { title, author, buyer} = boughtItem
                            return (
                                <div>
                                    <div>{index}</div>
                                    <div>{{title, author, buyer}}</div>
                                </div>
                            )
                        })
                    )) : (
                        <Viewer title={title} type={type} source={source} setType={setType} setSource={setSource}/>
                    )) : (
                        <div>
                            Web 3 is Currently Not Enabled
                        </div>
                    )}
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        IPFS LINK
                        <input 
                            name='ipfsLink'
                            type='text'
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
                    <input type='submit' />
                </form>
            </div>
            
        </div>
    )
}

export default View 