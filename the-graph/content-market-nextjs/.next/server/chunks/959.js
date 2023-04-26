"use strict";
exports.id = 959;
exports.ids = [959];
exports.modules = {

/***/ 959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./pages/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.7f01b434.svg","height":595,"width":842,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./constants/abi.json
const abi_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"address","name":"marketTokenAddress","type":"address"},{"internalType":"address","name":"vrfCoordinatorV2","type":"address"},{"internalType":"uint64","name":"subscriptionId","type":"uint64"},{"internalType":"bytes32","name":"gasLane","type":"bytes32"},{"internalType":"uint32","name":"callbackGasLimit","type":"uint32"}],"type":"constructor","stateMutability":"nonpayable"},{"name":"ContentMarket__NotOwner","type":"error"},{"name":"ContentMarket__NotSubscribed","type":"error"},{"name":"ContentMarket__TransactionFailed","type":"error"},{"name":"OnlyCoordinatorCanFulfill","inputs":[{"internalType":"address","name":"have","type":"address"},{"internalType":"address","name":"want","type":"address"}],"type":"error"},{"name":"ItemBought","inputs":[{"indexed":true,"internalType":"string","name":"title","type":"string"},{"indexed":true,"internalType":"string","name":"author","type":"string"},{"internalType":"address","name":"buyer","type":"address"}],"type":"event"},{"name":"ItemPosted","inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"string","name":"author","type":"string"},{"indexed":true,"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"fileType","type":"string"},{"internalType":"string","name":"ipfsLink","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"}],"type":"event"},{"name":"WinnerPicked","inputs":[{"internalType":"address","name":"recentWinner","type":"address"}],"type":"event"},{"name":"basicSubscription","type":"function","stateMutability":"payable"},{"name":"checkUpkeep","inputs":[{"internalType":"bytes","name":"","type":"bytes"}],"outputs":[{"internalType":"bool","name":"upkeepNeeded","type":"bool"},{"internalType":"bytes","name":"","type":"bytes"}],"type":"function","stateMutability":"view"},{"name":"getLink","inputs":[{"internalType":"address","name":"seller","type":"address"},{"internalType":"string","name":"author","type":"string"}],"type":"function","stateMutability":"payable"},{"name":"getLoyalActors","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"type":"function","stateMutability":"view"},{"name":"getNumWords","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"type":"function","stateMutability":"pure"},{"name":"getNumberOfPlayers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"type":"function","stateMutability":"view"},{"name":"getPlayer","inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"outputs":[{"internalType":"address","name":"","type":"address"}],"type":"function","stateMutability":"view"},{"name":"getPublisherStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"type":"function","stateMutability":"view"},{"name":"getRecentWinner","outputs":[{"internalType":"address","name":"","type":"address"}],"type":"function","stateMutability":"view"},{"name":"getRequestConfirmations","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"type":"function","stateMutability":"pure"},{"name":"getSubscriberStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"type":"function","stateMutability":"view"},{"name":"marketToken","outputs":[{"internalType":"contract ERC20","name":"","type":"address"}],"type":"function","stateMutability":"view"},{"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"type":"function","stateMutability":"view"},{"name":"performUpkeep","inputs":[{"internalType":"bytes","name":"","type":"bytes"}],"type":"function","stateMutability":"nonpayable"},{"name":"postLink","inputs":[{"internalType":"string","name":"author","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"fileType","type":"string"},{"internalType":"string","name":"ipfsLink","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"}],"type":"function","stateMutability":"nonpayable"},{"name":"publisherSubscription","type":"function","stateMutability":"payable"},{"name":"publishersMapping","inputs":[{"internalType":"address","name":"","type":"address"}],"outputs":[{"internalType":"bool","name":"","type":"bool"}],"type":"function","stateMutability":"view"},{"name":"rawFulfillRandomWords","inputs":[{"internalType":"uint256","name":"requestId","type":"uint256"},{"internalType":"uint256[]","name":"randomWords","type":"uint256[]"}],"type":"function","stateMutability":"nonpayable"},{"name":"s_recentWinner","outputs":[{"internalType":"address","name":"","type":"address"}],"type":"function","stateMutability":"view"},{"name":"subscribersMapping","inputs":[{"internalType":"address","name":"","type":"address"}],"outputs":[{"internalType":"bool","name":"","type":"bool"}],"type":"function","stateMutability":"view"},{"name":"withdraw","type":"function","stateMutability":"payable"}]');
;// CONCATENATED MODULE: ./constants/networkAddress.json
const networkAddress_namespaceObject = JSON.parse('{"5":{"Market":[""]},"31337":{"Market":[""]},"11155111":{"Market":["0xca268c1457BB2efccbA5a3611e6024431B86c2CB"]}}');
// EXTERNAL MODULE: ./node_modules/web3uikit/dist/index.js
var dist = __webpack_require__(3);
;// CONCATENATED MODULE: ./Components/Header.jsx


function Header({ setCurrentComponent  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "header-wrapper",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: setCurrentComponent("publish"),
                children: "Publish"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: setCurrentComponent("view"),
                children: "View"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(dist.cg, {})
        ]
    });
}

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(114);
// EXTERNAL MODULE: external "react-moralis"
var external_react_moralis_ = __webpack_require__(921);
;// CONCATENATED MODULE: ./Components/Publish.jsx





const publishParams = {
    seller: "",
    author: "",
    title: "",
    description: "",
    fileType: "",
    ipfsLink: "",
    price: ""
};
const Publish = ({ isPublisher  })=>{
    const { runContractFunction  } = (0,external_react_moralis_.useWeb3Contract)();
    const { isWeb3Enabled , chainId  } = (0,external_react_moralis_.useMoralis)();
    const chainString = chainId ? parseInt(chainId).toString() : null;
    const marketAddress = chainId ? networkAddress_namespaceObject[chainString].Market[0] : null;
    const [params, setParams] = (0,external_react_.useState)(publishParams);
    const postLink = async (params)=>{
        const options = {
            abi: abi_namespaceObject,
            contractAddress: marketAddress,
            functionName: "postLink",
            params: params
        };
        await runContractFunction({
            params: options,
            onError: (error)=>{
                console.log(error);
            }
        });
    };
    const publisherSubscription = async ()=>{
        const options = {
            abi: abi_namespaceObject,
            contractAddress: marketAddress,
            functionName: "publisherSubscription",
            params: {}
        };
        await runContractFunction({
            params: options,
            onError: (error)=>{
                console.log(error);
            }
        });
    };
    const handleChange = (e)=>{
        setParams({
            ...publishParams,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = ()=>{
        postLink(params);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "publish-wrapper",
        children: isWeb3Enabled && chainId ? isPublisher ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                    children: [
                        "Author",
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            name: "author",
                            type: "text",
                            onChange: handleChange,
                            required: true
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                    children: [
                        "Title",
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            name: "title",
                            type: "text",
                            onChange: handleChange,
                            required: true
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                    children: [
                        "Description",
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            name: "description",
                            type: "text",
                            placeholder: "3gp, avi, docx, jpg, mp4, mp3, png, pdf",
                            onChange: handleChange,
                            required: true
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                    children: [
                        "File Type",
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            name: "fileType",
                            type: "text",
                            onChange: handleChange,
                            required: true
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                    children: [
                        "IPFS Link",
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            name: "ipfsLink",
                            type: "text",
                            onChange: handleChange,
                            required: true
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                    children: [
                        "Price",
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            name: "price",
                            type: "text",
                            onChange: handleChange,
                            required: true
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    type: "submit"
                })
            ]
        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
            onClick: publisherSubscription,
            children: "Publisher Access Unavailable, Pay 0.01ETH to Publish"
        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "Web 3 Provider Currently Not Enabled"
        })
    });
};
/* harmony default export */ const Components_Publish = (Publish);

;// CONCATENATED MODULE: ./Components/Viewer.jsx


const Viewer = ({ title , type , source , setType , setSource  })=>{
    const cancelFunction = ()=>{
        setType("");
        setSource("");
    };
    const switchStatement = ()=>{
        switch(type){
            case "mp4" || 0 || 0 || 0 || 0:
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("video", {
                            src: source
                        }),
                        ";",
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: cancelFunction
                        })
                    ]
                });
                break;
            case "mp3" || 0:
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("audio", {
                            src: source
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: cancelFunction
                        })
                    ]
                });
                break;
            case "jpg" || 0 || 0:
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: source,
                            alt: title
                        }),
                        ";",
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: cancelFunction
                        })
                    ]
                });
                break;
            case "pdf" || 0 || 0 || 0 || 0 || 0:
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                            src: source,
                            title: title
                        }),
                        ";",
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: cancelFunction
                        })
                    ]
                });
                break;
            default:
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        "File Does Not Match Specified Types: ",
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        "Audio(mp3, m4a), Video(3gp, avi, mp4, mkv, webm), Image(jpg,jpeg, png), Document(doc, docx, pdf, pptx, txt, xlsx)"
                    ]
                });
                break;
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: switchStatement()
    });
};
/* harmony default export */ const Components_Viewer = (Viewer);

