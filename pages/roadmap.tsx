import MyNavbar from "../components/Navbar";

export default function roadmap() {
    return <div className="h-screen">
        <MyNavbar />
        <div className="flex justify-center mt-10">
            <div className="container flex gap-10  p-10 rounded-xl justify-center">
                {/* <div className="w-1/3 bg-accent">ss</div>
                <div className="w-1/3 bg-accent">ss</div>
                <div className="w-1/3 bg-accent">ss</div> */}
                <h1 className=" text-2xl">Development Process</h1>
            </div>
        </div>
    </div>
}