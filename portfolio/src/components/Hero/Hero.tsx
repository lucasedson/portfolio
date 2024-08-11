export default function Hero() {
    let bglink = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK3MujE_8A9TDyTzM-nUFt_ef9Qp6ytrb29A&s";
    return (
        <section className=" flex flex-1 w-full h-[95vh] text-slate-300  justify-center">
            <img src={bglink} className="w-full h-[100vh] object-cover absolute -z-10 opacity-10 blur-sm" />
            <div className="ml-100 mr-100 mt-20 flex flex-col items-center max-w-5xl gap-28 md:flex-row ">
                
                <div className="flex flex-col  items-center w-[300px]">
                    <div className="flex items-center mb-10">
                        <img className="rounded-full shadow-slate-700 shadow-sm hover:scale-105 transition-all duration-300" src="https://github.com/lucasedson.png" />
                    </div>
                     <h1 className="text-3xl font-bold">Lucas Edson</h1>

                    <p>Este é o meu portfolio.</p>
                    <p>Seja bem-vindo(a)!</p>
                </div>

                <div className="flex text-center flex-col text-wrap w-[300px]">
                    <h1 className="text-justify text-2xl font-bold mb-2">Desenvolvedor Full-Stack! Cabo Frio, RJ, Brasil</h1>
                    
                    <p className="text-justify">
                    Estou disponível para trabalhos sob demanda, oferecendo uma combinação de experiência em 
                    frontend e backend para atender às necessidades dos seus projetos.
                    </p>

                    <div>
                        <button className="bg-red-500 text-white  rounded-full w-full h-10 mt-4">
                            <a className="w-full" href="https://github.com/lucasedson">Contato</a>
                            </button>
                    </div>

                </div>

            </div>
        </section>
    );
}