import { useAtomValue } from "jotai"
import { balanceAtom } from "../atoms"

export const useBalance = ()=> {
    const balance = useAtomValue(balanceAtom);
    return balance;
}