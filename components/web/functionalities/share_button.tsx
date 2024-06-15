"use client"
import React from 'react'
import {
    WhatsappShareButton,
    WhatsappIcon,
    FacebookShareButton,
    FacebookIcon,
    EmailShareButton,
    EmailIcon,
} from 'next-share'
import { DialogContent } from '@/components/ui/dialog'
import { FaCopy } from 'react-icons/fa'
import { CopyIcon } from 'lucide-react'
import { toast } from '@/components/ui/use-toast'

const ShareList = () => {
    return (

        <DialogContent className='rounded-xl flex flex-col'>
            <h1 className='font-extrabold text-xl w-full text-center'></h1>
            <div className='items-center justify-around w-full  flex space-x-2'>

            <CopyIcon className='hover:scale-105 transition-all cursor-pointer' onClick={() => {
                if(!navigator.clipboard) {
                    toast({
                        title: "Clipboard API not available",
                        description: "Please copy the link manually",
                        
                    })
                    return;
                }
                navigator.clipboard.writeText(window.location.href);
                toast({
                    title: "Copied to Clipbaord Successfully",
                    description: window.location.href,
                })
            }} />
            <WhatsappShareButton
                url={window.location.href}
                title={'I found news article on TSTALL , have a look !'}
                separator=":: "
            >
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            
            <FacebookShareButton
                url={window.location.href}
                quote={'I found news article on TSTALL , have a look !'}
                
                hashtag={'#TSTALL'}
                >  <FacebookIcon size={32} round />
            </FacebookShareButton>
            <EmailShareButton
                url={window.location.href}
                subject={'I found news article on TSTALL , have a look !'}
                body={''}
                >
                <EmailIcon size={32} round />
            </EmailShareButton>
         
            </div>
        </DialogContent>
    )
}

export default ShareList