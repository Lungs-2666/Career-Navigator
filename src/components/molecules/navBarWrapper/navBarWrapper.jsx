    'use client'

    import { useState } from "react";
    import NavBar from "../navBar/navBar";
    import NavBarBtn from "@/components/atoms/navBarBtn/navBarBtn";

    const NavBarWrapper = () => {
        const [isClicked, setIsClicked] = useState(false);

        return (
            <>
                <NavBar isOpen={isClicked}/>
                <NavBarBtn onToggle={() => {setIsClicked(prev => !prev);}}/>
            </>
        )
    }

    export default NavBarWrapper;