import Image from "next/image"

export default function CurtainsAnimation(){
    return <div className="w-full h-[100vh]">
        <Image src="/curtains.svg" alt="curtains" width = {1500} height={500}>

        </Image>
    </div>
}