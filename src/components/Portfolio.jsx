import Radio from "./Radio";

const Portfolio = () => {
    return(
        <section className="">
            <div className="flex flex-col items-center justify-center gap-4 p-8 mb">
                <h2 className="flex items-center justify-center text-5xl bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 text-transparent bg-clip-text
                font-bold">
                Portfolio Showcase
                </h2>
                <p className="max-w-6xl flex items-center justify-center text-xl text-center"> 
                    Take a journey through my work and see how I’ve grown as a developer. 
                    From personal projects to formal certifications, every experience has 
                    taught me something new. I’m excited to share the tools, technologies,
                    and ideas that have helped me build solutions and bring concepts to life.
                </p>
            </div>
            <Radio />
        </section>
    )
}
export default Portfolio;