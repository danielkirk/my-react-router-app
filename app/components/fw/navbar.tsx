import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { LogOutIcon } from 'lucide-react';
import { DropdownMenu } from '../ui/dropdown-menu';

interface NavbarProps {
    onSelect: (selected: string) => void,
    selectedOption: string,
    userInfo: UserInfo,
    isFwAdmin: boolean,
    isInstallationModalOpen: boolean,
    setupInfo: SetupInfo
}

interface UserInfo {
    GUID: string,
    Name: string,
    IsLive: boolean
}
interface SetupInfo {
    SetupId: string,
    fwCust_Id: number,
    triggerID: number,
}

export const Navbar = ({onSelect, selectedOption, userInfo, isFwAdmin, isInstallationModalOpen, setupInfo}: NavbarProps) => {
    const [hasTrigger, setHasTrigger] = useState<Boolean>(false);

    const buttonVariants: Variants = {
        hover: {scale: 1.1},
        tap: {scale: 0.9}
    }

    useEffect(() => {
        if(setupInfo.triggerID > 0) {
            return setHasTrigger(true);
        }
    }, [setupInfo.triggerID]);


    
    return (
        <nav className="bg-[rgb(1,64,90)] sticky top-0 z-50 p-2">
      <div className="justify-between flex">
      <div className="flex space-x-5">
        <img src={logo} alt="logo" className="object-contain" style={{width: '120px', height: '25px'}} />
          {selectedOption !== 'report' && (
            <motion.button 
            onClick={() => onSelect('report')} 
            whileHover="hover"
            whileTap="tap"
            className="pr-3 pl-3 bg-[#a98320] text-sm text-white hover:text-gray-300"
            variants={buttonVariants}
            animate={selectedOption === 'report' ? 'active' : 'initial'}
            initial="initial"
            >Report
            </motion.button>
          )}
          {selectedOption !== 'setup' && (
            <motion.button 
            onClick={() => onSelect('setup')} 
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            className="pr-3 pl-3 bg-[#a98320] text-sm text-white hover:text-gray-300"
            >
            Setup
            </motion.button>
          )}
          {hasTrigger && selectedOption !== 'visuals' && ( <motion.button
          onClick={() => onSelect('visuals')} 
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            className="pr-3 pl-3 bg-[#a98320] text-sm text-white hover:text-gray-300">
              Visualizations
          </motion.button>
        )}
        </div>
        <div className='flex'>
        <DropdownMenu>
          <DropdownMenuTrigger className={`outline-none ${!userInfo.IsLive ? 'text-red-500' : ''}`}><FaUser className="mr-2 w-4 h-4 text-white" /></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className={`${!userInfo.IsLive ? 'text-red-500' : ''} `}>{userInfo.Name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {isFWAdmin ? (
              <>
                <DropdownMenuItem className='hover:cursor-pointer' onClick={isInstallationModalOpen }>Installations</DropdownMenuItem>
                <DropdownMenuSeparator />
              </>
              ) : (null)}
            <DropdownMenuItem className='text-red-500 hover:cursor-pointer' onClick={() => logoutUser(userInfo.GUID)}>
              <LogOutIcon className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
      </div>
    </nav>
    )
};