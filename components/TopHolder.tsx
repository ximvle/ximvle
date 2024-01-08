export default function TopHolder() {
    return (
        <div className="m-6 py-2 pl-2 pr-4 rounded-lg gap-2  flex items-center">
            <img src="./images/logo-white-border.png" className="w-12 h-12 border-2 border-gray-700 bg-gray-500 rounded-full" alt="" />
            <div >
                <span className="font-bold">Ranaufal Muha</span><br />
                <div className="flex items-end gap-1">
                    <span className="font-bold">50M </span>
                    <span className="text-sm text-gray-400 ">XMVL</span>
                </div>
            </div>
        </div>
    )
}