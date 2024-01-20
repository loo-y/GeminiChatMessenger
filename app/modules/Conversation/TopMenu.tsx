'use client'
import 'react'
import { useAppSelector, useAppDispatch } from '@/app/hooks'
import { getChatState, createNewConversationInState, updateState } from '../../(pages)/chat/slice'
import _ from 'lodash'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu'
import GlobalOptions from './GlobalOptions'
import { GeminiModel } from '@/app/shared/interfaces'

const TopMenu = ({ clickCallback }: { clickCallback?: () => void }) => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(getChatState)
    const handleAddProConsation = () => {
        dispatch(createNewConversationInState({ modelType: GeminiModel.geminiPro }))
        clickCallback && clickCallback()
    }
    const handleAddProVisionContext = () => {
        dispatch(createNewConversationInState({ modelType: GeminiModel.geminiProVision }))
        clickCallback && clickCallback()
    }

    return (
        <div className="flex justify-between w-full items-center">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className="font-bold px-2 py-2 border rounded-xl bg-gray-50 hover:bg-gray-100 focus:bg-gray-100">
                        Create
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="ml-4">
                    <DropdownMenuItem onClick={handleAddProConsation}>Pro Conversation</DropdownMenuItem>
                    <DropdownMenuItem onClick={handleAddProVisionContext}>Vision Content</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex ml-auto items-center">
                <GlobalOptions />
            </div>
        </div>
    )
}

export default TopMenu
