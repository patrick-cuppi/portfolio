import { HiArrowTopRightOnSquare } from "react-icons/hi2"
import image_url_cod_mt from "../assets/images/smartmockups_m1uuiard.jpg"
import image_url_cod_mt2 from "../assets/images/smartmockups_m1uvf53r.jpg"
import image_url_cod_tr from "../assets/images/smartmockups_m1uukeay.jpg"
import image_url_cod_ar from "../assets/images/smartmockups_m1uujx7m.jpg"
import image_url_cod_kc from "../assets/images/smartmockups_m1uuj8gh.jpg"

export function Projects() {
    const projects = [
        {
            title: "Projeto 1",
            description: "Site Institucional de empresa do ramo de motores",
            image: image_url_cod_mt,
            link: "",
            colSpan: "col-span-1"
        },
        {
            title: "Projeto 2",
            description: "Hotel de Reservas",
            image: image_url_cod_tr,
            link: "",
            colSpan: "col-span-1 md:col-span-2"
        },
        {
            title: "Projeto 3",
            description: "Adega de Bebidas",
            image: image_url_cod_ar,
            link: "",
            colSpan: "col-span-1"
        },
        {
            title: "Projeto 4",
            description: "Escola de Programação para crianças",
            image: image_url_cod_kc,
            link: "",
            colSpan: "col-span-1"
        },
        {
            title: "Projeto 5",
            description: "E-commerce de peças eletrônicas e para motores",
            image: image_url_cod_mt2,
            link: "",
            colSpan: "col-span-1"
        },
    ]
    
    return (
        <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-800 text-white md:rounded-tl-[180px]">
            <div className="container mx-auto max-w-4xl p-4 py-12">
                <div className="relative p-4 text-center">
                    <h2 className="relative z-50 mb-2 text-white">
                        <span className="mr-2 font-headline text-3xl font-semibold ">Projetos &</span>
                        <span className="font-handwriting text-4xl">Portfólio</span>
                    </h2>
                    <p className="relative text-sm text-gray-400">
                        Alguns projetos pessoais e profissionais que já realizei ao longo da minha carreira
                    </p>
                    <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {projects.map((project, index) => (
                        <div 
                        className={
                            `group relative h-52 cursor-default rounded-lg ${project.colSpan} bg-cover bg-center`
                        } 
                        key={`project-${// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                            index}`}
                        style={{backgroundImage: `url('${project.image}')`}}
                        >
                            <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center 
                                rounded-lg bg-blue-600 text-white opacity-0 transition-opacity group-hover:opacity-100">
                                    <h4 className="font-headline text-lg font-semibold">{project.title}</h4>
                                    <p className="mb-4 text-sm">{project.description}</p>
                                    <a href={project.link} target="_blank" rel="noreferrer noopener">
                                        <HiArrowTopRightOnSquare className="h-6" />
                                    </a>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}