import { createContext, useContext, useEffect, useState } from "react";         // Import functions and hooks from React

const DeviceContext = createContext();                                          // Create the context for device

export const DeviceProvider = ({ children }) => {
    const [deviceType, setDeviceType] = useState(                               // Create state to provide the app
        window.innerWidth > 768 ? "desktop" : "mobile"    
    );

    useEffect(() => {
        const handleResize = () => {
            setDeviceType(window.innerWidth > 768 ? "desktop" : "mobile");      // Effect listen a resize and updates the state of deviceType
        };
                                                                                
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);

    }, []);


        return (
            <DeviceContext.Provider value={{ deviceType }}>
                {children}
            </DeviceContext.Provider>
        );
}

export const useDevice = () => {
  const { deviceType } = useContext(DeviceContext);                             // custom hook to consume deviceContext (shortcut)
  return {
    isMobile: deviceType === "mobile",
    isDesktop: deviceType === "desktop",
    deviceType,
  };
};