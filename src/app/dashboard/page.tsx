import RootLayout from "./layout";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Card 1</h2>
            <p className="mt-4">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Card 2</h2>
            <p className="mt-4">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Card 3</h2>
            <p className="mt-4">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Card 4</h2>
            <p className="mt-4">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-4">
          <div className="bg-white p-6 rounded-lg shadow-md h-80">
            <h2 className="text-xl font-bold">Card 1</h2>
            <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptate. Unde maiores molestiae odit porro nobis, ad quam eligendi dolor quisquam vero tenetur nam! Hic debitis quaerat cupiditate inventore tempore?
            </p>
          </div>
          
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md h-32">
            <h2 className="text-xl font-bold">Card 1</h2>
            <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptate. 
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md h-32">
            <h2 className="text-xl font-bold">Card 2</h2>
            <p className="mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos nesciunt.</p>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
}
