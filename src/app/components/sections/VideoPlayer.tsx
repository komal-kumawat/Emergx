import Image from "next/image";

export default function VideoPlayer(){
    return <div className="flex flex-col items-center justify-center gap-5 py-10  min-h-[100vh]">
        <h1 className="text-6xl font-bold">Hiring Revolutionised</h1>
        <p className="text-xl">The complete workflow of the application</p>
        <Image src="/videoPlayerSc.png" alt="videoPlayer" width={1000} height ={500}></Image>
    </div>
}