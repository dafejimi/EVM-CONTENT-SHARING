import { ConnectButton } from "web3uikit"

export default function Header({ setCurrentComponent}) {
    return (
        <nav className="header-wrapper">
            <div onClick={setCurrentComponent('publish')}>Publish</div>
            <div onClick={setCurrentComponent('view')}>View</div>
            <ConnectButton />
        </nav>
        
    )
}