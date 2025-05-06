import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaHistory, FaHome, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FaMoneyBillTransfer, FaPerson } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export const GoogleIcon = () => <FcGoogle/>

export const GitHubIcon = () => <FaGithub />

export const EmailIcon = ()=> <AiOutlineMail/>

export const CloseEyeIcon = ()=> <FaRegEyeSlash />

export const OpenEyeIcon = ()=> <FaRegEye />

export const HomeIcon = ()=> <FaHome/>

export const TransferIcon = ({ className }: {className: string | undefined})=> <FaMoneyBillTransfer className={className}/>

export const P2PIcon = ({ className }: {className: string | undefined})=> <FaPerson className={className} />

export const HistoryIcons = ({ className }: {className: string | undefined})=> <FaHistory className={className}/>
