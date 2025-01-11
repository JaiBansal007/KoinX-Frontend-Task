
export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 px-5 bg-[#ffffff] text-md">
            <img src="/images/logo.png" alt="" className="ml-8"/>
            <div className="flex space-x-8 font-medium items-center">
                <p>Crypto Taxes</p>
                <p>Free Tools</p>
                <p>Resource Center</p>
                <button className="bg-gradient-to-tr from-[#2971EA] to-[#1B4AEF] text-white font-bold px-4 py-2 border rounded-lg">Get Started</button>
            </div>
        </nav>
    );
}