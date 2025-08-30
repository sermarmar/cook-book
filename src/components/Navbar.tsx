import { Avatar } from "./Avatar";

export const Navbar: React.FC = () => {
    return (
        <nav className="w-full bg-primary-500 flex items-center px-8 py-6 shadow-sm rounded-20px">
            <div className="flex justify-between items-center w-full">
                <div className="items-center text-left">
                    <h1 className="text-secondary-50 text-2xl font-berlin-bold align-middle">Mi Recetario</h1>
                    <p className="text-base-50 font-berlin-italic">Tu colección de recetas personal</p>
                </div>
                <div className="flex items-center space-x-4">
                    <p className="text-base-50">Hola Sergio Martín</p>
                    <Avatar />
                </div>
            </div>
        </nav>
    );
}