;// CONCATENATED MODULE: ./Components/View.jsx





const GET_ITEM_QUERY = client_.gql`
    {
        
    }`;
const viewParams = {
    ipfsLink: "",
    fileType: ""
};
const View = ({ isSubscribed  })=>{
    const { loading , error , data: boughtItems  } = (0,client_.useQuery)(GET_ITEM_QUERY);
    const { isWeb3Enabled  } = (0,external_react_moralis_.useMoralis)();
    const [params, setParams] = (0,external_react_.useState)(viewParams);
    const [type, setType] = (0,external_react_.useState)("");
    const [source, setSource] = (0,external_react_.useState)("");
    const [title, setTitle] = (0,external_react_.useState)("");
    const handleChange = (e)=>{
        setParams({
            ...viewParams,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e)=>{
        setType(params.fileType);
        setSource(params.ipfsLink);
        setTitle(boughtItems["title"]);
        params["fileType"] = "";
        params["ipfsLink"] = "";
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: isWeb3Enabled && isSubscribed ? !type && !source ? boughtItems.map((boughtItem, index)=>{
                    const { title , author , buyer  } = boughtItem;
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: index
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: {
                                    title,
                                    author,
                                    buyer
                                }
                            })
                        ]
                    });
                }) : /*#__PURE__*/ jsx_runtime_.jsx(Components_Viewer, {
                    title: title,
                    type: type,
                    source: source,
                    setType: setType,
                    setSource: setSource
                }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: "Web 3 is Currently Not Enabled"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                            children: [
                                "IPFS LINK",
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    name: "ipfsLink",
                                    type: "text",
                                    onChange: handleChange,
                                    required: true
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                            children: [
                                "File Type",
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    name: "fileType",
                                    type: "text",
                                    onChange: handleChange,
                                    required: true
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "submit"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Components_View = (View);

;// CONCATENATED MODULE: ./pages/App.js










const App_GET_ITEM_QUERY = client_.gql`
    {
        
    }`;
function App() {
    const { runContractFunction  } = (0,external_react_moralis_.useWeb3Contract)();
    const { isWeb3Enabled , chainId  } = (0,external_react_moralis_.useMoralis)();
    const { loading , data: postedItems  } = (0,client_.useQuery)(App_GET_ITEM_QUERY);
    const [currentComponent, setCurrentComponent] = (0,external_react_.useState)("");
    const chainString = chainId ? parseInt(chainId).toString() : null;
    const marketAddress = chainId ? networkAddress_namespaceObject[chainString].Market[0] : null;
    const subscribeToMarket = async ()=>{
        const options = {
            abi: abi_namespaceObject,
            contractAddress: marketAddress,
            functionName: "basicSubscription",
            params: {}
        };
        await runContractFunction({
            params: options,
            onError: (error)=>{
                console.log(error);
            }
        });
    };
    const getSubscriberStatus = async ()=>{
        const options = {
            abi: abi_namespaceObject,
            contractAddress: marketAddress,
            functionName: "getSubsriberStatus",
            params: {}
        };
        await runContractFunction({
            params: options,
            onError: (error)=>{
                console.log(error);
            }
        });
    };
    const getPublisherStatus = async ()=>{
        const options = {
            abi: abi_namespaceObject,
            contractAddress: marketAddress,
            functionName: "getPublisherStatus",
            params: {}
        };
        await runContractFunction({
            params: options,
            onError: (error)=>{
                console.log(error);
            }
        });
    };
    const getLink = async (owner, author)=>{
        const options = {
            abi: abi_namespaceObject,
            contractAddress: marketAddress,
            functionName: "getLink",
            params: {
                seller: owner,
                author: author
            }
        };
        await runContractFunction({
            params: options,
            onError: (error)=>{
                console.log(error);
            }
        });
    };
    const [isSubscribed, setIsSubscribed] = (0,external_react_.useState)(()=>getSubscriberStatus());
    const [isPublisher, setIsPublisher] = (0,external_react_.useState)(()=>getPublisherStatus());
    const switchStatement = ()=>{
        switch(currentComponent){
            case "view":
                /*#__PURE__*/ jsx_runtime_.jsx(Components_View, {
                    isSubscribed: isSubscribed
                });
                break;
            case "publish":
                /*#__PURE__*/ jsx_runtime_.jsx(Components_Publish, {
                    isPublisher: isPublisher
                });
                break;
            default:
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    onLoad: ()=>{
                        setIsSubscribed(getSubscriberStatus());
                        setIsPublisher(getPublisherStatus());
                    },
                    children: isWeb3Enabled && chainId ? loading || !postedItems ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: "Loading..."
                    }) : isSubscribed || isPublisher ? postedItems.map((postedItem, index)=>{
                        const { owner , author , title , description , filetype , price  } = postedItem;
                        return marketAddress ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "item-wrapper",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: index
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: author
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: description
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: filetype
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: price
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: getLink(owner, author),
                                    children: "Get Item"
                                })
                            ]
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "Network error, please switch to a supported network. "
                        });
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: subscribeToMarket,
                        children: " Pay 0.001ETH To Subscribe"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: "Web3 Currently Not Enabled"
                    })
                });
                break;
        }
    };
    (0,external_react_.useEffect)(()=>{
        document.location.reload();
    }, [
        currentComponent
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                setCurrentComponent: setCurrentComponent
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: switchStatement()
            })
        ]
    });
}
/* harmony default export */ const pages_App = (App);


/***/ })

};
;